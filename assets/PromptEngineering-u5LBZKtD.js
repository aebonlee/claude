import{j as e,M as h,r as g}from"./markdown-Bb6HBFF6.js";import{b as f}from"./vendor-Cbm2kc8j.js";import{u as y}from"./index-CAmAqOsJ.js";import{S as x}from"./SEOHead-DfBpSINb.js";import{T as k,C as p}from"./TipBox-CSlg_9ru.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const b={id:"basics",title:"프롬프트 기본 원칙",titleEn:"Prompt Fundamentals",icon:"fa-lightbulb",sections:[{title:"프롬프트 엔지니어링이란?",titleEn:"What is Prompt Engineering?",content:`프롬프트 엔지니어링은 AI 모델에게 원하는 결과를 얻기 위해 입력(프롬프트)을 체계적으로 설계하는 기술입니다. 잘 작성된 프롬프트는 Claude의 능력을 최대한 활용할 수 있게 합니다.

### 프롬프트의 핵심 요소

1. **명확성(Clarity)**: 모호함 없이 구체적으로 지시합니다
2. **컨텍스트(Context)**: 충분한 배경 정보를 제공합니다
3. **구조(Structure)**: 논리적인 순서로 정보를 구성합니다
4. **예시(Examples)**: 기대하는 출력의 예시를 포함합니다
5. **제약 조건(Constraints)**: 출력의 형식, 길이, 스타일 등을 지정합니다

### 좋은 프롬프트 vs 나쁜 프롬프트

**나쁜 프롬프트:**
\`\`\`
코드 써줘
\`\`\`

**좋은 프롬프트:**
\`\`\`
Python으로 CSV 파일을 읽어서 날짜별 매출 합계를 계산하는 함수를 작성해줘.
- pandas 라이브러리 사용
- 입력: 파일 경로 (str)
- 출력: DataFrame (날짜, 매출합계 컬럼)
- 에러 처리 포함
- 독스트링 포함
\`\`\``,contentEn:`Prompt engineering is the systematic technique of designing inputs (prompts) to obtain desired results from AI models. Well-crafted prompts enable you to maximize Claude's capabilities.

### Key Elements of a Prompt

1. **Clarity**: Give specific instructions without ambiguity
2. **Context**: Provide sufficient background information
3. **Structure**: Organize information in a logical order
4. **Examples**: Include examples of expected output
5. **Constraints**: Specify output format, length, style, etc.

### Good Prompts vs Bad Prompts

**Bad Prompt:**
\`\`\`
Write some code
\`\`\`

**Good Prompt:**
\`\`\`
Write a Python function that reads a CSV file and calculates total sales by date.
- Use the pandas library
- Input: file path (str)
- Output: DataFrame (date, total_sales columns)
- Include error handling
- Include docstring
\`\`\``},{title:"기본 프롬프트 패턴",titleEn:"Basic Prompt Patterns",content:`### 역할 지정 패턴

Claude에게 특정 역할을 부여하면 해당 분야의 전문성을 발휘합니다:

\`\`\`
당신은 10년 경력의 시니어 백엔드 개발자입니다.
다음 코드를 리뷰하고 개선점을 제안해주세요.
\`\`\`

### 단계적 지시 패턴

복잡한 작업을 단계로 나누어 지시합니다:

\`\`\`
다음 단계에 따라 분석해주세요:
1. 먼저 데이터의 전체 구조를 파악하세요
2. 이상치를 식별하세요
3. 주요 패턴을 설명하세요
4. 개선 방안을 제안하세요
\`\`\`

### 출력 형식 지정 패턴

원하는 출력 형식을 명시합니다:

\`\`\`
다음 텍스트를 분석하고 결과를 JSON 형식으로 출력해주세요:
{
  "sentiment": "positive/negative/neutral",
  "confidence": 0.0-1.0,
  "key_topics": ["topic1", "topic2"],
  "summary": "한 문장 요약"
}
\`\`\`

### Few-shot 패턴

원하는 출력의 예시를 먼저 보여줍니다:

\`\`\`
다음 형식으로 제품 설명을 작성해줘:

예시 1:
제품: 무선 이어폰
설명: 끊김 없는 블루투스 5.3 연결로 몰입감 있는 음악 감상을 제공하는 프리미엄 무선 이어폰

예시 2:
제품: 스마트 워치
설명: 건강 모니터링과 알림 기능을 갖춘 세련된 디자인의 스마트 워치

이제 작성해줘:
제품: 노이즈 캔슬링 헤드폰
\`\`\``,contentEn:`### Role Assignment Pattern

Assigning a specific role to Claude draws out domain expertise:

\`\`\`
You are a senior backend developer with 10 years of experience.
Please review the following code and suggest improvements.
\`\`\`

### Step-by-Step Instruction Pattern

Break down complex tasks into steps:

\`\`\`
Please analyze following these steps:
1. First, understand the overall structure of the data
2. Identify outliers
3. Explain key patterns
4. Suggest improvement strategies
\`\`\`

### Output Format Specification Pattern

Specify the desired output format explicitly:

\`\`\`
Analyze the following text and output the results in JSON format:
{
  "sentiment": "positive/negative/neutral",
  "confidence": 0.0-1.0,
  "key_topics": ["topic1", "topic2"],
  "summary": "One sentence summary"
}
\`\`\`

### Few-shot Pattern

Show examples of desired output first:

\`\`\`
Write product descriptions in the following format:

Example 1:
Product: Wireless Earbuds
Description: Premium wireless earbuds delivering immersive music with seamless Bluetooth 5.3 connectivity

Example 2:
Product: Smart Watch
Description: Elegantly designed smart watch with health monitoring and notification features

Now write:
Product: Noise Cancelling Headphones
\`\`\``}]},v={id:"system-prompts",title:"시스템 프롬프트",titleEn:"System Prompts",icon:"fa-gear",sections:[{title:"시스템 프롬프트란?",titleEn:"What are System Prompts?",content:`시스템 프롬프트는 Claude에게 대화 전체에 걸쳐 적용되는 행동 지침, 역할, 제약 조건을 설정하는 특별한 프롬프트입니다. API 호출 시 \`system\` 파라미터로 전달됩니다.

### 시스템 프롬프트의 역할

- **페르소나 설정**: Claude의 역할과 전문성을 정의
- **행동 규칙**: 응답 시 따라야 할 규칙 설정
- **출력 형식**: 기본 응답 형식을 지정
- **제약 조건**: 하지 말아야 할 행동이나 범위 제한
- **톤과 스타일**: 응답의 어조와 스타일 설정

### 기본 구조

\`\`\`
당신은 [역할/페르소나]입니다.

## 핵심 지침
- [지침 1]
- [지침 2]

## 응답 규칙
- [규칙 1]
- [규칙 2]

## 제약 조건
- [제약 1]
- [제약 2]
\`\`\``,contentEn:`System prompts are special prompts that set behavioral guidelines, roles, and constraints for Claude throughout the entire conversation. They are passed via the \`system\` parameter in API calls.

### Role of System Prompts

- **Persona Setting**: Define Claude's role and expertise
- **Behavioral Rules**: Set rules to follow when responding
- **Output Format**: Specify default response format
- **Constraints**: Limit behaviors or scope
- **Tone and Style**: Set the tone and style of responses

### Basic Structure

\`\`\`
You are a [role/persona].

## Core Instructions
- [Instruction 1]
- [Instruction 2]

## Response Rules
- [Rule 1]
- [Rule 2]

## Constraints
- [Constraint 1]
- [Constraint 2]
\`\`\``},{title:"시스템 프롬프트 예시",titleEn:"System Prompt Examples",content:`### 코드 리뷰어

\`\`\`
당신은 시니어 소프트웨어 엔지니어로, 코드 리뷰를 전문으로 합니다.

## 리뷰 기준
- 코드 가독성 및 명명 규칙
- 성능 최적화 가능성
- 보안 취약점
- SOLID 원칙 준수 여부
- 테스트 가능성

## 응답 형식
각 이슈를 다음 형식으로 보고하세요:
- 🔴 심각: 반드시 수정 필요
- 🟡 경고: 수정 권장
- 🟢 제안: 개선 가능

## 규칙
- 항상 구체적인 코드 라인을 참조하세요
- 문제점뿐만 아니라 해결 방안도 제시하세요
- 잘된 부분도 인정하세요
\`\`\`

### 기술 문서 작성자

\`\`\`
당신은 기술 문서 전문 작성자입니다.

## 작성 원칙
- 명확하고 간결한 문장 사용
- 전문 용어는 첫 사용 시 설명 포함
- 실제 코드 예시 필수 포함
- 단계별 가이드 형식 선호

## 문서 구조
1. 개요
2. 사전 요구사항
3. 설치/설정
4. 사용 방법 (단계별)
5. 예시
6. 트러블슈팅
7. 참고 자료
\`\`\`

### API를 통한 시스템 프롬프트 설정

\`\`\`python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    system="당신은 친절한 한국어 교사입니다. 항상 예시와 함께 설명하세요.",
    messages=[
        {"role": "user", "content": "한국어에서 존댓말은 어떻게 사용하나요?"}
    ]
)
\`\`\``,contentEn:`### Code Reviewer

\`\`\`
You are a senior software engineer specializing in code reviews.

## Review Criteria
- Code readability and naming conventions
- Performance optimization opportunities
- Security vulnerabilities
- SOLID principle compliance
- Testability

## Response Format
Report each issue in the following format:
- 🔴 Critical: Must fix
- 🟡 Warning: Recommended fix
- 🟢 Suggestion: Can improve

## Rules
- Always reference specific code lines
- Provide solutions, not just problems
- Acknowledge well-written parts
\`\`\`

### Technical Documentation Writer

\`\`\`
You are a technical documentation specialist.

## Writing Principles
- Use clear, concise sentences
- Include explanations for technical terms on first use
- Always include real code examples
- Prefer step-by-step guide format

## Document Structure
1. Overview
2. Prerequisites
3. Installation/Setup
4. Usage (step-by-step)
5. Examples
6. Troubleshooting
7. References
\`\`\`

### Setting System Prompts via API

\`\`\`python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    system="You are a friendly English teacher. Always explain with examples.",
    messages=[
        {"role": "user", "content": "How do I use the present perfect tense?"}
    ]
)
\`\`\``}]},C={id:"xml-tags",title:"XML 태그 활용",titleEn:"XML Tag Usage",icon:"fa-code",sections:[{title:"XML 태그란?",titleEn:"What are XML Tags?",content:`XML 태그는 Claude 프롬프트에서 서로 다른 유형의 정보를 구분하고 구조화하는 데 사용되는 강력한 기법입니다. Claude는 XML 태그를 인식하고 구조화된 입력을 더 잘 처리합니다.

### XML 태그를 사용하는 이유

- **명확한 구분**: 지시사항, 컨텍스트, 입력 데이터를 명확히 분리
- **일관된 파싱**: Claude가 각 섹션의 역할을 정확히 이해
- **재사용성**: 동일한 구조의 프롬프트를 다양한 입력에 재사용
- **가독성**: 복잡한 프롬프트도 읽기 쉽게 구성

### 기본 문법

\`\`\`xml
<instructions>
여기에 Claude에게 전달할 지시사항을 작성합니다.
</instructions>

<context>
여기에 배경 정보나 참고 자료를 넣습니다.
</context>

<input>
여기에 처리할 실제 데이터를 넣습니다.
</input>
\`\`\``,contentEn:`XML tags are a powerful technique used in Claude prompts to separate and structure different types of information. Claude recognizes XML tags and processes structured input more effectively.

### Why Use XML Tags

- **Clear Separation**: Clearly separate instructions, context, and input data
- **Consistent Parsing**: Claude accurately understands the role of each section
- **Reusability**: Reuse the same prompt structure with different inputs
- **Readability**: Even complex prompts become easy to read

### Basic Syntax

\`\`\`xml
<instructions>
Write instructions for Claude here.
</instructions>

<context>
Place background information or references here.
</context>

<input>
Place the actual data to process here.
</input>
\`\`\``},{title:"일반적인 XML 태그 패턴",titleEn:"Common XML Tag Patterns",content:`### 문서 분석 패턴

\`\`\`xml
<document>
{{DOCUMENT_CONTENT}}
</document>

<instructions>
위 문서를 분석하고 다음을 수행하세요:
1. 핵심 주제 3가지를 식별하세요
2. 각 주제에 대한 요약을 작성하세요
3. 문서의 전체 톤을 평가하세요
</instructions>

<output_format>
## 핵심 주제
1. [주제] - [요약]
2. [주제] - [요약]
3. [주제] - [요약]

## 톤 평가
[평가 내용]
</output_format>
\`\`\`

### 코드 변환 패턴

\`\`\`xml
<source_code language="python">
def calculate_total(items):
    total = 0
    for item in items:
        total += item['price'] * item['quantity']
    return total
</source_code>

<instructions>
위 코드를 TypeScript로 변환해주세요.
타입 안전성을 보장하고 인터페이스를 정의하세요.
</instructions>
\`\`\`

### 다중 예시 패턴

\`\`\`xml
<examples>
  <example>
    <input>서울의 날씨는 어떻습니까?</input>
    <output>{"intent": "weather_query", "location": "서울"}</output>
  </example>
  <example>
    <input>내일 부산으로 항공편 예약해줘</input>
    <output>{"intent": "flight_booking", "destination": "부산", "date": "tomorrow"}</output>
  </example>
</examples>

<instructions>
위 예시를 참고하여 다음 입력을 분류하세요.
</instructions>

<input>
다음 주 제주도 호텔 추천해줘
</input>
\`\`\`

### 조건부 지시 패턴

\`\`\`xml
<instructions>
사용자 질문을 분석하고 적절히 응답하세요.

<if_technical>
기술적 질문인 경우 코드 예시를 포함하고 단계별로 설명하세요.
</if_technical>

<if_general>
일반 질문인 경우 간결하고 친근하게 답변하세요.
</if_general>
</instructions>
\`\`\``,contentEn:`### Document Analysis Pattern

\`\`\`xml
<document>
{{DOCUMENT_CONTENT}}
</document>

<instructions>
Analyze the above document and do the following:
1. Identify 3 key topics
2. Write a summary for each topic
3. Evaluate the overall tone of the document
</instructions>

<output_format>
## Key Topics
1. [Topic] - [Summary]
2. [Topic] - [Summary]
3. [Topic] - [Summary]

## Tone Evaluation
[Evaluation content]
</output_format>
\`\`\`

### Code Conversion Pattern

\`\`\`xml
<source_code language="python">
def calculate_total(items):
    total = 0
    for item in items:
        total += item['price'] * item['quantity']
    return total
</source_code>

<instructions>
Convert the above code to TypeScript.
Ensure type safety and define interfaces.
</instructions>
\`\`\`

### Multiple Examples Pattern

\`\`\`xml
<examples>
  <example>
    <input>What's the weather like in Seoul?</input>
    <output>{"intent": "weather_query", "location": "Seoul"}</output>
  </example>
  <example>
    <input>Book a flight to Busan tomorrow</input>
    <output>{"intent": "flight_booking", "destination": "Busan", "date": "tomorrow"}</output>
  </example>
</examples>

<instructions>
Classify the following input based on the examples above.
</instructions>

<input>
Recommend a hotel in Jeju next week
</input>
\`\`\`

### Conditional Instruction Pattern

\`\`\`xml
<instructions>
Analyze the user question and respond appropriately.

<if_technical>
For technical questions, include code examples and explain step by step.
</if_technical>

<if_general>
For general questions, respond concisely and in a friendly manner.
</if_general>
</instructions>
\`\`\``}]},T={id:"extended-thinking",title:"확장 사고",titleEn:"Extended Thinking",icon:"fa-brain",sections:[{title:"Extended Thinking이란?",titleEn:"What is Extended Thinking?",content:`Extended Thinking은 Claude가 응답하기 전에 내부적으로 깊이 있는 사고 과정을 거치도록 하는 기능입니다. 복잡한 추론, 수학 문제, 다단계 분석 등에서 더 정확한 결과를 제공합니다.

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
\`\`\``,contentEn:`Extended Thinking is a feature that allows Claude to go through an in-depth internal reasoning process before responding. It provides more accurate results for complex reasoning, math problems, multi-step analysis, and more.

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
\`\`\``},{title:"Extended Thinking 활용 팁",titleEn:"Extended Thinking Tips",content:`### 토큰 예산 설정

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
\`\`\``,contentEn:`### Token Budget Settings

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
\`\`\``}]},w={id:"chain-of-thought",title:"사고의 연쇄",titleEn:"Chain of Thought",icon:"fa-link",sections:[{title:"Chain of Thought(CoT) 기법",titleEn:"Chain of Thought (CoT) Technique",content:`Chain of Thought(CoT)는 Claude에게 최종 답변에 도달하기 전에 단계별 추론 과정을 거치도록 유도하는 프롬프트 기법입니다. 이는 Extended Thinking과 달리 프롬프트 수준에서 적용할 수 있습니다.

### CoT의 원리

1. 문제를 작은 하위 문제로 분해합니다
2. 각 단계를 순차적으로 풀어갑니다
3. 이전 단계의 결과를 다음 단계의 입력으로 사용합니다
4. 최종 결과를 도출합니다

### 기본 CoT 프롬프트

\`\`\`
다음 문제를 단계별로 생각하며 풀어주세요.
각 단계에서 어떤 추론을 하는지 명시하세요.

문제: 한 가게에서 사과 3개를 1,500원에, 바나나 5개를 2,000원에
판매합니다. 사과 12개와 바나나 20개를 구매하면 총 얼마인가요?
\`\`\`

### Zero-shot CoT

단순히 "단계별로 생각해보세요"를 추가하는 것만으로 추론 성능이 향상됩니다:

\`\`\`
이 논리 퍼즐을 풀어주세요. 단계별로 생각해보세요.

A는 B보다 키가 크고, C는 A보다 키가 작지만 D보다 큽니다.
B는 D보다 키가 큽니다. 키가 큰 순서대로 나열하세요.
\`\`\``,contentEn:`Chain of Thought (CoT) is a prompting technique that guides Claude through step-by-step reasoning before arriving at a final answer. Unlike Extended Thinking, this can be applied at the prompt level.

### CoT Principles

1. Decompose the problem into smaller sub-problems
2. Solve each step sequentially
3. Use the results of previous steps as input for the next step
4. Derive the final result

### Basic CoT Prompt

\`\`\`
Please solve the following problem by thinking step by step.
State what reasoning you are doing at each step.

Problem: A store sells 3 apples for $1.50 and 5 bananas for $2.00.
How much would it cost to buy 12 apples and 20 bananas?
\`\`\`

### Zero-shot CoT

Simply adding "think step by step" improves reasoning performance:

\`\`\`
Solve this logic puzzle. Think step by step.

A is taller than B, C is shorter than A but taller than D.
B is taller than D. List them in order from tallest to shortest.
\`\`\``},{title:"고급 CoT 기법",titleEn:"Advanced CoT Techniques",content:`### Self-Consistency

동일한 문제에 대해 여러 추론 경로를 생성하고 가장 일관된 답변을 선택합니다:

\`\`\`
다음 문제를 세 가지 다른 접근 방법으로 풀어주세요.
각 방법의 결과를 비교하고 가장 신뢰할 수 있는 답변을 선택하세요.

문제: [복잡한 문제]

방법 1: [첫 번째 접근]
방법 2: [두 번째 접근]
방법 3: [세 번째 접근]

최종 답변: [가장 일관된 결과]
\`\`\`

### Tree of Thought

여러 추론 경로를 탐색하고 각 경로를 평가합니다:

\`\`\`
다음 문제를 해결하기 위해 가능한 접근 방법들을 나열하세요.
각 접근 방법의 장단점을 평가하고 최적의 방법을 선택하세요.

<problem>
[문제 설명]
</problem>

<approach_evaluation>
접근법 A: [설명] → 장점: [...] / 단점: [...]
접근법 B: [설명] → 장점: [...] / 단점: [...]
접근법 C: [설명] → 장점: [...] / 단점: [...]
</approach_evaluation>

선택된 접근법으로 문제를 해결하세요.
\`\`\`

### 역추론(Backward Chaining)

목표에서 시작하여 역방향으로 추론합니다:

\`\`\`
목표 상태: 사용자가 성공적으로 결제를 완료한 상태

이 목표를 달성하기 위해 필요한 단계를 역순으로 나열하세요:
1. 마지막 단계: [결제 완료]
2. 그 전 단계: [결제 정보 확인]
3. 그 전 단계: [...]
...
첫 번째 단계: [...]
\`\`\`

### CoT와 Extended Thinking의 차이

| 특성 | Chain of Thought | Extended Thinking |
|------|-----------------|-------------------|
| **적용 방식** | 프롬프트에서 지시 | API 파라미터로 활성화 |
| **가시성** | 응답에 추론 과정 포함 | 별도 thinking 블록으로 반환 |
| **제어** | 프롬프트로 세밀한 제어 | 토큰 예산으로 제어 |
| **비용** | 출력 토큰에 포함 | 별도 thinking 토큰 사용 |
| **적합한 경우** | 추론 과정을 보여줘야 할 때 | 정확도가 최우선일 때 |`,contentEn:`### Self-Consistency

Generate multiple reasoning paths for the same problem and select the most consistent answer:

\`\`\`
Solve the following problem using three different approaches.
Compare the results of each method and select the most reliable answer.

Problem: [Complex problem]

Method 1: [First approach]
Method 2: [Second approach]
Method 3: [Third approach]

Final answer: [Most consistent result]
\`\`\`

### Tree of Thought

Explore multiple reasoning paths and evaluate each:

\`\`\`
List possible approaches to solve the following problem.
Evaluate the pros and cons of each approach and select the optimal one.

<problem>
[Problem description]
</problem>

<approach_evaluation>
Approach A: [Description] → Pros: [...] / Cons: [...]
Approach B: [Description] → Pros: [...] / Cons: [...]
Approach C: [Description] → Pros: [...] / Cons: [...]
</approach_evaluation>

Solve the problem using the selected approach.
\`\`\`

### Backward Chaining

Reason backwards from the goal:

\`\`\`
Goal state: User has successfully completed payment

List the steps needed to achieve this goal in reverse order:
1. Last step: [Payment complete]
2. Previous step: [Payment info confirmation]
3. Previous step: [...]
...
First step: [...]
\`\`\`

### CoT vs Extended Thinking

| Aspect | Chain of Thought | Extended Thinking |
|--------|-----------------|-------------------|
| **Application** | Instructed in prompt | Activated via API parameter |
| **Visibility** | Reasoning included in response | Returned in separate thinking block |
| **Control** | Fine-grained control via prompt | Controlled via token budget |
| **Cost** | Included in output tokens | Uses separate thinking tokens |
| **Best for** | When reasoning process should be shown | When accuracy is top priority |`}]},E={id:"tool-use",title:"도구 사용 프롬프트",titleEn:"Tool Use in Prompts",icon:"fa-wrench",sections:[{title:"Tool Use 개념",titleEn:"Tool Use Concepts",content:`Tool Use(함수 호출)는 Claude가 외부 도구나 API를 호출하여 실시간 정보를 가져오거나 작업을 수행할 수 있게 하는 기능입니다. 프롬프트 설계 시 도구의 정의와 사용 지침을 잘 작성하는 것이 중요합니다.

### Tool Use 워크플로우

1. **도구 정의**: 사용 가능한 도구의 이름, 설명, 파라미터를 정의합니다
2. **사용자 질문**: 사용자가 도구가 필요한 질문을 합니다
3. **도구 선택**: Claude가 적절한 도구를 선택하고 파라미터를 결정합니다
4. **도구 실행**: 애플리케이션이 도구를 실행하고 결과를 반환합니다
5. **응답 생성**: Claude가 도구 결과를 기반으로 최종 응답을 생성합니다

### 도구 정의 예시

\`\`\`json
{
  "name": "get_weather",
  "description": "지정된 도시의 현재 날씨 정보를 가져옵니다. 사용자가 날씨, 기온, 강수 확률 등을 물어볼 때 사용하세요.",
  "input_schema": {
    "type": "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "날씨를 조회할 도시 이름 (예: 서울, Tokyo, New York)"
      },
      "unit": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "온도 단위. 기본값은 celsius"
      }
    },
    "required": ["city"]
  }
}
\`\`\``,contentEn:`Tool Use (function calling) is a feature that enables Claude to call external tools or APIs to fetch real-time information or perform actions. When designing prompts, it is crucial to write clear tool definitions and usage guidelines.

### Tool Use Workflow

1. **Tool Definition**: Define available tools with names, descriptions, and parameters
2. **User Query**: User asks a question that requires a tool
3. **Tool Selection**: Claude selects the appropriate tool and determines parameters
4. **Tool Execution**: Application executes the tool and returns results
5. **Response Generation**: Claude generates a final response based on tool results

### Tool Definition Example

\`\`\`json
{
  "name": "get_weather",
  "description": "Retrieves current weather information for a specified city. Use when the user asks about weather, temperature, precipitation chances, etc.",
  "input_schema": {
    "type": "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "City name to check weather for (e.g., Seoul, Tokyo, New York)"
      },
      "unit": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "Temperature unit. Default is celsius"
      }
    },
    "required": ["city"]
  }
}
\`\`\``},{title:"효과적인 도구 정의 작성법",titleEn:"Writing Effective Tool Definitions",content:`### 도구 설명 작성 가이드라인

**좋은 설명:**
\`\`\`
"description": "사용자의 주문 ID를 기반으로 주문 상태를 조회합니다.
배송 상태, 예상 도착일, 추적 번호를 포함합니다.
주문 ID가 'ORD-'로 시작하지 않으면 유효하지 않은 주문입니다."
\`\`\`

**나쁜 설명:**
\`\`\`
"description": "주문을 조회합니다"
\`\`\`

### 파라미터 설명 팁

- **구체적인 예시 포함**: 파라미터에 예시 값을 포함하세요
- **유효한 범위 명시**: 값의 범위나 형식을 명확히 합니다
- **기본값 설명**: 선택적 파라미터의 기본 동작을 설명합니다

### 다중 도구 활용 패턴

여러 도구를 조합하여 복잡한 작업을 수행하도록 합니다:

\`\`\`python
tools = [
    {
        "name": "search_products",
        "description": "키워드로 제품을 검색합니다. 검색 결과에는 제품 ID, 이름, 가격이 포함됩니다.",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "검색 키워드"},
                "category": {"type": "string", "description": "제품 카테고리 필터"},
                "max_results": {"type": "integer", "description": "최대 결과 수 (기본: 10)"}
            },
            "required": ["query"]
        }
    },
    {
        "name": "get_product_details",
        "description": "제품 ID로 상세 정보를 조회합니다. 사양, 리뷰, 재고 상태를 포함합니다.",
        "input_schema": {
            "type": "object",
            "properties": {
                "product_id": {"type": "string", "description": "제품 고유 ID"}
            },
            "required": ["product_id"]
        }
    },
    {
        "name": "add_to_cart",
        "description": "제품을 장바구니에 추가합니다.",
        "input_schema": {
            "type": "object",
            "properties": {
                "product_id": {"type": "string", "description": "제품 고유 ID"},
                "quantity": {"type": "integer", "description": "수량 (기본: 1)"}
            },
            "required": ["product_id"]
        }
    }
]
\`\`\`

> **팁**: 도구 설명이 상세할수록 Claude가 적절한 시점에 올바른 도구를 선택할 확률이 높아집니다.`,contentEn:`### Tool Description Writing Guidelines

**Good Description:**
\`\`\`
"description": "Retrieves order status based on the user's order ID.
Includes shipping status, estimated arrival date, and tracking number.
If the order ID does not start with 'ORD-', the order is invalid."
\`\`\`

**Bad Description:**
\`\`\`
"description": "Looks up an order"
\`\`\`

### Parameter Description Tips

- **Include specific examples**: Include example values for parameters
- **Specify valid ranges**: Clarify the range or format of values
- **Describe defaults**: Explain default behavior of optional parameters

### Multi-Tool Usage Pattern

Combine multiple tools to perform complex tasks:

\`\`\`python
tools = [
    {
        "name": "search_products",
        "description": "Search for products by keyword. Results include product ID, name, and price.",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Search keyword"},
                "category": {"type": "string", "description": "Product category filter"},
                "max_results": {"type": "integer", "description": "Maximum results (default: 10)"}
            },
            "required": ["query"]
        }
    },
    {
        "name": "get_product_details",
        "description": "Retrieve detailed information by product ID. Includes specs, reviews, and stock status.",
        "input_schema": {
            "type": "object",
            "properties": {
                "product_id": {"type": "string", "description": "Unique product ID"}
            },
            "required": ["product_id"]
        }
    },
    {
        "name": "add_to_cart",
        "description": "Add a product to the shopping cart.",
        "input_schema": {
            "type": "object",
            "properties": {
                "product_id": {"type": "string", "description": "Unique product ID"},
                "quantity": {"type": "integer", "description": "Quantity (default: 1)"}
            },
            "required": ["product_id"]
        }
    }
]
\`\`\`

> **Tip**: The more detailed the tool description, the higher the chance Claude selects the right tool at the right time.`}]},P={id:"best-practices",title:"베스트 프랙티스",titleEn:"Best Practices",icon:"fa-star",sections:[{title:"프롬프트 최적화 원칙",titleEn:"Prompt Optimization Principles",content:`### 1. 명확하고 직접적으로 지시하기

Claude는 명확한 지시를 선호합니다. 불필요한 예의 표현이나 우회적 표현 대신 직접적으로 요청하세요.

**비효율적:**
\`\`\`
혹시 가능하시다면, 이 코드를 살펴봐 주시겠어요?
어쩌면 몇 가지 개선점이 있을 수도 있을 것 같은데요.
\`\`\`

**효율적:**
\`\`\`
이 코드를 리뷰하고 다음 관점에서 개선점을 제시하세요:
1. 성능
2. 가독성
3. 에러 처리
\`\`\`

### 2. 충분한 컨텍스트 제공하기

Claude는 더 많은 관련 정보가 있을수록 더 정확한 응답을 생성합니다:

\`\`\`
<context>
프로젝트: React 기반 e-commerce 플랫폼
기술 스택: React 18, TypeScript, Redux Toolkit, RTK Query
대상 사용자: 모바일 위주의 20-30대 사용자
</context>

<task>
장바구니 페이지의 성능을 최적화하는 방안을 제안하세요.
</task>
\`\`\`

### 3. 원하지 않는 것 대신 원하는 것을 말하기

**비효율적:**
\`\`\`
너무 기술적으로 쓰지 마세요. 전문 용어를 사용하지 마세요.
\`\`\`

**효율적:**
\`\`\`
비기술직 독자도 이해할 수 있도록 일상적인 언어로 설명하세요.
전문 용어가 필요한 경우 간단한 정의를 괄호 안에 포함하세요.
\`\`\``,contentEn:`### 1. Give Clear, Direct Instructions

Claude prefers clear instructions. Instead of unnecessary politeness or roundabout expressions, make direct requests.

**Inefficient:**
\`\`\`
If it's not too much trouble, could you maybe take a look at this code?
There might perhaps be a few improvements that could possibly be made.
\`\`\`

**Efficient:**
\`\`\`
Review this code and suggest improvements in the following areas:
1. Performance
2. Readability
3. Error handling
\`\`\`

### 2. Provide Sufficient Context

Claude generates more accurate responses with more relevant information:

\`\`\`
<context>
Project: React-based e-commerce platform
Tech stack: React 18, TypeScript, Redux Toolkit, RTK Query
Target users: Mobile-first users in their 20s-30s
</context>

<task>
Suggest ways to optimize the shopping cart page performance.
</task>
\`\`\`

### 3. Say What You Want, Not What You Don't Want

**Inefficient:**
\`\`\`
Don't be too technical. Don't use jargon.
\`\`\`

**Efficient:**
\`\`\`
Explain in everyday language that non-technical readers can understand.
If technical terms are necessary, include brief definitions in parentheses.
\`\`\``},{title:"고급 프롬프트 테크닉",titleEn:"Advanced Prompt Techniques",content:`### 프롬프트 체이닝

복잡한 작업을 여러 단계의 프롬프트로 나누어 순차적으로 수행합니다:

**1단계: 데이터 추출**
\`\`\`
다음 이메일에서 핵심 정보를 추출하세요: 발신자, 주제, 요청 사항, 마감일
\`\`\`

**2단계: 분류**
\`\`\`
추출된 정보를 기반으로 우선순위를 분류하세요: 긴급, 중요, 일반
\`\`\`

**3단계: 액션 생성**
\`\`\`
분류 결과를 기반으로 각 항목에 대한 구체적 액션 아이템을 생성하세요
\`\`\`

### 메타 프롬프팅

Claude에게 프롬프트를 생성하게 합니다:

\`\`\`
다음 작업을 수행하는 최적의 프롬프트를 작성해주세요:
- 목표: 고객 리뷰에서 감성 분석 수행
- 출력: 구조화된 JSON
- 요구사항: 긍정/부정/중립 분류, 핵심 키워드 추출, 신뢰도 점수
\`\`\`

### 자기 검증 패턴

Claude에게 자신의 답변을 검증하도록 요청합니다:

\`\`\`
<task>
다음 질문에 답변하고, 답변의 정확성을 스스로 검증하세요.

질문: [질문 내용]
</task>

<verification>
답변을 완료한 후 다음을 확인하세요:
1. 사실적 오류는 없는가?
2. 논리적 비약은 없는가?
3. 불확실한 정보에 대해 명시했는가?
4. 질문의 모든 부분에 답했는가?
</verification>
\`\`\`

### 일반적인 실수와 해결법

| 실수 | 해결법 |
|------|--------|
| 너무 모호한 지시 | 구체적인 요구사항과 예시 추가 |
| 과도한 정보 제공 | 관련 정보만 선별하여 제공 |
| 형식 미지정 | 출력 형식을 명시적으로 지정 |
| 컨텍스트 부족 | 배경, 대상, 목적을 명시 |
| 단일 프롬프트로 모든 것 | 복잡한 작업은 단계별로 분리 |`,contentEn:`### Prompt Chaining

Break complex tasks into multiple prompt steps executed sequentially:

**Step 1: Data Extraction**
\`\`\`
Extract key information from the following email: sender, subject, requests, deadline
\`\`\`

**Step 2: Classification**
\`\`\`
Based on the extracted information, classify priority: urgent, important, normal
\`\`\`

**Step 3: Action Generation**
\`\`\`
Based on the classification results, generate specific action items for each entry
\`\`\`

### Meta-Prompting

Have Claude generate prompts for you:

\`\`\`
Write an optimal prompt for the following task:
- Goal: Perform sentiment analysis on customer reviews
- Output: Structured JSON
- Requirements: Positive/negative/neutral classification, key keyword extraction, confidence score
\`\`\`

### Self-Verification Pattern

Ask Claude to verify its own answer:

\`\`\`
<task>
Answer the following question and verify your answer's accuracy.

Question: [Question content]
</task>

<verification>
After completing your answer, verify the following:
1. Are there any factual errors?
2. Are there any logical leaps?
3. Did you flag uncertain information?
4. Did you answer all parts of the question?
</verification>
\`\`\`

### Common Mistakes and Solutions

| Mistake | Solution |
|---------|----------|
| Too vague instructions | Add specific requirements and examples |
| Too much information | Provide only relevant information |
| Unspecified format | Explicitly specify output format |
| Lack of context | State background, audience, and purpose |
| Everything in one prompt | Break complex tasks into stages |`}]},c=[b,v,C,T,w,E,P];function q(){const{language:u}=y(),n=u==="ko",[i,a]=f.useState(0),r=c[i],d={code({inline:t,className:o,children:s,...m}){const l=/language-(\w+)/.exec(o||"");return!t&&l?e.jsx(p,{code:String(s).replace(/\n$/,""),language:l[1]}):!t&&!l&&String(s).includes(`
`)?e.jsx(p,{code:String(s).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...m,children:s})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(k,{type:"tip",children:t})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(x,{title:n?"프롬프트 엔지니어링 가이드":"Prompt Engineering Guide",path:"/prompt-engineering"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:n?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:c.map((t,o)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${o===i?"active":""}`,onClick:()=>a(o),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`}),n?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:n?r.title:r.titleEn})}),r.sections.map((t,o)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:n?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(h,{remarkPlugins:[g],components:d,children:n?t.content:t.contentEn})})]},o)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:i===0,onClick:()=>a(i-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",n?"이전":"Previous"]}),e.jsxs("button",{disabled:i===c.length-1,onClick:()=>a(i+1),children:[n?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{q as default};
