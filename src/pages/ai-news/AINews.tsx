import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

// 그룹(좌측 타임라인 메뉴) 정의 — 연도/월 단위
const groups = [
  { key: '2026-06', label: '2026년 6월', labelEn: 'June 2026' },
  { key: '2026-05', label: '2026년 5월', labelEn: 'May 2026' },
  { key: 'ref', label: '핵심 토픽 · 레퍼런스', labelEn: 'Key Topics · Reference' },
];

const newsItems = [
  {
    id: 'seoul', group: '2026-06', day: '17', month: 'JUN', toc: '06.17', tag: 'Company',
    title: 'Anthropic, 서울 오피스 개설',
    titleEn: 'Anthropic Opens Seoul Office',
    excerpt: 'Anthropic이 서울에 오피스를 열고 한국 AI 생태계 전반과의 파트너십을 확대했습니다. 국내 기업·기관의 Claude 도입이 더욱 가까워집니다.',
    excerptEn: 'Anthropic has opened a Seoul office and expanded partnerships across Korea\'s AI ecosystem, bringing Claude adoption closer to local companies and institutions.',
    url: 'https://www.anthropic.com/news',
  },
  {
    id: 'export', group: '2026-06', day: '12', month: 'JUN', toc: '06.12', tag: 'Policy',
    title: '美 정부, Fable 5·Mythos 5 수출통제',
    titleEn: 'US Export Controls on Fable 5 & Mythos 5',
    excerpt: '미국 정부가 Claude Fable 5와 Mythos 5에 대한 접근을 중단하는 수출통제 지시를 발표했습니다. 최상위 모델의 가용성은 지역에 따라 달라질 수 있습니다.',
    excerptEn: 'The US government issued an export-control directive suspending access to Claude Fable 5 and Mythos 5. Availability of the top-tier models may vary by region.',
    url: 'https://www.anthropic.com/news',
  },
  {
    id: 'fable5', group: '2026-06', day: '09', month: 'JUN', toc: '06.09', tag: 'Model',
    title: 'Claude Fable 5 · Mythos 5 공개',
    titleEn: 'Claude Fable 5 & Mythos 5 Announced',
    excerpt: 'Opus 위 티어의 Fable 5(및 Mythos 5)가 공개되었습니다. 코딩·지식노동·비전·컴퓨터 사용에서 최고 수준이며, 일부 주제 질의는 보수적 안전장치로 Opus 4.8이 대신 응답합니다(세션의 5% 미만). Mythos 5는 동일 모델로 Project Glasswing을 통해 제공됩니다.',
    excerptEn: 'Fable 5 (and Mythos 5), a tier above Opus, was announced. It is state-of-the-art at coding, knowledge work, vision, and computer use; on some topics conservative safeguards route the response to Opus 4.8 instead (under 5% of sessions). Mythos 5 is the same model, delivered via Project Glasswing.',
    url: 'https://www.anthropic.com/news/claude-fable-5-mythos-5',
  },
  {
    id: 'glasswing', group: '2026-06', day: '02', month: 'JUN', toc: '06.02', tag: 'Program',
    title: 'Project Glasswing, 15개국 150개 조직으로 확대',
    titleEn: 'Project Glasswing Expands to ~150 Orgs',
    excerpt: 'Project Glasswing이 15개국 이상, 약 150개 조직으로 확대되었습니다. Mythos 5 등 최상위 모델을 통한 협업이 넓어지고 있습니다.',
    excerptEn: 'Project Glasswing expanded to roughly 150 organizations across 15+ countries, broadening collaboration with top-tier models like Mythos 5.',
    url: 'https://www.anthropic.com/news',
  },
  {
    id: 'opus48', group: '2026-05', day: '28', month: 'MAY', toc: '05.28', tag: 'Model',
    title: 'Claude Opus 4.8 출시',
    titleEn: 'Claude Opus 4.8 Released',
    excerpt: 'Claude Opus 4.8이 출시되었습니다. Opus 4.7 대비 코딩·에이전트 작업에서 더 신뢰할 수 있고 판단이 날카로워졌으며, 동일 가격으로 제공됩니다. 1M 컨텍스트를 표준 가격으로 지원합니다.',
    excerptEn: 'Claude Opus 4.8 was released — more reliable and sharper in judgment on coding and agentic tasks than 4.7, at the same price. It supports a 1M context window at standard pricing.',
    url: 'https://www.anthropic.com/news/claude-opus-4-8',
  },
  {
    id: 'adaptive', group: 'ref', day: 'API', month: 'DOC', toc: '적응형 사고', tag: 'Feature',
    title: '적응형 사고(Adaptive Thinking) & Effort 파라미터',
    titleEn: 'Adaptive Thinking & the Effort Parameter',
    excerpt: '고정 budget_tokens 방식이 폐기되고, Claude가 사고 깊이를 스스로 정하는 적응형 사고와 Effort 파라미터(low~max)가 표준이 되었습니다. 샘플링 파라미터(temperature 등)는 최신 모델에서 제거되었습니다.',
    excerptEn: 'The fixed budget_tokens approach is deprecated in favor of adaptive thinking, where Claude decides its own thinking depth, plus the Effort parameter (low–max). Sampling parameters like temperature are removed on the latest models.',
    url: 'https://platform.claude.com/docs/en/build-with-claude/adaptive-thinking',
  },
  {
    id: 'lineup', group: 'ref', day: 'REF', month: 'DOC', toc: '현재 모델 라인업', tag: 'Model',
    title: '현재 모델 라인업: Fable 5 · Opus 4.8 · Sonnet 4.6 · Haiku 4.5',
    titleEn: 'Current Lineup: Fable 5 · Opus 4.8 · Sonnet 4.6 · Haiku 4.5',
    excerpt: '현재 Claude 라인업은 가장 강력한 Fable 5, 고지능 Opus 4.8, 균형형 Sonnet 4.6, 경량 Haiku 4.5입니다. Opus·Sonnet·Fable은 1M(100만 토큰) 컨텍스트를 표준 가격으로 제공합니다.',
    excerptEn: 'The current Claude lineup is the flagship Fable 5, high-intelligence Opus 4.8, balanced Sonnet 4.6, and lightweight Haiku 4.5. Opus, Sonnet, and Fable offer a 1M-token context window at standard pricing.',
    url: 'https://platform.claude.com/docs/en/about-claude/models/overview',
  },
  {
    id: 'claudecode', group: 'ref', day: 'GA', month: 'CLI', toc: 'Claude Code', tag: 'Product',
    title: 'Claude Code — 에이전틱 코딩 도구',
    titleEn: 'Claude Code — Agentic Coding Tool',
    excerpt: '터미널·IDE·데스크톱·웹에서 동작하는 에이전틱 코딩 도구 Claude Code. Hooks, Slash Commands, Skills, MCP 서버, 서브에이전트 등 풍부한 기능을 제공합니다.',
    excerptEn: 'Claude Code is an agentic coding tool that runs in the terminal, IDEs, desktop, and web. It offers Hooks, Slash Commands, Skills, MCP servers, subagents, and more.',
    url: 'https://www.anthropic.com/claude-code',
  },
  {
    id: 'mcp', group: 'ref', day: 'MCP', month: 'STD', toc: 'MCP 표준', tag: 'Protocol',
    title: 'MCP(Model Context Protocol) 표준화',
    titleEn: 'MCP (Model Context Protocol) Standardized',
    excerpt: 'AI 모델이 외부 도구·데이터 소스와 통신하는 개방형 표준 MCP가 폭넓게 채택되었습니다. Claude.ai 커넥터와 Claude Code의 핵심 연결 방식입니다.',
    excerptEn: 'MCP, the open standard for connecting AI models to external tools and data, has been widely adopted — the backbone of Claude.ai connectors and Claude Code integrations.',
    url: 'https://modelcontextprotocol.io',
  },
  {
    id: 'cai', group: 'ref', day: 'AI', month: 'SAFE', toc: 'Constitutional AI', tag: 'Research',
    title: 'Constitutional AI — 안전성 연구',
    titleEn: 'Constitutional AI — Safety Research',
    excerpt: 'Anthropic의 Constitutional AI는 헌법적 원칙에 따라 모델이 스스로 출력을 평가·수정하도록 합니다. AI 안전성과 유용성의 균형을 위한 핵심 접근법입니다.',
    excerptEn: 'Anthropic\'s Constitutional AI has models evaluate and revise their own outputs against constitutional principles — a core approach to balancing safety and helpfulness.',
    url: 'https://www.anthropic.com/research',
  },
];

// 하단 공식 자료 · 표준 문서 링크
const resources = [
  { icon: 'fa-newspaper', label: 'Anthropic 뉴스룸', labelEn: 'Anthropic Newsroom', desc: '공식 발표·연구 소식', descEn: 'Official announcements & research', url: 'https://www.anthropic.com/news' },
  { icon: 'fa-cube', label: 'Claude 모델 개요', labelEn: 'Claude Models Overview', desc: '모델 ID·컨텍스트·가격', descEn: 'Model IDs, context, pricing', url: 'https://platform.claude.com/docs/en/about-claude/models/overview' },
  { icon: 'fa-code', label: 'API 공식 문서', labelEn: 'API Documentation', desc: '메시지 API·도구·에이전트', descEn: 'Messages API, tools, agents', url: 'https://platform.claude.com/docs' },
  { icon: 'fa-file-lines', label: '릴리스 노트', labelEn: 'Release Notes', desc: 'Claude 앱·기능 변경 이력', descEn: 'Claude app & feature changelog', url: 'https://docs.anthropic.com/en/release-notes/claude-apps' },
  { icon: 'fa-terminal', label: 'Claude Code', labelEn: 'Claude Code', desc: '에이전틱 코딩 도구', descEn: 'Agentic coding tool', url: 'https://www.anthropic.com/claude-code' },
  { icon: 'fa-plug', label: 'MCP 표준', labelEn: 'MCP Standard', desc: 'Model Context Protocol', descEn: 'Model Context Protocol', url: 'https://modelcontextprotocol.io' },
];

export default function AINews() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const scrollTo = (id: string) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="content-page ainews-page">
      <SEOHead
        title={isKo ? 'AI 뉴스' : 'AI News'}
        description={isKo ? 'Claude와 Anthropic의 최신 뉴스와 업데이트, 공식 문서 링크.' : 'Latest Claude & Anthropic news with links to official sources and docs.'}
        path="/ai-news"
      />
      <div className="container">
        <div className="page-header" style={{ paddingTop: 0, borderBottom: 'none' }}>
          <h1>{isKo ? 'AI 뉴스' : 'AI News'}</h1>
          <p className="page-desc">
            {isKo
              ? 'Claude와 Anthropic의 최신 소식을 확인하고, 각 기사 원문과 공식 문서로 바로 이동하세요.'
              : 'Track the latest Claude & Anthropic news and jump straight to source articles and official docs.'}
          </p>
        </div>

        <div className="ainews-layout">
          {/* 좌측 타임라인 메뉴 */}
          <aside className="ainews-sidebar">
            <div className="ainews-toc">
              <div className="ainews-toc-heading">
                <i className="fa-solid fa-timeline" /> {isKo ? '타임라인' : 'Timeline'}
              </div>
              {groups.map((g) => {
                const items = newsItems.filter((n) => n.group === g.key);
                if (!items.length) return null;
                return (
                  <div key={g.key} className="ainews-toc-group">
                    <a href={`#group-${g.key}`} className="ainews-toc-title" onClick={scrollTo(`group-${g.key}`)}>
                      {isKo ? g.label : g.labelEn}
                      <span className="ainews-toc-count">{items.length}</span>
                    </a>
                    <ul>
                      {items.map((n) => (
                        <li key={n.id}>
                          <a href={`#news-${n.id}`} onClick={scrollTo(`news-${n.id}`)}>
                            <span className="ainews-toc-date">{n.toc}</span>
                            <span className="ainews-toc-text">{isKo ? n.title : n.titleEn}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* 본문 */}
          <div className="ainews-main">
            {groups.map((g) => {
              const items = newsItems.filter((n) => n.group === g.key);
              if (!items.length) return null;
              return (
                <section key={g.key} className="ainews-section">
                  <h2 className="ainews-group-heading" id={`group-${g.key}`}>
                    {isKo ? g.label : g.labelEn}
                  </h2>
                  <div className="news-list">
                    {items.map((item) => (
                      <div key={item.id} id={`news-${item.id}`} className="news-card">
                        <div className="news-date">
                          <div className="news-date-day">{item.day}</div>
                          <div className="news-date-month">{item.month}</div>
                        </div>
                        <div className="news-content">
                          <h3 className="news-title">{isKo ? item.title : item.titleEn}</h3>
                          <p className="news-excerpt">{isKo ? item.excerpt : item.excerptEn}</p>
                          <div className="news-meta">
                            <span className="news-tag">{item.tag}</span>
                            <a className="news-source" href={item.url} target="_blank" rel="noreferrer">
                              {isKo ? '기사·문서 보기' : 'View source'}
                              <i className="fa-solid fa-arrow-up-right-from-square" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* 하단: 공식 자료 · 표준 문서 */}
            <div className="ainews-resources">
              <h2 className="ainews-group-heading">
                {isKo ? '공식 자료 · 표준 문서' : 'Official Sources · Standard Docs'}
              </h2>
              <p className="ainews-resources-sub">
                {isKo
                  ? 'Anthropic 공식 사이트와 표준 문서에서 1차 출처를 확인하세요.'
                  : 'Verify primary sources on Anthropic\'s official site and standard docs.'}
              </p>
              <div className="ainews-resource-grid">
                {resources.map((r) => (
                  <a key={r.url} className="ainews-resource-card" href={r.url} target="_blank" rel="noreferrer">
                    <span className="ainews-resource-icon">
                      <i className={`fa-solid ${r.icon}`} />
                    </span>
                    <span className="ainews-resource-body">
                      <span className="ainews-resource-label">
                        {isKo ? r.label : r.labelEn}
                        <i className="fa-solid fa-arrow-up-right-from-square" />
                      </span>
                      <span className="ainews-resource-desc">{isKo ? r.desc : r.descEn}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
