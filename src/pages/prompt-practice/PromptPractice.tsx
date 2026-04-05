import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const templates = [
  {
    title: '기본 질문',
    titleEn: 'Basic Question',
    desc: '간단한 질문 형식의 프롬프트',
    descEn: 'A simple question-style prompt',
    prompt: '다음 개념을 초등학생도 이해할 수 있도록 쉽게 설명해주세요:\n\n[개념: 인공지능]',
    promptEn: 'Please explain the following concept in a way that an elementary school student can understand:\n\n[Concept: Artificial Intelligence]',
  },
  {
    title: '시스템 프롬프트 예시',
    titleEn: 'System Prompt Example',
    desc: '역할과 규칙을 설정하는 시스템 프롬프트',
    descEn: 'A system prompt that sets roles and rules',
    prompt: '[System]\n당신은 10년 경력의 시니어 Python 개발자입니다.\n- 코드는 항상 타입 힌트를 포함하세요\n- PEP 8 스타일 가이드를 따르세요\n- 설명은 한국어로 해주세요\n\n[User]\nFastAPI로 JWT 인증 미들웨어를 만들어주세요.',
    promptEn: '[System]\nYou are a senior Python developer with 10 years of experience.\n- Always include type hints in your code\n- Follow the PEP 8 style guide\n- Provide explanations in English\n\n[User]\nPlease create a JWT authentication middleware using FastAPI.',
  },
  {
    title: 'XML 태그 활용',
    titleEn: 'XML Tags Example',
    desc: 'XML 태그로 구조화된 프롬프트',
    descEn: 'A prompt structured with XML tags',
    prompt: '<context>\n우리 회사는 B2B SaaS 스타트업입니다.\n주력 제품은 프로젝트 관리 도구입니다.\n타겟 고객은 50~200명 규모의 중소기업입니다.\n</context>\n\n<task>\n위 맥락을 바탕으로 랜딩 페이지 카피를 작성해주세요.\n</task>\n\n<format>\n- 헤드라인 (10단어 이내)\n- 서브헤드라인 (20단어 이내)\n- CTA 버튼 텍스트\n- 주요 특징 3가지 (각 1~2문장)\n</format>',
    promptEn: '<context>\nOur company is a B2B SaaS startup.\nOur main product is a project management tool.\nTarget customers are small-to-medium businesses with 50-200 employees.\n</context>\n\n<task>\nPlease write landing page copy based on the context above.\n</task>\n\n<format>\n- Headline (under 10 words)\n- Subheadline (under 20 words)\n- CTA button text\n- 3 key features (1-2 sentences each)\n</format>',
  },
  {
    title: 'Chain of Thought',
    titleEn: 'Chain of Thought',
    desc: '단계별 사고를 유도하는 프롬프트',
    descEn: 'A prompt that encourages step-by-step reasoning',
    prompt: '다음 문제를 단계별로 풀어주세요. 각 단계에서 추론 과정을 명확히 보여주세요.\n\n문제: 한 가게에서 사과 3개에 5,000원, 귤 5개에 4,000원에 판매합니다.\n사과 12개와 귤 15개를 사면 총 얼마인가요?\n\n<thinking>\n1단계: 사과 1개의 가격을 계산\n2단계: 귤 1개의 가격을 계산\n3단계: 사과 12개의 총 가격을 계산\n4단계: 귤 15개의 총 가격을 계산\n5단계: 전체 합계를 계산\n</thinking>',
    promptEn: 'Please solve the following problem step by step. Show your reasoning process clearly at each step.\n\nProblem: A store sells 3 apples for $5 and 5 oranges for $4.\nHow much would it cost to buy 12 apples and 15 oranges?\n\n<thinking>\nStep 1: Calculate the price of 1 apple\nStep 2: Calculate the price of 1 orange\nStep 3: Calculate the total price for 12 apples\nStep 4: Calculate the total price for 15 oranges\nStep 5: Calculate the grand total\n</thinking>',
  },
  {
    title: '역할극 프롬프트',
    titleEn: 'Role-play Prompt',
    desc: '특정 역할을 부여하는 프롬프트',
    descEn: 'A prompt that assigns a specific role',
    prompt: '당신은 실리콘밸리의 유명 VC 파트너입니다.\n투자 경험: 15년, 100개 이상의 스타트업 투자\n전문 분야: AI/ML, SaaS, 핀테크\n\n다음 스타트업 피치를 평가해주세요:\n\n"우리는 AI 기반 코드 리뷰 자동화 도구를 만들고 있습니다.\n현재 MAU 5,000명이며, MRR $50K입니다.\nSeed 라운드로 $2M을 모집하려고 합니다."\n\n평가 항목:\n1. 시장 기회\n2. 경쟁 우위\n3. 팀/제품 리스크\n4. 투자 매력도 (1-10점)\n5. 핵심 질문 3가지',
    promptEn: 'You are a famous VC partner in Silicon Valley.\nInvestment experience: 15 years, 100+ startups\nExpertise: AI/ML, SaaS, Fintech\n\nPlease evaluate the following startup pitch:\n\n"We are building an AI-powered automated code review tool.\nCurrent MAU is 5,000 with MRR of $50K.\nWe are raising $2M in a Seed round."\n\nEvaluation criteria:\n1. Market opportunity\n2. Competitive advantage\n3. Team/product risks\n4. Investment attractiveness (1-10 score)\n5. Three key questions',
  },
];

export default function PromptPractice() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [promptText, setPromptText] = useState('');
  const [output, setOutput] = useState('');

  const handleLoadTemplate = (template) => {
    setPromptText(isKo ? template.prompt : template.promptEn);
    setOutput('');
  };

  const handleRun = () => {
    setOutput(
      isKo
        ? '[ API 키를 연결하면 실제 Claude 응답을 확인할 수 있습니다 ]\n\n이 기능은 현재 프롬프트 미리보기 모드로 동작합니다.\nAPI 키를 설정하면 실시간으로 프롬프트를 테스트할 수 있습니다.\n\n---\n입력된 프롬프트:\n\n' + promptText
        : '[ Connect your API key to test prompts live ]\n\nThis feature currently runs in prompt preview mode.\nSet up your API key to test prompts in real-time.\n\n---\nInput prompt:\n\n' + promptText
    );
  };

  const handleClear = () => {
    setPromptText('');
    setOutput('');
  };

  return (
    <div className="practice-page">
      <SEOHead
        title={isKo ? '프롬프트 연습' : 'Prompt Practice'}
        description={isKo ? '프롬프트 작성을 연습하고 테스트해보세요.' : 'Practice and test your prompt writing skills.'}
        path="/prompt-practice"
      />
      <div className="container">
        <div className="page-header" style={{ paddingTop: 0, borderBottom: 'none' }}>
          <h1>{isKo ? '프롬프트 연습장' : 'Prompt Practice Playground'}</h1>
          <p className="page-desc">
            {isKo
              ? '다양한 프롬프트 템플릿을 활용하여 프롬프트 작성을 연습하세요.'
              : 'Practice prompt writing using various prompt templates.'}
          </p>
        </div>

        <div className="practice-layout">
          {/* Input Panel */}
          <div className="practice-input-panel">
            <h3>{isKo ? '프롬프트 입력' : 'Prompt Input'}</h3>
            <textarea
              className="practice-textarea"
              placeholder={isKo ? '프롬프트를 입력하세요...' : 'Enter your prompt...'}
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
            />
            <div className="practice-actions">
              <button className="btn btn-primary btn-sm" onClick={handleRun} disabled={!promptText.trim()}>
                <i className="fa-solid fa-play" />
                {isKo ? '실행' : 'Run'}
              </button>
              <button className="btn btn-secondary btn-sm" onClick={handleClear}>
                <i className="fa-solid fa-eraser" />
                {isKo ? '초기화' : 'Clear'}
              </button>
            </div>
          </div>

          {/* Output Panel */}
          <div className="practice-output-panel">
            <h3>{isKo ? '결과 출력' : 'Output'}</h3>
            <div className="practice-output">
              {output || (isKo
                ? '프롬프트를 입력하고 실행 버튼을 눌러보세요.\n\nAPI 키를 연결하면 실제 Claude 응답을 확인할 수 있습니다.'
                : 'Enter a prompt and click the Run button.\n\nConnect your API key to test prompts live.')}
            </div>
          </div>
        </div>

        {/* Templates */}
        <div className="practice-templates">
          <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>
            {isKo ? '템플릿 프롬프트' : 'Template Prompts'}
          </h3>
          <div className="practice-template-grid">
            {templates.map((tpl, idx) => (
              <div
                key={idx}
                className="practice-template-card"
                onClick={() => handleLoadTemplate(tpl)}
              >
                <div className="practice-template-title">
                  {isKo ? tpl.title : tpl.titleEn}
                </div>
                <div className="practice-template-desc">
                  {isKo ? tpl.desc : tpl.descEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
