const sdks = {
  id: 'sdks',
  title: 'SDK (Python, TypeScript)',
  titleEn: 'SDKs (Python, TypeScript)',
  icon: 'fa-box',
  sections: [
    {
      title: 'Python SDK',
      titleEn: 'Python SDK',
      content: `Anthropic의 공식 Python SDK는 Claude API와의 통합을 간편하게 만들어줍니다. 타입 안전성, 자동 재시도, 스트리밍 등 다양한 기능을 제공합니다.

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
\`\`\``,
      contentEn: `Anthropic's official Python SDK simplifies integration with the Claude API. It provides features like type safety, automatic retries, streaming, and more.

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
\`\`\``
    },
    {
      title: 'TypeScript SDK',
      titleEn: 'TypeScript SDK',
      content: `Anthropic의 공식 TypeScript SDK는 Node.js 환경에서 Claude API를 활용하기 위한 도구입니다. 완전한 TypeScript 타입 지원과 함께 동기/비동기 API를 제공합니다.

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

> **참고**: Python SDK와 TypeScript SDK 모두 동일한 API 기능을 지원하므로, 프로젝트의 기술 스택에 맞는 SDK를 선택하면 됩니다.`,
      contentEn: `Anthropic's official TypeScript SDK is a tool for utilizing the Claude API in Node.js environments. It provides complete TypeScript type support along with synchronous/asynchronous APIs.

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

> **Note**: Both the Python and TypeScript SDKs support the same API features, so choose the SDK that matches your project's technology stack.`
    }
  ]
};

export default sdks;
