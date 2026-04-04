import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

export default function AboutPage() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const team = [
    {
      name: 'DreamIT Biz',
      role: isKo ? '기획 & 운영' : 'Planning & Operations',
      avatar: 'D',
      color: '#1B3A6B',
      desc: isKo
        ? 'Claude AI 생태계의 한국어 학습 자료 부족을 해결하고자 프로젝트를 기획했습니다.'
        : 'Planned this project to address the lack of Korean learning materials for the Claude AI ecosystem.',
    },
    {
      name: 'Claude Opus 4',
      role: isKo ? 'AI 개발 파트너' : 'AI Dev Partner',
      avatar: 'C',
      color: '#D97706',
      desc: isKo
        ? 'Anthropic의 최고 성능 모델. 코드 생성, 콘텐츠 작성, 아키텍처 설계를 담당했습니다.'
        : "Anthropic's most capable model. Handled code generation, content writing, and architecture design.",
    },
  ];

  const timeline = [
    {
      date: '2025.04',
      title: isKo ? '프로젝트 시작' : 'Project Started',
      desc: isKo
        ? 'Claude AI 학습 플랫폼 기획 및 기술 스택 결정'
        : 'Claude AI learning platform planning and tech stack decisions',
      icon: 'fa-lightbulb',
    },
    {
      date: '2025.04',
      title: isKo ? 'v1.0 출시' : 'v1.0 Launch',
      desc: isKo
        ? '7개 가이드, 50+ 토픽, 다국어 지원, 다크모드 포함 첫 릴리스'
        : 'First release with 7 guides, 50+ topics, i18n, and dark mode',
      icon: 'fa-rocket',
    },
    {
      date: isKo ? '진행 중' : 'Ongoing',
      title: isKo ? '지속 업데이트' : 'Continuous Updates',
      desc: isKo
        ? 'Claude의 새 기능, API 변경사항, 커뮤니티 피드백을 반영한 지속적 개선'
        : 'Continuous improvement reflecting new Claude features, API changes, and community feedback',
      icon: 'fa-arrows-rotate',
    },
  ];

  const techStack = [
    { name: 'React 19', desc: 'UI Framework', icon: 'fa-react', color: '#61DAFB', type: 'fab' },
    { name: 'Vite 6', desc: 'Build Tool', icon: 'fa-bolt', color: '#646CFF', type: 'fas' },
    { name: 'Supabase', desc: 'Auth & DB', icon: 'fa-database', color: '#3ECF8E', type: 'fas' },
    { name: 'GitHub Pages', desc: 'Hosting', icon: 'fa-github', color: '#fff', type: 'fab' },
    { name: 'GitHub Actions', desc: 'CI/CD', icon: 'fa-gear', color: '#2088FF', type: 'fas' },
    { name: 'Pure CSS', desc: 'Styling', icon: 'fa-palette', color: '#FF6F00', type: 'fas' },
  ];

  const faqs = [
    {
      q: isKo ? '이 플랫폼은 무료인가요?' : 'Is this platform free?',
      a: isKo
        ? '네, 모든 학습 콘텐츠는 무료로 제공됩니다. 회원가입 없이도 대부분의 가이드를 열람할 수 있습니다.'
        : 'Yes, all learning content is provided for free. You can access most guides without signing up.',
    },
    {
      q: isKo ? 'Anthropic 공식 사이트인가요?' : 'Is this an official Anthropic site?',
      a: isKo
        ? '아닙니다. Claude Master는 커뮤니티 기반 학습 플랫폼으로, Anthropic과 직접적인 관련이 없습니다. 공식 문서는 docs.anthropic.com을 참고하세요.'
        : 'No. Claude Master is a community-driven learning platform, not affiliated with Anthropic. For official docs, visit docs.anthropic.com.',
    },
    {
      q: isKo ? '콘텐츠는 얼마나 자주 업데이트되나요?' : 'How often is content updated?',
      a: isKo
        ? 'Claude의 새 기능 출시나 API 변경 시 가능한 빠르게 업데이트합니다. 커뮤니티 피드백도 반영합니다.'
        : 'We update as quickly as possible when Claude releases new features or API changes. Community feedback is also incorporated.',
    },
    {
      q: isKo ? '기여하거나 피드백을 보내려면?' : 'How can I contribute or give feedback?',
      a: isKo
        ? 'GitHub 저장소에서 이슈를 등록하거나, 커뮤니티 게시판에 글을 남겨주세요.'
        : 'Open an issue on our GitHub repository or leave a post on the community board.',
    },
  ];

  return (
    <div className="about-page">
      <SEOHead
        title={isKo ? '소개' : 'About'}
        description={isKo ? 'Claude Master 플랫폼 소개 - 비전, 팀, 기술 스택' : 'About Claude Master - vision, team, tech stack'}
        path="/about"
      />

      {/* Hero */}
      <section className="about-hero-section">
        <div className="about-hero-bg" />
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-badge">
              <i className="fa-solid fa-circle-info" />
              {isKo ? '플랫폼 소개' : 'About Us'}
            </div>
            <h1 className="about-hero-title">
              {isKo ? 'Claude AI를 더 쉽게,' : 'Making Claude AI'}
              <br />
              <span className="about-hero-highlight">
                {isKo ? '더 깊게 배울 수 있도록' : 'easier and deeper to learn'}
              </span>
            </h1>
            <p className="about-hero-desc">
              {isKo
                ? 'Claude Master는 한국어 사용자를 위한 Claude AI 종합 학습 플랫폼입니다. 공식 문서의 방대한 정보를 체계적으로 정리하고, 실전 예제와 함께 제공하여 누구나 Claude를 효과적으로 활용할 수 있도록 돕습니다.'
                : 'Claude Master is a comprehensive Claude AI learning platform for Korean-speaking users. We organize the vast official documentation systematically and provide practical examples so anyone can use Claude effectively.'}
            </p>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="about-vision-section">
        <div className="container">
          <div className="about-vision-grid">
            <div className="about-vision-card">
              <div className="about-vision-icon">
                <i className="fa-solid fa-bullseye" />
              </div>
              <h3>{isKo ? '미션' : 'Mission'}</h3>
              <p>
                {isKo
                  ? 'Claude AI의 모든 기능을 한국어로 체계적으로 학습할 수 있는 최고의 플랫폼을 만듭니다.'
                  : 'Build the best platform for systematically learning all Claude AI features in Korean.'}
              </p>
            </div>
            <div className="about-vision-card">
              <div className="about-vision-icon">
                <i className="fa-solid fa-eye" />
              </div>
              <h3>{isKo ? '비전' : 'Vision'}</h3>
              <p>
                {isKo
                  ? 'AI 시대에 누구나 Claude를 자유롭게 활용하여 생산성과 창의성을 극대화하는 세상을 꿈꿉니다.'
                  : 'We envision a world where anyone can freely leverage Claude to maximize productivity and creativity in the AI era.'}
              </p>
            </div>
            <div className="about-vision-card">
              <div className="about-vision-icon">
                <i className="fa-solid fa-heart" />
              </div>
              <h3>{isKo ? '가치' : 'Values'}</h3>
              <p>
                {isKo
                  ? '정확한 정보, 실전 중심의 학습, 커뮤니티와의 소통, 그리고 최신성을 핵심 가치로 삼습니다.'
                  : 'Accurate information, practice-oriented learning, community engagement, and staying current are our core values.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '만든 사람들' : 'The Team'}</h2>
            <p className="section-subtitle">
              {isKo ? '사람과 AI의 협업으로 만들어진 플랫폼' : 'A platform built through human-AI collaboration'}
            </p>
          </div>
          <div className="about-team-grid">
            {team.map((member, i) => (
              <div key={i} className="about-team-card">
                <div className="about-team-avatar" style={{ background: member.color }}>
                  {member.avatar}
                </div>
                <h3 className="about-team-name">{member.name}</h3>
                <span className="about-team-role">{member.role}</span>
                <p className="about-team-desc">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '개발 스토리' : 'Our Story'}</h2>
            <p className="section-subtitle">
              {isKo ? 'Claude Master의 여정' : 'The journey of Claude Master'}
            </p>
          </div>
          <div className="about-timeline">
            {timeline.map((item, i) => (
              <div key={i} className="about-timeline-item">
                <div className="about-timeline-dot">
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <div className="about-timeline-content">
                  <span className="about-timeline-date">{item.date}</span>
                  <h3 className="about-timeline-title">{item.title}</h3>
                  <p className="about-timeline-desc">{item.desc}</p>
                </div>
              </div>
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
          <div className="about-tech-detail-grid">
            {techStack.map((tech, i) => (
              <div key={i} className="about-tech-detail-card">
                <i className={`${tech.type === 'fab' ? 'fa-brands' : 'fa-solid'} ${tech.icon}`} style={{ color: tech.color }} />
                <div>
                  <div className="about-tech-name">{tech.name}</div>
                  <div className="about-tech-desc">{tech.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="about-faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? '자주 묻는 질문' : 'FAQ'}</h2>
          </div>
          <div className="about-faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="about-faq-item">
                <summary className="about-faq-question">
                  <i className="fa-solid fa-circle-question" />
                  {faq.q}
                  <i className="fa-solid fa-chevron-down about-faq-chevron" />
                </summary>
                <p className="about-faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Model Comparison Link */}
      <section className="about-vision-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{isKo ? 'Claude 모델 비교' : 'Claude Model Comparison'}</h2>
            <p className="section-subtitle">
              {isKo
                ? 'Claude 모델 패밀리의 특징과 용도를 한눈에 비교해보세요'
                : 'Compare features and use cases of the Claude model family at a glance'}
            </p>
          </div>
          <div className="about-model-cta">
            <div className="about-vision-card" style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
              <div className="about-vision-icon">
                <i className="fa-solid fa-chart-bar" />
              </div>
              <h3>{isKo ? 'Opus · Sonnet · Haiku' : 'Opus · Sonnet · Haiku'}</h3>
              <p>
                {isKo
                  ? '각 모델의 성능, 속도, 가격, 적합한 사용 사례를 비교하여 최적의 모델을 선택하세요.'
                  : 'Compare performance, speed, pricing, and use cases to choose the best model for your needs.'}
              </p>
              <Link to="/model-comparison" className="btn btn-primary-large" style={{ marginTop: 16 }}>
                <i className="fa-solid fa-arrow-right" />
                {isKo ? '모델 비교 보기' : 'View Model Comparison'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-content">
            <h2 className="about-cta-title">
              {isKo ? '함께 만들어가요' : "Let's Build Together"}
            </h2>
            <p className="about-cta-desc">
              {isKo
                ? '피드백, 오류 제보, 콘텐츠 제안 등 어떤 의견이든 환영합니다.'
                : 'We welcome any feedback, bug reports, or content suggestions.'}
            </p>
            <div className="about-cta-actions">
              <a
                href="https://github.com/aebonlee/claude"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary-large"
              >
                <i className="fa-brands fa-github" />
                GitHub
              </a>
              <Link to="/community/board" className="btn btn-ghost-light">
                <i className="fa-solid fa-comments" />
                {isKo ? '커뮤니티' : 'Community'}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
