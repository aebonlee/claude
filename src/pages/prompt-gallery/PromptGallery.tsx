import { useState, useMemo } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const categories = [
  { key: 'all', label: '전체', labelEn: 'All' },
  { key: 'coding', label: '코딩', labelEn: 'Coding' },
  { key: 'writing', label: '글쓰기', labelEn: 'Writing' },
  { key: 'analysis', label: '분석', labelEn: 'Analysis' },
  { key: 'creative', label: '크리에이티브', labelEn: 'Creative' },
  { key: 'business', label: '비즈니스', labelEn: 'Business' },
];

const galleryItems = [
  {
    category: 'coding',
    title: '코드 리뷰 요청',
    titleEn: 'Code Review Request',
    desc: '코드의 품질, 보안, 성능을 종합적으로 리뷰합니다.',
    descEn: 'Comprehensively review code for quality, security, and performance.',
    prompt: '다음 코드를 리뷰해주세요. 아래 관점에서 분석해주세요:\n1. 코드 품질 및 가독성\n2. 잠재적 버그\n3. 보안 취약점\n4. 성능 개선점\n5. 리팩토링 제안\n\n```\n[코드를 여기에 붙여넣기]\n```',
    promptEn: 'Please review the following code. Analyze from these perspectives:\n1. Code quality and readability\n2. Potential bugs\n3. Security vulnerabilities\n4. Performance improvements\n5. Refactoring suggestions\n\n```\n[Paste your code here]\n```',
  },
  {
    category: 'coding',
    title: '디버깅 도우미',
    titleEn: 'Debugging Helper',
    desc: '에러 메시지를 분석하고 해결 방법을 제시합니다.',
    descEn: 'Analyze error messages and suggest solutions.',
    prompt: '다음 에러를 분석하고 해결 방법을 알려주세요:\n\n<error>\n[에러 메시지]\n</error>\n\n<context>\n- 언어/프레임워크: [예: React, Node.js]\n- 발생 상황: [어떤 작업 중 발생했는지]\n</context>',
    promptEn: 'Please analyze the following error and suggest solutions:\n\n<error>\n[Error message]\n</error>\n\n<context>\n- Language/Framework: [e.g., React, Node.js]\n- Situation: [What you were doing when it occurred]\n</context>',
  },
  {
    category: 'coding',
    title: 'API 엔드포인트 설계',
    titleEn: 'API Endpoint Design',
    desc: 'RESTful API 엔드포인트를 설계합니다.',
    descEn: 'Design RESTful API endpoints.',
    prompt: '다음 요구사항에 맞는 RESTful API를 설계해주세요:\n\n<requirements>\n- 리소스: [예: 사용자, 게시글]\n- 필요한 기능: CRUD + [추가 기능]\n- 인증 방식: JWT\n</requirements>\n\n각 엔드포인트에 대해 URL, 메서드, 요청/응답 스키마를 포함해주세요.',
    promptEn: 'Please design a RESTful API for the following requirements:\n\n<requirements>\n- Resource: [e.g., Users, Posts]\n- Required features: CRUD + [additional features]\n- Authentication: JWT\n</requirements>\n\nInclude URL, method, request/response schema for each endpoint.',
  },
  {
    category: 'writing',
    title: '기술 블로그 작성',
    titleEn: 'Technical Blog Writing',
    desc: '기술 블로그 포스트를 구조적으로 작성합니다.',
    descEn: 'Write a structured technical blog post.',
    prompt: '다음 주제로 기술 블로그 포스트를 작성해주세요:\n\n주제: [주제]\n대상 독자: [예: 주니어 개발자]\n길이: 약 2000자\n\n구조:\n1. 흥미로운 도입부\n2. 핵심 개념 설명\n3. 실제 코드 예제\n4. 실무 적용 팁\n5. 정리 및 다음 단계',
    promptEn: 'Please write a technical blog post on the following topic:\n\nTopic: [topic]\nTarget audience: [e.g., junior developers]\nLength: approximately 2000 words\n\nStructure:\n1. Engaging introduction\n2. Core concept explanation\n3. Practical code examples\n4. Real-world application tips\n5. Summary and next steps',
  },
  {
    category: 'writing',
    title: '이메일 작성',
    titleEn: 'Email Drafting',
    desc: '비즈니스 이메일을 효과적으로 작성합니다.',
    descEn: 'Draft effective business emails.',
    prompt: '다음 상황에 맞는 비즈니스 이메일을 작성해주세요:\n\n<situation>\n- 목적: [예: 프로젝트 진행 상황 공유]\n- 수신자: [예: 팀 매니저]\n- 톤: [예: 공손하지만 간결하게]\n- 포함할 내용: [핵심 포인트 나열]\n</situation>',
    promptEn: 'Please draft a business email for the following situation:\n\n<situation>\n- Purpose: [e.g., Project status update]\n- Recipient: [e.g., Team manager]\n- Tone: [e.g., Polite but concise]\n- Include: [List key points]\n</situation>',
  },
  {
    category: 'analysis',
    title: '데이터 분석 보고서',
    titleEn: 'Data Analysis Report',
    desc: '데이터를 분석하고 인사이트를 도출합니다.',
    descEn: 'Analyze data and derive insights.',
    prompt: '다음 데이터를 분석하고 보고서를 작성해주세요:\n\n<data>\n[데이터를 여기에 붙여넣기]\n</data>\n\n분석 요구사항:\n1. 주요 트렌드 파악\n2. 이상치 탐지\n3. 핵심 인사이트 3가지\n4. 개선을 위한 제안사항\n5. 시각화 추천 (차트 유형)',
    promptEn: 'Please analyze the following data and write a report:\n\n<data>\n[Paste your data here]\n</data>\n\nAnalysis requirements:\n1. Identify major trends\n2. Detect outliers\n3. Three key insights\n4. Recommendations for improvement\n5. Visualization recommendations (chart types)',
  },
  {
    category: 'analysis',
    title: '경쟁사 분석',
    titleEn: 'Competitor Analysis',
    desc: '경쟁사를 체계적으로 분석합니다.',
    descEn: 'Systematically analyze competitors.',
    prompt: '다음 기업들의 경쟁 분석을 수행해주세요:\n\n<companies>\n- 우리 회사: [회사명] - [주요 제품]\n- 경쟁사 1: [회사명]\n- 경쟁사 2: [회사명]\n</companies>\n\n분석 항목:\n1. 제품/서비스 비교\n2. 가격 전략\n3. 시장 포지셔닝\n4. 강점/약점 (SWOT)\n5. 차별화 기회',
    promptEn: 'Please conduct a competitive analysis for the following companies:\n\n<companies>\n- Our company: [Name] - [Main product]\n- Competitor 1: [Name]\n- Competitor 2: [Name]\n</companies>\n\nAnalysis areas:\n1. Product/service comparison\n2. Pricing strategy\n3. Market positioning\n4. Strengths/Weaknesses (SWOT)\n5. Differentiation opportunities',
  },
  {
    category: 'creative',
    title: '마케팅 카피 생성',
    titleEn: 'Marketing Copy Generator',
    desc: '다양한 채널에 맞는 마케팅 카피를 생성합니다.',
    descEn: 'Generate marketing copy for various channels.',
    prompt: '다음 제품에 대한 마케팅 카피를 작성해주세요:\n\n<product>\n- 제품명: [제품명]\n- 타겟: [대상 고객]\n- USP: [핵심 차별점]\n- 톤: [예: 전문적, 친근한, 유머러스]\n</product>\n\n각 채널별로 작성:\n1. 소셜 미디어 (Instagram, 280자 이내)\n2. 이메일 제목 + 본문 (3줄)\n3. 랜딩 페이지 헤드라인 + 서브카피\n4. 검색 광고 (Google Ads, 90자 이내)',
    promptEn: 'Please write marketing copy for the following product:\n\n<product>\n- Product name: [name]\n- Target: [target customer]\n- USP: [key differentiator]\n- Tone: [e.g., professional, friendly, humorous]\n</product>\n\nWrite for each channel:\n1. Social media (Instagram, under 280 chars)\n2. Email subject + body (3 lines)\n3. Landing page headline + subcopy\n4. Search ad (Google Ads, under 90 chars)',
  },
  {
    category: 'creative',
    title: '스토리 아이디어 생성',
    titleEn: 'Story Idea Generator',
    desc: '창작 스토리 아이디어를 생성합니다.',
    descEn: 'Generate creative story ideas.',
    prompt: '다음 조건으로 독창적인 스토리 아이디어 3개를 만들어주세요:\n\n<constraints>\n- 장르: [예: SF, 판타지, 스릴러]\n- 배경: [예: 근미래, 중세, 현대 도시]\n- 분위기: [예: 긴장감, 따뜻함, 미스터리]\n- 테마: [예: 성장, 사랑, 정의]\n</constraints>\n\n각 아이디어에 포함할 것:\n1. 한 줄 로그라인\n2. 주인공 설명\n3. 핵심 갈등\n4. 플롯 개요 (3-4줄)',
    promptEn: 'Please create 3 original story ideas with the following conditions:\n\n<constraints>\n- Genre: [e.g., Sci-fi, Fantasy, Thriller]\n- Setting: [e.g., Near future, Medieval, Modern city]\n- Mood: [e.g., Tension, Warmth, Mystery]\n- Theme: [e.g., Growth, Love, Justice]\n</constraints>\n\nInclude for each idea:\n1. One-line logline\n2. Protagonist description\n3. Core conflict\n4. Plot outline (3-4 lines)',
  },
  {
    category: 'business',
    title: '회의록 정리',
    titleEn: 'Meeting Notes Summary',
    desc: '회의 내용을 체계적으로 정리합니다.',
    descEn: 'Systematically organize meeting notes.',
    prompt: '다음 회의 내용을 정리해주세요:\n\n<meeting_notes>\n[회의 내용을 여기에 붙여넣기]\n</meeting_notes>\n\n정리 형식:\n1. 회의 개요 (일시, 참석자, 목적)\n2. 핵심 논의 사항 (요약)\n3. 결정 사항\n4. Action Items (담당자, 기한 포함)\n5. 다음 회의 안건',
    promptEn: 'Please organize the following meeting notes:\n\n<meeting_notes>\n[Paste meeting notes here]\n</meeting_notes>\n\nFormat:\n1. Meeting overview (date, attendees, purpose)\n2. Key discussion points (summary)\n3. Decisions made\n4. Action items (with owner and deadline)\n5. Next meeting agenda',
  },
  {
    category: 'business',
    title: '프로젝트 계획서',
    titleEn: 'Project Plan',
    desc: '프로젝트 계획서를 작성합니다.',
    descEn: 'Create a project plan document.',
    prompt: '다음 프로젝트의 계획서를 작성해주세요:\n\n<project>\n- 프로젝트명: [프로젝트명]\n- 목표: [주요 목표]\n- 기간: [예: 3개월]\n- 팀 규모: [예: 5명]\n- 예산: [예: 5천만원]\n</project>\n\n포함할 내용:\n1. 프로젝트 개요\n2. 마일스톤 및 일정\n3. 역할과 책임\n4. 리스크 분석\n5. 성공 지표 (KPI)',
    promptEn: 'Please create a project plan for the following:\n\n<project>\n- Project name: [name]\n- Goal: [main objective]\n- Duration: [e.g., 3 months]\n- Team size: [e.g., 5 members]\n- Budget: [e.g., $50,000]\n</project>\n\nInclude:\n1. Project overview\n2. Milestones and timeline\n3. Roles and responsibilities\n4. Risk analysis\n5. Success metrics (KPIs)',
  },
  {
    category: 'analysis',
    title: '문서 요약',
    titleEn: 'Document Summary',
    desc: '긴 문서를 핵심 내용 중심으로 요약합니다.',
    descEn: 'Summarize long documents focusing on key content.',
    prompt: '다음 문서를 요약해주세요:\n\n<document>\n[문서 내용을 여기에 붙여넣기]\n</document>\n\n요약 형식:\n1. 한 줄 요약 (핵심 메시지)\n2. 주요 포인트 (3-5개 불릿)\n3. 세부 요약 (300자 이내)\n4. 키워드 태그 (5개)\n5. 후속 조치 필요 사항',
    promptEn: 'Please summarize the following document:\n\n<document>\n[Paste document content here]\n</document>\n\nSummary format:\n1. One-line summary (core message)\n2. Key points (3-5 bullets)\n3. Detailed summary (under 300 words)\n4. Keyword tags (5)\n5. Follow-up action items',
  },
];

export default function PromptGallery() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="content-page">
      <SEOHead
        title={isKo ? '프롬프트 갤러리' : 'Prompt Gallery'}
        description={isKo ? '바로 사용할 수 있는 프롬프트 템플릿 모음입니다.' : 'A collection of ready-to-use prompt templates.'}
        path="/prompt-gallery"
      />
      <div className="container">
        <div className="page-header" style={{ paddingTop: 0, borderBottom: 'none' }}>
          <h1>{isKo ? '프롬프트 갤러리' : 'Prompt Gallery'}</h1>
          <p className="page-desc">
            {isKo
              ? '다양한 카테고리의 프롬프트 템플릿을 활용해보세요. 클릭하여 전체 프롬프트를 확인하고 복사할 수 있습니다.'
              : 'Explore prompt templates across various categories. Click to view the full prompt and copy it.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="tabs" style={{ marginBottom: '32px' }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`tab${activeCategory === cat.key ? ' active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {isKo ? cat.label : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="gallery-card"
              onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
            >
              <div className="gallery-card-category">
                {isKo
                  ? categories.find((c) => c.key === item.category)?.label
                  : categories.find((c) => c.key === item.category)?.labelEn}
              </div>
              <h3 className="gallery-card-title">{isKo ? item.title : item.titleEn}</h3>
              <p className="gallery-card-desc">{isKo ? item.desc : item.descEn}</p>
              <div className="gallery-card-prompt">
                {expandedCard === idx
                  ? (isKo ? item.prompt : item.promptEn)
                  : (isKo ? item.prompt : item.promptEn).slice(0, 120) + '...'}
              </div>
              {expandedCard === idx && (
                <button
                  className="btn btn-primary btn-sm"
                  style={{ marginTop: '12px', width: '100%' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCopy(isKo ? item.prompt : item.promptEn);
                  }}
                >
                  <i className="fa-solid fa-copy" />
                  {isKo ? '프롬프트 복사' : 'Copy Prompt'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
