import { createClient } from '@supabase/supabase-js';

// 공용 Supabase 프로젝트(anon 키는 공개 키). 환경변수가 없는 클린 빌드에서도
// 로그인/게시판이 깨지지 않도록 실제 값을 폴백으로 둔다.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hcmgdztsgjvzcyxyayaj.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjbWdkenRzZ2p2emN5eHlheWFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0MzU4ODcsImV4cCI6MjA4NzAxMTg4N30.gznaPzY1l8qDAPsEyYNR9KS7f7VqS3xaw-_2HTSwSZw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    flowType: 'pkce',
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

/* ── SSO 크로스도메인 쿠키 헬퍼 ── */
const SSO_KEY = 'dreamit_sso';
const _isLocal = typeof window !== 'undefined' &&
  (location.hostname === 'localhost' || location.hostname === '127.0.0.1');
const _cookieDomain = _isLocal ? '' : ';domain=.dreamitbiz.com';

export function setSharedSession(rt) {
  document.cookie = `${SSO_KEY}=${rt}${_cookieDomain};path=/;max-age=2592000;SameSite=Lax${_isLocal ? '' : ';Secure'}`;
}
export function getSharedSession() {
  const m = document.cookie.match(/(^| )dreamit_sso=([^;]+)/);
  return m ? m[2] : null;
}
export function clearSharedSession() {
  document.cookie = `${SSO_KEY}=${_cookieDomain};path=/;max-age=0`;
}
