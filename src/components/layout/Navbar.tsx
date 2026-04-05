import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { signOut } from '../../utils/auth';
import { BOARDS } from '../../config/boards';

export default function Navbar() {
  const { mode, toggleTheme, colorTheme, setColorTheme, COLOR_OPTIONS } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const { user, isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showTooltips, setShowTooltips] = useState(false);
  const [mobileCommExpanded, setMobileCommExpanded] = useState(false);
  const colorPickerRef = useRef(null);
  const userMenuRef = useRef(null);

  const isKo = language === 'ko';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileCommExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (colorPickerRef.current && !colorPickerRef.current.contains(e.target)) setShowColorPicker(false);
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) setShowUserMenu(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 로그인 후 풍선 도움말 표시
  useEffect(() => {
    if (isAuthenticated) {
      const tooltipShown = sessionStorage.getItem('navbar-tooltips-shown');
      if (!tooltipShown) {
        setShowTooltips(true);
        const timer = setTimeout(() => {
          setShowTooltips(false);
          sessionStorage.setItem('navbar-tooltips-shown', 'true');
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [isAuthenticated]);

  const themeIconClass = mode === 'auto' ? 'fa-circle-half-stroke' : mode === 'light' ? 'fa-sun' : 'fa-moon';
  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || '';
  const avatarLetter = displayName.charAt(0).toUpperCase();

  async function handleSignOut() {
    await signOut();
    navigate('/');
  }

  const NAV_ITEMS = [
    { path: '/about', ko: 'About', en: 'About' },
    { path: '/claude-code', ko: 'Claude Code', en: 'Claude Code' },
    { path: '/claude-cowork', ko: 'Co-work', en: 'Co-work' },
    { path: '/prompt-engineering', ko: '프롬프트 가이드', en: 'Prompt Guide' },
    { path: '/api-usage', ko: 'API 가이드', en: 'API Guide' },
    { path: '/ai-news', ko: 'AI 뉴스', en: 'AI News' },
    { path: '/community', ko: '커뮤니티', en: 'Community', hasDropdown: true },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <span className="logo-claude">Claude</span>
            <span className="logo-master">Master</span>
          </Link>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.path} className={`nav-item${item.hasDropdown ? ' has-dropdown' : ''}`}>
                <Link
                  to={item.path}
                  className={`nav-link ${location.pathname.startsWith(item.path) ? 'active' : ''}`}
                >
                  {isKo ? item.ko : item.en}
                  {item.hasDropdown && <i className="fa-solid fa-chevron-down nav-dropdown-icon" />}
                </Link>
                {item.hasDropdown && (
                  <div className="nav-dropdown">
                    {BOARDS.map((board) => (
                      <Link
                        key={board.id}
                        to={`/community/${board.id}`}
                        className="nav-dropdown-item"
                      >
                        <i className={`fa-solid ${board.icon}`} style={{ color: board.color, width: '18px' }} />
                        {isKo ? board.nameKo : board.nameEn}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <div className="color-picker-wrapper" ref={colorPickerRef}>
              <button className="color-picker-btn" onClick={() => setShowColorPicker(!showColorPicker)} title="Color Theme">
                <div className="color-dot-preview" style={{ background: COLOR_OPTIONS.find(c => c.name === colorTheme)?.color }} />
              </button>
              {showTooltips && (
                <div className="navbar-tooltip navbar-tooltip-color">
                  {isKo ? '테마 컬러를 변경할 수 있어요' : 'Change theme color'}
                </div>
              )}
              <div className={`color-picker-dropdown ${showColorPicker ? 'show' : ''}`}>
                {COLOR_OPTIONS.map(opt => (
                  <button
                    key={opt.name}
                    className={`color-option ${colorTheme === opt.name ? 'active' : ''}`}
                    style={{ background: opt.color }}
                    onClick={() => { setColorTheme(opt.name); setShowColorPicker(false); }}
                    title={opt.name}
                  />
                ))}
              </div>
            </div>

            <div className="theme-toggle-wrapper">
              <button className="theme-toggle" onClick={toggleTheme} title={mode}>
                <i className={`fa-solid ${themeIconClass}`} />
              </button>
              {showTooltips && (
                <div className="navbar-tooltip navbar-tooltip-theme">
                  {isKo ? '라이트/다크 모드 전환' : 'Toggle light/dark mode'}
                </div>
              )}
            </div>

            <button className="lang-toggle" onClick={toggleLanguage}>
              {language === 'ko' ? 'EN' : 'KO'}
            </button>

            {isAuthenticated ? (
              <div className="user-menu-wrapper" ref={userMenuRef}>
                <button className="user-avatar-btn" onClick={() => setShowUserMenu(!showUserMenu)}>
                  {avatarLetter}
                </button>
                <div className={`user-menu-dropdown ${showUserMenu ? 'show' : ''}`}>
                  <div className="user-menu-header">
                    <div className="user-menu-name">{displayName}</div>
                    <div className="user-menu-email">{user?.email}</div>
                  </div>
                  {isAdmin && (
                    <Link to="/admin" className="user-menu-item" onClick={() => setShowUserMenu(false)}>
                      <i className="fa-solid fa-shield-halved" /> {t('nav.admin')}
                    </Link>
                  )}
                  <button className="user-menu-item danger" onClick={handleSignOut}>
                    <i className="fa-solid fa-right-from-bracket" /> {t('nav.logout')}
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="nav-auth-btn nav-login-btn">
                {t('nav.login')}
              </Link>
            )}

            <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {NAV_ITEMS.map((item) =>
            item.hasDropdown ? (
              <li key={item.path} className="mobile-nav-group">
                <button
                  className="mobile-nav-link mobile-nav-group-toggle"
                  onClick={() => setMobileCommExpanded(!mobileCommExpanded)}
                >
                  {isKo ? item.ko : item.en}
                  <i className={`fa-solid fa-chevron-down mobile-chevron${mobileCommExpanded ? ' expanded' : ''}`} />
                </button>
                {mobileCommExpanded && (
                  <ul className="mobile-nav-sub">
                    <li>
                      <Link to="/community" className="mobile-nav-sub-link">
                        <i className="fa-solid fa-grid-2" style={{ width: '18px' }} />
                        {isKo ? '전체 게시판' : 'All Boards'}
                      </Link>
                    </li>
                    {BOARDS.map((board) => (
                      <li key={board.id}>
                        <Link to={`/community/${board.id}`} className="mobile-nav-sub-link">
                          <i className={`fa-solid ${board.icon}`} style={{ color: board.color, width: '18px' }} />
                          {isKo ? board.nameKo : board.nameEn}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.path}>
                <Link to={item.path} className="mobile-nav-link">
                  {isKo ? item.ko : item.en}
                </Link>
              </li>
            )
          )}
        </ul>
        <div className="mobile-menu-actions">
          {isAuthenticated ? (
            <button className="btn btn-primary btn-sm" onClick={handleSignOut}>{t('nav.logout')}</button>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm">{t('nav.login')}</Link>
          )}
        </div>
      </div>
    </>
  );
}
