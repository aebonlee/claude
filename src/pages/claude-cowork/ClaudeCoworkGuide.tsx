import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import CodeBlock from '../../components/CodeBlock';
import TipBox from '../../components/TipBox';
import overview from './data/overview';
import sharedProjects from './data/shared-projects';
import integrations from './data/integrations';
import workflows from './data/workflows';
import bestPractices from './data/best-practices';
import enterprise from './data/enterprise';

const SECTIONS = [overview, sharedProjects, integrations, workflows, bestPractices, enterprise];

export default function ClaudeCoworkGuide() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = SECTIONS[activeIndex];

  const markdownComponents = {
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      if (!inline && match) {
        return <CodeBlock code={String(children).replace(/\n$/, '')} language={match[1]} />;
      }
      if (!inline && !match && String(children).includes('\n')) {
        return <CodeBlock code={String(children).replace(/\n$/, '')} language="" />;
      }
      return <code className="inline-code" {...props}>{children}</code>;
    },
    table({ children }) {
      return <div className="table-responsive"><table>{children}</table></div>;
    },
    blockquote({ children }) {
      return <TipBox type="tip">{children}</TipBox>;
    },
  };

  return (
    <div className="guide-page">
      <SEOHead title={isKo ? 'Claude 코워크 가이드' : 'Claude Co-work Guide'} path="/claude-cowork" />
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
              <div className="markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents as any}>
                  {isKo ? sec.content : sec.contentEn}
                </ReactMarkdown>
              </div>
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
