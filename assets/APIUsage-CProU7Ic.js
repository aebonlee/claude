import{j as e,M as g,r as h}from"./markdown-Bb6HBFF6.js";import{b as y}from"./vendor-Cbm2kc8j.js";import{u as _}from"./index-DqrBKmu7.js";import{S as x}from"./SEOHead-DfBpSINb.js";import{T as f,C as p}from"./TipBox-CSlg_9ru.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const k={id:"getting-started",title:"API 시작하기",titleEn:"Getting Started",icon:"fa-rocket",sections:[{title:"Anthropic API 소개",titleEn:"Introduction to the Anthropic API",content:`Anthropic API를 사용하면 Claude 모델을 자신의 애플리케이션에 직접 통합할 수 있습니다. 대화형 AI, 콘텐츠 생성, 코드 작성, 데이터 분석 등 다양한 기능을 프로그래밍 방식으로 활용할 수 있습니다.

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
\`\`\``,contentEn:`The Anthropic API allows you to integrate Claude models directly into your applications. You can programmatically leverage capabilities like conversational AI, content generation, code writing, data analysis, and more.

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
\`\`\``},{title:"사용 가능한 모델",titleEn:"Available Models",content:`### Claude 모델 패밀리

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
| Tier 4 | 4,000 | 400,000 | 80,000 |`,contentEn:`### Claude Model Family

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
| Tier 4 | 4,000 | 400,000 | 80,000 |`}]},A={id:"messages-api",title:"Messages API",titleEn:"Messages API",icon:"fa-comments",sections:[{title:"Messages API 기본",titleEn:"Messages API Basics",content:`Messages API는 Claude와 대화하기 위한 핵심 엔드포인트입니다. 멀티턴 대화, 시스템 프롬프트, 다양한 콘텐츠 유형을 지원합니다.

### 기본 요청 구조

\`\`\`python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    system="당신은 도움이 되는 AI 어시스턴트입니다.",
    messages=[
        {
            "role": "user",
            "content": "Python에서 리스트 컴프리헨션을 설명해주세요."
        }
    ]
)

print(response.content[0].text)
\`\`\`

### 주요 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|----------|------|------|------|
| \`model\` | string | O | 사용할 모델 ID |
| \`max_tokens\` | integer | O | 최대 출력 토큰 수 |
| \`messages\` | array | O | 대화 메시지 배열 |
| \`system\` | string | X | 시스템 프롬프트 |
| \`temperature\` | float | X | 응답 랜덤성 (0.0-1.0) |
| \`top_p\` | float | X | 누적 확률 샘플링 |
| \`stop_sequences\` | array | X | 생성 중단 시퀀스 |
| \`metadata\` | object | X | 요청 메타데이터 |

### 응답 구조

\`\`\`json
{
  "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "리스트 컴프리헨션은..."
    }
  ],
  "model": "claude-sonnet-4-20250514",
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 25,
    "output_tokens": 150
  }
}
\`\`\``,contentEn:`Messages API is the core endpoint for conversing with Claude. It supports multi-turn conversations, system prompts, and various content types.

### Basic Request Structure

\`\`\`python
import anthropic

client = anthropic.Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    system="You are a helpful AI assistant.",
    messages=[
        {
            "role": "user",
            "content": "Explain list comprehensions in Python."
        }
    ]
)

print(response.content[0].text)
\`\`\`

### Key Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| \`model\` | string | Yes | Model ID to use |
| \`max_tokens\` | integer | Yes | Maximum output tokens |
| \`messages\` | array | Yes | Conversation messages array |
| \`system\` | string | No | System prompt |
| \`temperature\` | float | No | Response randomness (0.0-1.0) |
| \`top_p\` | float | No | Nucleus sampling threshold |
| \`stop_sequences\` | array | No | Stop generation sequences |
| \`metadata\` | object | No | Request metadata |

### Response Structure

\`\`\`json
{
  "id": "msg_01XFDUDYJgAACzvnptvVoYEL",
  "type": "message",
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "List comprehension is..."
    }
  ],
  "model": "claude-sonnet-4-20250514",
  "stop_reason": "end_turn",
  "usage": {
    "input_tokens": 25,
    "output_tokens": 150
  }
}
\`\`\``},{title:"멀티턴 대화",titleEn:"Multi-turn Conversations",content:`### 대화 이력 관리

Claude API는 상태를 유지하지 않으므로(stateless), 이전 대화를 유지하려면 전체 대화 이력을 매번 전송해야 합니다.

\`\`\`python
import anthropic

client = anthropic.Anthropic()

# 대화 이력 관리
conversation = []

def chat(user_message):
    conversation.append({
        "role": "user",
        "content": user_message
    })

    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        system="당신은 Python 프로그래밍 튜터입니다.",
        messages=conversation
    )

    assistant_message = response.content[0].text
    conversation.append({
        "role": "assistant",
        "content": assistant_message
    })

    return assistant_message

# 멀티턴 대화 예시
print(chat("데코레이터란 무엇인가요?"))
print(chat("간단한 예시를 보여주세요."))
print(chat("실전에서는 어떻게 사용하나요?"))
\`\`\`

### 대화 이력 최적화

대화가 길어지면 토큰 사용량이 증가합니다. 다음 전략을 고려하세요:

- **요약**: 오래된 대화를 요약하여 컨텍스트 길이를 줄입니다
- **슬라이딩 윈도우**: 최근 N개의 메시지만 유지합니다
- **관련 메시지 선별**: 현재 질문과 관련된 이전 메시지만 포함합니다

\`\`\`python
def optimize_conversation(messages, max_messages=10):
    """최근 N개의 메시지만 유지하는 간단한 최적화"""
    if len(messages) > max_messages:
        # 첫 메시지(컨텍스트)와 최근 메시지만 유지
        return messages[:1] + messages[-(max_messages - 1):]
    return messages
\`\`\``,contentEn:`### Managing Conversation History

The Claude API is stateless, so to maintain previous conversations, you must send the complete conversation history with each request.

\`\`\`python
import anthropic

client = anthropic.Anthropic()

# Manage conversation history
conversation = []

def chat(user_message):
    conversation.append({
        "role": "user",
        "content": user_message
    })

    response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        system="You are a Python programming tutor.",
        messages=conversation
    )

    assistant_message = response.content[0].text
    conversation.append({
        "role": "assistant",
        "content": assistant_message
    })

    return assistant_message

# Multi-turn conversation example
print(chat("What are decorators?"))
print(chat("Show me a simple example."))
print(chat("How are they used in practice?"))
\`\`\`

### Conversation History Optimization

As conversations get longer, token usage increases. Consider these strategies:

- **Summarization**: Summarize older messages to reduce context length
- **Sliding Window**: Keep only the most recent N messages
- **Relevant Selection**: Include only previous messages relevant to the current question

\`\`\`python
def optimize_conversation(messages, max_messages=10):
    """Simple optimization to keep only the last N messages"""
    if len(messages) > max_messages:
        # Keep first message (context) and recent messages only
        return messages[:1] + messages[-(max_messages - 1):]
    return messages
\`\`\``}]},P={id:"streaming",title:"스트리밍",titleEn:"Streaming",icon:"fa-stream",sections:[{title:"스트리밍 응답",titleEn:"Streaming Responses",content:`스트리밍을 사용하면 Claude의 응답을 생성되는 즉시 토큰 단위로 받아볼 수 있습니다. 긴 응답의 체감 응답 시간을 크게 줄여줍니다.

### Python에서 스트리밍

\`\`\`python
import anthropic

client = anthropic.Anthropic()

# 기본 스트리밍
with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "재귀 알고리즘에 대해 자세히 설명해주세요."}
    ]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
\`\`\`

### TypeScript에서 스트리밍

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const stream = client.messages.stream({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Explain recursive algorithms in detail.' }
  ]
});

for await (const event of stream) {
  if (event.type === 'content_block_delta' &&
      event.delta.type === 'text_delta') {
    process.stdout.write(event.delta.text);
  }
}
\`\`\`

### 스트리밍 이벤트 유형

| 이벤트 | 설명 |
|--------|------|
| \`message_start\` | 메시지 생성 시작 |
| \`content_block_start\` | 콘텐츠 블록 시작 |
| \`content_block_delta\` | 콘텐츠 업데이트 (텍스트 토큰) |
| \`content_block_stop\` | 콘텐츠 블록 완료 |
| \`message_delta\` | 메시지 메타데이터 업데이트 |
| \`message_stop\` | 메시지 완료 |`,contentEn:`Streaming allows you to receive Claude's response token by token as it is generated. This significantly reduces the perceived response time for long responses.

### Streaming in Python

\`\`\`python
import anthropic

client = anthropic.Anthropic()

# Basic streaming
with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain recursive algorithms in detail."}
    ]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
\`\`\`

### Streaming in TypeScript

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

const stream = client.messages.stream({
  model: 'claude-sonnet-4-20250514',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Explain recursive algorithms in detail.' }
  ]
});

for await (const event of stream) {
  if (event.type === 'content_block_delta' &&
      event.delta.type === 'text_delta') {
    process.stdout.write(event.delta.text);
  }
}
\`\`\`

### Streaming Event Types

| Event | Description |
|-------|-------------|
| \`message_start\` | Message generation begins |
| \`content_block_start\` | Content block starts |
| \`content_block_delta\` | Content update (text tokens) |
| \`content_block_stop\` | Content block complete |
| \`message_delta\` | Message metadata update |
| \`message_stop\` | Message complete |`},{title:"고급 스트리밍 패턴",titleEn:"Advanced Streaming Patterns",content:`### 이벤트 핸들러 패턴

Python SDK는 콜백 기반의 이벤트 핸들링을 지원합니다:

\`\`\`python
import anthropic

client = anthropic.Anthropic()

collected_text = []

with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Python 비동기 프로그래밍을 설명해주세요."}
    ]
) as stream:
    for text in stream.text_stream:
        collected_text.append(text)
        print(text, end="", flush=True)

# 전체 응답 및 사용량 정보
final_message = stream.get_final_message()
print(f"\\n\\n입력 토큰: {final_message.usage.input_tokens}")
print(f"출력 토큰: {final_message.usage.output_tokens}")
print(f"종료 사유: {final_message.stop_reason}")
\`\`\`

### 웹 애플리케이션에서의 스트리밍 (SSE)

Server-Sent Events를 활용한 웹 스트리밍 구현:

\`\`\`python
# FastAPI 예시
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import anthropic

app = FastAPI()
client = anthropic.Anthropic()

@app.post("/chat/stream")
async def chat_stream(request: dict):
    async def generate():
        with client.messages.stream(
            model="claude-sonnet-4-20250514",
            max_tokens=1024,
            messages=request["messages"]
        ) as stream:
            for text in stream.text_stream:
                yield f"data: {text}\\n\\n"
        yield "data: [DONE]\\n\\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream"
    )
\`\`\`

### 프론트엔드 SSE 수신

\`\`\`javascript
const response = await fetch('/chat/stream', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages })
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  const chunk = decoder.decode(value);
  const lines = chunk.split('\\n');

  for (const line of lines) {
    if (line.startsWith('data: ') && line !== 'data: [DONE]') {
      const text = line.slice(6);
      document.getElementById('output').textContent += text;
    }
  }
}
\`\`\``,contentEn:`### Event Handler Pattern

The Python SDK supports callback-based event handling:

\`\`\`python
import anthropic

client = anthropic.Anthropic()

collected_text = []

with client.messages.stream(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Explain Python async programming."}
    ]
) as stream:
    for text in stream.text_stream:
        collected_text.append(text)
        print(text, end="", flush=True)

# Full response and usage info
final_message = stream.get_final_message()
print(f"\\n\\nInput tokens: {final_message.usage.input_tokens}")
print(f"Output tokens: {final_message.usage.output_tokens}")
print(f"Stop reason: {final_message.stop_reason}")
\`\`\`

### Streaming in Web Applications (SSE)

Web streaming implementation using Server-Sent Events:

\`\`\`python
# FastAPI example
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import anthropic

app = FastAPI()
client = anthropic.Anthropic()

@app.post("/chat/stream")
async def chat_stream(request: dict):
    async def generate():
        with client.messages.stream(
            model="claude-sonnet-4-20250514",
            max_tokens=1024,
            messages=request["messages"]
        ) as stream:
            for text in stream.text_stream:
                yield f"data: {text}\\n\\n"
        yield "data: [DONE]\\n\\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream"
    )
\`\`\`

### Frontend SSE Reception

\`\`\`javascript
const response = await fetch('/chat/stream', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ messages })
});

const reader = response.body.getReader();
const decoder = new TextDecoder();

while (true) {
  const { done, value } = await reader.read();
  if (done) break;

  const chunk = decoder.decode(value);
  const lines = chunk.split('\\n');

  for (const line of lines) {
    if (line.startsWith('data: ') && line !== 'data: [DONE]') {
      const text = line.slice(6);
      document.getElementById('output').textContent += text;
    }
  }
}
\`\`\``}]},b={id:"tool-use-api",title:"Tool Use API",titleEn:"Tool Use API",icon:"fa-wrench",sections:[{title:"Tool Use 구현",titleEn:"Implementing Tool Use",content:`Tool Use를 사용하면 Claude가 사전 정의된 도구(함수)를 호출하여 외부 시스템과 상호작용할 수 있습니다.

### 기본 구현

\`\`\`python
import anthropic
import json

client = anthropic.Anthropic()

# 1. 도구 정의
tools = [
    {
        "name": "get_stock_price",
        "description": "주어진 종목 코드의 현재 주가를 조회합니다.",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {
                    "type": "string",
                    "description": "종목 코드 (예: AAPL, GOOGL, MSFT)"
                }
            },
            "required": ["ticker"]
        }
    }
]

# 2. 도구 실행 함수 (실제 구현)
def get_stock_price(ticker):
    # 실제로는 주식 API를 호출
    prices = {"AAPL": 195.23, "GOOGL": 141.80, "MSFT": 415.60}
    return {"ticker": ticker, "price": prices.get(ticker, 0), "currency": "USD"}

# 3. Claude에게 도구와 함께 질문
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=tools,
    messages=[
        {"role": "user", "content": "Apple과 Microsoft의 현재 주가를 알려줘."}
    ]
)

# 4. 도구 호출 처리
if response.stop_reason == "tool_use":
    tool_results = []
    for block in response.content:
        if block.type == "tool_use":
            # 도구 실행
            result = get_stock_price(block.input["ticker"])
            tool_results.append({
                "type": "tool_result",
                "tool_use_id": block.id,
                "content": json.dumps(result)
            })

    # 5. 도구 결과를 Claude에게 전달
    final_response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        tools=tools,
        messages=[
            {"role": "user", "content": "Apple과 Microsoft의 현재 주가를 알려줘."},
            {"role": "assistant", "content": response.content},
            {"role": "user", "content": tool_results}
        ]
    )
    print(final_response.content[0].text)
\`\`\``,contentEn:`Tool Use allows Claude to call predefined tools (functions) to interact with external systems.

### Basic Implementation

\`\`\`python
import anthropic
import json

client = anthropic.Anthropic()

# 1. Define tools
tools = [
    {
        "name": "get_stock_price",
        "description": "Retrieves the current stock price for a given ticker symbol.",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {
                    "type": "string",
                    "description": "Stock ticker symbol (e.g., AAPL, GOOGL, MSFT)"
                }
            },
            "required": ["ticker"]
        }
    }
]

# 2. Tool execution function (actual implementation)
def get_stock_price(ticker):
    # In practice, would call a stock API
    prices = {"AAPL": 195.23, "GOOGL": 141.80, "MSFT": 415.60}
    return {"ticker": ticker, "price": prices.get(ticker, 0), "currency": "USD"}

# 3. Ask Claude with tools
response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=tools,
    messages=[
        {"role": "user", "content": "Tell me the current stock prices of Apple and Microsoft."}
    ]
)

# 4. Handle tool calls
if response.stop_reason == "tool_use":
    tool_results = []
    for block in response.content:
        if block.type == "tool_use":
            # Execute tool
            result = get_stock_price(block.input["ticker"])
            tool_results.append({
                "type": "tool_result",
                "tool_use_id": block.id,
                "content": json.dumps(result)
            })

    # 5. Send tool results back to Claude
    final_response = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        tools=tools,
        messages=[
            {"role": "user", "content": "Tell me the current stock prices of Apple and Microsoft."},
            {"role": "assistant", "content": response.content},
            {"role": "user", "content": tool_results}
        ]
    )
    print(final_response.content[0].text)
\`\`\``},{title:"Tool Use 고급 패턴",titleEn:"Advanced Tool Use Patterns",content:`### 도구 호출 루프

Claude가 여러 도구를 순차적으로 호출해야 할 때 사용하는 루프 패턴:

\`\`\`python
import anthropic
import json

client = anthropic.Anthropic()

def process_tool_call(name, input_data):
    """도구 실행을 처리하는 디스패처"""
    tool_functions = {
        "search_database": search_database,
        "calculate": calculate,
        "send_email": send_email,
    }
    return tool_functions[name](**input_data)

def run_agent(user_message, tools, max_iterations=10):
    messages = [{"role": "user", "content": user_message}]

    for _ in range(max_iterations):
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4096,
            tools=tools,
            messages=messages
        )

        # 도구 호출이 없으면 최종 응답 반환
        if response.stop_reason == "end_turn":
            return response.content[0].text

        # 도구 호출 처리
        messages.append({"role": "assistant", "content": response.content})

        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result = process_tool_call(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": json.dumps(result)
                })

        messages.append({"role": "user", "content": tool_results})

    return "최대 반복 횟수에 도달했습니다."
\`\`\`

### tool_choice 파라미터

Claude의 도구 사용 방식을 제어합니다:

\`\`\`python
# 자동 선택 (기본값) - Claude가 필요할 때 도구 사용
tool_choice={"type": "auto"}

# 강제 사용 - 반드시 도구를 사용하도록 강제
tool_choice={"type": "any"}

# 특정 도구 강제 - 지정된 도구만 사용
tool_choice={"type": "tool", "name": "get_weather"}
\`\`\`

### 에러 처리

도구 실행 실패 시 에러를 Claude에게 전달합니다:

\`\`\`python
tool_results.append({
    "type": "tool_result",
    "tool_use_id": block.id,
    "content": json.dumps({"error": "데이터베이스 연결 실패"}),
    "is_error": True
})
\`\`\`

> **팁**: \`is_error: True\`를 설정하면 Claude가 에러 상황을 이해하고 사용자에게 적절히 안내합니다.`,contentEn:`### Tool Call Loop

A loop pattern used when Claude needs to call multiple tools sequentially:

\`\`\`python
import anthropic
import json

client = anthropic.Anthropic()

def process_tool_call(name, input_data):
    """Dispatcher to handle tool execution"""
    tool_functions = {
        "search_database": search_database,
        "calculate": calculate,
        "send_email": send_email,
    }
    return tool_functions[name](**input_data)

def run_agent(user_message, tools, max_iterations=10):
    messages = [{"role": "user", "content": user_message}]

    for _ in range(max_iterations):
        response = client.messages.create(
            model="claude-sonnet-4-20250514",
            max_tokens=4096,
            tools=tools,
            messages=messages
        )

        # If no tool calls, return the final response
        if response.stop_reason == "end_turn":
            return response.content[0].text

        # Handle tool calls
        messages.append({"role": "assistant", "content": response.content})

        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result = process_tool_call(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": json.dumps(result)
                })

        messages.append({"role": "user", "content": tool_results})

    return "Maximum iterations reached."
\`\`\`

### tool_choice Parameter

Controls how Claude uses tools:

\`\`\`python
# Auto selection (default) - Claude uses tools when needed
tool_choice={"type": "auto"}

# Forced usage - Force Claude to use a tool
tool_choice={"type": "any"}

# Specific tool forced - Only use the specified tool
tool_choice={"type": "tool", "name": "get_weather"}
\`\`\`

### Error Handling

Pass errors back to Claude when tool execution fails:

\`\`\`python
tool_results.append({
    "type": "tool_result",
    "tool_use_id": block.id,
    "content": json.dumps({"error": "Database connection failed"}),
    "is_error": True
})
\`\`\`

> **Tip**: Setting \`is_error: True\` helps Claude understand the error situation and guide the user appropriately.`}]},S={id:"vision",title:"비전 (이미지 입력)",titleEn:"Vision (Image Input)",icon:"fa-image",sections:[{title:"이미지 입력 기능",titleEn:"Image Input Feature",content:`Claude는 이미지를 분석하고 이해할 수 있는 멀티모달 능력을 갖추고 있습니다. API를 통해 이미지를 전송하면 내용 설명, OCR, 다이어그램 해석, 코드 스크린샷 분석 등 다양한 작업을 수행합니다.

### 지원되는 이미지 형식

| 형식 | MIME 타입 | 최대 크기 |
|------|-----------|-----------|
| JPEG | image/jpeg | 20MB |
| PNG | image/png | 20MB |
| GIF | image/gif | 20MB |
| WebP | image/webp | 20MB |

### Base64 인코딩으로 이미지 전송

\`\`\`python
import anthropic
import base64

client = anthropic.Anthropic()

# 이미지 파일을 Base64로 인코딩
with open("screenshot.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": "image/png",
                        "data": image_data
                    }
                },
                {
                    "type": "text",
                    "text": "이 스크린샷에서 에러 메시지를 분석해주세요."
                }
            ]
        }
    ]
)

print(message.content[0].text)
\`\`\`

### URL로 이미지 전송

\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "url",
                        "url": "https://example.com/diagram.png"
                    }
                },
                {
                    "type": "text",
                    "text": "이 다이어그램을 설명해주세요."
                }
            ]
        }
    ]
)
\`\`\``,contentEn:`Claude has multimodal capabilities that allow it to analyze and understand images. When images are sent via the API, it can perform various tasks such as content description, OCR, diagram interpretation, and code screenshot analysis.

### Supported Image Formats

| Format | MIME Type | Max Size |
|--------|-----------|----------|
| JPEG | image/jpeg | 20MB |
| PNG | image/png | 20MB |
| GIF | image/gif | 20MB |
| WebP | image/webp | 20MB |

### Sending Images with Base64 Encoding

\`\`\`python
import anthropic
import base64

client = anthropic.Anthropic()

# Encode image file to Base64
with open("screenshot.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": "image/png",
                        "data": image_data
                    }
                },
                {
                    "type": "text",
                    "text": "Analyze the error message in this screenshot."
                }
            ]
        }
    ]
)

print(message.content[0].text)
\`\`\`

### Sending Images via URL

\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "url",
                        "url": "https://example.com/diagram.png"
                    }
                },
                {
                    "type": "text",
                    "text": "Describe this diagram."
                }
            ]
        }
    ]
)
\`\`\``},{title:"비전 활용 사례",titleEn:"Vision Use Cases",content:`### 다중 이미지 분석

여러 이미지를 한 번에 전송하여 비교 분석할 수 있습니다:

\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": "image/png", "data": design_v1}
                },
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": "image/png", "data": design_v2}
                },
                {
                    "type": "text",
                    "text": "두 디자인 시안을 비교하고 UI/UX 관점에서 분석해주세요."
                }
            ]
        }
    ]
)
\`\`\`

### 주요 활용 사례

**1. 코드 스크린샷 분석**
- 에러 메시지 스크린샷을 분석하여 해결 방안 제시
- 코드 이미지를 텍스트로 변환하여 리뷰

**2. 문서 OCR**
- 스캔된 문서의 텍스트 추출
- 손글씨 노트 인식 및 디지털화

**3. 차트/그래프 해석**
- 데이터 시각화 결과 분석
- 트렌드 파악 및 인사이트 도출

**4. UI/UX 분석**
- 모바일/웹 UI 스크린샷 리뷰
- 접근성 및 사용성 평가

### 비전 사용 시 주의사항

- 이미지 해상도가 높을수록 더 정확한 분석이 가능합니다
- 이미지 내 텍스트는 선명할수록 좋은 결과를 얻습니다
- 이미지 크기가 클수록 더 많은 토큰을 소비합니다
- 매우 작은 텍스트나 저해상도 이미지는 정확도가 떨어질 수 있습니다
- 한 요청에 최대 20개의 이미지를 포함할 수 있습니다`,contentEn:`### Multi-Image Analysis

You can send multiple images at once for comparative analysis:

\`\`\`python
message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": "image/png", "data": design_v1}
                },
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": "image/png", "data": design_v2}
                },
                {
                    "type": "text",
                    "text": "Compare these two design mockups and analyze from a UI/UX perspective."
                }
            ]
        }
    ]
)
\`\`\`

### Key Use Cases

**1. Code Screenshot Analysis**
- Analyze error message screenshots and suggest solutions
- Convert code images to text for review

**2. Document OCR**
- Extract text from scanned documents
- Recognize and digitize handwritten notes

**3. Chart/Graph Interpretation**
- Analyze data visualization results
- Identify trends and derive insights

**4. UI/UX Analysis**
- Review mobile/web UI screenshots
- Evaluate accessibility and usability

### Vision Usage Tips

- Higher image resolution enables more accurate analysis
- Clearer text in images yields better results
- Larger images consume more tokens
- Very small text or low-resolution images may have reduced accuracy
- A maximum of 20 images can be included in a single request`}]},v={id:"pricing",title:"API 요금",titleEn:"API Pricing",icon:"fa-credit-card",sections:[{title:"모델별 요금",titleEn:"Pricing by Model",content:`Anthropic API는 토큰 기반 종량제(pay-per-use)로 과금됩니다. 입력 토큰과 출력 토큰의 요금이 다르며, 모델에 따라 가격이 다릅니다.

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
- **5분 이내** 동일한 프리픽스 사용 시 자동 캐시 적용`,contentEn:`The Anthropic API charges on a pay-per-use basis based on tokens. Input and output tokens are priced differently, and pricing varies by model.

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
- **Automatic caching** when the same prefix is used within 5 minutes`},{title:"비용 최적화 전략",titleEn:"Cost Optimization Strategies",content:`### 1. 적절한 모델 선택

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

> **참고**: 배치 요청은 최대 24시간 이내에 처리되며, 실시간 응답이 필요하지 않은 대량 작업에 적합합니다.`,contentEn:`### 1. Choose the Right Model

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

> **Note**: Batch requests are processed within a maximum of 24 hours and are suitable for bulk tasks that don't require real-time responses.`}]},I={id:"sdks",title:"SDK (Python, TypeScript)",titleEn:"SDKs (Python, TypeScript)",icon:"fa-box",sections:[{title:"Python SDK",titleEn:"Python SDK",content:`Anthropic의 공식 Python SDK는 Claude API와의 통합을 간편하게 만들어줍니다. 타입 안전성, 자동 재시도, 스트리밍 등 다양한 기능을 제공합니다.

### 설치 및 설정

\`\`\`bash
pip install anthropic
\`\`\`

### 클라이언트 초기화

\`\`\`python
import anthropic

# 환경 변수에서 자동으로 API 키 읽기
client = anthropic.Anthropic()

# 또는 명시적으로 API 키 전달
client = anthropic.Anthropic(api_key="sk-ant-api03-...")
\`\`\`

### 비동기 클라이언트

\`\`\`python
import anthropic
import asyncio

async def main():
    client = anthropic.AsyncAnthropic()

    message = await client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        messages=[
            {"role": "user", "content": "비동기 프로그래밍의 장점은?"}
        ]
    )
    print(message.content[0].text)

asyncio.run(main())
\`\`\`

### 에러 처리

\`\`\`python
import anthropic

client = anthropic.Anthropic()

try:
    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        messages=[{"role": "user", "content": "Hello"}]
    )
except anthropic.APIConnectionError:
    print("서버 연결 실패")
except anthropic.RateLimitError:
    print("요청 한도 초과 - 잠시 후 재시도하세요")
except anthropic.APIStatusError as e:
    print(f"API 에러: {e.status_code} - {e.message}")
\`\`\`

### 자동 재시도

SDK는 일시적 오류에 대해 자동으로 재시도합니다:

\`\`\`python
# 최대 재시도 횟수 설정
client = anthropic.Anthropic(max_retries=3)

# 재시도 비활성화
client = anthropic.Anthropic(max_retries=0)
\`\`\``,contentEn:`Anthropic's official Python SDK simplifies integration with the Claude API. It provides features like type safety, automatic retries, streaming, and more.

### Installation and Setup

\`\`\`bash
pip install anthropic
\`\`\`

### Client Initialization

\`\`\`python
import anthropic

# Automatically read API key from environment variable
client = anthropic.Anthropic()

# Or explicitly pass the API key
client = anthropic.Anthropic(api_key="sk-ant-api03-...")
\`\`\`

### Async Client

\`\`\`python
import anthropic
import asyncio

async def main():
    client = anthropic.AsyncAnthropic()

    message = await client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        messages=[
            {"role": "user", "content": "What are the advantages of async programming?"}
        ]
    )
    print(message.content[0].text)

asyncio.run(main())
\`\`\`

### Error Handling

\`\`\`python
import anthropic

client = anthropic.Anthropic()

try:
    message = client.messages.create(
        model="claude-sonnet-4-20250514",
        max_tokens=1024,
        messages=[{"role": "user", "content": "Hello"}]
    )
except anthropic.APIConnectionError:
    print("Failed to connect to server")
except anthropic.RateLimitError:
    print("Rate limit exceeded - retry later")
except anthropic.APIStatusError as e:
    print(f"API error: {e.status_code} - {e.message}")
\`\`\`

### Automatic Retries

The SDK automatically retries on transient errors:

\`\`\`python
# Set maximum retry count
client = anthropic.Anthropic(max_retries=3)

# Disable retries
client = anthropic.Anthropic(max_retries=0)
\`\`\``},{title:"TypeScript SDK",titleEn:"TypeScript SDK",content:`Anthropic의 공식 TypeScript SDK는 Node.js 환경에서 Claude API를 활용하기 위한 도구입니다. 완전한 TypeScript 타입 지원과 함께 동기/비동기 API를 제공합니다.

### 설치 및 설정

\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

### 기본 사용법

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

async function main() {
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: 'You are a helpful coding assistant.',
    messages: [
      { role: 'user', content: 'Explain TypeScript generics with examples.' }
    ]
  });

  console.log(message.content[0].text);
}

main();
\`\`\`

### 스트리밍

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

async function streamChat() {
  const stream = client.messages.stream({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [
      { role: 'user', content: 'Write a short story about a robot.' }
    ]
  });

  // 이벤트 기반 처리
  stream.on('text', (text) => {
    process.stdout.write(text);
  });

  // 최종 메시지 가져오기
  const finalMessage = await stream.finalMessage();
  console.log('\\nTokens used:', finalMessage.usage);
}

streamChat();
\`\`\`

### Express.js와 함께 사용

\`\`\`typescript
import express from 'express';
import Anthropic from '@anthropic-ai/sdk';

const app = express();
const client = new Anthropic();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        ...history,
        { role: 'user', content: message }
      ]
    });

    res.json({
      reply: response.content[0].text,
      usage: response.usage
    });
  } catch (error) {
    if (error instanceof Anthropic.APIError) {
      res.status(error.status).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
\`\`\`

> **참고**: Python SDK와 TypeScript SDK 모두 동일한 API 기능을 지원하므로, 프로젝트의 기술 스택에 맞는 SDK를 선택하면 됩니다.`,contentEn:`Anthropic's official TypeScript SDK is a tool for utilizing the Claude API in Node.js environments. It provides complete TypeScript type support along with synchronous/asynchronous APIs.

### Installation and Setup

\`\`\`bash
npm install @anthropic-ai/sdk
\`\`\`

### Basic Usage

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

async function main() {
  const message = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    system: 'You are a helpful coding assistant.',
    messages: [
      { role: 'user', content: 'Explain TypeScript generics with examples.' }
    ]
  });

  console.log(message.content[0].text);
}

main();
\`\`\`

### Streaming

\`\`\`typescript
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

async function streamChat() {
  const stream = client.messages.stream({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [
      { role: 'user', content: 'Write a short story about a robot.' }
    ]
  });

  // Event-based processing
  stream.on('text', (text) => {
    process.stdout.write(text);
  });

  // Get final message
  const finalMessage = await stream.finalMessage();
  console.log('\\nTokens used:', finalMessage.usage);
}

streamChat();
\`\`\`

### Usage with Express.js

\`\`\`typescript
import express from 'express';
import Anthropic from '@anthropic-ai/sdk';

const app = express();
const client = new Anthropic();

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        ...history,
        { role: 'user', content: message }
      ]
    });

    res.json({
      reply: response.content[0].text,
      usage: response.usage
    });
  } catch (error) {
    if (error instanceof Anthropic.APIError) {
      res.status(error.status).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
\`\`\`

> **Note**: Both the Python and TypeScript SDKs support the same API features, so choose the SDK that matches your project's technology stack.`}]},l=[k,A,P,b,S,v,I];function D(){const{language:m}=_(),s=m==="ko",[n,r]=y.useState(0),i=l[n],u={code({inline:t,className:o,children:a,...d}){const c=/language-(\w+)/.exec(o||"");return!t&&c?e.jsx(p,{code:String(a).replace(/\n$/,""),language:c[1]}):!t&&!c&&String(a).includes(`
`)?e.jsx(p,{code:String(a).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...d,children:a})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(f,{type:"tip",children:t})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(x,{title:s?"API 활용 가이드":"API Usage Guide",path:"/api-usage"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:s?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:l.map((t,o)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${o===n?"active":""}`,onClick:()=>r(o),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`}),s?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:s?i.title:i.titleEn})}),i.sections.map((t,o)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:s?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(g,{remarkPlugins:[h],components:u,children:s?t.content:t.contentEn})})]},o)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:n===0,onClick:()=>r(n-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",s?"이전":"Previous"]}),e.jsxs("button",{disabled:n===l.length-1,onClick:()=>r(n+1),children:[s?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{D as default};
