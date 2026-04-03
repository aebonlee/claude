const orchestration = {
  id: 'orchestration',
  title: '오케스트레이션',
  titleEn: 'Orchestration Patterns',
  icon: 'fa-diagram-project',
  sections: [
    {
      title: '멀티 에이전트 패턴',
      titleEn: 'Multi-Agent Patterns',
      content: `Agent SDK에서는 여러 에이전트를 조합하여 복잡한 워크플로우를 구성할 수 있습니다. 대표적인 오케스트레이션 패턴을 살펴보겠습니다.

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
\`\`\``,
      contentEn: `In the Agent SDK, you can combine multiple agents to build complex workflows. Let's explore the key orchestration patterns.

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
\`\`\``
    },
    {
      title: '트레이싱과 디버깅',
      titleEn: 'Tracing and Debugging',
      content: `### 트레이싱 설정

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
\`\`\``,
      contentEn: `### Tracing Setup

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
\`\`\``
    }
  ]
};

export default orchestration;
