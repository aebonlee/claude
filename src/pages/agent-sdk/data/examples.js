const examples = {
  id: 'examples',
  title: '실전 예제',
  titleEn: 'Practical Examples',
  icon: 'fa-flask',
  sections: [
    {
      title: '코드 리뷰 에이전트',
      titleEn: 'Code Review Agent',
      content: `코드를 분석하고 품질, 보안, 성능에 대한 피드백을 제공하는 에이전트입니다.

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
\`\`\``,
      contentEn: `An agent that analyzes code and provides feedback on quality, security, and performance.

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
\`\`\``
    },
    {
      title: '리서치 에이전트',
      titleEn: 'Research Agent',
      content: `여러 소스에서 정보를 수집하고 종합 보고서를 작성하는 에이전트입니다.

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
\`\`\``,
      contentEn: `An agent that gathers information from multiple sources and creates reports.

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
\`\`\``
    },
    {
      title: '고객 지원 멀티 에이전트',
      titleEn: 'Customer Support Multi-Agent',
      content: `핸드오프를 활용한 고객 지원 멀티 에이전트 시스템입니다.

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
\`\`\``,
      contentEn: `A multi-agent customer support system using handoffs.

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
\`\`\``
    },
    {
      title: '배포 모범 사례',
      titleEn: 'Deployment Best Practices',
      content: `### 프로덕션 체크리스트

- **가드레일 설정**: 입출력 검증으로 안전한 동작 보장
- **타임아웃**: 무한 루프 방지를 위한 최대 실행 시간
- **에러 처리**: 도구 실패 시 graceful 복구
- **비용 모니터링**: 토큰 사용량 추적 및 제한
- **로깅**: 에이전트 동작 추적을 위한 상세 로깅

\`\`\`python
from agents import trace

with trace("my_workflow"):
    result = Runner.run_sync(agent, "작업 수행", max_turns=20)
\`\`\``,
      contentEn: `### Production Checklist

- **Guardrails**: Input/output validation for safe operation
- **Timeouts**: Prevent infinite loops with max execution time
- **Error Handling**: Graceful recovery on tool failures
- **Cost Monitoring**: Track and limit token usage
- **Logging**: Detailed agent behavior tracking

\`\`\`python
from agents import trace

with trace("my_workflow"):
    result = Runner.run_sync(agent, "Perform task", max_turns=20)
\`\`\``
    }
  ]
};

export default examples;
