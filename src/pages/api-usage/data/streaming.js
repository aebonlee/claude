const streaming = {
  id: 'streaming',
  title: '스트리밍',
  titleEn: 'Streaming',
  icon: 'fa-stream',
  sections: [
    {
      title: '스트리밍 응답',
      titleEn: 'Streaming Responses',
      content: `스트리밍을 사용하면 Claude의 응답을 생성되는 즉시 토큰 단위로 받아볼 수 있습니다. 긴 응답의 체감 응답 시간을 크게 줄여줍니다.

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
| \`message_stop\` | 메시지 완료 |`,
      contentEn: `Streaming allows you to receive Claude's response token by token as it is generated. This significantly reduces the perceived response time for long responses.

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
| \`message_stop\` | Message complete |`
    },
    {
      title: '고급 스트리밍 패턴',
      titleEn: 'Advanced Streaming Patterns',
      content: `### 이벤트 핸들러 패턴

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
\`\`\``,
      contentEn: `### Event Handler Pattern

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
\`\`\``
    }
  ]
};

export default streaming;
