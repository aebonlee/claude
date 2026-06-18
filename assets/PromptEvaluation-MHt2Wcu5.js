import{j as e}from"./markdown-Bb6HBFF6.js";import{b as d}from"./vendor-Cbm2kc8j.js";import{u as b}from"./index-CT3aUxkD.js";import{S as y}from"./SEOHead-DfBpSINb.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const o=[{key:"role",icon:"fa-user-tie",title:"역할·페르소나",titleEn:"Role / Persona",desc:"명확한 역할(전문성, 관점)을 부여했는가?",descEn:"Did you assign a clear role (expertise, perspective)?",tip:'"당신은 10년 경력의 시니어 백엔드 개발자입니다"처럼 역할과 전문성을 구체적으로 지정하세요.',tipEn:'Assign a concrete role and expertise, e.g. "You are a senior backend developer with 10 years of experience."'},{key:"context",icon:"fa-layer-group",title:"맥락·배경",titleEn:"Context / Background",desc:"작업에 필요한 배경 정보와 목적을 제공했는가?",descEn:"Did you provide the background and the goal behind the task?",tip:'대상 독자, 제품/도메인, 이 결과물이 쓰일 곳 등 "왜"를 함께 적으면 품질이 크게 올라갑니다.',tipEn:'State the audience, product/domain, and where the output will be used — giving the "why" sharply improves quality.'},{key:"task",icon:"fa-bullseye",title:"구체적 지시",titleEn:"Specific Instruction",desc:"무엇을 해야 하는지 모호하지 않고 구체적인가?",descEn:"Is the task specific and unambiguous?",tip:'"좋게 만들어줘" 대신 "X를 3개 항목으로, 각 1~2문장으로 작성"처럼 측정 가능하게 지시하세요.',tipEn:'Replace "make it good" with measurable asks like "write 3 bullet points, 1–2 sentences each."'},{key:"format",icon:"fa-table-list",title:"출력 형식",titleEn:"Output Format",desc:"원하는 출력 형식·구조를 명시했는가?",descEn:"Did you specify the desired output format/structure?",tip:"표, JSON, 마크다운, 항목 수, 글자 수 등 원하는 형식을 명확히 지정하세요(구조화 출력 활용도 가능).",tipEn:"Specify table, JSON, markdown, item count, character limits, etc. (structured outputs can enforce this)."},{key:"constraints",icon:"fa-ruler-combined",title:"제약·규칙",titleEn:"Constraints / Rules",desc:"톤, 길이, 금지사항 등 제약을 제시했는가?",descEn:"Did you set constraints — tone, length, prohibitions?",tip:'"전문 용어 금지", "200자 이내", "정중한 톤"처럼 경계를 정하면 결과가 안정적입니다.',tipEn:'Boundaries like "no jargon", "under 200 characters", "polite tone" make outputs more reliable.'},{key:"examples",icon:"fa-list-check",title:"예시(Few-shot)",titleEn:"Examples (Few-shot)",desc:"원하는 결과의 예시를 1개 이상 제공했는가?",descEn:"Did you provide at least one example of the desired result?",tip:"입력→출력 예시를 한두 개 보여주면 모델이 패턴을 빠르게 학습합니다(가장 강력한 기법 중 하나).",tipEn:"Showing one or two input→output examples lets the model learn the pattern fast (one of the strongest techniques)."}],k=[{ko:"없음",en:"None"},{ko:"미흡",en:"Weak"},{ko:"보통",en:"OK"},{ko:"우수",en:"Strong"}],E=[{topic:"마케팅 카피",topicEn:"Marketing Copy",before:"신제품 마케팅 문구 써줘.",beforeEn:"Write marketing copy for a new product.",beforeScore:3,after:`당신은 B2B SaaS 카피라이터입니다.
[제품] 50~200명 규모 중소기업용 프로젝트 관리 도구
[목표] 무료 체험 가입 전환

랜딩 페이지 카피를 작성하세요.
- 헤드라인(10단어 이내) 1개
- 서브헤드라인(20단어 이내) 1개
- CTA 버튼 문구 2개
- 핵심 특징 3가지(각 1문장)
전문 용어는 피하고 신뢰감 있는 톤으로 작성하세요.`,afterEn:`You are a B2B SaaS copywriter.
[Product] A project management tool for SMBs of 50–200 people
[Goal] Convert visitors to a free trial signup

Write landing page copy:
- 1 headline (under 10 words)
- 1 subheadline (under 20 words)
- 2 CTA button texts
- 3 key features (1 sentence each)
Avoid jargon; use a trustworthy tone.`,afterScore:16},{topic:"코드 리뷰",topicEn:"Code Review",before:"이 코드 고쳐줘.",beforeEn:"Fix this code.",beforeScore:2,after:`당신은 Python 보안에 밝은 시니어 리뷰어입니다.
아래 FastAPI 라우터를 리뷰하세요.

<목표> 운영 배포 전 보안·성능 점검 </목표>
<출력 형식>
1. 발견한 문제 (심각도: 높음/중간/낮음)
2. 수정 코드 (타입 힌트 포함, PEP 8)
3. 한 줄 요약
</출력 형식>
추측이 아니라 코드에 근거해 지적하세요.

[여기에 코드]`,afterEn:`You are a senior reviewer strong in Python security.
Review the FastAPI router below.

<goal> Pre-production security & performance check </goal>
<output_format>
1. Issues found (severity: high/medium/low)
2. Fixed code (with type hints, PEP 8)
3. One-line summary
</output_format>
Ground every point in the code, not guesses.

[code here]`,afterScore:17},{topic:"문서 요약",topicEn:"Document Summary",before:"이 문서 요약해줘.",beforeEn:"Summarize this document.",beforeScore:2,after:`당신은 임원 보고를 돕는 비서입니다.
아래 보고서를 바쁜 CEO가 30초 안에 읽도록 요약하세요.

<형식>
- 핵심 결론 1문장
- 주요 근거 3개(불릿)
- 권장 다음 행동 1개
</형식>
숫자·고유명사는 원문 그대로 유지하고, 추측은 넣지 마세요.

[여기에 문서]`,afterEn:`You are an assistant supporting executive briefings.
Summarize the report below so a busy CEO can read it in 30 seconds.

<format>
- 1-sentence key takeaway
- 3 supporting points (bullets)
- 1 recommended next action
</format>
Keep numbers and proper nouns verbatim; add no speculation.

[document here]`,afterScore:16}],N=[{weak:"블로그 글 써줘.",weakEn:"Write a blog post.",hint:"주제, 대상 독자, 길이, 톤, 구조(소제목/리스트), 포함할 키워드를 더해보세요.",hintEn:"Add topic, audience, length, tone, structure (headings/lists), and keywords to include."},{weak:"데이터 분석해줘.",weakEn:"Analyze the data.",hint:"데이터의 형태, 분석 목적, 원하는 지표, 결과 형식(표/차트 설명), 가정 처리 방식을 명시하세요.",hintEn:"Specify the data shape, the analysis goal, target metrics, output format (table/chart description), and how to handle assumptions."},{weak:"이메일 답장 써줘.",weakEn:"Write an email reply.",hint:"발신자 관계, 답장의 목적, 톤, 길이, 반드시 포함/배제할 내용을 더하고 원문 맥락을 붙이세요.",hintEn:"Add the relationship, the reply’s goal, tone, length, must-include/exclude points, and paste the original context."}];function D(){const{language:f}=b(),t=f==="ko",[p,h]=d.useState(""),[i,m]=d.useState(Array(o.length).fill(null)),g=(a,s)=>{m(c=>{const n=[...c];return n[a]=n[a]===s?null:s,n})},l=d.useMemo(()=>i.reduce((a,s)=>a+(s??0),0),[i]),u=i.filter(a=>a!==null).length,v=o.length*3,r=d.useMemo(()=>u===0?null:l>=16?{letter:"A",ko:"우수한 프롬프트",en:"Excellent prompt",color:"#059669"}:l>=12?{letter:"B",ko:"좋은 프롬프트",en:"Good prompt",color:"#2563EB"}:l>=7?{letter:"C",ko:"보통 — 보완 필요",en:"Average — needs work",color:"#D97706"}:{letter:"D",ko:"초안 — 대폭 개선 필요",en:"Draft — needs major work",color:"#DC2626"},[l,u]),x=o.map((a,s)=>({c:a,s:i[s]})).filter(a=>a.s!==null&&a.s<=1),j=()=>{m(Array(o.length).fill(null)),h("")};return e.jsxs("div",{className:"content-page eval-page",children:[e.jsx(y,{title:t?"프롬프트 평가 실습":"Prompt Evaluation Practice",description:t?"6대 기준 루브릭으로 내 프롬프트를 직접 평가하고 개선해보세요.":"Evaluate and improve your own prompts with a 6-criteria rubric.",path:"/prompt-evaluation"}),e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"page-header",style:{paddingTop:0,borderBottom:"none"},children:[e.jsx("h1",{children:t?"프롬프트 평가 실습":"Prompt Evaluation Practice"}),e.jsx("p",{className:"page-desc",children:t?'좋은 프롬프트는 "느낌"이 아니라 기준으로 판단합니다. 아래 6대 루브릭으로 내 프롬프트를 채점하고, 약점을 찾아 바로 개선해보세요.':"A good prompt is judged by criteria, not by feel. Score your prompt against the 6-criteria rubric below, find the gaps, and improve it right away."})]}),e.jsxs("div",{className:"eval-grid",children:[e.jsxs("div",{className:"eval-input-panel",children:[e.jsx("h3",{children:t?"평가할 프롬프트":"Prompt to Evaluate"}),e.jsx("textarea",{className:"practice-textarea",placeholder:t?"평가하고 싶은 프롬프트를 붙여넣으세요...":"Paste the prompt you want to evaluate...",value:p,onChange:a=>h(a.target.value)}),e.jsxs("p",{className:"eval-charcount",children:[t?"글자 수":"Characters",": ",p.length]})]}),e.jsxs("div",{className:"eval-score-panel",children:[e.jsx("h3",{children:t?"평가 결과":"Result"}),e.jsxs("div",{className:"eval-score-big",style:{color:r?r.color:"var(--text-light)"},children:[l,e.jsxs("span",{className:"eval-score-max",children:["/ ",v]})]}),r?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"eval-grade-badge",style:{background:r.color},children:r.letter}),e.jsx("p",{className:"eval-grade-label",children:t?r.ko:r.en})]}):e.jsx("p",{className:"eval-grade-label muted",children:t?"각 기준을 채점하면 점수가 표시됩니다.":"Score each criterion to see your result."}),e.jsx("div",{className:"eval-progress",children:e.jsx("div",{className:"eval-progress-bar",style:{width:`${l/v*100}%`,background:r?r.color:"var(--primary)"}})}),e.jsxs("button",{className:"btn btn-secondary btn-sm",onClick:j,style:{marginTop:"12px"},children:[e.jsx("i",{className:"fa-solid fa-rotate-left"})," ",t?"초기화":"Reset"]})]})]}),e.jsx("h2",{className:"eval-section-title",children:t?"6대 평가 기준":"The 6 Criteria"}),e.jsx("div",{className:"eval-rubric",children:o.map((a,s)=>e.jsxs("div",{className:"eval-criterion",children:[e.jsxs("div",{className:"eval-criterion-head",children:[e.jsx("span",{className:"eval-criterion-icon",children:e.jsx("i",{className:`fa-solid ${a.icon}`})}),e.jsxs("div",{children:[e.jsx("div",{className:"eval-criterion-title",children:t?a.title:a.titleEn}),e.jsx("div",{className:"eval-criterion-desc",children:t?a.desc:a.descEn})]})]}),e.jsx("div",{className:"eval-levels",children:k.map((c,n)=>e.jsxs("button",{className:`eval-level-btn${i[s]===n?" active":""}`,onClick:()=>g(s,n),children:[e.jsx("span",{className:"eval-level-num",children:n}),e.jsx("span",{className:"eval-level-label",children:t?c.ko:c.en})]},n))})]},a.key))}),x.length>0&&e.jsxs("div",{className:"eval-feedback",children:[e.jsxs("h3",{children:[e.jsx("i",{className:"fa-solid fa-lightbulb"})," ",t?"개선 제안":"Improvement Tips"]}),e.jsx("ul",{children:x.map(a=>e.jsxs("li",{children:[e.jsxs("strong",{children:[t?a.c.title:a.c.titleEn,":"]})," ",t?a.c.tip:a.c.tipEn]},a.c.key))})]}),e.jsx("h2",{className:"eval-section-title",children:t?"Before → After 개선 사례":"Before → After Examples"}),e.jsx("div",{className:"eval-examples",children:E.map((a,s)=>e.jsxs("div",{className:"eval-example-card",children:[e.jsx("div",{className:"eval-example-topic",children:t?a.topic:a.topicEn}),e.jsxs("div",{className:"eval-example-cols",children:[e.jsxs("div",{className:"eval-example-col before",children:[e.jsxs("div",{className:"eval-example-head",children:[e.jsx("span",{className:"eval-tag bad",children:"Before"}),e.jsxs("span",{className:"eval-example-score",children:[a.beforeScore," / 18"]})]}),e.jsx("pre",{children:t?a.before:a.beforeEn})]}),e.jsxs("div",{className:"eval-example-col after",children:[e.jsxs("div",{className:"eval-example-head",children:[e.jsx("span",{className:"eval-tag good",children:"After"}),e.jsxs("span",{className:"eval-example-score",children:[a.afterScore," / 18"]})]}),e.jsx("pre",{children:t?a.after:a.afterEn})]})]})]},s))}),e.jsx("h2",{className:"eval-section-title",children:t?"실습 과제 — 직접 개선해보세요":"Challenges — Improve These Yourself"}),e.jsx("div",{className:"eval-challenges",children:N.map((a,s)=>e.jsxs("div",{className:"eval-challenge-card",children:[e.jsx("div",{className:"eval-challenge-num",children:s+1}),e.jsxs("div",{className:"eval-challenge-body",children:[e.jsx("pre",{className:"eval-challenge-weak",children:t?a.weak:a.weakEn}),e.jsxs("p",{className:"eval-challenge-hint",children:[e.jsx("i",{className:"fa-solid fa-wand-magic-sparkles"})," ",t?a.hint:a.hintEn]})]})]},s))}),e.jsx("p",{className:"eval-footnote",children:t?"→ 위 과제를 개선한 뒤, 상단 평가기에 붙여넣고 6대 기준으로 다시 채점해보세요. 12점 이상을 목표로!":"→ After improving each challenge, paste it into the evaluator above and re-score it against the 6 criteria. Aim for 12+!"})]})]})}export{D as default};
