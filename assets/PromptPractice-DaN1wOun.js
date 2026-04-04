import{j as e}from"./markdown-nDXzyGI7.js";import{b as o}from"./vendor-C9mfkM5v.js";import{u}from"./index-CePRMRKG.js";import{S as h}from"./SEOHead-DhJvCSIj.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const g=[{title:"기본 질문",titleEn:"Basic Question",desc:"간단한 질문 형식의 프롬프트",descEn:"A simple question-style prompt",prompt:`다음 개념을 초등학생도 이해할 수 있도록 쉽게 설명해주세요:

[개념: 인공지능]`,promptEn:`Please explain the following concept in a way that an elementary school student can understand:

[Concept: Artificial Intelligence]`},{title:"시스템 프롬프트 예시",titleEn:"System Prompt Example",desc:"역할과 규칙을 설정하는 시스템 프롬프트",descEn:"A system prompt that sets roles and rules",prompt:`[System]
당신은 10년 경력의 시니어 Python 개발자입니다.
- 코드는 항상 타입 힌트를 포함하세요
- PEP 8 스타일 가이드를 따르세요
- 설명은 한국어로 해주세요

[User]
FastAPI로 JWT 인증 미들웨어를 만들어주세요.`,promptEn:`[System]
You are a senior Python developer with 10 years of experience.
- Always include type hints in your code
- Follow the PEP 8 style guide
- Provide explanations in English

[User]
Please create a JWT authentication middleware using FastAPI.`},{title:"XML 태그 활용",titleEn:"XML Tags Example",desc:"XML 태그로 구조화된 프롬프트",descEn:"A prompt structured with XML tags",prompt:`<context>
우리 회사는 B2B SaaS 스타트업입니다.
주력 제품은 프로젝트 관리 도구입니다.
타겟 고객은 50~200명 규모의 중소기업입니다.
</context>

<task>
위 맥락을 바탕으로 랜딩 페이지 카피를 작성해주세요.
</task>

<format>
- 헤드라인 (10단어 이내)
- 서브헤드라인 (20단어 이내)
- CTA 버튼 텍스트
- 주요 특징 3가지 (각 1~2문장)
</format>`,promptEn:`<context>
Our company is a B2B SaaS startup.
Our main product is a project management tool.
Target customers are small-to-medium businesses with 50-200 employees.
</context>

<task>
Please write landing page copy based on the context above.
</task>

<format>
- Headline (under 10 words)
- Subheadline (under 20 words)
- CTA button text
- 3 key features (1-2 sentences each)
</format>`},{title:"Chain of Thought",titleEn:"Chain of Thought",desc:"단계별 사고를 유도하는 프롬프트",descEn:"A prompt that encourages step-by-step reasoning",prompt:`다음 문제를 단계별로 풀어주세요. 각 단계에서 추론 과정을 명확히 보여주세요.

문제: 한 가게에서 사과 3개에 5,000원, 귤 5개에 4,000원에 판매합니다.
사과 12개와 귤 15개를 사면 총 얼마인가요?

<thinking>
1단계: 사과 1개의 가격을 계산
2단계: 귤 1개의 가격을 계산
3단계: 사과 12개의 총 가격을 계산
4단계: 귤 15개의 총 가격을 계산
5단계: 전체 합계를 계산
</thinking>`,promptEn:`Please solve the following problem step by step. Show your reasoning process clearly at each step.

Problem: A store sells 3 apples for $5 and 5 oranges for $4.
How much would it cost to buy 12 apples and 15 oranges?

<thinking>
Step 1: Calculate the price of 1 apple
Step 2: Calculate the price of 1 orange
Step 3: Calculate the total price for 12 apples
Step 4: Calculate the total price for 15 oranges
Step 5: Calculate the grand total
</thinking>`},{title:"역할극 프롬프트",titleEn:"Role-play Prompt",desc:"특정 역할을 부여하는 프롬프트",descEn:"A prompt that assigns a specific role",prompt:`당신은 실리콘밸리의 유명 VC 파트너입니다.
투자 경험: 15년, 100개 이상의 스타트업 투자
전문 분야: AI/ML, SaaS, 핀테크

다음 스타트업 피치를 평가해주세요:

"우리는 AI 기반 코드 리뷰 자동화 도구를 만들고 있습니다.
현재 MAU 5,000명이며, MRR $50K입니다.
Seed 라운드로 $2M을 모집하려고 합니다."

평가 항목:
1. 시장 기회
2. 경쟁 우위
3. 팀/제품 리스크
4. 투자 매력도 (1-10점)
5. 핵심 질문 3가지`,promptEn:`You are a famous VC partner in Silicon Valley.
Investment experience: 15 years, 100+ startups
Expertise: AI/ML, SaaS, Fintech

Please evaluate the following startup pitch:

"We are building an AI-powered automated code review tool.
Current MAU is 5,000 with MRR of $50K.
We are raising $2M in a Seed round."

Evaluation criteria:
1. Market opportunity
2. Competitive advantage
3. Team/product risks
4. Investment attractiveness (1-10 score)
5. Three key questions`}];function j(){const{language:i}=u(),t=i==="ko",[a,s]=o.useState(""),[p,r]=o.useState(""),c=n=>{s(t?n.prompt:n.promptEn),r("")},l=()=>{r(t?`[ API 키를 연결하면 실제 Claude 응답을 확인할 수 있습니다 ]

이 기능은 현재 프롬프트 미리보기 모드로 동작합니다.
API 키를 설정하면 실시간으로 프롬프트를 테스트할 수 있습니다.

---
입력된 프롬프트:

`+a:`[ Connect your API key to test prompts live ]

This feature currently runs in prompt preview mode.
Set up your API key to test prompts in real-time.

---
Input prompt:

`+a)},m=()=>{s(""),r("")};return e.jsxs("div",{className:"practice-page",children:[e.jsx(h,{title:t?"프롬프트 연습":"Prompt Practice",description:t?"프롬프트 작성을 연습하고 테스트해보세요.":"Practice and test your prompt writing skills.",path:"/prompt-practice"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"page-header",style:{paddingTop:0,borderBottom:"none"},children:[e.jsx("h1",{children:t?"프롬프트 연습장":"Prompt Practice Playground"}),e.jsx("p",{className:"page-desc",children:t?"다양한 프롬프트 템플릿을 활용하여 프롬프트 작성을 연습하세요.":"Practice prompt writing using various prompt templates."})]}),e.jsxs("div",{className:"practice-layout",children:[e.jsxs("div",{className:"practice-input-panel",children:[e.jsx("h3",{children:t?"프롬프트 입력":"Prompt Input"}),e.jsx("textarea",{className:"practice-textarea",placeholder:t?"프롬프트를 입력하세요...":"Enter your prompt...",value:a,onChange:n=>s(n.target.value)}),e.jsxs("div",{className:"practice-actions",children:[e.jsxs("button",{className:"btn btn-primary btn-sm",onClick:l,disabled:!a.trim(),children:[e.jsx("i",{className:"fa-solid fa-play"}),t?"실행":"Run"]}),e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:m,children:[e.jsx("i",{className:"fa-solid fa-eraser"}),t?"초기화":"Clear"]})]})]}),e.jsxs("div",{className:"practice-output-panel",children:[e.jsx("h3",{children:t?"결과 출력":"Output"}),e.jsx("div",{className:"practice-output",children:p||(t?`프롬프트를 입력하고 실행 버튼을 눌러보세요.

API 키를 연결하면 실제 Claude 응답을 확인할 수 있습니다.`:`Enter a prompt and click the Run button.

Connect your API key to test prompts live.`)})]})]}),e.jsxs("div",{className:"practice-templates",children:[e.jsx("h3",{style:{fontSize:"18px",fontWeight:700,marginBottom:"16px"},children:t?"템플릿 프롬프트":"Template Prompts"}),e.jsx("div",{className:"practice-template-grid",children:g.map((n,d)=>e.jsxs("div",{className:"practice-template-card",onClick:()=>c(n),children:[e.jsx("div",{className:"practice-template-title",children:t?n.title:n.titleEn}),e.jsx("div",{className:"practice-template-desc",children:t?n.desc:n.descEn})]},d))})]})]})]})}export{j as default};
