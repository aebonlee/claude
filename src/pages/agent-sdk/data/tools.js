const tools = {
  id: 'tools',
  title: '도구 정의',
  titleEn: 'Tools Definition',
  icon: 'fa-screwdriver-wrench',
  sections: [
    {
      title: '도구 유형',
      titleEn: 'Tool Types',
      content: `Agent SDK에서는 세 가지 방식으로 도구를 정의할 수 있습니다: 함수 도구(Function Tool), 호스트 도구(Hosted Tool), 에이전트 위임(Handoff).

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
\`\`\``,
      contentEn: `In the Agent SDK, you can define tools in three ways: Function Tool, Hosted Tool, and Agent Handoff.

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
\`\`\``
    },
    {
      title: '에이전트 위임 (Handoff)',
      titleEn: 'Agent Handoff',
      content: `### Handoff 패턴

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
\`\`\``,
      contentEn: `### Handoff Pattern

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
\`\`\``
    }
  ]
};

export default tools;
