import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { isAdmin as isAdminEmail } from '../config/admin';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adminFlag, setAdminFlag] = useState(false);

  const checkAdmin = async (currentUser) => {
    if (!currentUser) {
      setAdminFlag(false);
      return;
    }

    // 1) 이메일 기반 관리자 체크 (config/admin.js)
    if (isAdminEmail(currentUser.email)) {
      setAdminFlag(true);
      return;
    }

    // 2) profiles 테이블 role 체크
    try {
      const { data } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', currentUser.id)
        .single();

      if (data?.role === 'admin') {
        setAdminFlag(true);
        return;
      }
    } catch {
      // profiles 테이블 접근 실패 시 무시
    }

    setAdminFlag(false);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      checkAdmin(currentUser);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      checkAdmin(currentUser);
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    isAdmin: adminFlag,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
