import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const newsItems = [
  {
    date: '2025-05-15',
    day: '15',
    month: 'MAY',
    tag: 'Model',
    title: 'Claude Opus 4 출시',
    titleEn: 'Claude Opus 4 Released',
    excerpt: 'Anthropic이 최강 성능의 Claude Opus 4 모델을 공개했습니다. 복잡한 코딩, 수학적 추론, 장문 분석에서 획기적인 성능 향상을 보여줍니다.',
    excerptEn: 'Anthropic has released its most powerful model, Claude Opus 4. It shows breakthrough performance in complex coding, mathematical reasoning, and long-form analysis.',
  },
  {
    date: '2025-05-14',
    day: '14',
    month: 'MAY',
    tag: 'Model',
    title: 'Claude Sonnet 4 동시 출시',
    titleEn: 'Claude Sonnet 4 Launched Simultaneously',
    excerpt: 'Opus 4와 함께 Claude Sonnet 4도 출시되었습니다. 성능과 비용의 최적 균형을 제공하며, 대부분의 업무에 권장되는 범용 모델입니다.',
    excerptEn: 'Claude Sonnet 4 was also launched alongside Opus 4. It provides the optimal balance of performance and cost, recommended for most tasks.',
  },
  {
    date: '2025-04-15',
    day: '15',
    month: 'APR',
    tag: 'Product',
    title: 'Claude Code 정식 출시 (GA)',
    titleEn: 'Claude Code General Availability (GA)',
    excerpt: 'Anthropic의 에이전틱 코딩 도구 Claude Code가 정식 출시되었습니다. Hooks, Slash Commands, MCP 서버 등 풍부한 기능을 제공합니다.',
    excerptEn: 'Anthropic\'s agentic coding tool Claude Code is now generally available. It offers rich features including Hooks, Slash Commands, and MCP servers.',
  },
  {
    date: '2025-03-25',
    day: '25',
    month: 'MAR',
    tag: 'SDK',
    title: 'Claude Agent SDK 공개',
    titleEn: 'Claude Agent SDK Released',
    excerpt: '자율 AI 에이전트를 구축할 수 있는 Agent SDK가 공개되었습니다. 멀티 에이전트 오케스트레이션과 도구 통합을 지원합니다.',
    excerptEn: 'The Agent SDK for building autonomous AI agents has been released. It supports multi-agent orchestration and tool integration.',
  },
  {
    date: '2025-03-10',
    day: '10',
    month: 'MAR',
    tag: 'Protocol',
    title: 'MCP(Model Context Protocol) 업데이트',
    titleEn: 'MCP (Model Context Protocol) Update',
    excerpt: 'Model Context Protocol의 새로운 업데이트가 발표되었습니다. 더 많은 도구와 데이터 소스를 연결할 수 있게 되었습니다.',
    excerptEn: 'A new update to the Model Context Protocol has been announced. It now supports connecting to more tools and data sources.',
  },
  {
    date: '2025-02-20',
    day: '20',
    month: 'FEB',
    tag: 'Feature',
    title: 'Extended Thinking 기능 강화',
    titleEn: 'Extended Thinking Feature Enhanced',
    excerpt: 'Claude의 Extended Thinking 기능이 강화되었습니다. 복잡한 수학, 코딩, 논리 문제에서 더 깊은 추론이 가능합니다.',
    excerptEn: 'Claude\'s Extended Thinking feature has been enhanced. It enables deeper reasoning on complex math, coding, and logic problems.',
  },
  {
    date: '2025-02-05',
    day: '05',
    month: 'FEB',
    tag: 'Research',
    title: 'Constitutional AI 연구 논문 발표',
    titleEn: 'Constitutional AI Research Paper Published',
    excerpt: 'Anthropic이 Constitutional AI의 최신 연구 결과를 발표했습니다. AI 안전성과 도움 유용성의 균형에 대한 새로운 접근법을 제시합니다.',
    excerptEn: 'Anthropic has published its latest research on Constitutional AI. It presents a new approach to balancing AI safety and helpfulness.',
  },
  {
    date: '2025-01-15',
    day: '15',
    month: 'JAN',
    tag: 'Enterprise',
    title: 'Claude Enterprise 플랜 출시',
    titleEn: 'Claude Enterprise Plan Launched',
    excerpt: '기업 고객을 위한 Claude Enterprise 플랜이 출시되었습니다. SSO, 감사 로그, 전용 인프라 등 엔터프라이즈 기능을 제공합니다.',
    excerptEn: 'The Claude Enterprise plan for business customers has been launched. It offers enterprise features including SSO, audit logs, and dedicated infrastructure.',
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
