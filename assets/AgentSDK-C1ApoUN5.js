import{j as t,M as m,r as f}from"./markdown-Bb6HBFF6.js";import{b as _}from"./vendor-Cbm2kc8j.js";import{u as h}from"./index-CD6OJyyo.js";import{S as y}from"./SEOHead-DfBpSINb.js";import{T as A,C as c}from"./TipBox-CSlg_9ru.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const w={id:"overview",title:"Agent SDK 개요",titleEn:"Agent SDK Overview",icon:"fa-robot",sections:[{title:"Claude Agent SDK란?",titleEn:"What is the Claude Agent SDK?",content:`Claude Agent SDK는 Anthropic이 제공하는 오픈소스 프레임워크로, Claude를 기반으로 자율적으로 동작하는 AI 에이전트를 구축할 수 있게 해줍니다. 에이전트는 목표를 이해하고, 도구를 사용하며, 스스로 판단하여 복잡한 작업을 수행합니다.

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
\`\`\``,contentEn:`The Claude Agent SDK is an open-source framework provided by Anthropic that enables you to build AI agents that operate autonomously based on Claude. Agents understand goals, use tools, and make their own decisions to perform complex tasks.

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
\`\`\``},{title:"첫 번째 에이전트 만들기",titleEn:"Building Your First Agent",content:`### 기본 에이전트 생성

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
\`\`\``,contentEn:`### Creating a Basic Agent

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
\`\`\``}]},x={id:"architecture",title:"아키텍처",titleEn:"Architecture",icon:"fa-sitemap",sections:[{title:"에이전트 아키텍처",titleEn:"Agent Architecture",content:`Agent SDK의 핵심 아키텍처는 에이전트(Agent), 도구(Tool), 러너(Runner), 가드레일(Guardrail)의 네 가지 주요 구성 요소로 이루어져 있습니다.

### 핵심 구성 요소

**1. Agent**
에이전트는 LLM을 감싼 래퍼로, 지침(instructions)과 도구(tools)를 갖습니다:

\`\`\`python
from agents import Agent

agent = Agent(
    name="researcher",
    instructions="당신은 연구 보조원입니다. 주어진 주제에 대해 심층 분석을 수행합니다.",
    model="claude-sonnet-4-20250514",
    tools=[search_tool, analyze_tool],
    handoffs=[summary_agent],  # 다른 에이전트에게 위임
)
\`\`\`

**2. Runner**
에이전트를 실행하고 도구 호출 루프를 관리합니다:

\`\`\`python
from agents import Runner

# 동기 실행
result = Runner.run_sync(agent, "양자 컴퓨팅 트렌드를 분석해주세요.")

# 비동기 실행
result = await Runner.run(agent, "양자 컴퓨팅 트렌드를 분석해주세요.")

# 스트리밍 실행
async for event in Runner.run_streamed(agent, "분석해주세요."):
    print(event)
\`\`\`

**3. 실행 흐름**

\`\`\`
사용자 입력 → Agent → LLM 호출 → 도구 필요?
                                    ├─ 예 → 도구 실행 → 결과를 LLM에 전달 → (반복)
                                    └─ 아니오 → 최종 응답 반환
\`\`\`

### Agent 설정 옵션

| 옵션 | 타입 | 설명 |
|------|------|------|
| \`name\` | str | 에이전트 이름 |
| \`instructions\` | str | 동작 지침 (시스템 프롬프트) |
| \`model\` | str | 사용할 모델 |
| \`tools\` | list | 사용 가능한 도구 목록 |
| \`handoffs\` | list | 위임할 수 있는 다른 에이전트 |
| \`output_type\` | type | 구조화된 출력 타입 |
| \`guardrails\` | list | 입출력 가드레일 |`,contentEn:`The core architecture of the Agent SDK consists of four main components: Agent, Tool, Runner, and Guardrail.

### Core Components

**1. Agent**
An agent is a wrapper around an LLM with instructions and tools:

\`\`\`python
from agents import Agent

agent = Agent(
    name="researcher",
    instructions="You are a research assistant. Perform in-depth analysis on given topics.",
    model="claude-sonnet-4-20250514",
    tools=[search_tool, analyze_tool],
    handoffs=[summary_agent],  # Delegate to another agent
)
\`\`\`

**2. Runner**
Executes agents and manages the tool call loop:

\`\`\`python
from agents import Runner

# Synchronous execution
result = Runner.run_sync(agent, "Analyze quantum computing trends.")

# Async execution
result = await Runner.run(agent, "Analyze quantum computing trends.")

# Streaming execution
async for event in Runner.run_streamed(agent, "Analyze this."):
    print(event)
\`\`\`

**3. Execution Flow**

\`\`\`
User Input → Agent → LLM Call → Tool needed?
                                  ├─ Yes → Execute Tool → Pass result to LLM → (repeat)
                                  └─ No → Return final response
\`\`\`

### Agent Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| \`name\` | str | Agent name |
| \`instructions\` | str | Behavior instructions (system prompt) |
| \`model\` | str | Model to use |
| \`tools\` | list | Available tools list |
| \`handoffs\` | list | Other agents to delegate to |
| \`output_type\` | type | Structured output type |
| \`guardrails\` | list | Input/output guardrails |`},{title:"가드레일",titleEn:"Guardrails",content:`가드레일은 에이전트의 입력과 출력을 검증하여 안전하고 예측 가능한 동작을 보장합니다.

### 입력 가드레일

사용자 입력을 검증하여 부적절한 요청을 차단합니다:

\`\`\`python
from agents import Agent, Runner, input_guardrail, GuardrailFunctionOutput

@input_guardrail
async def check_appropriate_input(ctx, agent, input_text):
    """부적절한 입력을 차단하는 가드레일"""
    # 간단한 키워드 필터 (실제로는 별도 LLM 호출 등을 사용)
    blocked_topics = ["해킹", "불법"]
    for topic in blocked_topics:
        if topic in input_text:
            return GuardrailFunctionOutput(
                output_info={"blocked": True, "reason": f"'{topic}' 관련 요청은 처리할 수 없습니다."},
                tripwire_triggered=True
            )
    return GuardrailFunctionOutput(
        output_info={"blocked": False},
        tripwire_triggered=False
    )

agent = Agent(
    name="safe_agent",
    instructions="안전한 응답을 제공합니다.",
    input_guardrails=[check_appropriate_input]
)
\`\`\`

### 출력 가드레일

에이전트의 출력을 검증하여 품질을 보장합니다:

\`\`\`python
from agents import output_guardrail, GuardrailFunctionOutput

@output_guardrail
async def check_output_quality(ctx, agent, output_text):
    """출력 품질을 검증하는 가드레일"""
    if len(output_text) < 50:
        return GuardrailFunctionOutput(
            output_info={"quality": "low", "reason": "응답이 너무 짧습니다."},
            tripwire_triggered=True
        )
    return GuardrailFunctionOutput(
        output_info={"quality": "ok"},
        tripwire_triggered=False
    )
\`\`\`

### 구조화된 출력

Pydantic 모델을 사용하여 출력 형식을 강제합니다:

\`\`\`python
from pydantic import BaseModel
from agents import Agent, Runner

class AnalysisResult(BaseModel):
    summary: str
    sentiment: str  # "positive", "negative", "neutral"
    confidence: float
    key_points: list[str]

agent = Agent(
    name="analyzer",
    instructions="텍스트를 분석하고 구조화된 결과를 반환하세요.",
    output_type=AnalysisResult
)

result = Runner.run_sync(agent, "이 제품은 정말 훌륭합니다. 품질이 뛰어나고 가격도 합리적입니다.")
analysis = result.final_output  # AnalysisResult 타입
print(f"감성: {analysis.sentiment}, 신뢰도: {analysis.confidence}")
\`\`\``,contentEn:`Guardrails validate agent inputs and outputs to ensure safe and predictable behavior.

### Input Guardrails

Validate user inputs to block inappropriate requests:

\`\`\`python
from agents import Agent, Runner, input_guardrail, GuardrailFunctionOutput

@input_guardrail
async def check_appropriate_input(ctx, agent, input_text):
    """Guardrail to block inappropriate inputs"""
    # Simple keyword filter (in practice, use a separate LLM call)
    blocked_topics = ["hacking", "illegal"]
    for topic in blocked_topics:
        if topic in input_text:
            return GuardrailFunctionOutput(
                output_info={"blocked": True, "reason": f"Cannot process requests related to '{topic}'."},
                tripwire_triggered=True
            )
    return GuardrailFunctionOutput(
        output_info={"blocked": False},
        tripwire_triggered=False
    )

agent = Agent(
    name="safe_agent",
    instructions="Provide safe responses.",
    input_guardrails=[check_appropriate_input]
)
\`\`\`

### Output Guardrails

Validate agent outputs to ensure quality:

\`\`\`python
from agents import output_guardrail, GuardrailFunctionOutput

@output_guardrail
async def check_output_quality(ctx, agent, output_text):
    """Guardrail to verify output quality"""
    if len(output_text) < 50:
        return GuardrailFunctionOutput(
            output_info={"quality": "low", "reason": "Response is too short."},
            tripwire_triggered=True
        )
    return GuardrailFunctionOutput(
        output_info={"quality": "ok"},
        tripwire_triggered=False
    )
\`\`\`

### Structured Output

Enforce output format using Pydantic models:

\`\`\`python
from pydantic import BaseModel
from agents import Agent, Runner

class AnalysisResult(BaseModel):
    summary: str
    sentiment: str  # "positive", "negative", "neutral"
    confidence: float
    key_points: list[str]

agent = Agent(
    name="analyzer",
    instructions="Analyze the text and return structured results.",
    output_type=AnalysisResult
)

result = Runner.run_sync(agent, "This product is excellent. The quality is outstanding and the price is reasonable.")
analysis = result.final_output  # AnalysisResult type
print(f"Sentiment: {analysis.sentiment}, Confidence: {analysis.confidence}")
\`\`\``}]},v={id:"tools",title:"도구 정의",titleEn:"Tools Definition",icon:"fa-screwdriver-wrench",sections:[{title:"도구 유형",titleEn:"Tool Types",content:`Agent SDK에서는 세 가지 방식으로 도구를 정의할 수 있습니다: 함수 도구(Function Tool), 호스트 도구(Hosted Tool), 에이전트 위임(Handoff).

### 1. 함수 도구 (Function Tool)

Python 함수를 도구로 변환하는 가장 일반적인 방법입니다:

\`\`\`python
from agents import function_tool

@function_tool
def search_web(query: str, max_results: int = 5) -> str:
    """웹에서 정보를 검색합니다.

    Args:
        query: 검색할 키워드
        max_results: 반환할 최대 결과 수
    """
    # 실제 검색 API 호출 구현
    results = perform_search(query, max_results)
    return format_results(results)

@function_tool
def read_file(path: str) -> str:
    """파일의 내용을 읽어 반환합니다.

    Args:
        path: 읽을 파일의 경로
    """
    with open(path, 'r') as f:
        return f.read()

@function_tool
def write_file(path: str, content: str) -> str:
    """파일에 내용을 작성합니다.

    Args:
        path: 작성할 파일의 경로
        content: 작성할 내용
    """
    with open(path, 'w') as f:
        f.write(content)
    return f"파일이 {path}에 저장되었습니다."
\`\`\`

> **중요**: 함수의 docstring이 도구의 설명으로 사용됩니다. Args 섹션의 파라미터 설명도 Claude에게 전달되므로, 명확하게 작성하세요.

### 2. 비동기 함수 도구

\`\`\`python
@function_tool
async def fetch_api_data(url: str) -> str:
    """외부 API에서 데이터를 가져옵니다.

    Args:
        url: 요청할 API URL
    """
    import aiohttp
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            data = await response.json()
            return str(data)
\`\`\``,contentEn:`In the Agent SDK, you can define tools in three ways: Function Tool, Hosted Tool, and Agent Handoff.

### 1. Function Tool

The most common way to convert Python functions into tools:

\`\`\`python
from agents import function_tool

@function_tool
def search_web(query: str, max_results: int = 5) -> str:
    """Searches the web for information.

    Args:
        query: Keywords to search
        max_results: Maximum number of results to return
    """
    # Implement actual search API call
    results = perform_search(query, max_results)
    return format_results(results)

@function_tool
def read_file(path: str) -> str:
    """Reads and returns the contents of a file.

    Args:
        path: Path of the file to read
    """
    with open(path, 'r') as f:
        return f.read()

@function_tool
def write_file(path: str, content: str) -> str:
    """Writes content to a file.

    Args:
        path: Path of the file to write
        content: Content to write
    """
    with open(path, 'w') as f:
        f.write(content)
    return f"File saved to {path}."
\`\`\`

> **Important**: The function's docstring is used as the tool's description. Parameter descriptions in the Args section are also passed to Claude, so write them clearly.

### 2. Async Function Tools

\`\`\`python
@function_tool
async def fetch_api_data(url: str) -> str:
    """Fetches data from an external API.

    Args:
        url: API URL to request
    """
    import aiohttp
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            data = await response.json()
            return str(data)
\`\`\``},{title:"에이전트 위임 (Handoff)",titleEn:"Agent Handoff",content:`### Handoff 패턴

에이전트가 다른 전문 에이전트에게 작업을 위임할 수 있습니다. 이를 통해 전문화된 에이전트 네트워크를 구성할 수 있습니다.

\`\`\`python
from agents import Agent, Runner

# 전문 에이전트 정의
code_agent = Agent(
    name="code_expert",
    instructions="""당신은 코드 전문가입니다.
    코드 작성, 리뷰, 디버깅을 담당합니다.
    Python, JavaScript, TypeScript에 전문성이 있습니다.""",
    model="claude-sonnet-4-20250514"
)

writing_agent = Agent(
    name="writing_expert",
    instructions="""당신은 문서 작성 전문가입니다.
    기술 문서, 블로그 포스트, 보고서 작성을 담당합니다.
    명확하고 구조화된 문서를 작성합니다.""",
    model="claude-sonnet-4-20250514"
)

# 라우터 에이전트 (작업을 적절한 전문가에게 위임)
router_agent = Agent(
    name="router",
    instructions="""사용자의 요청을 분석하여 적절한 전문 에이전트에게 위임하세요.
    - 코드 관련 요청 → code_expert
    - 문서 작성 요청 → writing_expert
    - 기타 → 직접 응답""",
    handoffs=[code_agent, writing_agent],
    model="claude-sonnet-4-20250514"
)

result = Runner.run_sync(router_agent, "Python으로 파일 읽기 함수를 작성해줘")
print(result.final_output)
\`\`\`

### Handoff 필터

Handoff에 조건을 추가하여 위임 시점을 제어합니다:

\`\`\`python
from agents import Agent, handoff

# 커스텀 handoff 정의
code_handoff = handoff(
    agent=code_agent,
    tool_name_override="delegate_to_coder",
    tool_description_override="코드 작성이나 프로그래밍 관련 질문을 처리할 때 사용합니다."
)

router = Agent(
    name="router",
    instructions="적절한 에이전트에게 작업을 위임하세요.",
    handoffs=[code_handoff]
)
\`\`\`

### 컨텍스트 변수

에이전트 간에 컨텍스트 데이터를 공유합니다:

\`\`\`python
from agents import Agent, Runner, RunContext

# 컨텍스트 정의
class ProjectContext:
    project_name: str = "MyApp"
    language: str = "Python"
    framework: str = "FastAPI"

agent = Agent(
    name="project_agent",
    instructions=lambda ctx: f"""프로젝트 '{ctx.context.project_name}'에서 작업 중입니다.
    사용 언어: {ctx.context.language}
    프레임워크: {ctx.context.framework}""",
    model="claude-sonnet-4-20250514"
)

context = ProjectContext()
result = Runner.run_sync(agent, "새 API 엔드포인트를 추가해줘", context=context)
\`\`\``,contentEn:`### Handoff Pattern

An agent can delegate tasks to other specialized agents. This allows you to build a network of specialized agents.

\`\`\`python
from agents import Agent, Runner

# Define specialized agents
code_agent = Agent(
    name="code_expert",
    instructions="""You are a code expert.
    You handle code writing, reviews, and debugging.
    You specialize in Python, JavaScript, and TypeScript.""",
    model="claude-sonnet-4-20250514"
)

writing_agent = Agent(
    name="writing_expert",
    instructions="""You are a documentation expert.
    You handle technical docs, blog posts, and reports.
    You write clear and structured documents.""",
    model="claude-sonnet-4-20250514"
)

# Router agent (delegates tasks to appropriate experts)
router_agent = Agent(
    name="router",
    instructions="""Analyze the user's request and delegate to the appropriate expert agent.
    - Code-related requests → code_expert
    - Document writing requests → writing_expert
    - Other → respond directly""",
    handoffs=[code_agent, writing_agent],
    model="claude-sonnet-4-20250514"
)

result = Runner.run_sync(router_agent, "Write a file reading function in Python")
print(result.final_output)
\`\`\`

### Handoff Filters

Add conditions to handoffs to control when delegation occurs:

\`\`\`python
from agents import Agent, handoff

# Custom handoff definition
code_handoff = handoff(
    agent=code_agent,
    tool_name_override="delegate_to_coder",
    tool_description_override="Use when handling code writing or programming-related questions."
)

router = Agent(
    name="router",
    instructions="Delegate tasks to the appropriate agent.",
    handoffs=[code_handoff]
)
\`\`\`

### Context Variables

Share context data between agents:

\`\`\`python
from agents import Agent, Runner, RunContext

# Define context
class ProjectContext:
    project_name: str = "MyApp"
    language: str = "Python"
    framework: str = "FastAPI"

agent = Agent(
    name="project_agent",
    instructions=lambda ctx: f"""Working on project '{ctx.context.project_name}'.
    Language: {ctx.context.language}
    Framework: {ctx.context.framework}""",
    model="claude-sonnet-4-20250514"
)

context = ProjectContext()
result = Runner.run_sync(agent, "Add a new API endpoint", context=context)
\`\`\``}]},R={id:"orchestration",title:"오케스트레이션",titleEn:"Orchestration Patterns",icon:"fa-diagram-project",sections:[{title:"멀티 에이전트 패턴",titleEn:"Multi-Agent Patterns",content:`Agent SDK에서는 여러 에이전트를 조합하여 복잡한 워크플로우를 구성할 수 있습니다. 대표적인 오케스트레이션 패턴을 살펴보겠습니다.

### 1. 순차 파이프라인 (Sequential Pipeline)

여러 에이전트가 순차적으로 작업을 수행합니다:

\`\`\`python
from agents import Agent, Runner

# 1단계: 데이터 수집
collector = Agent(
    name="data_collector",
    instructions="주어진 주제에 대한 데이터를 수집하고 정리합니다.",
    model="claude-sonnet-4-20250514"
)

# 2단계: 분석
analyzer = Agent(
    name="analyzer",
    instructions="수집된 데이터를 분석하고 인사이트를 도출합니다.",
    model="claude-sonnet-4-20250514"
)

# 3단계: 보고서 작성
reporter = Agent(
    name="reporter",
    instructions="분석 결과를 기반으로 보고서를 작성합니다.",
    model="claude-sonnet-4-20250514"
)

async def sequential_pipeline(topic):
    # 1단계
    data_result = await Runner.run(collector, f"{topic}에 대한 데이터를 수집해주세요.")

    # 2단계
    analysis_result = await Runner.run(
        analyzer,
        f"다음 데이터를 분석해주세요:\\n{data_result.final_output}"
    )

    # 3단계
    report_result = await Runner.run(
        reporter,
        f"다음 분석 결과를 보고서로 작성해주세요:\\n{analysis_result.final_output}"
    )

    return report_result.final_output
\`\`\`

### 2. 병렬 실행 (Parallel Execution)

여러 에이전트가 동시에 작업을 수행합니다:

\`\`\`python
import asyncio
from agents import Agent, Runner

# 서로 다른 관점의 분석 에이전트들
tech_analyst = Agent(name="tech", instructions="기술적 관점에서 분석하세요.")
business_analyst = Agent(name="business", instructions="비즈니스 관점에서 분석하세요.")
risk_analyst = Agent(name="risk", instructions="리스크 관점에서 분석하세요.")

async def parallel_analysis(topic):
    # 병렬 실행
    results = await asyncio.gather(
        Runner.run(tech_analyst, topic),
        Runner.run(business_analyst, topic),
        Runner.run(risk_analyst, topic)
    )

    # 결과 종합
    combined = "\\n".join([
        f"[기술 분석] {results[0].final_output}",
        f"[비즈니스 분석] {results[1].final_output}",
        f"[리스크 분석] {results[2].final_output}"
    ])

    return combined
\`\`\``,contentEn:`In the Agent SDK, you can combine multiple agents to build complex workflows. Let's explore the key orchestration patterns.

### 1. Sequential Pipeline

Multiple agents perform tasks sequentially:

\`\`\`python
from agents import Agent, Runner

# Step 1: Data Collection
collector = Agent(
    name="data_collector",
    instructions="Collect and organize data on the given topic.",
    model="claude-sonnet-4-20250514"
)

# Step 2: Analysis
analyzer = Agent(
    name="analyzer",
    instructions="Analyze collected data and derive insights.",
    model="claude-sonnet-4-20250514"
)

# Step 3: Report Writing
reporter = Agent(
    name="reporter",
    instructions="Write a report based on the analysis results.",
    model="claude-sonnet-4-20250514"
)

async def sequential_pipeline(topic):
    # Step 1
    data_result = await Runner.run(collector, f"Collect data about {topic}.")

    # Step 2
    analysis_result = await Runner.run(
        analyzer,
        f"Analyze the following data:\\n{data_result.final_output}"
    )

    # Step 3
    report_result = await Runner.run(
        reporter,
        f"Write a report from the following analysis:\\n{analysis_result.final_output}"
    )

    return report_result.final_output
\`\`\`

### 2. Parallel Execution

Multiple agents work simultaneously:

\`\`\`python
import asyncio
from agents import Agent, Runner

# Analysis agents with different perspectives
tech_analyst = Agent(name="tech", instructions="Analyze from a technical perspective.")
business_analyst = Agent(name="business", instructions="Analyze from a business perspective.")
risk_analyst = Agent(name="risk", instructions="Analyze from a risk perspective.")

async def parallel_analysis(topic):
    # Parallel execution
    results = await asyncio.gather(
        Runner.run(tech_analyst, topic),
        Runner.run(business_analyst, topic),
        Runner.run(risk_analyst, topic)
    )

    # Combine results
    combined = "\\n".join([
        f"[Tech Analysis] {results[0].final_output}",
        f"[Business Analysis] {results[1].final_output}",
        f"[Risk Analysis] {results[2].final_output}"
    ])

    return combined
\`\`\``},{title:"트레이싱과 디버깅",titleEn:"Tracing and Debugging",content:`### 트레이싱 설정

Agent SDK는 내장 트레이싱 기능을 제공하여 에이전트의 동작을 추적하고 분석할 수 있습니다:

\`\`\`python
from agents import Agent, Runner, trace

# 트레이싱이 활성화된 실행
with trace("my-workflow") as t:
    result = await Runner.run(agent, "작업을 수행해주세요.")
    # 트레이스에 메타데이터 추가
    t.set_metadata("user_id", "user-123")
    t.set_metadata("workflow", "analysis")
\`\`\`

### 커스텀 트레이스 프로세서

\`\`\`python
from agents.tracing import TracingProcessor

class CustomProcessor(TracingProcessor):
    def process_trace(self, trace_data):
        # 커스텀 로깅, 모니터링 시스템으로 전송
        print(f"Trace: {trace_data.name}")
        print(f"Duration: {trace_data.duration_ms}ms")
        print(f"Steps: {len(trace_data.spans)}")

        for span in trace_data.spans:
            print(f"  - {span.name}: {span.duration_ms}ms")

# 프로세서 등록
from agents import set_tracing_processor
set_tracing_processor(CustomProcessor())
\`\`\`

### 디버깅 팁

**1. 에이전트 실행 로그 확인:**
\`\`\`python
import logging
logging.basicConfig(level=logging.DEBUG)
\`\`\`

**2. 스트리밍으로 실시간 확인:**
\`\`\`python
async for event in Runner.run_streamed(agent, "작업 수행"):
    if event.type == "agent_updated_stream_event":
        print(f"에이전트: {event.new_agent.name}")
    elif event.type == "run_item_stream_event":
        item = event.item
        if item.type == "tool_call_item":
            print(f"도구 호출: {item.raw_item.name}")
        elif item.type == "tool_call_output_item":
            print(f"도구 결과: {item.output[:100]}")
        elif item.type == "message_output_item":
            print(f"응답: {item.raw_item.text[:100]}")
\`\`\`

**3. 에이전트 최대 반복 제한:**
\`\`\`python
# 무한 루프 방지
result = await Runner.run(
    agent,
    "작업 수행",
    max_turns=20  # 최대 20번의 LLM 호출 허용
)
\`\`\``,contentEn:`### Tracing Setup

The Agent SDK provides built-in tracing capabilities to track and analyze agent behavior:

\`\`\`python
from agents import Agent, Runner, trace

# Execution with tracing enabled
with trace("my-workflow") as t:
    result = await Runner.run(agent, "Perform the task.")
    # Add metadata to trace
    t.set_metadata("user_id", "user-123")
    t.set_metadata("workflow", "analysis")
\`\`\`

### Custom Trace Processor

\`\`\`python
from agents.tracing import TracingProcessor

class CustomProcessor(TracingProcessor):
    def process_trace(self, trace_data):
        # Send to custom logging/monitoring system
        print(f"Trace: {trace_data.name}")
        print(f"Duration: {trace_data.duration_ms}ms")
        print(f"Steps: {len(trace_data.spans)}")

        for span in trace_data.spans:
            print(f"  - {span.name}: {span.duration_ms}ms")

# Register processor
from agents import set_tracing_processor
set_tracing_processor(CustomProcessor())
\`\`\`

### Debugging Tips

**1. Check agent execution logs:**
\`\`\`python
import logging
logging.basicConfig(level=logging.DEBUG)
\`\`\`

**2. Real-time monitoring with streaming:**
\`\`\`python
async for event in Runner.run_streamed(agent, "Perform task"):
    if event.type == "agent_updated_stream_event":
        print(f"Agent: {event.new_agent.name}")
    elif event.type == "run_item_stream_event":
        item = event.item
        if item.type == "tool_call_item":
            print(f"Tool call: {item.raw_item.name}")
        elif item.type == "tool_call_output_item":
            print(f"Tool result: {item.output[:100]}")
        elif item.type == "message_output_item":
            print(f"Response: {item.raw_item.text[:100]}")
\`\`\`

**3. Limit agent max iterations:**
\`\`\`python
# Prevent infinite loops
result = await Runner.run(
    agent,
    "Perform task",
    max_turns=20  # Allow maximum 20 LLM calls
)
\`\`\``}]},k={id:"examples",title:"실전 예제",titleEn:"Practical Examples",icon:"fa-flask",sections:[{title:"코드 리뷰 에이전트",titleEn:"Code Review Agent",content:`코드를 분석하고 품질, 보안, 성능에 대한 피드백을 제공하는 에이전트입니다.

\`\`\`python
from agents import Agent, Runner, function_tool

@function_tool
def read_file(filepath: str) -> str:
    with open(filepath, 'r') as f:
        return f.read()

code_reviewer = Agent(
    name="code_reviewer",
    instructions="시니어 개발자 수준의 코드 리뷰어입니다.",
    tools=[read_file],
    model="claude-sonnet-4-20250514"
)

result = Runner.run_sync(code_reviewer, "코드를 리뷰해주세요.")
print(result.final_output)
\`\`\``,contentEn:`An agent that analyzes code and provides feedback on quality, security, and performance.

\`\`\`python
from agents import Agent, Runner, function_tool

@function_tool
def read_file(filepath: str) -> str:
    with open(filepath, 'r') as f:
        return f.read()

code_reviewer = Agent(
    name="code_reviewer",
    instructions="Senior-level code reviewer.",
    tools=[read_file],
    model="claude-sonnet-4-20250514"
)

result = Runner.run_sync(code_reviewer, "Review the code.")
print(result.final_output)
\`\`\``},{title:"리서치 에이전트",titleEn:"Research Agent",content:`여러 소스에서 정보를 수집하고 종합 보고서를 작성하는 에이전트입니다.

\`\`\`python
from agents import Agent, Runner, function_tool

@function_tool
def web_search(query: str) -> str:
    return f"검색 결과: {query}"

researcher = Agent(
    name="researcher",
    instructions="전문 리서치 에이전트입니다.",
    tools=[web_search],
    model="claude-sonnet-4-20250514"
)

result = Runner.run_sync(researcher, "AI 에이전트 기술 동향 보고서를 작성해주세요.")
print(result.final_output)
\`\`\``,contentEn:`An agent that gathers information from multiple sources and creates reports.

\`\`\`python
from agents import Agent, Runner, function_tool

@function_tool
def web_search(query: str) -> str:
    return f"Search results: {query}"

researcher = Agent(
    name="researcher",
    instructions="Professional research agent.",
    tools=[web_search],
    model="claude-sonnet-4-20250514"
)

result = Runner.run_sync(researcher, "Write a report on AI agent trends.")
print(result.final_output)
\`\`\``},{title:"고객 지원 멀티 에이전트",titleEn:"Customer Support Multi-Agent",content:`핸드오프를 활용한 고객 지원 멀티 에이전트 시스템입니다.

\`\`\`python
from agents import Agent, Runner, function_tool, handoff

@function_tool
def lookup_order(order_id: str) -> str:
    return f"주문 {order_id}: 배송 중"

billing_agent = Agent(name="billing", instructions="결제 문의 처리")
shipping_agent = Agent(
    name="shipping",
    instructions="배송 문의 처리",
    tools=[lookup_order]
)

support_agent = Agent(
    name="support",
    instructions="고객 지원 에이전트입니다.",
    handoffs=[
        handoff(billing_agent, description="결제 관련"),
        handoff(shipping_agent, description="배송 관련")
    ]
)

result = Runner.run_sync(support_agent, "배송 상태를 확인해주세요.")
print(result.final_output)
\`\`\``,contentEn:`A multi-agent customer support system using handoffs.

\`\`\`python
from agents import Agent, Runner, function_tool, handoff

@function_tool
def lookup_order(order_id: str) -> str:
    return f"Order {order_id}: In transit"

billing_agent = Agent(name="billing", instructions="Handle billing.")
shipping_agent = Agent(
    name="shipping",
    instructions="Handle shipping.",
    tools=[lookup_order]
)

support_agent = Agent(
    name="support",
    instructions="Customer support agent.",
    handoffs=[
        handoff(billing_agent, description="Billing"),
        handoff(shipping_agent, description="Shipping")
    ]
)

result = Runner.run_sync(support_agent, "Check delivery status.")
print(result.final_output)
\`\`\``},{title:"배포 모범 사례",titleEn:"Deployment Best Practices",content:`### 프로덕션 체크리스트

- **가드레일 설정**: 입출력 검증으로 안전한 동작 보장
- **타임아웃**: 무한 루프 방지를 위한 최대 실행 시간
- **에러 처리**: 도구 실패 시 graceful 복구
- **비용 모니터링**: 토큰 사용량 추적 및 제한
- **로깅**: 에이전트 동작 추적을 위한 상세 로깅

\`\`\`python
from agents import trace

with trace("my_workflow"):
    result = Runner.run_sync(agent, "작업 수행", max_turns=20)
\`\`\``,contentEn:`### Production Checklist

- **Guardrails**: Input/output validation for safe operation
- **Timeouts**: Prevent infinite loops with max execution time
- **Error Handling**: Graceful recovery on tool failures
- **Cost Monitoring**: Track and limit token usage
- **Logging**: Detailed agent behavior tracking

\`\`\`python
from agents import trace

with trace("my_workflow"):
    result = Runner.run_sync(agent, "Perform task", max_turns=20)
\`\`\``}]},l=[w,x,v,R,k];function D(){const{language:p}=h(),n=p==="ko",[r,s]=_.useState(0),i=l[r],d={code({inline:e,className:o,children:a,...g}){const u=/language-(\w+)/.exec(o||"");return!e&&u?t.jsx(c,{code:String(a).replace(/\n$/,""),language:u[1]}):!e&&!u&&String(a).includes(`
`)?t.jsx(c,{code:String(a).replace(/\n$/,""),language:""}):t.jsx("code",{className:"inline-code",...g,children:a})},table({children:e}){return t.jsx("div",{className:"table-responsive",children:t.jsx("table",{children:e})})},blockquote({children:e}){return t.jsx(A,{type:"tip",children:e})}};return t.jsxs("div",{className:"guide-page",children:[t.jsx(y,{title:n?"Agent SDK 가이드":"Agent SDK Guide",path:"/agent-sdk"}),t.jsxs("div",{className:"guide-layout",children:[t.jsxs("aside",{className:"guide-sidebar",children:[t.jsx("div",{className:"guide-sidebar-title",children:n?"목차":"Contents"}),t.jsx("ul",{className:"guide-nav",children:l.map((e,o)=>t.jsx("li",{className:"guide-nav-item",children:t.jsxs("button",{className:`guide-nav-link ${o===r?"active":""}`,onClick:()=>s(o),children:[t.jsx("i",{className:`fa-solid ${e.icon} nav-icon`}),n?e.title:e.titleEn]})},e.id))})]}),t.jsxs("div",{className:"guide-content",children:[t.jsx("div",{className:"guide-content-header",children:t.jsx("h1",{children:n?i.title:i.titleEn})}),i.sections.map((e,o)=>t.jsxs("div",{className:"guide-section",children:[t.jsx("h2",{children:n?e.title:e.titleEn}),t.jsx("div",{className:"markdown-body",children:t.jsx(m,{remarkPlugins:[f],components:d,children:n?e.content:e.contentEn})})]},o)),t.jsxs("div",{className:"guide-section-nav",children:[t.jsxs("button",{disabled:r===0,onClick:()=>s(r-1),children:[t.jsx("i",{className:"fa-solid fa-chevron-left"})," ",n?"이전":"Previous"]}),t.jsxs("button",{disabled:r===l.length-1,onClick:()=>s(r+1),children:[n?"다음":"Next"," ",t.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{D as default};
