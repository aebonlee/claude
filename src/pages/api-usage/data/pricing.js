const pricing = {
  id: 'pricing',
  title: 'API 요금',
  titleEn: 'API Pricing',
  icon: 'fa-credit-card',
  sections: [
    {
      title: '모델별 요금',
      titleEn: 'Pricing by Model',
      content: `Anthropic API는 토큰 기반 종량제(pay-per-use)로 과금됩니다. 입력 토큰과 출력 토큰의 요금이 다르며, 모델에 따라 가격이 다릅니다.

### 현재 모델 가격 (MTok = 100만 토큰당)

| 모델 | 모델 ID | 입력 가격 | 출력 가격 | 컨텍스트 |
|------|---------|-----------|-----------|----------|
| **Claude Fable 5** | claude-fable-5 | $10 / MTok | $50 / MTok | 1M |
| **Claude Opus 4.8** | claude-opus-4-8 | $5 / MTok | $25 / MTok | 1M |
| **Claude Sonnet 4.6** | claude-sonnet-4-6 | $3 / MTok | $15 / MTok | 1M |
| **Claude Haiku 4.5** | claude-haiku-4-5 | $1 / MTok | $5 / MTok | 200K |

> Opus·Sonnet·Fable은 **1M(100만 토큰) 컨텍스트를 표준 가격**으로 제공합니다(장문 프리미엄 없음). Fable 5는 가장 강력한 프리미엄 모델로 최난도 추론·장기 자율 에이전트 작업에 적합합니다. 모델 ID에는 날짜 접미사를 붙이지 않습니다.

### 비용 계산 예시

**일반적인 대화 (Sonnet 4.6 기준):**

- 입력: ~500 토큰 (사용자 메시지 + 시스템 프롬프트)
- 출력: ~1,000 토큰 (Claude 응답)
- 비용: (500 * $3 / 1,000,000) + (1,000 * $15 / 1,000,000) = **$0.0165**

**문서 분석 (Sonnet 4.6 기준):**

- 입력: ~50,000 토큰 (긴 문서 + 지시사항)
- 출력: ~2,000 토큰 (분석 결과)
- 비용: (50,000 * $3 / 1,000,000) + (2,000 * $15 / 1,000,000) = **$0.18**

### Prompt Caching으로 비용 절감

자주 사용하는 시스템 프롬프트나 긴 컨텍스트를 캐싱하여 비용을 절감할 수 있습니다:

- **캐시 쓰기**: 기본 입력 가격의 1.25배(5분 TTL) 또는 2배(1시간 TTL)
- **캐시 읽기**: 기본 입력 가격의 약 0.1배(10%)로 할인
- \`cache_control: {"type": "ephemeral"}\`로 캐싱할 블록을 지정(기본 TTL 5분, \`"ttl": "1h"\`로 1시간)
- 동일한 프리픽스를 반복 요청하면 두 번째 요청부터 캐시 읽기로 비용 절감`,
      contentEn: `The Anthropic API charges on a pay-per-use basis based on tokens. Input and output tokens are priced differently, and pricing varies by model.

### Current Model Pricing (MTok = per 1 million tokens)

| Model | Model ID | Input Price | Output Price | Context |
|-------|----------|------------|-------------|---------|
| **Claude Fable 5** | claude-fable-5 | $10 / MTok | $50 / MTok | 1M |
| **Claude Opus 4.8** | claude-opus-4-8 | $5 / MTok | $25 / MTok | 1M |
| **Claude Sonnet 4.6** | claude-sonnet-4-6 | $3 / MTok | $15 / MTok | 1M |
| **Claude Haiku 4.5** | claude-haiku-4-5 | $1 / MTok | $5 / MTok | 200K |

> Opus, Sonnet, and Fable offer a **1M-token context window at standard pricing** (no long-context premium). Fable 5 is the most capable premium model, suited for the hardest reasoning and long-horizon autonomous agents. Do not append date suffixes to model IDs.

### Cost Calculation Examples

**Typical Conversation (Sonnet 4.6):**

- Input: ~500 tokens (user message + system prompt)
- Output: ~1,000 tokens (Claude response)
- Cost: (500 * $3 / 1,000,000) + (1,000 * $15 / 1,000,000) = **$0.0165**

**Document Analysis (Sonnet 4.6):**

- Input: ~50,000 tokens (long document + instructions)
- Output: ~2,000 tokens (analysis results)
- Cost: (50,000 * $3 / 1,000,000) + (2,000 * $15 / 1,000,000) = **$0.18**

### Cost Savings with Prompt Caching

You can reduce costs by caching frequently used system prompts or long contexts:

- **Cache Write**: 1.25x base input price (5-min TTL) or 2x (1-hour TTL)
- **Cache Read**: Discounted to ~0.1x (10%) of base input price
- Mark the block to cache with \`cache_control: {"type": "ephemeral"}\` (default 5-min TTL, \`"ttl": "1h"\` for 1 hour)
- Repeating the same prefix lets the second and later requests read from cache`
    },
    {
      title: '비용 최적화 전략',
      titleEn: 'Cost Optimization Strategies',
      content: `### 1. 적절한 모델 선택

모든 작업에 가장 큰 모델을 사용할 필요는 없습니다:

| 작업 | 추천 모델 | 이유 |
|------|-----------|------|
| 간단한 분류/태깅 | Haiku | 빠르고 저렴 |
| 일반 대화/코드 | Sonnet | 비용 대비 성능 최적 |
| 복잡한 추론/분석 | Opus | 최고 정확도 필요 시 |

### 2. 토큰 사용 최적화

\`\`\`python
# max_tokens를 적절히 설정
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=500,  # 필요한 만큼만 설정
    messages=[...]
)

# 간결한 출력 요청
system = """응답을 3문장 이내로 요약하세요.
불필요한 서론이나 예의 표현을 생략하세요."""
\`\`\`

### 3. Prompt Caching 활용

\`\`\`python
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system=[
        {
            "type": "text",
            "text": "여기에 긴 시스템 프롬프트나 참고 자료를 넣습니다...",
            "cache_control": {"type": "ephemeral"}
        }
    ],
    messages=[
        {"role": "user", "content": "이 자료에서 핵심 내용을 요약해주세요."}
    ]
)
\`\`\`

### 4. Batching API 활용

대량의 요청을 배치로 처리하면 50% 할인된 가격으로 이용할 수 있습니다:

\`\`\`python
# 배치 요청 생성
batch = client.messages.batches.create(
    requests=[
        {
            "custom_id": "request-1",
            "params": {
                "model": "claude-sonnet-4-6",
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": "질문 1"}]
            }
        },
        {
            "custom_id": "request-2",
            "params": {
                "model": "claude-sonnet-4-6",
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": "질문 2"}]
            }
        }
    ]
)
\`\`\`

> **참고**: 배치 요청은 최대 24시간 이내에 처리되며, 실시간 응답이 필요하지 않은 대량 작업에 적합합니다.`,
      contentEn: `### 1. Choose the Right Model

You don't need the largest model for every task:

| Task | Recommended Model | Reason |
|------|-------------------|--------|
| Simple classification/tagging | Haiku | Fast and affordable |
| General chat/code | Sonnet | Best performance per cost |
| Complex reasoning/analysis | Opus | When highest accuracy is needed |

### 2. Optimize Token Usage

\`\`\`python
# Set max_tokens appropriately
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=500,  # Set only as much as needed
    messages=[...]
)

# Request concise output
system = """Summarize your response in 3 sentences or fewer.
Omit unnecessary introductions or polite expressions."""
\`\`\`

### 3. Use Prompt Caching

\`\`\`python
response = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system=[
        {
            "type": "text",
            "text": "Place long system prompts or reference materials here...",
            "cache_control": {"type": "ephemeral"}
        }
    ],
    messages=[
        {"role": "user", "content": "Summarize the key points from this material."}
    ]
)
\`\`\`

### 4. Use the Batching API

Processing requests in batches offers a 50% discount:

\`\`\`python
# Create batch request
batch = client.messages.batches.create(
    requests=[
        {
            "custom_id": "request-1",
            "params": {
                "model": "claude-sonnet-4-6",
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": "Question 1"}]
            }
        },
        {
            "custom_id": "request-2",
            "params": {
                "model": "claude-sonnet-4-6",
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": "Question 2"}]
            }
        }
    ]
)
\`\`\`

> **Note**: Batch requests are processed within a maximum of 24 hours and are suitable for bulk tasks that don't require real-time responses.`
    }
  ]
};

export default pricing;
