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

| 모델 | 입력 가격 | 출력 가격 | 컨텍스트 |
|------|-----------|-----------|----------|
| **Claude Opus 4** | $15 / MTok | $75 / MTok | 200K |
| **Claude Sonnet 4** | $3 / MTok | $15 / MTok | 200K |
| **Claude Haiku 3.5** | $0.80 / MTok | $4 / MTok | 200K |

### 비용 계산 예시

**일반적인 대화 (Sonnet 4 기준):**

- 입력: ~500 토큰 (사용자 메시지 + 시스템 프롬프트)
- 출력: ~1,000 토큰 (Claude 응답)
- 비용: (500 * $3 / 1,000,000) + (1,000 * $15 / 1,000,000) = **$0.0165**

**문서 분석 (Sonnet 4 기준):**

- 입력: ~50,000 토큰 (긴 문서 + 지시사항)
- 출력: ~2,000 토큰 (분석 결과)
- 비용: (50,000 * $3 / 1,000,000) + (2,000 * $15 / 1,000,000) = **$0.18**

### Prompt Caching으로 비용 절감

자주 사용하는 시스템 프롬프트나 긴 컨텍스트를 캐싱하여 비용을 절감할 수 있습니다:

- **캐시 쓰기**: 기본 입력 가격의 25% 추가
- **캐시 읽기**: 기본 입력 가격의 10%로 할인
- **5분 이내** 동일한 프리픽스 사용 시 자동 캐시 적용`,
      contentEn: `The Anthropic API charges on a pay-per-use basis based on tokens. Input and output tokens are priced differently, and pricing varies by model.

### Current Model Pricing (MTok = per 1 million tokens)

| Model | Input Price | Output Price | Context |
|-------|------------|-------------|---------|
| **Claude Opus 4** | $15 / MTok | $75 / MTok | 200K |
| **Claude Sonnet 4** | $3 / MTok | $15 / MTok | 200K |
| **Claude Haiku 3.5** | $0.80 / MTok | $4 / MTok | 200K |

### Cost Calculation Examples

**Typical Conversation (Sonnet 4):**

- Input: ~500 tokens (user message + system prompt)
- Output: ~1,000 tokens (Claude response)
- Cost: (500 * $3 / 1,000,000) + (1,000 * $15 / 1,000,000) = **$0.0165**

**Document Analysis (Sonnet 4):**

- Input: ~50,000 tokens (long document + instructions)
- Output: ~2,000 tokens (analysis results)
- Cost: (50,000 * $3 / 1,000,000) + (2,000 * $15 / 1,000,000) = **$0.18**

### Cost Savings with Prompt Caching

You can reduce costs by caching frequently used system prompts or long contexts:

- **Cache Write**: 25% additional on top of base input price
- **Cache Read**: Discounted to 10% of base input price
- **Automatic caching** when the same prefix is used within 5 minutes`
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
    model="claude-sonnet-4-20250514",
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
    model="claude-sonnet-4-20250514",
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
                "model": "claude-sonnet-4-20250514",
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": "질문 1"}]
            }
        },
        {
            "custom_id": "request-2",
            "params": {
                "model": "claude-sonnet-4-20250514",
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
    model="claude-sonnet-4-20250514",
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
    model="claude-sonnet-4-20250514",
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
                "model": "claude-sonnet-4-20250514",
                "max_tokens": 1024,
                "messages": [{"role": "user", "content": "Question 1"}]
            }
        },
        {
            "custom_id": "request-2",
            "params": {
                "model": "claude-sonnet-4-20250514",
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
