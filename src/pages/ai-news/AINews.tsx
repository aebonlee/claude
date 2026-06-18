import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const newsItems = [
  {
    date: '2026-06-17',
    day: '17',
    month: 'JUN',
    tag: 'Company',
    title: 'Anthropic, 서울 오피스 개설',
    titleEn: 'Anthropic Opens Seoul Office',
    excerpt: 'Anthropic이 서울에 오피스를 열고 한국 AI 생태계 전반과의 파트너십을 확대했습니다. 국내 기업·기관의 Claude 도입이 더욱 가까워집니다.',
    excerptEn: 'Anthropic has opened a Seoul office and expanded partnerships across Korea\'s AI ecosystem, bringing Claude adoption closer to local companies and institutions.',
  },
  {
    date: '2026-06-12',
    day: '12',
    month: 'JUN',
    tag: 'Policy',
    title: '美 정부, Fable 5·Mythos 5 수출통제',
    titleEn: 'US Export Controls on Fable 5 & Mythos 5',
    excerpt: '미국 정부가 Claude Fable 5와 Mythos 5에 대한 접근을 중단하는 수출통제 지시를 발표했습니다. 최상위 모델의 가용성은 지역에 따라 달라질 수 있습니다.',
    excerptEn: 'The US government issued an export-control directive suspending access to Claude Fable 5 and Mythos 5. Availability of the top-tier models may vary by region.',
  },
  {
    date: '2026-06-09',
    day: '09',
    month: 'JUN',
    tag: 'Model',
    title: 'Claude Fable 5 · Mythos 5 공개',
    titleEn: 'Claude Fable 5 & Mythos 5 Announced',
    excerpt: 'Opus 위 티어의 Fable 5(및 Mythos 5)가 공개되었습니다. 코딩·지식노동·비전·컴퓨터 사용에서 최고 수준이며, 일부 주제 질의는 보수적 안전장치로 Opus 4.8이 대신 응답합니다(세션의 5% 미만). Mythos 5는 동일 모델로 Project Glasswing을 통해 제공됩니다.',
    excerptEn: 'Fable 5 (and Mythos 5), a tier above Opus, was announced. It is state-of-the-art at coding, knowledge work, vision, and computer use; on some topics conservative safeguards route the response to Opus 4.8 instead (under 5% of sessions). Mythos 5 is the same model, delivered via Project Glasswing.',
  },
  {
    date: '2026-06-02',
    day: '02',
    month: 'JUN',
    tag: 'Program',
    title: 'Project Glasswing, 15개국 150개 조직으로 확대',
    titleEn: 'Project Glasswing Expands to ~150 Orgs',
    excerpt: 'Project Glasswing이 15개국 이상, 약 150개 조직으로 확대되었습니다. Mythos 5 등 최상위 모델을 통한 협업이 넓어지고 있습니다.',
    excerptEn: 'Project Glasswing expanded to roughly 150 organizations across 15+ countries, broadening collaboration with top-tier models like Mythos 5.',
  },
  {
    date: '2026-05-28',
    day: '28',
    month: 'MAY',
    tag: 'Model',
    title: 'Claude Opus 4.8 출시',
    titleEn: 'Claude Opus 4.8 Released',
    excerpt: 'Claude Opus 4.8이 출시되었습니다. Opus 4.7 대비 코딩·에이전트 작업에서 더 신뢰할 수 있고 판단이 날카로워졌으며, 동일 가격으로 제공됩니다. 1M 컨텍스트를 표준 가격으로 지원합니다.',
    excerptEn: 'Claude Opus 4.8 was released — more reliable and sharper in judgment on coding and agentic tasks than 4.7, at the same price. It supports a 1M context window at standard pricing.',
  },
  {
    date: '2026-05',
    day: 'API',
    month: '2026',
    tag: 'Feature',
    title: '적응형 사고(Adaptive Thinking) & Effort 파라미터',
    titleEn: 'Adaptive Thinking & the Effort Parameter',
    excerpt: '고정 budget_tokens 방식이 폐기되고, Claude가 사고 깊이를 스스로 정하는 적응형 사고와 Effort 파라미터(low~max)가 표준이 되었습니다. 샘플링 파라미터(temperature 등)는 최신 모델에서 제거되었습니다.',
    excerptEn: 'The fixed budget_tokens approach is deprecated in favor of adaptive thinking, where Claude decides its own thinking depth, plus the Effort parameter (low–max). Sampling parameters like temperature are removed on the latest models.',
  },
  {
    date: '2026-06',
    day: 'REF',
    month: '2026',
    tag: 'Model',
    title: '현재 모델 라인업: Fable 5 · Opus 4.8 · Sonnet 4.6 · Haiku 4.5',
    titleEn: 'Current Lineup: Fable 5 · Opus 4.8 · Sonnet 4.6 · Haiku 4.5',
    excerpt: '현재 Claude 라인업은 가장 강력한 Fable 5, 고지능 Opus 4.8, 균형형 Sonnet 4.6, 경량 Haiku 4.5입니다. Opus·Sonnet·Fable은 1M(100만 토큰) 컨텍스트를 표준 가격으로 제공합니다.',
    excerptEn: 'The current Claude lineup is the flagship Fable 5, high-intelligence Opus 4.8, balanced Sonnet 4.6, and lightweight Haiku 4.5. Opus, Sonnet, and Fable offer a 1M-token context window at standard pricing.',
  },
  {
    date: '2025',
    day: 'GA',
    month: 'CLI',
    tag: 'Product',
    title: 'Claude Code — 에이전틱 코딩 도구',
    titleEn: 'Claude Code — Agentic Coding Tool',
    excerpt: '터미널·IDE·데스크톱·웹에서 동작하는 에이전틱 코딩 도구 Claude Code. Hooks, Slash Commands, Skills, MCP 서버, 서브에이전트 등 풍부한 기능을 제공합니다.',
    excerptEn: 'Claude Code is an agentic coding tool that runs in the terminal, IDEs, desktop, and web. It offers Hooks, Slash Commands, Skills, MCP servers, subagents, and more.',
  },
  {
    date: '2025',
    day: 'MCP',
    month: 'STD',
    tag: 'Protocol',
    title: 'MCP(Model Context Protocol) 표준화',
    titleEn: 'MCP (Model Context Protocol) Standardized',
    excerpt: 'AI 모델이 외부 도구·데이터 소스와 통신하는 개방형 표준 MCP가 폭넓게 채택되었습니다. Claude.ai 커넥터와 Claude Code의 핵심 연결 방식입니다.',
    excerptEn: 'MCP, the open standard for connecting AI models to external tools and data, has been widely adopted — the backbone of Claude.ai connectors and Claude Code integrations.',
  },
  {
    date: '2025',
    day: 'AI',
    month: 'SAFE',
    tag: 'Research',
    title: 'Constitutional AI — 안전성 연구',
    titleEn: 'Constitutional AI — Safety Research',
    excerpt: 'Anthropic의 Constitutional AI는 헌법적 원칙에 따라 모델이 스스로 출력을 평가·수정하도록 합니다. AI 안전성과 유용성의 균형을 위한 핵심 접근법입니다.',
    excerptEn: 'Anthropic\'s Constitutional AI has models evaluate and revise their own outputs against constitutional principles — a core approach to balancing safety and helpfulness.',
  },
];

export default function AINews() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="content-page">
      <SEOHead
        title={isKo ? 'AI 뉴스' : 'AI News'}
        description={isKo ? 'Claude와 Anthropic의 최신 뉴스와 업데이트입니다.' : 'Latest news and updates about Claude and Anthropic.'}
        path="/ai-news"
      />
      <div className="container">
        <div className="page-header" style={{ paddingTop: 0, borderBottom: 'none' }}>
          <h1>{isKo ? 'AI 뉴스' : 'AI News'}</h1>
          <p className="page-desc">
            {isKo
              ? 'Claude와 Anthropic의 최신 소식을 확인하세요.'
              : 'Stay updated with the latest Claude and Anthropic news.'}
          </p>
        </div>

        <div className="news-list">
          {newsItems.map((item, idx) => (
            <div key={idx} className="news-card">
              <div className="news-date">
                <div className="news-date-day">{item.day}</div>
                <div className="news-date-month">{item.month}</div>
              </div>
              <div className="news-content">
                <h3 className="news-title">{isKo ? item.title : item.titleEn}</h3>
                <p className="news-excerpt">{isKo ? item.excerpt : item.excerptEn}</p>
                <span className="news-tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
