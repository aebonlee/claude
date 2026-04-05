import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import { signInWithGoogle, signInWithKakao, signInWithEmail } from '../utils/auth';

export default function Login() {
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();
  const [searchParams] = useSearchParams();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // OAuth 콜백 에러 체크
  useEffect(() => {
    const errorDesc = searchParams.get('error_description');
    if (errorDesc) {
      toast.error(errorDesc);
    }
  }, [searchParams, toast]);

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { error: authError } = await signInWithEmail(email, password);
      if (authError) {
        setError(authError.message);
        toast.error(authError.message);
      } else {
        toast.success(t('auth.loginSuccess') !== 'auth.loginSuccess' ? t('auth.loginSuccess') : '로그인 성공!');
        navigate('/');
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const { error: authError } = await signInWithGoogle();
      if (authError) {
        setError(authError.message);
        toast.error(authError.message);
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  const handleKakaoLogin = async () => {
    setError('');
    try {
      const { error: authError } = await signInWithKakao();
      if (authError) {
        setError(authError.message);
        toast.error(authError.message);
      }
    } catch (err: any) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="auth-page">
      <SEOHead title={t('auth.loginTitle')} path="/login" />

      <div className="auth-card">
        <h1 className="auth-title">{t('auth.loginTitle')}</h1>

        {/* Social Login Buttons */}
        <div className="auth-social">
          <button
            type="button"
            className="btn btn-social btn-google"
            onClick={handleGoogleLogin}
          >
            <i className="fa-brands fa-google" />
            {t('auth.googleLogin')}
          </button>
          <button
            type="button"
            className="btn btn-social btn-kakao"
            onClick={handleKakaoLogin}
          >
            <i className="fa-solid fa-comment" />
            {t('auth.kakaoLogin')}
          </button>
        </div>

        {/* Divider */}
        <div className="auth-divider">
          <span>{t('auth.or')}</span>
        </div>

        {/* Email/Password Form */}
        <form className="auth-form" onSubmit={handleEmailLogin}>
          {error && <div className="auth-error">{error}</div>}

          <div className="auth-field">
            <label htmlFor="email">{t('auth.email')}</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('auth.email')}
              required
              autoComplete="email"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">{t('auth.password')}</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('auth.password')}
              required
              autoComplete="current-password"
            />
          </div>

          <div className="auth-forgot">
            <Link to="/forgot-password">{t('auth.forgotPassword')}</Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit"
            disabled={loading}
          >
            {loading ? t('common.loading') : t('auth.loginBtn')}
          </button>
        </form>

        {/* Register Link */}
        <div className="auth-footer">
          <span>{t('auth.noAccount')}</span>{' '}
          <Link to="/register">{t('auth.registerTitle')}</Link>
        </div>
      </div>
    </div>
  );
}
