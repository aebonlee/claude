const overview = {
  id: 'overview',
  title: 'Agent SDK 개요',
  titleEn: 'Agent SDK Overview',
  icon: 'fa-robot',
  sections: [
    {
      title: 'Claude Agent SDK란?',
      titleEn: 'What is the Claude Agent SDK?',
      content: `Claude Agent SDK는 Anthropic이 제공하는 오픈소스 프레임워크로, Claude를 기반으로 자율적으로 동작하는 AI 에이전트를 구축할 수 있게 해줍니다. 에이전트는 목표를 이해하고, 도구를 사용하며, 스스로 판단하여 복잡한 작업을 수행합니다.

### 에이전트 vs 단순 API 호출

| 특성 | 단순 API 호출 | 에이전트 |
|------|--------------|---------|
| **상호작용** | 한 번의 요청-응답 | 다중 단계 자율 실행 |
| **도구 사용** | 개발자가 루프 구현 | SDK가 자동 관리 |
| **의사결정** | 없음 | 컨텍스트 기반 자율 판단 |
| **에러 처리** | 개발자가 모두 처리 | 에이전트가 자동 복구 시도 |
| **복잡한 작업** | 여러 호출을 수동 조합 | 자율적으로 작업 분해 및 수행 |

### 주요 기능

- **자율 실행**: 에이전트가 목표를 달성할 때까지 자동으로 도구 호출과 추론을 반복
- **도구 통합**: 사전 정의된 도구를 에이전트에게 제공하면 필요에 따라 활용
- **가드레일**: 안전한 동작을 위한 입출력 검증 및 제한
- **멀티 에이전트**: 여러 에이전트를 조합하여 복잡한 워크플로우 구성
- **추적 및 디버깅**: 에이전트의 동작을 추적하고 디버깅하는 도구 제공

### 설치

\`\`\`bash
# Python
pip install anthropic-agent-sdk

# 또는 최신 개발 버전
pip install git+https://github.com/anthropics/agent-sdk.git
\`\`\``,
      contentEn: `The Claude Agent SDK is an open-source framework provided by Anthropic that enables you to build AI agents that operate autonomously based on Claude. Agents understand goals, use tools, and make their own decisions to perform complex tasks.

### Agents vs Simple API Calls

| Aspect | Simple API Call | Agent |
|--------|----------------|-------|
| **Interaction** | Single request-response | Multi-step autonomous execution |
| **Tool Usage** | Developer implements loop | SDK manages automatically |
| **Decision Making** | None | Autonomous decisions based on context |
| **Error Handling** | Developer handles everything | Agent attempts automatic recovery |
| **Complex Tasks** | Manual combination of calls | Autonomous task decomposition and execution |

### Key Features

- **Autonomous Execution**: Agent automatically repeats tool calls and reasoning until the goal is achieved
- **Tool Integration**: Provide predefined tools to the agent, which uses them as needed
- **Guardrails**: Input/output validation and constraints for safe operation
- **Multi-Agent**: Combine multiple agents for complex workflows
- **Tracing and Debugging**: Tools for tracking and debugging agent behavior

### Installation

\`\`\`bash
# Python
pip install anthropic-agent-sdk

# Or latest development version
pip install git+https://github.com/anthropics/agent-sdk.git
\`\`\``
    },
    {
      title: '첫 번째 에이전트 만들기',
      titleEn: 'Building Your First Agent',
      content: `### 기본 에이전트 생성

\`\`\`python
from agents import Agent, Runner

# 간단한 에이전트 정의
agent = Agent(
    name="assistant",
    instructions="당신은 도움이 되는 AI 어시스턴트입니다. 사용자의 질문에 정확하고 친절하게 답변합니다.",
    model="claude-sonnet-4-20250514"
)

# 에이전트 실행
result = Runner.run_sync(agent, "Python에서 데코레이터를 설명해주세요.")
print(result.final_output)
\`\`\`

### 도구가 있는 에이전트

\`\`\`python
from agents import Agent, Runner, function_tool

# 도구 정의
@function_tool
def calculate(expression: str) -> str:
    """수학 표현식을 계산합니다.

    Args:
        expression: 계산할 수학 표현식 (예: "2 + 3 * 4")
    """
    try:
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"계산 오류: {e}"

@function_tool
def get_current_time() -> str:
    """현재 시간을 반환합니다."""
    from datetime import datetime
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# 도구가 있는 에이전트
agent = Agent(
    name="math_assistant",
    instructions="당신은 수학 계산을 도와주는 어시스턴트입니다. 계산이 필요하면 calculate 도구를 사용하세요.",
    tools=[calculate, get_current_time],
    model="claude-sonnet-4-20250514"
)

result = Runner.run_sync(agent, "345 * 678은 얼마인가요? 그리고 현재 시간도 알려주세요.")
print(result.final_output)
\`\`\`

### 비동기 실행

\`\`\`python
import asyncio
from agents import Agent, Runner

agent = Agent(
    name="async_assistant",
    instructions="질문에 답변하세요.",
    model="claude-sonnet-4-20250514"
)

async def main():
    result = await Runner.run(agent, "비동기 프로그래밍이란?")
    print(result.final_output)

asyncio.run(main())
\`\`\``,
      contentEn: `### Creating a Basic Agent

\`\`\`python
from agents import Agent, Runner

# Define a simple agent
agent = Agent(
    name="assistant",
    instructions="You are a helpful AI assistant. Answer user questions accurately and kindly.",
    model="claude-sonnet-4-20250514"
)

# Run the agent
result = Runner.run_sync(agent, "Explain decorators in Python.")
print(result.final_output)
\`\`\`

### Agent with Tools

\`\`\`python
from agents import Agent, Runner, function_tool

# Define tools
@function_tool
def calculate(expression: str) -> str:
    """Calculates a math expression.

    Args:
        expression: Math expression to calculate (e.g., "2 + 3 * 4")
    """
    try:
        result = eval(expression)
        return str(result)
    except Exception as e:
        return f"Calculation error: {e}"

@function_tool
def get_current_time() -> str:
    """Returns the current time."""
    from datetime import datetime
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# Agent with tools
agent = Agent(
    name="math_assistant",
    instructions="You are an assistant that helps with math calculations. Use the calculate tool when computation is needed.",
    tools=[calculate, get_current_time],
    model="claude-sonnet-4-20250514"
)

result = Runner.run_sync(agent, "What is 345 * 678? And what time is it now?")
print(result.final_output)
\`\`\`

### Async Execution

\`\`\`python
import asyncio
from agents import Agent, Runner

agent = Agent(
    name="async_assistant",
    instructions="Answer questions.",
    model="claude-sonnet-4-20250514"
)

async def main():
    result = await Runner.run(agent, "What is async programming?")
    print(result.final_output)

asyncio.run(main())
\`\`\``
    }
  ]
};

export default overview;
