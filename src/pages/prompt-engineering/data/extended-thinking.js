const extendedThinking = {
  id: 'extended-thinking',
  title: '확장 사고',
  titleEn: 'Extended Thinking',
  icon: 'fa-brain',
  sections: [
    {
      title: 'Extended Thinking이란?',
      titleEn: 'What is Extended Thinking?',
      content: `Extended Thinking은 Claude가 응답하기 전에 내부적으로 깊이 있는 사고 과정을 거치도록 하는 기능입니다. 복잡한 추론, 수학 문제, 다단계 분석 등에서 더 정확한 결과를 제공합니다.

### 작동 원리

1. Claude가 질문을 받으면 먼저 **사고 블록(thinking block)** 에서 내부 추론을 수행합니다
2. 문제를 여러 각도에서 분석하고 다양한 접근법을 검토합니다
3. 최종 답변을 구성하여 응답합니다
4. 사용자는 사고 과정을 확인할 수 있습니다 (API에서 반환)

### Extended Thinking이 효과적인 경우

- **복잡한 수학/논리 문제**: 다단계 계산이나 증명이 필요한 문제
- **코드 분석**: 복잡한 버그 추적이나 아키텍처 설계
- **전략적 의사결정**: 여러 요소를 고려해야 하는 의사결정
- **긴 문서 분석**: 대규모 텍스트의 종합적 분석
- **모순 해결**: 상충하는 정보를 분석하고 해결하는 경우

### API에서의 사용

\`\`\`python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000  # 사고에 할당할 최대 토큰
    },
    messages=[{
        "role": "user",
        "content": "이 알고리즘의 시간 복잡도를 분석하고 최적화 방안을 제시해주세요."
    }]
)

# 사고 과정과 응답 확인
for block in response.content:
    if block.type == "thinking":
        print("사고 과정:", block.thinking)
    elif block.type == "text":
        print("응답:", block.text)
\`\`\``,
      contentEn: `Extended Thinking is a feature that allows Claude to go through an in-depth internal reasoning process before responding. It provides more accurate results for complex reasoning, math problems, multi-step analysis, and more.

### How It Works

1. When Claude receives a question, it first performs internal reasoning in a **thinking block**
2. It analyzes the problem from multiple angles and reviews various approaches
3. It composes and delivers the final answer
4. Users can view the thinking process (returned via API)

### When Extended Thinking is Effective

- **Complex Math/Logic Problems**: Problems requiring multi-step calculations or proofs
- **Code Analysis**: Complex bug tracking or architecture design
- **Strategic Decision Making**: Decisions requiring consideration of multiple factors
- **Long Document Analysis**: Comprehensive analysis of large texts
- **Contradiction Resolution**: Analyzing and resolving conflicting information

### Usage in API

\`\`\`python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000  # Max tokens allocated for thinking
    },
    messages=[{
        "role": "user",
        "content": "Analyze the time complexity of this algorithm and suggest optimizations."
    }]
)

# Check thinking process and response
for block in response.content:
    if block.type == "thinking":
        print("Thinking:", block.thinking)
    elif block.type == "text":
        print("Response:", block.text)
\`\`\``
    },
    {
      title: 'Extended Thinking 활용 팁',
      titleEn: 'Extended Thinking Tips',
      content: `### 토큰 예산 설정

\`budget_tokens\`는 Claude가 사고에 사용할 수 있는 최대 토큰 수입니다:

| 작업 유형 | 권장 예산 | 설명 |
|-----------|-----------|------|
| 간단한 추론 | 2,000-5,000 | 기본적인 논리 문제 |
| 코드 분석 | 5,000-10,000 | 중간 복잡도의 코드 리뷰 |
| 복잡한 문제 | 10,000-20,000 | 다단계 추론이 필요한 문제 |
| 연구/분석 | 20,000+ | 종합적인 분석 작업 |

### 주의사항

- Extended Thinking은 **streaming과 함께 사용**하는 것을 권장합니다
- 사고 과정의 토큰은 **출력 토큰에 포함**됩니다
- 사고 블록은 **수정하거나 조작할 수 없습니다** (API에서 반환만 가능)
- \`temperature\` 파라미터는 Extended Thinking에서 **반드시 1로 설정**해야 합니다
- **시스템 프롬프트와 함께 사용** 시 시스템 프롬프트가 사고 과정에도 영향을 미칩니다

### 스트리밍에서의 사용

\`\`\`python
import anthropic

client = anthropic.Anthropic()

with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    messages=[{
        "role": "user",
        "content": "다음 시스템의 장애 원인을 분석해주세요."
    }]
) as stream:
    for event in stream:
        if event.type == "content_block_start":
            if hasattr(event.content_block, 'type'):
                print(f"블록 타입: {event.content_block.type}")
        elif event.type == "content_block_delta":
            if hasattr(event.delta, 'thinking'):
                print(event.delta.thinking, end="")
            elif hasattr(event.delta, 'text'):
                print(event.delta.text, end="")
\`\`\``,
      contentEn: `### Token Budget Settings

\`budget_tokens\` is the maximum number of tokens Claude can use for thinking:

| Task Type | Recommended Budget | Description |
|-----------|-------------------|-------------|
| Simple Reasoning | 2,000-5,000 | Basic logic problems |
| Code Analysis | 5,000-10,000 | Medium complexity code reviews |
| Complex Problems | 10,000-20,000 | Multi-step reasoning problems |
| Research/Analysis | 20,000+ | Comprehensive analysis tasks |

### Important Notes

- Extended Thinking is **recommended to use with streaming**
- Thinking tokens are **included in output tokens**
- Thinking blocks **cannot be modified or manipulated** (only returned via API)
- The \`temperature\` parameter **must be set to 1** with Extended Thinking
- When used **with system prompts**, system prompts also influence the thinking process

### Usage with Streaming

\`\`\`python
import anthropic

client = anthropic.Anthropic()

with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=16000,
    thinking={
        "type": "enabled",
        "budget_tokens": 10000
    },
    messages=[{
        "role": "user",
        "content": "Analyze the root cause of the following system failure."
    }]
) as stream:
    for event in stream:
        if event.type == "content_block_start":
            if hasattr(event.content_block, 'type'):
                print(f"Block type: {event.content_block.type}")
        elif event.type == "content_block_delta":
            if hasattr(event.delta, 'thinking'):
                print(event.delta.thinking, end="")
            elif hasattr(event.delta, 'text'):
                print(event.delta.text, end="")
\`\`\``
    }
  ]
};

export default extendedThinking;
