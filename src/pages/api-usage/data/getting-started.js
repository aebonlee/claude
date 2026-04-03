const gettingStarted = {
  id: 'getting-started',
  title: 'API 시작하기',
  titleEn: 'Getting Started',
  icon: 'fa-rocket',
  sections: [
    {
      title: 'Anthropic API 소개',
      titleEn: 'Introduction to the Anthropic API',
      content: `Anthropic API를 사용하면 Claude 모델을 자신의 애플리케이션에 직접 통합할 수 있습니다. 대화형 AI, 콘텐츠 생성, 코드 작성, 데이터 분석 등 다양한 기능을 프로그래밍 방식으로 활용할 수 있습니다.

### API 키 발급

1. [console.anthropic.com](https://console.anthropic.com)에 접속합니다
2. 계정을 생성하고 로그인합니다
3. **API Keys** 메뉴에서 새 키를 생성합니다
4. 생성된 키를 안전하게 저장합니다 (다시 확인할 수 없음)

### 환경 설정

**환경 변수 설정:**

\`\`\`bash
# .env 파일 또는 셸 환경
export ANTHROPIC_API_KEY="sk-ant-api03-..."
\`\`\`

**Python SDK 설치:**

\`\`\`bash
pip install anthropic
\`\`\`

**TypeScript/Node.js SDK 설치:**

\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

### 첫 번째 API 호출

**Python:**

\`\`\`python
import anthropic

client = anthropic.Anthropic()  # ANTHROPIC_API_KEY 환경 변수 자동 사용

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "안녕하세요! Claude API를 처음 사용합니다."}
    ]
)

print(message.content[0].text)
\`\`\`

**TypeScript:**

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic(); // ANTHROPIC_API_KEY 환경 변수 자동 사용

const message = await client.messages.create({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Hello! This is my first Claude API call.' }
  ]
});

console.log(message.content[0].text);
\`\`\``,
      contentEn: `The Anthropic API allows you to integrate Claude models directly into your applications. You can programmatically leverage capabilities like conversational AI, content generation, code writing, data analysis, and more.

### Getting Your API Key

1. Visit [console.anthropic.com](https://console.anthropic.com)
2. Create an account and sign in
3. Generate a new key in the **API Keys** menu
4. Store the generated key securely (it cannot be viewed again)

### Environment Setup

**Setting Environment Variables:**

\`\`\`bash
# .env file or shell environment
export ANTHROPIC_API_KEY="sk-ant-api03-..."
\`\`\`

**Installing the Python SDK:**

\`\`\`bash
pip install anthropic
\`\`\`

**Installing the TypeScript/Node.js SDK:**

\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

### Your First API Call

**Python:**

\`\`\`python
import anthropic

client = anthropic.Anthropic()  # Automatically uses ANTHROPIC_API_KEY env var

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello! This is my first Claude API call."}
    ]
)

print(message.content[0].text)
\`\`\`

**TypeScript:**

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic(); // Automatically uses ANTHROPIC_API_KEY env var

const message = await client.messages.create({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Hello! This is my first Claude API call.' }
  ]
});

console.log(message.content[0].text);
\`\`\``
    },
    {
      title: '사용 가능한 모델',
      titleEn: 'Available Models',
      content: `### Claude 모델 패밀리

| 모델 | 모델 ID | 특징 | 용도 |
|------|---------|------|------|
| **Claude Opus 4** | claude-opus-4-20250514 | 최고 성능, 복잡한 추론 | 연구, 복잡한 코딩, 전략 |
| **Claude Sonnet 4** | claude-sonnet-4-20250514 | 균형 잡힌 성능 | 범용, 코드 생성, 분석 |
| **Claude Haiku 3.5** | claude-haiku-3-5-20241022 | 빠른 응답, 저비용 | 분류, 요약, 간단한 질의 |

### 모델 선택 가이드

- **Opus**: 복잡한 추론, 긴 문서 분석, 정교한 코드 생성이 필요할 때
- **Sonnet**: 일반적인 작업, 코딩, 콘텐츠 생성 등 균형이 필요할 때
- **Haiku**: 빠른 응답이 중요하고 비용을 절감하고 싶을 때

### 컨텍스트 윈도우

모든 Claude 모델은 **200K 토큰**의 컨텍스트 윈도우를 지원합니다. 이는 약 500페이지 분량의 텍스트를 한 번에 처리할 수 있음을 의미합니다.

### Rate Limits

API에는 분당 요청 수(RPM)와 분당 토큰 수(TPM) 제한이 있습니다. 사용 티어에 따라 제한이 다릅니다:

| 티어 | RPM | TPM (입력) | TPM (출력) |
|------|-----|-----------|-----------|
| Tier 1 | 50 | 40,000 | 8,000 |
| Tier 2 | 1,000 | 80,000 | 16,000 |
| Tier 3 | 2,000 | 160,000 | 32,000 |
| Tier 4 | 4,000 | 400,000 | 80,000 |`,
      contentEn: `### Claude Model Family

| Model | Model ID | Characteristics | Use Cases |
|-------|----------|----------------|-----------|
| **Claude Opus 4** | claude-opus-4-20250514 | Highest performance, complex reasoning | Research, complex coding, strategy |
| **Claude Sonnet 4** | claude-sonnet-4-20250514 | Balanced performance | General purpose, code generation, analysis |
| **Claude Haiku 3.5** | claude-haiku-3-5-20241022 | Fast responses, low cost | Classification, summarization, simple queries |

### Model Selection Guide

- **Opus**: When complex reasoning, long document analysis, or sophisticated code generation is needed
- **Sonnet**: When balance is needed for general tasks, coding, content creation
- **Haiku**: When fast response is important and cost savings are desired

### Context Window

All Claude models support a **200K token** context window. This means you can process approximately 500 pages of text at once.

### Rate Limits

The API has limits on requests per minute (RPM) and tokens per minute (TPM). Limits vary by usage tier:

| Tier | RPM | TPM (Input) | TPM (Output) |
|------|-----|------------|-------------|
| Tier 1 | 50 | 40,000 | 8,000 |
| Tier 2 | 1,000 | 80,000 | 16,000 |
| Tier 3 | 2,000 | 160,000 | 32,000 |
| Tier 4 | 4,000 | 400,000 | 80,000 |`
    }
  ]
};

export default gettingStarted;
