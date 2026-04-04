import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import SEOHead from '../components/SEOHead';
import { signInWithGoogle, signInWithKakao, signUpWithEmail } from '../utils/auth';

export default function Register() {
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if already authenticated
  if (isAuthenticated) {
    navigate('/');
    return null;
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      const msg = t('auth.passwordMismatch') !== 'auth.passwordMismatch'
        ? t('auth.passwordMismatch')
        : 'Passwords do not match.';
      setError(msg);
      toast.error(msg);
      return;
    }

    if (password.length < 6) {
      const msg = t('auth.passwordTooShort') !== 'auth.passwordTooShort'
        ? t('auth.passwordTooShort')
        : 'Password must be at least 6 characters.';
      setError(msg);
      toast.error(msg);
      return;
    }

    setLoading(true);

    try {
      const { error: authError } = await signUpWithEmail(email, password, {
        full_name: name,
        display_name: name,
      });
      if (authError) {
        setError(authError.message);
        toast.error(authError.message);
      } else {
        toast.success(
          t('auth.registerSuccess') !== 'auth.registerSuccess'
            ? t('auth.registerSuccess')
            : '가입 완료! 이메일을 확인해주세요.'
        );
        navigate('/login');
      }
    } catch (err) {
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
    } catch (err) {
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
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="auth-page">
      <SEOHead title={t('auth.registerTitle')} path="/register" />

      <div className="auth-card">
        <h1 className="auth-title">{t('auth.registerTitle')}</h1>

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

        {/* Registration Form */}
        <form className="auth-form" onSubmit={handleRegister}>
          {error && <div className="auth-error">{error}</div>}

          <div className="auth-field">
            <label htmlFor="name">{t('auth.name')}</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('auth.name')}
              required
              autoComplete="name"
            />
          </div>

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
              minLength={6}
              autoComplete="new-password"
            />
          </div>

          <div className="auth-field">
            <label htmlFor="confirmPassword">{t('auth.confirmPassword')}</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder={t('auth.confirmPassword')}
              required
              minLength={6}
              autoComplete="new-password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary auth-submit"
            disabled={loading}
          >
            {loading ? t('common.loading') : t('auth.registerBtn')}
          </button>
        </form>

        {/* Login Link */}
        <div className="auth-footer">
          <span>{t('auth.hasAccount')}</span>{' '}
          <Link to="/login">{t('auth.loginTitle')}</Link>
        </div>
      </div>
    </div>
  );
}
