const toolUseApi = {
  id: 'tool-use-api',
  title: 'Tool Use API',
  titleEn: 'Tool Use API',
  icon: 'fa-wrench',
  sections: [
    {
      title: 'Tool Use 구현',
      titleEn: 'Implementing Tool Use',
      content: `Tool Use를 사용하면 Claude가 사전 정의된 도구(함수)를 호출하여 외부 시스템과 상호작용할 수 있습니다.

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
\`\`\``,
      contentEn: `Tool Use allows Claude to call predefined tools (functions) to interact with external systems.

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
\`\`\``
    },
    {
      title: 'Tool Use 고급 패턴',
      titleEn: 'Advanced Tool Use Patterns',
      content: `### 도구 호출 루프

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

> **팁**: \`is_error: True\`를 설정하면 Claude가 에러 상황을 이해하고 사용자에게 적절히 안내합니다.`,
      contentEn: `### Tool Call Loop

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

> **Tip**: Setting \`is_error: True\` helps Claude understand the error situation and guide the user appropriately.`
    }
  ]
};

export default toolUseApi;
