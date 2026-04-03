import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';
import { resetPassword } from '../utils/auth';

export default function ForgotPassword() {
  const { t } = useLanguage();

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    try {
      const { error: authError } = await resetPassword(email);
      if (authError) {
        setError(authError.message);
      } else {
        setSuccess(true);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <SEOHead title={t('auth.forgotTitle')} path="/forgot-password" />

      <div className="auth-card">
        <h1 className="auth-title">{t('auth.forgotTitle')}</h1>

        {success ? (
          <div className="auth-success">
            <i className="fa-solid fa-circle-check" />
            <p>{t('auth.resetSent')}</p>
            <Link to="/login" className="btn btn-primary auth-submit">
              {t('auth.loginBtn')}
            </Link>
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit}>
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

            <button
              type="submit"
              className="btn btn-primary auth-submit"
              disabled={loading}
            >
              {loading ? t('common.loading') : t('auth.forgotBtn')}
            </button>
          </form>
        )}

        {/* Back to Login */}
        <div className="auth-footer">
          <Link to="/login">{t('auth.loginTitle')}</Link>
        </div>
      </div>
    </div>
  );
}
