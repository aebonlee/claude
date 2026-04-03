import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const resources = [
  {
    icon: 'fa-book',
    title: 'Anthropic Docs',
    titleKo: 'Anthropic 공식 문서',
    desc: 'Official documentation for all Anthropic products and APIs.',
    descKo: 'Anthropic의 모든 제품과 API에 대한 공식 문서입니다.',
    url: 'https://docs.anthropic.com',
  },
  {
    icon: 'fa-code',
    title: 'Claude API Reference',
    titleKo: 'Claude API 레퍼런스',
    desc: 'Complete API reference including endpoints, parameters, and examples.',
    descKo: '엔드포인트, 매개변수, 예제를 포함한 완전한 API 레퍼런스입니다.',
    url: 'https://docs.anthropic.com/en/api',
  },
  {
    icon: 'fa-terminal',
    title: 'Claude Code Docs',
    titleKo: 'Claude Code 문서',
    desc: 'Documentation for Claude Code, the agentic coding tool for the terminal.',
    descKo: '터미널용 에이전틱 코딩 도구인 Claude Code의 문서입니다.',
    url: 'https://docs.anthropic.com/en/docs/claude-code',
  },
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'Prompt Engineering Guide',
    titleKo: '프롬프트 엔지니어링 가이드',
    desc: 'Best practices and techniques for writing effective prompts.',
    descKo: '효과적인 프롬프트 작성을 위한 모범 사례와 기법입니다.',
    url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering',
  },
  {
    icon: 'fa-robot',
    title: 'Agent SDK Docs',
    titleKo: 'Agent SDK 문서',
    desc: 'Build autonomous AI agents with the Claude Agent SDK.',
    descKo: 'Claude Agent SDK로 자율 AI 에이전트를 구축하세요.',
    url: 'https://docs.anthropic.com/en/docs/agents-and-tools/claude-agent-sdk',
  },
  {
    icon: 'fa-flask',
    title: 'Anthropic Cookbook',
    titleKo: 'Anthropic 쿡북',
    desc: 'Practical recipes and code examples for common use cases.',
    descKo: '일반적인 사용 사례를 위한 실용적인 레시피와 코드 예제입니다.',
    url: 'https://github.com/anthropics/anthropic-cookbook',
  },
  {
    icon: 'fa-comments',
    title: 'Claude.ai',
    titleKo: 'Claude.ai',
    desc: 'The official Claude chat interface. Try Claude directly in your browser.',
    descKo: '공식 Claude 채팅 인터페이스. 브라우저에서 직접 Claude를 사용해보세요.',
    url: 'https://claude.ai',
  },
  {
    icon: 'fa-newspaper',
    title: 'Anthropic Blog',
    titleKo: 'Anthropic 블로그',
    desc: 'Latest research, product updates, and insights from the Anthropic team.',
    descKo: 'Anthropic 팀의 최신 연구, 제품 업데이트, 인사이트를 확인하세요.',
    url: 'https://www.anthropic.com/news',
  },
];

export default function Resources() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const handleOpen = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="content-page">
      <SEOHead
        title={isKo ? '학습 리소스' : 'Learning Resources'}
        description={isKo ? 'Claude 학습에 유용한 공식 문서와 리소스 모음입니다.' : 'A collection of official documentation and resources for learning Claude.'}
        path="/resources"
      />
      <div className="container">
        <div className="page-header" style={{ paddingTop: 0, borderBottom: 'none' }}>
          <h1>{isKo ? '학습 리소스' : 'Learning Resources'}</h1>
          <p className="page-desc">
            {isKo
              ? '공식 문서, 가이드, 도구 등 Claude 학습에 필요한 핵심 리소스를 모았습니다.'
              : 'Essential resources for learning Claude, including official docs, guides, and tools.'}
          </p>
        </div>

        <div className="resources-grid">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="resource-card"
              onClick={() => handleOpen(res.url)}
              style={{ cursor: 'pointer' }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleOpen(res.url)}
            >
              <div className="resource-card-header">
                <div className="resource-icon">
                  <i className={`fa-solid ${res.icon}`} />
                </div>
                <span className="resource-title">{isKo ? res.titleKo : res.title}</span>
              </div>
              <p className="resource-desc">{isKo ? res.descKo : res.desc}</p>
              <span className="resource-link">
                {isKo ? '바로가기' : 'Visit'}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
