import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import CodeBlock from '../../components/CodeBlock';
import TipBox from '../../components/TipBox';

import overview from './data/overview';
import hooks from './data/hooks';
import slashCommands from './data/slash-commands';
import mcpServers from './data/mcp-servers';
import settings from './data/settings';
import ideIntegrations from './data/ide-integrations';
import cliFeatures from './data/cli-features';
import workflows from './data/workflows';
import tips from './data/tips';

const ALL_GUIDES = [
  overview,
  hooks,
  slashCommands,
  mcpServers,
  settings,
  ideIntegrations,
  cliFeatures,
  workflows,
  tips,
];

export default function ClaudeCodeGuide() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const [activeSection, setActiveSection] = useState(ALL_GUIDES[0].id);

  const activeGuide = ALL_GUIDES.find((g) => g.id === activeSection) || ALL_GUIDES[0];
  const activeIndex = ALL_GUIDES.findIndex((g) => g.id === activeSection);

  const prevGuide = activeIndex > 0 ? ALL_GUIDES[activeIndex - 1] : null;
  const nextGuide = activeIndex < ALL_GUIDES.length - 1 ? ALL_GUIDES[activeIndex + 1] : null;

  const markdownComponents = {
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      if (!inline && match) {
        return <CodeBlock code={String(children).replace(/\n$/, '')} language={match[1]} />;
      }
      if (!inline && !match && String(children).includes('\n')) {
        return <CodeBlock code={String(children).replace(/\n$/, '')} language="" />;
      }
      return (
        <code className="inline-code" {...props}>
          {children}
        </code>
      );
    },
    table({ children }) {
      return (
        <div className="table-responsive">
          <table>{children}</table>
        </div>
      );
    },
    blockquote({ children }) {
      return (
        <TipBox type="tip">
          {children}
        </TipBox>
      );
    },
  };

  return (
    <>
      <SEOHead
        title={isKo ? 'Claude Code 가이드' : 'Claude Code Guide'}
        description={
          isKo
            ? 'Claude Code CLI의 모든 기능을 배우세요. Hooks, MCP 서버, 슬래시 커맨드, IDE 통합 등을 다룹니다.'
            : 'Learn all features of Claude Code CLI. Covers Hooks, MCP Servers, Slash Commands, IDE integrations, and more.'
        }
        path="/claude-code"
      />

      <div className="guide-page">
        <div className="guide-layout">
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">{isKo ? '목차' : 'Contents'}</div>
            <ul className="guide-nav">
              {ALL_GUIDES.map((guide) => (
                <li key={guide.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === guide.id ? 'active' : ''}`}
                    onClick={() => setActiveSection(guide.id)}
                  >
                    <i className={`fa-solid ${guide.icon} nav-icon`} />
                    {isKo ? guide.title : guide.titleEn}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <div className="guide-content">
            <div className="guide-content-header">
              <h1>{isKo ? activeGuide.title : activeGuide.titleEn}</h1>
            </div>
            {activeGuide.sections.map((section, idx) => (
              <div key={idx} className="guide-section">
                <h2>{isKo ? section.title : section.titleEn}</h2>
                <div className="markdown-body">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={markdownComponents as any}
                  >
                    {isKo ? section.content : section.contentEn}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            <div className="guide-section-nav">
              <button disabled={activeIndex === 0} onClick={() => setActiveSection(prevGuide?.id)}>
                <i className="fa-solid fa-chevron-left" /> {isKo ? '이전' : 'Previous'}
              </button>
              <button disabled={activeIndex === ALL_GUIDES.length - 1} onClick={() => setActiveSection(nextGuide?.id)}>
                {isKo ? '다음' : 'Next'} <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
