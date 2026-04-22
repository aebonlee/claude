import{j as n}from"./markdown-Bb6HBFF6.js";import{b as i}from"./vendor-Cbm2kc8j.js";import{u as f}from"./index-BAXdJAJd.js";import{S as E}from"./SEOHead-DfBpSINb.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const l=[{key:"all",label:"전체",labelEn:"All"},{key:"coding",label:"코딩",labelEn:"Coding"},{key:"writing",label:"글쓰기",labelEn:"Writing"},{key:"analysis",label:"분석",labelEn:"Analysis"},{key:"creative",label:"크리에이티브",labelEn:"Creative"},{key:"business",label:"비즈니스",labelEn:"Business"}],d=[{category:"coding",title:"코드 리뷰 요청",titleEn:"Code Review Request",desc:"코드의 품질, 보안, 성능을 종합적으로 리뷰합니다.",descEn:"Comprehensively review code for quality, security, and performance.",prompt:`다음 코드를 리뷰해주세요. 아래 관점에서 분석해주세요:
1. 코드 품질 및 가독성
2. 잠재적 버그
3. 보안 취약점
4. 성능 개선점
5. 리팩토링 제안

\`\`\`
[코드를 여기에 붙여넣기]
\`\`\``,promptEn:`Please review the following code. Analyze from these perspectives:
1. Code quality and readability
2. Potential bugs
3. Security vulnerabilities
4. Performance improvements
5. Refactoring suggestions

\`\`\`
[Paste your code here]
\`\`\``},{category:"coding",title:"디버깅 도우미",titleEn:"Debugging Helper",desc:"에러 메시지를 분석하고 해결 방법을 제시합니다.",descEn:"Analyze error messages and suggest solutions.",prompt:`다음 에러를 분석하고 해결 방법을 알려주세요:

<error>
[에러 메시지]
</error>

<context>
- 언어/프레임워크: [예: React, Node.js]
- 발생 상황: [어떤 작업 중 발생했는지]
</context>`,promptEn:`Please analyze the following error and suggest solutions:

<error>
[Error message]
</error>

<context>
- Language/Framework: [e.g., React, Node.js]
- Situation: [What you were doing when it occurred]
</context>`},{category:"coding",title:"API 엔드포인트 설계",titleEn:"API Endpoint Design",desc:"RESTful API 엔드포인트를 설계합니다.",descEn:"Design RESTful API endpoints.",prompt:`다음 요구사항에 맞는 RESTful API를 설계해주세요:

<requirements>
- 리소스: [예: 사용자, 게시글]
- 필요한 기능: CRUD + [추가 기능]
- 인증 방식: JWT
</requirements>

각 엔드포인트에 대해 URL, 메서드, 요청/응답 스키마를 포함해주세요.`,promptEn:`Please design a RESTful API for the following requirements:

<requirements>
- Resource: [e.g., Users, Posts]
- Required features: CRUD + [additional features]
- Authentication: JWT
</requirements>

Include URL, method, request/response schema for each endpoint.`},{category:"writing",title:"기술 블로그 작성",titleEn:"Technical Blog Writing",desc:"기술 블로그 포스트를 구조적으로 작성합니다.",descEn:"Write a structured technical blog post.",prompt:`다음 주제로 기술 블로그 포스트를 작성해주세요:

주제: [주제]
대상 독자: [예: 주니어 개발자]
길이: 약 2000자

구조:
1. 흥미로운 도입부
2. 핵심 개념 설명
3. 실제 코드 예제
4. 실무 적용 팁
5. 정리 및 다음 단계`,promptEn:`Please write a technical blog post on the following topic:

Topic: [topic]
Target audience: [e.g., junior developers]
Length: approximately 2000 words

Structure:
1. Engaging introduction
2. Core concept explanation
3. Practical code examples
4. Real-world application tips
5. Summary and next steps`},{category:"writing",title:"이메일 작성",titleEn:"Email Drafting",desc:"비즈니스 이메일을 효과적으로 작성합니다.",descEn:"Draft effective business emails.",prompt:`다음 상황에 맞는 비즈니스 이메일을 작성해주세요:

<situation>
- 목적: [예: 프로젝트 진행 상황 공유]
- 수신자: [예: 팀 매니저]
- 톤: [예: 공손하지만 간결하게]
- 포함할 내용: [핵심 포인트 나열]
</situation>`,promptEn:`Please draft a business email for the following situation:

<situation>
- Purpose: [e.g., Project status update]
- Recipient: [e.g., Team manager]
- Tone: [e.g., Polite but concise]
- Include: [List key points]
</situation>`},{category:"analysis",title:"데이터 분석 보고서",titleEn:"Data Analysis Report",desc:"데이터를 분석하고 인사이트를 도출합니다.",descEn:"Analyze data and derive insights.",prompt:`다음 데이터를 분석하고 보고서를 작성해주세요:

<data>
[데이터를 여기에 붙여넣기]
</data>

분석 요구사항:
1. 주요 트렌드 파악
2. 이상치 탐지
3. 핵심 인사이트 3가지
4. 개선을 위한 제안사항
5. 시각화 추천 (차트 유형)`,promptEn:`Please analyze the following data and write a report:

<data>
[Paste your data here]
</data>

Analysis requirements:
1. Identify major trends
2. Detect outliers
3. Three key insights
4. Recommendations for improvement
5. Visualization recommendations (chart types)`},{category:"analysis",title:"경쟁사 분석",titleEn:"Competitor Analysis",desc:"경쟁사를 체계적으로 분석합니다.",descEn:"Systematically analyze competitors.",prompt:`다음 기업들의 경쟁 분석을 수행해주세요:

<companies>
- 우리 회사: [회사명] - [주요 제품]
- 경쟁사 1: [회사명]
- 경쟁사 2: [회사명]
</companies>

분석 항목:
1. 제품/서비스 비교
2. 가격 전략
3. 시장 포지셔닝
4. 강점/약점 (SWOT)
5. 차별화 기회`,promptEn:`Please conduct a competitive analysis for the following companies:

<companies>
- Our company: [Name] - [Main product]
- Competitor 1: [Name]
- Competitor 2: [Name]
</companies>

Analysis areas:
1. Product/service comparison
2. Pricing strategy
3. Market positioning
4. Strengths/Weaknesses (SWOT)
5. Differentiation opportunities`},{category:"creative",title:"마케팅 카피 생성",titleEn:"Marketing Copy Generator",desc:"다양한 채널에 맞는 마케팅 카피를 생성합니다.",descEn:"Generate marketing copy for various channels.",prompt:`다음 제품에 대한 마케팅 카피를 작성해주세요:

<product>
- 제품명: [제품명]
- 타겟: [대상 고객]
- USP: [핵심 차별점]
- 톤: [예: 전문적, 친근한, 유머러스]
</product>

각 채널별로 작성:
1. 소셜 미디어 (Instagram, 280자 이내)
2. 이메일 제목 + 본문 (3줄)
3. 랜딩 페이지 헤드라인 + 서브카피
4. 검색 광고 (Google Ads, 90자 이내)`,promptEn:`Please write marketing copy for the following product:

<product>
- Product name: [name]
- Target: [target customer]
- USP: [key differentiator]
- Tone: [e.g., professional, friendly, humorous]
</product>

Write for each channel:
1. Social media (Instagram, under 280 chars)
2. Email subject + body (3 lines)
3. Landing page headline + subcopy
4. Search ad (Google Ads, under 90 chars)`},{category:"creative",title:"스토리 아이디어 생성",titleEn:"Story Idea Generator",desc:"창작 스토리 아이디어를 생성합니다.",descEn:"Generate creative story ideas.",prompt:`다음 조건으로 독창적인 스토리 아이디어 3개를 만들어주세요:

<constraints>
- 장르: [예: SF, 판타지, 스릴러]
- 배경: [예: 근미래, 중세, 현대 도시]
- 분위기: [예: 긴장감, 따뜻함, 미스터리]
- 테마: [예: 성장, 사랑, 정의]
</constraints>

각 아이디어에 포함할 것:
1. 한 줄 로그라인
2. 주인공 설명
3. 핵심 갈등
4. 플롯 개요 (3-4줄)`,promptEn:`Please create 3 original story ideas with the following conditions:

<constraints>
- Genre: [e.g., Sci-fi, Fantasy, Thriller]
- Setting: [e.g., Near future, Medieval, Modern city]
- Mood: [e.g., Tension, Warmth, Mystery]
- Theme: [e.g., Growth, Love, Justice]
</constraints>

Include for each idea:
1. One-line logline
2. Protagonist description
3. Core conflict
4. Plot outline (3-4 lines)`},{category:"business",title:"회의록 정리",titleEn:"Meeting Notes Summary",desc:"회의 내용을 체계적으로 정리합니다.",descEn:"Systematically organize meeting notes.",prompt:`다음 회의 내용을 정리해주세요:

<meeting_notes>
[회의 내용을 여기에 붙여넣기]
</meeting_notes>

정리 형식:
1. 회의 개요 (일시, 참석자, 목적)
2. 핵심 논의 사항 (요약)
3. 결정 사항
4. Action Items (담당자, 기한 포함)
5. 다음 회의 안건`,promptEn:`Please organize the following meeting notes:

<meeting_notes>
[Paste meeting notes here]
</meeting_notes>

Format:
1. Meeting overview (date, attendees, purpose)
2. Key discussion points (summary)
3. Decisions made
4. Action items (with owner and deadline)
5. Next meeting agenda`},{category:"business",title:"프로젝트 계획서",titleEn:"Project Plan",desc:"프로젝트 계획서를 작성합니다.",descEn:"Create a project plan document.",prompt:`다음 프로젝트의 계획서를 작성해주세요:

<project>
- 프로젝트명: [프로젝트명]
- 목표: [주요 목표]
- 기간: [예: 3개월]
- 팀 규모: [예: 5명]
- 예산: [예: 5천만원]
</project>

포함할 내용:
1. 프로젝트 개요
2. 마일스톤 및 일정
3. 역할과 책임
4. 리스크 분석
5. 성공 지표 (KPI)`,promptEn:`Please create a project plan for the following:

<project>
- Project name: [name]
- Goal: [main objective]
- Duration: [e.g., 3 months]
- Team size: [e.g., 5 members]
- Budget: [e.g., $50,000]
</project>

Include:
1. Project overview
2. Milestones and timeline
3. Roles and responsibilities
4. Risk analysis
5. Success metrics (KPIs)`},{category:"analysis",title:"문서 요약",titleEn:"Document Summary",desc:"긴 문서를 핵심 내용 중심으로 요약합니다.",descEn:"Summarize long documents focusing on key content.",prompt:`다음 문서를 요약해주세요:

<document>
[문서 내용을 여기에 붙여넣기]
</document>

요약 형식:
1. 한 줄 요약 (핵심 메시지)
2. 주요 포인트 (3-5개 불릿)
3. 세부 요약 (300자 이내)
4. 키워드 태그 (5개)
5. 후속 조치 필요 사항`,promptEn:`Please summarize the following document:

<document>
[Paste document content here]
</document>

Summary format:
1. One-line summary (core message)
2. Key points (3-5 bullets)
3. Detailed summary (under 300 words)
4. Keyword tags (5)
5. Follow-up action items`}];function S(){const{language:m}=f(),t=m==="ko",[r,g]=i.useState("all"),[s,u]=i.useState(null),y=i.useMemo(()=>r==="all"?d:d.filter(e=>e.category===r),[r]),h=e=>{navigator.clipboard.writeText(e)};return n.jsxs("div",{className:"content-page",children:[n.jsx(E,{title:t?"프롬프트 갤러리":"Prompt Gallery",description:t?"바로 사용할 수 있는 프롬프트 템플릿 모음입니다.":"A collection of ready-to-use prompt templates.",path:"/prompt-gallery"}),n.jsxs("div",{className:"container",children:[n.jsxs("div",{className:"page-header",style:{paddingTop:0,borderBottom:"none"},children:[n.jsx("h1",{children:t?"프롬프트 갤러리":"Prompt Gallery"}),n.jsx("p",{className:"page-desc",children:t?"다양한 카테고리의 프롬프트 템플릿을 활용해보세요. 클릭하여 전체 프롬프트를 확인하고 복사할 수 있습니다.":"Explore prompt templates across various categories. Click to view the full prompt and copy it."})]}),n.jsx("div",{className:"tabs",style:{marginBottom:"32px"},children:l.map(e=>n.jsx("button",{className:`tab${r===e.key?" active":""}`,onClick:()=>g(e.key),children:t?e.label:e.labelEn},e.key))}),n.jsx("div",{className:"gallery-grid",children:y.map((e,o)=>{var c,p;return n.jsxs("div",{className:"gallery-card",onClick:()=>u(s===o?null:o),children:[n.jsx("div",{className:"gallery-card-category",children:t?(c=l.find(a=>a.key===e.category))==null?void 0:c.label:(p=l.find(a=>a.key===e.category))==null?void 0:p.labelEn}),n.jsx("h3",{className:"gallery-card-title",children:t?e.title:e.titleEn}),n.jsx("p",{className:"gallery-card-desc",children:t?e.desc:e.descEn}),n.jsx("div",{className:"gallery-card-prompt",children:s===o?t?e.prompt:e.promptEn:(t?e.prompt:e.promptEn).slice(0,120)+"..."}),s===o&&n.jsxs("button",{className:"btn btn-primary btn-sm",style:{marginTop:"12px",width:"100%"},onClick:a=>{a.stopPropagation(),h(t?e.prompt:e.promptEn)},children:[n.jsx("i",{className:"fa-solid fa-copy"}),t?"프롬프트 복사":"Copy Prompt"]})]},o)})})]})]})}export{S as default};
