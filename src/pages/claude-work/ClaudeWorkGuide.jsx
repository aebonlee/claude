import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import overview from './data/overview';
import projects from './data/projects';
import artifacts from './data/artifacts';
import teamFeatures from './data/team-features';
import integrations from './data/integrations';
import memory from './data/memory';

const SECTIONS = [overview, projects, artifacts, teamFeatures, integrations, memory];

export default function ClaudeWorkGuide() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = SECTIONS[activeIndex];

  return (
    <div className="guide-page">
      <SEOHead title={isKo ? 'Claude Work 가이드' : 'Claude Work Guide'} path="/claude-work" />
      <div className="guide-layout">
        <aside className="guide-sidebar">
          <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
          <ul className="guide-nav">
            {SECTIONS.map((s, i) => (
              <li key={s.id} className="guide-nav-item">
                <button
                  className={`guide-nav-link ${i === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <i className={`fa-solid ${s.icon} nav-icon`} />
                  {isKo ? s.title : s.titleEn}
                </button>
              </li>
            ))}
          </ul>
        </aside>
        <div className="guide-content">
          <div className="guide-content-header">
            <h1>{isKo ? activeSection.title : activeSection.titleEn}</h1>
          </div>
          {activeSection.sections.map((sec, i) => (
            <div key={i} className="guide-section">
              <h2>{isKo ? sec.title : sec.titleEn}</h2>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {isKo ? sec.content : sec.contentEn}
              </ReactMarkdown>
            </div>
          ))}
          <div className="guide-section-nav">
            <button disabled={activeIndex === 0} onClick={() => setActiveIndex(activeIndex - 1)}>
              <i className="fa-solid fa-chevron-left" /> {isKo ? '이전' : 'Previous'}
            </button>
            <button disabled={activeIndex === SECTIONS.length - 1} onClick={() => setActiveIndex(activeIndex + 1)}>
              {isKo ? '다음' : 'Next'} <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
