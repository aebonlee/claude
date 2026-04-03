const messagesApi = {
  id: 'messages-api',
  title: 'Messages API',
  titleEn: 'Messages API',
  icon: 'fa-comments',
  sections: [
    {
      title: 'Messages API 기본',
      titleEn: 'Messages API Basics',
      content: `Messages API는 Claude와 대화하기 위한 핵심 엔드포인트입니다. 멀티턴 대화, 시스템 프롬프트, 다양한 콘텐츠 유형을 지원합니다.

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
\`\`\``,
      contentEn: `Messages API is the core endpoint for conversing with Claude. It supports multi-turn conversations, system prompts, and various content types.

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
\`\`\``
    },
    {
      title: '멀티턴 대화',
      titleEn: 'Multi-turn Conversations',
      content: `### 대화 이력 관리

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
\`\`\``,
      contentEn: `### Managing Conversation History

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
\`\`\``
    }
  ]
};

export default messagesApi;
