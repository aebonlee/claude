import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isKo = language === 'ko';

  const features = [
    {
      icon: 'fa-terminal',
      title: isKo ? 'Claude Code CLI 가이드' : 'Claude Code CLI Guide',
      description: isKo
        ? 'CLI 설치부터 Hooks, MCP Servers, Slash Commands, IDE 연동까지 Claude Code의 모든 기능을 체계적으로 학습합니다.'
        : 'Systematically learn every Claude Code feature from CLI installation to Hooks, MCP Servers, Slash Commands, and IDE integration.',
    },
    {
      icon: 'fa-code',
      title: isKo ? 'API 개발 가이드' : 'API Development Guide',
      description: isKo
        ? 'Messages API, Streaming, Tool Use, Vision 등 Anthropic API를 활용한 실전 애플리케이션 개발 방법을 배웁니다.'
        : 'Learn to build real-world applications using Messages API, Streaming, Tool Use, Vision, and more with the Anthropic API.',
    },
    {
      icon: 'fa-wand-magic-sparkles',
      title: isKo ? '프롬프트 엔지니어링' : 'Prompt Engineering',
      description: isKo
        ? 'System Prompts, XML Tags, Chain of Thought, Extended Thinking 등 고급 프롬프트 기법을 마스터합니다.'
        : 'Master advanced prompting techniques including System Prompts, XML Tags, Chain of Thought, and Extended Thinking.',
    },
    {
      icon: 'fa-users',
      title: isKo ? 'Agent SDK 개발' : 'Agent SDK Development',
      description: isKo
        ? '멀티 에이전트 오케스트레이션, 도구 통합, 워크플로우 설계를 통해 자율 에이전트를 구축합니다.'
        : 'Build autonomous agents through multi-agent orchestration, tool integration, and workflow design.',
    },
    {
      icon: 'fa-briefcase',
      title: isKo ? 'Claude Work 활용' : 'Claude Work Usage',
      description: isKo
        ? 'Claude를 업무에 활용하는 방법을 배웁니다. 문서 작성, 데이터 분석, 코드 리뷰 등 실무 활용 사례를 다룹니다.'
        : 'Learn how to use Claude at work. Covers practical use cases like document creation, data analysis, and code review.',
    },
    {
      icon: 'fa-chart-bar',
      title: isKo ? '모델 비교 & 분석' : 'Model Comparison & Analysis',
      description: isKo
        ? 'Claude 모델 패밀리(Haiku, Sonnet, Opus)의 특성과 용도를 비교 분석하여 최적의 모델을 선택합니다.'
        : 'Compare and analyze the Claude model family (Haiku, Sonnet, Opus) to choose the optimal model for your needs.',
    },
  ];

  return (
    <div className="about-page">
      <SEOHead title={t('about.title')} path="/about" />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-hero-title">{t('about.title')}</h1>
          <p className="about-hero-subtitle">{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="about-features">
        <div className="container">
          <div className="about-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="about-feature-card">
                <div className="about-feature-icon">
                  <i className={`fa-solid ${feature.icon}`} />
                </div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
