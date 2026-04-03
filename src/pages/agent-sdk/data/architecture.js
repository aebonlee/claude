const architecture = {
  id: 'architecture',
  title: '아키텍처',
  titleEn: 'Architecture',
  icon: 'fa-sitemap',
  sections: [
    {
      title: '에이전트 아키텍처',
      titleEn: 'Agent Architecture',
      content: `Agent SDK의 핵심 아키텍처는 에이전트(Agent), 도구(Tool), 러너(Runner), 가드레일(Guardrail)의 네 가지 주요 구성 요소로 이루어져 있습니다.

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
| \`guardrails\` | list | 입출력 가드레일 |`,
      contentEn: `The core architecture of the Agent SDK consists of four main components: Agent, Tool, Runner, and Guardrail.

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
| \`guardrails\` | list | Input/output guardrails |`
    },
    {
      title: '가드레일',
      titleEn: 'Guardrails',
      content: `가드레일은 에이전트의 입력과 출력을 검증하여 안전하고 예측 가능한 동작을 보장합니다.

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
\`\`\``,
      contentEn: `Guardrails validate agent inputs and outputs to ensure safe and predictable behavior.

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
\`\`\``
    }
  ]
};

export default architecture;
