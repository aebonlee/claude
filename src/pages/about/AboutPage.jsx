import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { LEARNING_PATHS } from '../../config/site';
import SEOHead from '../../components/SEOHead';

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isKo = language === 'ko';

  const features = [
    {
      icon: 'fa-terminal',
      color: '#D97706',
      title: isKo ? 'Claude Code CLI' : 'Claude Code CLI',
      description: isKo
        ? 'Hooks, MCP Servers, Slash Commands, IDE 연동까지 Claude Code의 모든 기능을 체계적으로 학습합니다.'
        : 'Systematically learn every Claude Code feature from Hooks, MCP Servers, Slash Commands to IDE integration.',
    },
    {
      icon: 'fa-code',
      color: '#E34F26',
      title: isKo ? 'Anthropic API' : 'Anthropic API',
      description: isKo
        ? 'Messages API, Streaming, Tool Use, Vision 등을 활용한 실전 애플리케이션 개발을 배웁니다.'
        : 'Learn real-world application development with Messages API, Streaming, Tool Use, Vision, and more.',
    },
    {
      icon: 'fa-wand-magic-sparkles',
      color: '#10A37F',
      title: isKo ? '프롬프트 엔지니어링' : 'Prompt Engineering',
      description: isKo
        ? 'System Prompts, XML Tags, Chain of Thought, Extended Thinking 등 고급 프롬프트 기법을 마스터합니다.'
        : 'Master advanced prompting: System Prompts, XML Tags, Chain of Thought, and Extended Thinking.',
    },
    {
      icon: 'fa-robot',
      color: '#4285F4',
      title: isKo ? 'Agent SDK' : 'Agent SDK',
      description: isKo
        ? '멀티 에이전트 오케스트레이션, 도구 통합, 워크플로우 설계를 통해 자율 에이전트를 구축합니다.'
        : 'Build autonomous agents with multi-agent orchestration, tool integration, and workflow design.',
    },
    {
      icon: 'fa-briefcase',
      color: '#8B5CF6',
      title: isKo ? 'Claude Work' : 'Claude Work',
      description: isKo
        ? 'Claude.ai의 Projects, Artifacts, Memory, Team 기능과 다양한 업무 활용법을 배웁니다.'
        : 'Learn Projects, Artifacts, Memory, Team features and practical business use cases on Claude.ai.',
    },
    {
      icon: 'fa-chart-bar',
      color: '#FF6F00',
      title: isKo ? '모델 비교 & 분석' : 'Model Comparison',
      description: isKo
        ? 'Opus, Sonnet, Haiku 모델의 특성과 용도를 비교 분석하여 최적의 모델을 선택합니다.'
        : 'Compare Opus, Sonnet, and Haiku to choose the optimal model for your needs.',
    },
  ];

  const stats = [
    { number: '7+', label: isKo ? '학습 가이드' : 'Learning Guides', icon: 'fa-book-open' },
    { number: '50+', label: isKo ? '학습 토픽' : 'Topics Covered', icon: 'fa-list-check' },
    { number: '100+', label: isKo ? '코드 예제' : 'Code Examples', icon: 'fa-code' },
    { number: '2', label: isKo ? '지원 언어' : 'Languages', icon: 'fa-globe' },
  ];

  const techStack = [
    { name: 'React 19', icon: 'fa-react', color: '#61DAFB', type: 'fab' },
    { name: 'Vite 6', icon: 'fa-bolt', color: '#646CFF', type: 'fas' },
    { name: 'Supabase', icon: 'fa-database', color: '#3ECF8E', type: 'fas' },
    { name: 'GitHub Pages', icon: 'fa-github', color: '#fff', type: 'fab' },
  ];

  const values = [
    {
      icon: 'fa-graduation-cap',
      title: isKo ? '체계적 학습' : 'Structured Learning',
      desc: isKo
        ? '초보부터 고급까지, 단계별로 구성된 커리큘럼으로 효율적으로 학습할 수 있습니다.'
        : 'Learn efficiently with a step-by-step curriculum designed from beginner to advanced.',
    },
    {
      icon: 'fa-hands-helping',
      title: isKo ? '실전 중심' : 'Practice-Oriented',
      desc: isKo
        ? '이론뿐만 아니라 실제 코드 예제와 프로젝트를 통해 바로 적용할 수 있는 지식을 제공합니다.'
        : 'We provide actionable knowledge through real code examples and projects, not just theory.',
    },
    {
      icon: 'fa-sync-alt',
      title: isKo ? '최신 업데이트' : 'Always Up-to-Date',
      desc: isKo
        ? 'Claude의 최신 기능과 API 변경사항을 빠르게 반영하여 항상 최신 정보를 제공합니다.'
        : 'We quickly reflect the latest Claude features and API changes to keep content current.',
    },
    {
      icon: 'fa-language',
      title: isKo ? '다국어 지원' : 'Multilingual',
      desc: isKo
        ? '한국어와 영어를 모두 지원하여 언어 장벽 없이 학습할 수 있습니다.'
        : 'Support for both Korean and English so you can learn without language barriers.',
    },
  ];

  return (
    <div className="about-page">
      <SEOHead
        title={isKo ? '소개' : 'About'}
        description={isKo ? 'Claude AI의 모든 기능을 학습하는 종합 플랫폼' : 'A comprehensive platform for learning all Claude AI features'}
        path="/about"
      />

      {/* Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-bg" />
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-badge">
              <i className="fa-solid fa-sparkles" />
              {isKo ? 'Claude AI 학습 플랫폼' : 'Claude AI Learning Platform'}
            </div>
            <h1 className="about-hero-title">
              {isKo ? 'Claude의 모든 것을' : 'Everything about'}
              <br />
              <span className="about-hero-highlight">
                {isKo ? '한 곳에서 마스터하세요' : 'Claude in one place'}
              </span>
            </h1>
            <p className="about-hero-desc">
              {isKo
                ? 'Claude Master는 Claude Code, API, Agent SDK, 프롬프트 엔지니어링 등 Claude AI의 모든 기능을 체계적으로 학습할 수 있는 종합 플랫폼입니다.'
                : 'Claude Master is a comprehensive platform for systematically learning all Claude AI features including Claude Code, API, Agent SDK, and Prompt Engineering.'}
            </p>
            <div className="about-hero-actions">
              <Link to="/claude-code" className="btn btn-primary-large">
                <i className="fa-solid fa-rocket" />
                {isKo ? '학습 시작하기' : 'Start Learning'}
              </Link>
              <Link to="/roadmap" className="btn btn-ghost">
                <i className="fa-solid fa-map" />
                {isKo ? '학습 로드맵' : 'Learning Roadmap'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="about-stats-bar">
        <div className="container">
          <div className="about-stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="about-stat-item">
                <i className={`fa-solid ${stat.icon} about-stat-icon`} />
                <div className="about-stat-number">{stat.number}</div>
                <div className="about-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="about-features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '무엇을 배울 수 있나요?' : 'What Can You Learn?'}</h2>
            <p className="section-subtitle">
              {isKo
                ? 'Claude AI 생태계의 핵심 영역을 모두 다루는 6가지 학습 트랙'
                : 'Six learning tracks covering all key areas of the Claude AI ecosystem'}
            </p>
          </div>
          <div className="about-features-grid">
            {features.map((feature, index) => (
              <div key={index} className="about-feature-card" style={{ '--card-accent': feature.color }}>
                <div className="about-feature-icon" style={{ background: feature.color }}>
                  <i className={`fa-solid ${feature.icon}`} />
                </div>
                <h3 className="about-feature-title">{feature.title}</h3>
                <p className="about-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values / Why Claude Master */}
      <section className="about-values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '왜 Claude Master인가요?' : 'Why Claude Master?'}</h2>
            <p className="section-subtitle">
              {isKo
                ? '더 나은 학습 경험을 위해 설계된 플랫폼'
                : 'A platform designed for a better learning experience'}
            </p>
          </div>
          <div className="about-values-grid">
            {values.map((value, i) => (
              <div key={i} className="about-value-card">
                <div className="about-value-icon">
                  <i className={`fa-solid ${value.icon}`} />
                </div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Preview */}
      <section className="about-paths-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '학습 경로' : 'Learning Paths'}</h2>
            <p className="section-subtitle">
              {isKo
                ? '목표에 맞는 학습 경로를 선택하세요'
                : 'Choose a learning path that fits your goals'}
            </p>
          </div>
          <div className="about-paths-grid">
            {LEARNING_PATHS.map((path) => (
              <Link key={path.id} to={path.path} className="about-path-card">
                <div className="about-path-icon" style={{ background: path.color }}>
                  <i className={`fa-solid ${path.icon}`} />
                </div>
                <div className="about-path-info">
                  <h3 className="about-path-name">{isKo ? path.nameKo : path.nameEn}</h3>
                  <p className="about-path-desc">{isKo ? path.descKo : path.descEn}</p>
                  <div className="about-path-topics">
                    {path.topics.slice(0, 4).map((topic, i) => (
                      <span key={i} className="about-path-topic">{topic}</span>
                    ))}
                  </div>
                </div>
                <i className="fa-solid fa-chevron-right about-path-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-tech-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '기술 스택' : 'Tech Stack'}</h2>
            <p className="section-subtitle">
              {isKo ? '최신 기술로 구축된 플랫폼' : 'Built with modern technologies'}
            </p>
          </div>
          <div className="about-tech-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="about-tech-card">
                <i className={`${tech.type === 'fab' ? 'fa-brands' : 'fa-solid'} ${tech.icon}`} style={{ color: tech.color }} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">
              {isKo ? '지금 바로 시작하세요' : 'Get Started Now'}
            </h2>
            <p className="about-cta-desc">
              {isKo
                ? 'Claude Master와 함께 Claude AI의 모든 기능을 마스터하세요.'
                : 'Master all Claude AI features with Claude Master.'}
            </p>
            <div className="about-cta-actions">
              <Link to="/claude-code" className="btn btn-primary-large">
                {isKo ? '무료로 시작하기' : 'Start for Free'}
              </Link>
              <Link to="/community/board" className="btn btn-ghost-light">
                {isKo ? '커뮤니티 참여' : 'Join Community'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
