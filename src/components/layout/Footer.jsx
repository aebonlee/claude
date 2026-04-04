import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="brand-claude">Claude</span>
              <span className="brand-master"> Master</span>
            </div>
            <p className="footer-description">{t('footer.description')}</p>
            <p className="footer-description" style={{ marginTop: 8, fontSize: 13 }}>{t('footer.descriptionDetail')}</p>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-link-list">
              <li><Link to="/about">{language === 'ko' ? '소개' : 'About'}</Link></li>
              <li><Link to="/claude-code">Claude Code</Link></li>
              <li><Link to="/claude-work">Claude Work</Link></li>
              <li><Link to="/claude-cowork">Claude Co-work</Link></li>
              <li><Link to="/prompt-engineering">{language === 'ko' ? '프롬프트 엔지니어링' : 'Prompt Engineering'}</Link></li>
              <li><Link to="/api-usage">API {language === 'ko' ? '활용' : 'Usage'}</Link></li>
              <li><Link to="/glossary">{language === 'ko' ? 'AI 용어사전' : 'AI Glossary'}</Link></li>
              <li><Link to="/community/board">{t('nav.community')}</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{language === 'ko' ? '연락처' : 'Contact'}</h4>
            <p className="footer-email">
              <span className="footer-email-icon"><i className="fa-solid fa-envelope" /></span>
              <a href="mailto:aebon@dreamitbiz.com">aebon@dreamitbiz.com</a>
            </p>
            <p>010-3700-0629</p>
            <p>{language === 'ko' ? '카카오톡' : 'KakaoTalk'}: aebon</p>
            <p className="business-hours">{language === 'ko' ? '평일 09:00 ~ 18:00' : 'Weekdays 09:00 ~ 18:00'}</p>

            <div className="footer-family">
              <select
                defaultValue=""
                onChange={(e) => {
                  if (e.target.value) window.open(e.target.value, '_blank');
                  e.target.value = '';
                }}
              >
                <option value="" disabled>Family Site</option>
                <option value="https://www.dreamitbiz.com">DreamIT Biz</option>
                <option value="https://teaching.dreamitbiz.com">Teaching AI</option>
                <option value="https://openclaw.dreamitbiz.com">OpenClaw</option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 DreamIT Biz. All rights reserved.</p>
          <p className="footer-bottom-info">
            Designed by Ph.D Aebon Lee | {language === 'ko' ? '대표이사' : 'CEO'}: {language === 'ko' ? '이애본' : 'Aebon Lee'}
          </p>
        </div>
      </div>
    </footer>
  );
}
