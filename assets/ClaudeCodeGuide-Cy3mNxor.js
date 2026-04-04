import{j as e,M as y,r as v}from"./markdown-nDXzyGI7.js";import{b as C}from"./vendor-C9mfkM5v.js";import{u as E}from"./index-Bp5wa2Qe.js";import{S as b}from"./SEOHead-DhJvCSIj.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";function h({code:s,language:o=""}){const[a,r]=C.useState(!1),l=async()=>{try{await navigator.clipboard.writeText(s),r(!0),setTimeout(()=>r(!1),2e3)}catch{const n=document.createElement("textarea");n.value=s,document.body.appendChild(n),n.select(),document.execCommand("copy"),document.body.removeChild(n),r(!0),setTimeout(()=>r(!1),2e3)}};return e.jsxs("div",{className:"code-block-wrapper",children:[e.jsxs("div",{className:"code-block-header",children:[e.jsx("span",{className:"code-block-lang",children:o}),e.jsxs("button",{className:`code-copy-btn ${a?"copied":""}`,onClick:l,children:[e.jsx("i",{className:`fa-solid ${a?"fa-check":"fa-copy"}`}),a?"Copied!":"Copy"]})]}),e.jsx("div",{className:"code-block-content",children:e.jsx("pre",{children:e.jsx("code",{children:s})})})]})}const S={tip:"fa-lightbulb",warning:"fa-triangle-exclamation",important:"fa-circle-info",danger:"fa-circle-xmark"},P={tip:"Tip",warning:"Warning",important:"Important",danger:"Danger"};function A({type:s="tip",title:o,children:a}){return e.jsxs("div",{className:`tip-box ${s}`,children:[e.jsx("span",{className:"tip-box-icon",children:e.jsx("i",{className:`fa-solid ${S[s]}`})}),e.jsxs("div",{className:"tip-box-content",children:[o&&e.jsx("strong",{children:o}),!o&&e.jsx("strong",{children:P[s]}),e.jsx("div",{children:a})]})]})}const k={id:"overview",title:"개요",titleEn:"Overview",icon:"fa-book",sections:[{title:"Claude Code란?",titleEn:"What is Claude Code?",content:`Claude Code는 Anthropic이 만든 **에이전틱 코딩 도구**로, 터미널에서 직접 실행됩니다. 코드베이스를 이해하고, 명령을 실행하며, 코드를 편집하고, 복잡한 소프트웨어 엔지니어링 작업을 자율적으로 수행할 수 있습니다.

Claude Code는 별도의 복잡한 설정 없이 프로젝트 디렉토리에서 바로 작동하며, 기존 워크플로우에 자연스럽게 통합됩니다.

### 주요 특징

- **터미널 네이티브**: 기존 개발 환경과 도구 체인에 자연스럽게 통합
- **코드베이스 이해**: 프로젝트 구조와 코드를 자동으로 분석
- **다중 파일 편집**: 여러 파일에 걸친 변경사항을 한 번에 처리
- **Git 통합**: 커밋, PR 생성, 브랜치 관리 등 Git 작업 수행
- **도구 실행**: 테스트, 린터, 빌드 도구 등을 직접 실행
- **안전한 실행**: 파일 변경 전 확인 요청, 권한 기반 실행 제어`,contentEn:`Claude Code is an **agentic coding tool** built by Anthropic that runs directly in your terminal. It can understand your codebase, execute commands, edit code, and autonomously perform complex software engineering tasks.

Claude Code works right from your project directory without any complex configuration and integrates naturally into your existing workflow.

### Key Features

- **Terminal Native**: Integrates naturally with your existing development environment and toolchain
- **Codebase Understanding**: Automatically analyzes project structure and code
- **Multi-file Editing**: Handles changes across multiple files at once
- **Git Integration**: Performs Git operations like commits, PR creation, branch management
- **Tool Execution**: Directly runs tests, linters, build tools, and more
- **Safe Execution**: Asks for confirmation before file changes, permission-based execution control`},{title:"설치 방법",titleEn:"Installation",content:`### 시스템 요구사항

- **운영체제**: macOS 10.15+, Ubuntu 20.04+ / Debian 10+, Windows (WSL 필요)
- **Node.js**: 18 이상
- **RAM**: 최소 4GB 권장

### 설치

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

### 인증 설정

설치 후 처음 실행하면 인증이 필요합니다:

\`\`\`bash
# 프로젝트 디렉토리로 이동
cd your-project

# Claude Code 실행 (자동으로 인증 안내)
claude
\`\`\`

인증 방법은 두 가지입니다:
1. **Anthropic Console** 계정으로 로그인 (API 키 사용)
2. **Claude Pro/Max 구독**으로 로그인 (OAuth)

\`\`\`bash
# API 키로 직접 설정할 수도 있습니다
export ANTHROPIC_API_KEY="sk-ant-..."
\`\`\``,contentEn:`### System Requirements

- **OS**: macOS 10.15+, Ubuntu 20.04+ / Debian 10+, Windows (WSL required)
- **Node.js**: 18 or higher
- **RAM**: Minimum 4GB recommended

### Installation

\`\`\`bash
npm install -g @anthropic-ai/claude-code
\`\`\`

### Authentication Setup

Authentication is required when you first run after installation:

\`\`\`bash
# Navigate to your project directory
cd your-project

# Run Claude Code (will automatically guide authentication)
claude
\`\`\`

There are two authentication methods:
1. **Anthropic Console** account login (using API key)
2. **Claude Pro/Max subscription** login (OAuth)

\`\`\`bash
# You can also set the API key directly
export ANTHROPIC_API_KEY="sk-ant-..."
\`\`\``},{title:"기본 사용법",titleEn:"Basic Usage",content:`### 대화형 모드

\`\`\`bash
# 프로젝트 디렉토리에서 Claude Code 시작
cd my-project
claude
\`\`\`

대화형 모드에서는 자연어로 Claude와 소통하며 코딩 작업을 수행합니다:

\`\`\`
> 이 프로젝트의 구조를 설명해줘
> src/utils.js에 날짜 포맷팅 함수를 추가해줘
> 테스트를 실행하고 실패한 것들을 고쳐줘
\`\`\`

### 원샷 모드

\`\`\`bash
# 단일 명령으로 작업 수행
claude -p "package.json의 의존성 목록을 보여줘"

# 파이프라인과 함께 사용
cat error.log | claude -p "이 에러 로그를 분석해줘"
\`\`\`

### 이어서 대화하기

\`\`\`bash
# 가장 최근 대화 이어서 하기
claude --continue

# 특정 세션 이어서 하기
claude --resume
\`\`\`

### 유용한 시작 플래그

| 플래그 | 설명 |
|--------|------|
| \`--print\` / \`-p\` | 원샷 모드 (비대화형) |
| \`--continue\` / \`-c\` | 마지막 대화 이어하기 |
| \`--resume\` / \`-r\` | 특정 세션 선택하여 이어하기 |
| \`--model\` | 사용할 모델 지정 |
| \`--verbose\` | 상세 로그 출력 |
| \`--allowedTools\` | 허용할 도구 지정 |`,contentEn:`### Interactive Mode

\`\`\`bash
# Start Claude Code in your project directory
cd my-project
claude
\`\`\`

In interactive mode, communicate with Claude in natural language to perform coding tasks:

\`\`\`
> Explain the structure of this project
> Add a date formatting function to src/utils.js
> Run the tests and fix any failures
\`\`\`

### One-shot Mode

\`\`\`bash
# Perform tasks with a single command
claude -p "Show me the dependency list from package.json"

# Use with pipelines
cat error.log | claude -p "Analyze this error log"
\`\`\`

### Continue Conversations

\`\`\`bash
# Continue the most recent conversation
claude --continue

# Resume a specific session
claude --resume
\`\`\`

### Useful Startup Flags

| Flag | Description |
|------|-------------|
| \`--print\` / \`-p\` | One-shot mode (non-interactive) |
| \`--continue\` / \`-c\` | Continue last conversation |
| \`--resume\` / \`-r\` | Select and resume a specific session |
| \`--model\` | Specify model to use |
| \`--verbose\` | Verbose log output |
| \`--allowedTools\` | Specify allowed tools |`}]},x={id:"hooks",title:"Hooks 시스템",titleEn:"Hooks System",icon:"fa-plug",sections:[{title:"Hooks 개요",titleEn:"Hooks Overview",content:`Hooks는 Claude Code의 동작 과정에서 특정 이벤트가 발생할 때 **사용자 정의 셸 명령을 자동 실행**하는 시스템입니다. 코드 변환, 알림, 로깅, 커스텀 검증 등 다양한 자동화를 구현할 수 있습니다.

### Hooks의 장점

- **코드 변환 자동화**: 파일 수정 후 자동으로 포맷팅, 린팅 적용
- **알림 시스템**: 특정 이벤트 발생 시 알림 전송
- **커스텀 로깅**: 모든 명령 실행과 파일 변경을 기록
- **보안 검증**: LLM 응답이 적용되기 전에 검증 로직 실행
- **LLM 우회**: 프롬프트 인젝션 위험 없이 셸에서 직접 실행`,contentEn:`Hooks is a system that **automatically executes user-defined shell commands** when specific events occur during Claude Code's operation. You can implement various automations such as code transformation, notifications, logging, and custom validation.

### Benefits of Hooks

- **Code Transformation Automation**: Automatically apply formatting and linting after file modifications
- **Notification System**: Send notifications when specific events occur
- **Custom Logging**: Record all command executions and file changes
- **Security Validation**: Run validation logic before LLM responses are applied
- **LLM Bypass**: Execute directly in the shell without prompt injection risk`},{title:"이벤트 타입",titleEn:"Event Types",content:"Hooks에서 사용할 수 있는 이벤트 타입은 다음과 같습니다:\n\n| 이벤트 | 실행 시점 | 주요 용도 |\n|--------|----------|----------|\n| `PreToolUse` | 도구 호출 전 | 작업 차단 또는 수정 |\n| `PostToolUse` | 도구 호출 후 | 결과 변환, 알림 |\n| `Notification` | 알림 발생 시 | 외부 알림 전송 |\n| `Stop` | Claude 응답 완료 시 | 추가 작업 실행 |\n| `SubagentStop` | 서브에이전트 완료 시 | 서브에이전트 결과 처리 |\n\n### 도구 이름 매칭\n\n`PreToolUse`와 `PostToolUse`에서는 특정 도구에만 반응하도록 매처를 설정할 수 있습니다:\n\n- `Write` - 파일 쓰기\n- `Edit` - 파일 편집\n- `Bash` - 셸 명령 실행\n- `Read` - 파일 읽기\n- `Glob` - 파일 패턴 매칭\n- `Grep` - 텍스트 검색\n- `WebFetch` - 웹 요청\n- `TodoWrite` - TODO 목록 관리",contentEn:"The event types available in Hooks are as follows:\n\n| Event | Trigger Point | Primary Use |\n|-------|--------------|-------------|\n| `PreToolUse` | Before tool call | Block or modify operations |\n| `PostToolUse` | After tool call | Transform results, notifications |\n| `Notification` | When notification occurs | Send external notifications |\n| `Stop` | When Claude response completes | Execute additional tasks |\n| `SubagentStop` | When subagent completes | Process subagent results |\n\n### Tool Name Matching\n\nIn `PreToolUse` and `PostToolUse`, you can set matchers to respond only to specific tools:\n\n- `Write` - File writing\n- `Edit` - File editing\n- `Bash` - Shell command execution\n- `Read` - File reading\n- `Glob` - File pattern matching\n- `Grep` - Text search\n- `WebFetch` - Web requests\n- `TodoWrite` - TODO list management"},{title:"Hook 설정",titleEn:"Hook Configuration",content:`Hooks는 settings 파일에서 설정합니다:

### 사용자 전역 설정

\`~/.claude/settings.json\`에서 모든 프로젝트에 적용되는 hooks를 설정합니다:

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "echo '파일 쓰기가 요청되었습니다: $CLAUDE_FILE_PATH'"
          }
        ]
      }
    ]
  }
}
\`\`\`

### 프로젝트 설정

\`.claude/settings.json\`에서 프로젝트별 hooks를 설정합니다:

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $CLAUDE_FILE_PATH"
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "terminal-notifier -message '$CLAUDE_NOTIFICATION'"
          }
        ]
      }
    ]
  }
}
\`\`\`

### Hook 입력 (stdin)

각 hook은 JSON 형식의 입력을 stdin으로 받습니다:

\`\`\`json
{
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.js",
    "content": "..."
  }
}
\`\`\`

### Hook 출력

Hook의 stdout 출력도 JSON으로 해석됩니다:

\`\`\`json
{
  "decision": "block",
  "reason": "이 파일은 수정할 수 없습니다"
}
\`\`\`

\`decision\` 값:
- \`"approve"\` - 작업 승인 (자동 허용)
- \`"block"\` - 작업 차단
- \`"modify"\` - 입력을 수정하여 실행
- 값 없음 - 일반적인 권한 흐름 진행`,contentEn:`Hooks are configured in settings files:

### User Global Settings

Set hooks that apply to all projects in \`~/.claude/settings.json\`:

\`\`\`json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "echo 'File write requested: $CLAUDE_FILE_PATH'"
          }
        ]
      }
    ]
  }
}
\`\`\`

### Project Settings

Set project-specific hooks in \`.claude/settings.json\`:

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $CLAUDE_FILE_PATH"
          }
        ]
      }
    ],
    "Notification": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "terminal-notifier -message '$CLAUDE_NOTIFICATION'"
          }
        ]
      }
    ]
  }
}
\`\`\`

### Hook Input (stdin)

Each hook receives JSON-formatted input via stdin:

\`\`\`json
{
  "tool_name": "Write",
  "tool_input": {
    "file_path": "/path/to/file.js",
    "content": "..."
  }
}
\`\`\`

### Hook Output

The hook's stdout output is interpreted as JSON:

\`\`\`json
{
  "decision": "block",
  "reason": "This file cannot be modified"
}
\`\`\`

\`decision\` values:
- \`"approve"\` - Approve the action (auto-allow)
- \`"block"\` - Block the action
- \`"modify"\` - Modify input and execute
- No value - Continue normal permission flow`},{title:"실전 Hook 예제",titleEn:"Practical Hook Examples",content:`### 자동 포맷팅 Hook

파일이 작성되거나 편집될 때 자동으로 Prettier를 실행합니다:

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $CLAUDE_FILE_PATH 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}
\`\`\`

### 보호 파일 차단 Hook

특정 파일의 수정을 차단합니다:

\`\`\`bash
#!/bin/bash
# hooks/protect-files.sh
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

PROTECTED_FILES=(".env" "package-lock.json" "yarn.lock")

for protected in "\${PROTECTED_FILES[@]}"; do
  if [[ "$FILE_PATH" == *"$protected"* ]]; then
    echo '{"decision": "block", "reason": "이 파일은 보호된 파일입니다."}'
    exit 0
  fi
done
\`\`\`

### Slack 알림 Hook

작업 완료 시 Slack으로 알림을 보냅니다:

\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -X POST $SLACK_WEBHOOK_URL -d '{"text": "Claude Code 작업이 완료되었습니다."}'"
          }
        ]
      }
    ]
  }
}
\`\`\``,contentEn:`### Auto-formatting Hook

Automatically runs Prettier when files are written or edited:

\`\`\`json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "npx prettier --write $CLAUDE_FILE_PATH 2>/dev/null || true"
          }
        ]
      }
    ]
  }
}
\`\`\`

### Protected File Blocking Hook

Block modifications to specific files:

\`\`\`bash
#!/bin/bash
# hooks/protect-files.sh
INPUT=$(cat)
FILE_PATH=$(echo "$INPUT" | jq -r '.tool_input.file_path // empty')

PROTECTED_FILES=(".env" "package-lock.json" "yarn.lock")

for protected in "\${PROTECTED_FILES[@]}"; do
  if [[ "$FILE_PATH" == *"$protected"* ]]; then
    echo '{"decision": "block", "reason": "This is a protected file."}'
    exit 0
  fi
done
\`\`\`

### Slack Notification Hook

Send Slack notifications when tasks complete:

\`\`\`json
{
  "hooks": {
    "Stop": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "curl -X POST $SLACK_WEBHOOK_URL -d '{"text": "Claude Code task completed."}'"
          }
        ]
      }
    ]
  }
}
\`\`\``}]},w={id:"slash-commands",title:"슬래시 커맨드",titleEn:"Slash Commands",icon:"fa-terminal",sections:[{title:"슬래시 커맨드 개요",titleEn:"Slash Commands Overview",content:"슬래시 커맨드는 Claude Code 대화형 세션에서 `/` 접두사로 시작하는 특수 명령어입니다. 이 명령어들은 Claude에게 메시지를 보내는 대신, Claude Code 자체의 기능을 제어합니다.\n\n### 사용 방법\n\n대화형 모드에서 프롬프트 입력 시 `/`를 먼저 입력하면 사용 가능한 명령어 목록이 자동 완성으로 표시됩니다.\n\n```\n> /help      # 도움말 표시\n> /clear     # 대화 내역 초기화\n> /compact   # 대화 내역 압축\n```",contentEn:"Slash commands are special commands that start with the `/` prefix in Claude Code interactive sessions. Instead of sending messages to Claude, these commands control Claude Code's own functionality.\n\n### Usage\n\nWhen typing in interactive mode, entering `/` first will display available commands through auto-completion.\n\n```\n> /help      # Show help\n> /clear     # Clear conversation history\n> /compact   # Compress conversation history\n```"},{title:"세션 관리 커맨드",titleEn:"Session Management Commands",content:`### /help

사용 가능한 모든 슬래시 커맨드와 단축키를 표시합니다.

### /clear

현재 대화 내역을 모두 지우고 새 세션을 시작합니다. 컨텍스트 윈도우가 커질 때 유용합니다.

### /compact

현재 대화를 요약하여 컨텍스트 크기를 줄입니다. 긴 대화에서 토큰 사용량을 최적화할 때 사용합니다.

\`\`\`
> /compact              # 기본 요약
> /compact 핵심만 정리  # 커스텀 요약 프롬프트
\`\`\`

대화가 길어지면 Claude Code가 자동으로 compact를 권장하기도 합니다.

### /cost

현재 세션의 API 사용 비용과 토큰 사용량을 표시합니다.

\`\`\`
> /cost
Session cost: $0.42
Input tokens: 15,230
Output tokens: 3,891
\`\`\`

### /status

현재 세션 상태, 인증 정보, 활성 설정 등을 표시합니다.`,contentEn:`### /help

Displays all available slash commands and keyboard shortcuts.

### /clear

Clears all current conversation history and starts a new session. Useful when the context window gets large.

### /compact

Summarizes the current conversation to reduce context size. Used to optimize token usage in long conversations.

\`\`\`
> /compact                     # Default summary
> /compact key points only     # Custom summary prompt
\`\`\`

Claude Code may also automatically recommend compacting when conversations get long.

### /cost

Displays API usage cost and token usage for the current session.

\`\`\`
> /cost
Session cost: $0.42
Input tokens: 15,230
Output tokens: 3,891
\`\`\`

### /status

Displays current session status, authentication info, active settings, etc.`},{title:"설정 및 인증 커맨드",titleEn:"Configuration & Auth Commands",content:`### /config

Claude Code 설정을 관리합니다. 대화형 설정 메뉴를 제공합니다.

\`\`\`
> /config          # 설정 메뉴 표시
\`\`\`

### /model

사용할 Claude 모델을 변경합니다.

\`\`\`
> /model                        # 모델 선택 메뉴
> /model claude-sonnet-4-20250514  # 직접 모델 지정
\`\`\`

사용 가능한 모델:
- \`claude-sonnet-4-20250514\` (기본)
- \`claude-opus-4-20250514\`
- 기타 사용 가능한 모델

### /login

Anthropic 계정에 다시 로그인합니다.

### /logout

현재 인증을 해제합니다.

### /permissions

현재 세션의 도구 권한 설정을 관리합니다. 허용/거부된 도구 목록을 확인하고 수정할 수 있습니다.`,contentEn:`### /config

Manage Claude Code settings. Provides an interactive settings menu.

\`\`\`
> /config          # Show settings menu
\`\`\`

### /model

Change the Claude model to use.

\`\`\`
> /model                        # Model selection menu
> /model claude-sonnet-4-20250514  # Specify model directly
\`\`\`

Available models:
- \`claude-sonnet-4-20250514\` (default)
- \`claude-opus-4-20250514\`
- Other available models

### /login

Re-login to your Anthropic account.

### /logout

Sign out from the current authentication.

### /permissions

Manage tool permission settings for the current session. View and modify the list of allowed/denied tools.`},{title:"프로젝트 및 도구 커맨드",titleEn:"Project & Tool Commands",content:`### /init

현재 프로젝트에 대한 CLAUDE.md 파일을 자동 생성합니다. 프로젝트 구조를 분석하여 맞춤형 설정 파일을 만들어 줍니다.

\`\`\`
> /init
# CLAUDE.md가 프로젝트 루트에 생성됩니다
\`\`\`

### /mcp

MCP (Model Context Protocol) 서버 설정을 관리합니다.

\`\`\`
> /mcp                # MCP 서버 목록 표시
\`\`\`

### /memory

CLAUDE.md 메모리 파일을 편집합니다. 프로젝트에 대한 지속적인 컨텍스트를 관리할 수 있습니다.

\`\`\`
> /memory             # 메모리 파일 편집
\`\`\`

### /review

현재 Git 변경사항에 대한 코드 리뷰를 수행합니다. 스테이징된 변경사항이나 특정 PR을 리뷰할 수 있습니다.

\`\`\`
> /review             # 현재 변경사항 리뷰
\`\`\`

### /doctor

Claude Code 설치 상태를 진단하고 문제를 해결합니다.

\`\`\`
> /doctor
# 인증, 네트워크, 설정 등을 확인합니다
\`\`\`

### /terminal-setup

터미널에 Claude Code 셸 통합을 설치합니다.

### /vim

Vim 키바인딩 모드를 토글합니다. Vim 사용자라면 익숙한 키바인딩으로 Claude Code를 사용할 수 있습니다.`,contentEn:`### /init

Automatically generates a CLAUDE.md file for the current project. Analyzes the project structure to create a customized configuration file.

\`\`\`
> /init
# CLAUDE.md is created at the project root
\`\`\`

### /mcp

Manage MCP (Model Context Protocol) server configuration.

\`\`\`
> /mcp                # Show MCP server list
\`\`\`

### /memory

Edit the CLAUDE.md memory file. Manage persistent context for your project.

\`\`\`
> /memory             # Edit memory file
\`\`\`

### /review

Perform a code review of current Git changes. Can review staged changes or specific PRs.

\`\`\`
> /review             # Review current changes
\`\`\`

### /doctor

Diagnose Claude Code installation status and resolve issues.

\`\`\`
> /doctor
# Checks authentication, network, settings, etc.
\`\`\`

### /terminal-setup

Install Claude Code shell integration in the terminal.

### /vim

Toggle Vim keybinding mode. Vim users can use Claude Code with familiar keybindings.`}]},I={id:"mcp-servers",title:"MCP 서버",titleEn:"MCP Servers",icon:"fa-server",sections:[{title:"MCP란?",titleEn:"What is MCP?",content:`**MCP (Model Context Protocol)**는 AI 모델이 외부 도구와 데이터 소스에 접근할 수 있게 해주는 개방형 프로토콜입니다. Claude Code는 MCP 클라이언트로서, MCP 서버에서 제공하는 도구들을 자연스럽게 사용할 수 있습니다.

### MCP의 핵심 개념

- **서버**: 도구와 리소스를 제공하는 프로세스
- **클라이언트**: 서버에 연결하여 도구를 사용하는 프로세스 (Claude Code)
- **도구 (Tools)**: 서버가 제공하는 실행 가능한 기능
- **리소스 (Resources)**: 서버가 제공하는 데이터 소스

### MCP를 사용하는 이유

- **확장성**: Claude Code의 기능을 무한히 확장 가능
- **표준화**: 표준 프로토콜로 다양한 서비스와 통합
- **보안**: 서버별 권한 격리
- **커뮤니티**: 다양한 오픈소스 MCP 서버 활용 가능`,contentEn:`**MCP (Model Context Protocol)** is an open protocol that enables AI models to access external tools and data sources. Claude Code acts as an MCP client, naturally using tools provided by MCP servers.

### Core Concepts of MCP

- **Server**: A process that provides tools and resources
- **Client**: A process that connects to servers and uses tools (Claude Code)
- **Tools**: Executable functions provided by the server
- **Resources**: Data sources provided by the server

### Why Use MCP

- **Extensibility**: Infinitely extend Claude Code's capabilities
- **Standardization**: Integrate with various services via a standard protocol
- **Security**: Permission isolation per server
- **Community**: Leverage diverse open-source MCP servers`},{title:"MCP 서버 설정",titleEn:"MCP Server Configuration",content:`### 설정 파일 위치

MCP 서버는 다음 위치에서 설정할 수 있습니다:

- **프로젝트 설정**: \`.claude/settings.json\`
- **사용자 설정**: \`~/.claude/settings.json\`

### 설정 형식

\`\`\`json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/directory"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
\`\`\`

### 설정 필드

| 필드 | 설명 | 필수 |
|------|------|------|
| \`command\` | 실행할 명령어 | O |
| \`args\` | 명령어 인자 배열 | X |
| \`env\` | 환경 변수 | X |
| \`cwd\` | 작업 디렉토리 | X |

### CLI에서 MCP 서버 추가

\`\`\`bash
# MCP 서버 추가
claude mcp add server-name -- npx -y @modelcontextprotocol/server-name

# MCP 서버 목록 확인
claude mcp list

# MCP 서버 제거
claude mcp remove server-name
\`\`\`

### 범위 설정

\`\`\`bash
# 프로젝트 범위 (기본)
claude mcp add --scope project my-server -- command args

# 사용자 전역 범위
claude mcp add --scope user my-server -- command args
\`\`\``,contentEn:`### Configuration File Locations

MCP servers can be configured in the following locations:

- **Project settings**: \`.claude/settings.json\`
- **User settings**: \`~/.claude/settings.json\`

### Configuration Format

\`\`\`json
{
  "mcpServers": {
    "server-name": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/directory"],
      "env": {
        "API_KEY": "your-key"
      }
    }
  }
}
\`\`\`

### Configuration Fields

| Field | Description | Required |
|-------|-------------|----------|
| \`command\` | Command to execute | Yes |
| \`args\` | Command arguments array | No |
| \`env\` | Environment variables | No |
| \`cwd\` | Working directory | No |

### Adding MCP Servers via CLI

\`\`\`bash
# Add an MCP server
claude mcp add server-name -- npx -y @modelcontextprotocol/server-name

# List MCP servers
claude mcp list

# Remove an MCP server
claude mcp remove server-name
\`\`\`

### Scope Settings

\`\`\`bash
# Project scope (default)
claude mcp add --scope project my-server -- command args

# User global scope
claude mcp add --scope user my-server -- command args
\`\`\``},{title:"유용한 MCP 서버",titleEn:"Useful MCP Servers",content:`### 파일 시스템 서버

디렉토리 접근 및 파일 관리를 제공합니다:

\`\`\`bash
claude mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem /path/to/dir
\`\`\`

### GitHub 서버

GitHub API와 통합하여 이슈, PR, 리포지토리를 관리합니다:

\`\`\`bash
claude mcp add github -- npx -y @modelcontextprotocol/server-github
\`\`\`

환경 변수로 토큰을 설정해야 합니다:
\`\`\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    }
  }
}
\`\`\`

### PostgreSQL 서버

데이터베이스 쿼리와 스키마 관리:

\`\`\`bash
claude mcp add postgres -- npx -y @modelcontextprotocol/server-postgres "postgresql://localhost/mydb"
\`\`\`

### Puppeteer 서버

브라우저 자동화 및 웹 스크래핑:

\`\`\`bash
claude mcp add puppeteer -- npx -y @modelcontextprotocol/server-puppeteer
\`\`\`

### 커스텀 MCP 서버 만들기

자체 MCP 서버를 만들 수도 있습니다. MCP SDK를 사용하여 TypeScript나 Python으로 구현합니다:

\`\`\`bash
# TypeScript MCP 서버 프로젝트 생성
npx @modelcontextprotocol/create-server my-server
cd my-server
npm install
npm run build
\`\`\``,contentEn:`### Filesystem Server

Provides directory access and file management:

\`\`\`bash
claude mcp add filesystem -- npx -y @modelcontextprotocol/server-filesystem /path/to/dir
\`\`\`

### GitHub Server

Integrates with the GitHub API to manage issues, PRs, and repositories:

\`\`\`bash
claude mcp add github -- npx -y @modelcontextprotocol/server-github
\`\`\`

You need to set the token as an environment variable:
\`\`\`json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    }
  }
}
\`\`\`

### PostgreSQL Server

Database queries and schema management:

\`\`\`bash
claude mcp add postgres -- npx -y @modelcontextprotocol/server-postgres "postgresql://localhost/mydb"
\`\`\`

### Puppeteer Server

Browser automation and web scraping:

\`\`\`bash
claude mcp add puppeteer -- npx -y @modelcontextprotocol/server-puppeteer
\`\`\`

### Creating Custom MCP Servers

You can also create your own MCP server. Implement it in TypeScript or Python using the MCP SDK:

\`\`\`bash
# Create a TypeScript MCP server project
npx @modelcontextprotocol/create-server my-server
cd my-server
npm install
npm run build
\`\`\``},{title:"MCP 서버 디버깅",titleEn:"Debugging MCP Servers",content:`### 서버 상태 확인

\`\`\`bash
# 대화형 모드에서
> /mcp
\`\`\`

MCP 서버의 연결 상태와 사용 가능한 도구 목록이 표시됩니다.

### 일반적인 문제 해결

**서버가 시작되지 않는 경우:**
- 명령어 경로가 올바른지 확인
- 필요한 패키지가 설치되어 있는지 확인
- 환경 변수가 올바르게 설정되어 있는지 확인

**도구가 표시되지 않는 경우:**
- 서버가 정상적으로 실행 중인지 확인
- 서버 로그를 확인하여 오류 메시지 확인
- MCP 프로토콜 버전이 호환되는지 확인

### 로그 확인

\`\`\`bash
# Claude Code 로그에서 MCP 관련 메시지 확인
# 로그 파일 위치: ~/.claude/logs/
\`\`\`

### 보안 고려사항

- MCP 서버는 로컬에서 실행되므로 시스템 리소스에 접근할 수 있습니다
- 신뢰할 수 있는 서버만 사용하세요
- API 키와 같은 민감한 정보는 환경 변수로 관리하세요
- 프로젝트 설정 파일(\`.claude/settings.json\`)에 시크릿을 직접 넣지 마세요`,contentEn:`### Check Server Status

\`\`\`bash
# In interactive mode
> /mcp
\`\`\`

Shows MCP server connection status and available tool list.

### Common Troubleshooting

**If the server won't start:**
- Verify the command path is correct
- Ensure required packages are installed
- Confirm environment variables are properly set

**If tools aren't showing:**
- Check if the server is running normally
- Check server logs for error messages
- Verify MCP protocol version compatibility

### Checking Logs

\`\`\`bash
# Check MCP-related messages in Claude Code logs
# Log file location: ~/.claude/logs/
\`\`\`

### Security Considerations

- MCP servers run locally and can access system resources
- Only use servers you trust
- Manage sensitive information like API keys using environment variables
- Don't put secrets directly in project settings files (\`.claude/settings.json\`)`}]},j={id:"settings",title:"설정",titleEn:"Settings",icon:"fa-gear",sections:[{title:"설정 구조",titleEn:"Settings Structure",content:`Claude Code는 계층적 설정 시스템을 사용합니다. 여러 레벨에서 설정을 정의할 수 있으며, 더 구체적인 설정이 일반 설정을 덮어씁니다.

### 설정 파일 우선순위

1. **엔터프라이즈 정책** - 관리자가 설정한 정책 (최고 우선순위)
2. **사용자 설정** - \`~/.claude/settings.json\`
3. **프로젝트 설정** - \`.claude/settings.json\` (Git 추적 가능)
4. **로컬 프로젝트 설정** - \`.claude/settings.local.json\` (Git 무시)

### 설정 파일 구조

\`\`\`json
{
  "permissions": {
    "allow": [],
    "deny": []
  },
  "hooks": {},
  "mcpServers": {},
  "env": {}
}
\`\`\`

### 설정 관리 방법

\`\`\`bash
# 대화형 설정 메뉴
claude config

# 특정 설정 값 확인
claude config get permissions

# 설정 값 변경
claude config set preferredModel claude-opus-4-20250514
\`\`\``,contentEn:`Claude Code uses a hierarchical settings system. You can define settings at multiple levels, where more specific settings override general ones.

### Settings File Priority

1. **Enterprise Policy** - Admin-configured policies (highest priority)
2. **User Settings** - \`~/.claude/settings.json\`
3. **Project Settings** - \`.claude/settings.json\` (Git-trackable)
4. **Local Project Settings** - \`.claude/settings.local.json\` (Git-ignored)

### Settings File Structure

\`\`\`json
{
  "permissions": {
    "allow": [],
    "deny": []
  },
  "hooks": {},
  "mcpServers": {},
  "env": {}
}
\`\`\`

### Managing Settings

\`\`\`bash
# Interactive settings menu
claude config

# Check specific setting values
claude config get permissions

# Change setting values
claude config set preferredModel claude-opus-4-20250514
\`\`\``},{title:"권한 설정",titleEn:"Permission Settings",content:`### 권한 모드

Claude Code는 세 가지 권한 모드를 제공합니다:

| 모드 | 설명 | 사용 사례 |
|------|------|----------|
| **Default** | 각 도구 사용 시 확인 요청 | 일반적인 대화형 사용 |
| **Allowlist** | 허용 목록의 도구만 자동 실행 | 반복적인 작업 자동화 |
| **Yolo** | 모든 도구 자동 실행 (확인 없음) | CI/CD, 자동화 파이프라인 |

### 권한 설정 예시

\`\`\`json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "Bash(npm test)",
      "Bash(npm run lint)",
      "Write(src/**)",
      "Edit(src/**)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Write(.env*)"
    ]
  }
}
\`\`\`

### 권한 패턴

- \`"Read"\` - Read 도구 전체 허용
- \`"Bash(npm test)"\` - 특정 명령어만 허용
- \`"Write(src/**)" \` - 특정 경로에만 쓰기 허용
- \`"Edit(*.js)"\` - 특정 패턴의 파일 편집만 허용

### 세션 내 권한 관리

대화 중에도 권한을 변경할 수 있습니다:

\`\`\`
> /permissions
# 현재 권한 설정을 확인하고 수정할 수 있습니다
\`\`\`

도구 사용 확인 시 응답 옵션:
- **y** (Yes) - 이번만 허용
- **n** (No) - 거부
- **a** (Always) - 이 세션에서 항상 허용
- **d** (Don't allow) - 이 세션에서 항상 거부`,contentEn:`### Permission Modes

Claude Code provides three permission modes:

| Mode | Description | Use Case |
|------|-------------|----------|
| **Default** | Asks for confirmation for each tool use | General interactive use |
| **Allowlist** | Auto-executes only tools on the allow list | Repetitive task automation |
| **Yolo** | Auto-executes all tools (no confirmation) | CI/CD, automation pipelines |

### Permission Configuration Example

\`\`\`json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "Bash(npm test)",
      "Bash(npm run lint)",
      "Write(src/**)",
      "Edit(src/**)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Write(.env*)"
    ]
  }
}
\`\`\`

### Permission Patterns

- \`"Read"\` - Allow all Read tool usage
- \`"Bash(npm test)"\` - Allow only specific commands
- \`"Write(src/**)" \` - Allow writing only to specific paths
- \`"Edit(*.js)"\` - Allow editing only files matching specific patterns

### In-session Permission Management

You can change permissions during a conversation:

\`\`\`
> /permissions
# Check and modify current permission settings
\`\`\`

Response options when confirming tool use:
- **y** (Yes) - Allow this time only
- **n** (No) - Deny
- **a** (Always) - Always allow in this session
- **d** (Don't allow) - Always deny in this session`},{title:"환경 변수",titleEn:"Environment Variables",content:`Claude Code는 다양한 환경 변수를 통해 동작을 제어할 수 있습니다.

### 인증 관련

| 변수 | 설명 |
|------|------|
| \`ANTHROPIC_API_KEY\` | Anthropic API 키 |
| \`CLAUDE_CODE_USE_BEDROCK\` | AWS Bedrock 사용 (\`1\`) |
| \`CLAUDE_CODE_USE_VERTEX\` | Google Vertex AI 사용 (\`1\`) |
| \`AWS_REGION\` | Bedrock 리전 |
| \`ANTHROPIC_MODEL\` | 기본 모델 지정 |

### 동작 제어

| 변수 | 설명 |
|------|------|
| \`CLAUDE_CODE_MAX_OUTPUT_TOKENS\` | 최대 출력 토큰 수 |
| \`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC\` | 텔레메트리 비활성화 |
| \`CLAUDE_CODE_SKIP_DOCTOR\` | 시작 시 진단 건너뛰기 |

### 프록시 설정

\`\`\`bash
# HTTP 프록시 설정
export HTTPS_PROXY="http://proxy.example.com:8080"

# SSL 인증서 검증 비활성화 (개발용)
export NODE_TLS_REJECT_UNAUTHORIZED=0
\`\`\`

### settings.json에서 환경 변수 설정

\`\`\`json
{
  "env": {
    "ANTHROPIC_MODEL": "claude-opus-4-20250514",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "16384"
  }
}
\`\`\``,contentEn:`Claude Code's behavior can be controlled through various environment variables.

### Authentication Related

| Variable | Description |
|----------|-------------|
| \`ANTHROPIC_API_KEY\` | Anthropic API key |
| \`CLAUDE_CODE_USE_BEDROCK\` | Use AWS Bedrock (\`1\`) |
| \`CLAUDE_CODE_USE_VERTEX\` | Use Google Vertex AI (\`1\`) |
| \`AWS_REGION\` | Bedrock region |
| \`ANTHROPIC_MODEL\` | Default model specification |

### Behavior Control

| Variable | Description |
|----------|-------------|
| \`CLAUDE_CODE_MAX_OUTPUT_TOKENS\` | Maximum output token count |
| \`CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC\` | Disable telemetry |
| \`CLAUDE_CODE_SKIP_DOCTOR\` | Skip diagnostics at startup |

### Proxy Settings

\`\`\`bash
# HTTP proxy settings
export HTTPS_PROXY="http://proxy.example.com:8080"

# Disable SSL certificate validation (development)
export NODE_TLS_REJECT_UNAUTHORIZED=0
\`\`\`

### Setting Environment Variables in settings.json

\`\`\`json
{
  "env": {
    "ANTHROPIC_MODEL": "claude-opus-4-20250514",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "16384"
  }
}
\`\`\``}]},T={id:"ide-integrations",title:"IDE 통합",titleEn:"IDE Integrations",icon:"fa-puzzle-piece",sections:[{title:"VS Code 확장",titleEn:"VS Code Extension",content:`Claude Code는 VS Code와 깊이 통합되는 공식 확장을 제공합니다. 터미널에서의 Claude Code 경험을 IDE 내에서 그대로 사용할 수 있습니다.

### 설치

1. VS Code Extensions 마켓플레이스에서 **"Claude Code"** 검색
2. 또는 터미널에서:
\`\`\`bash
code --install-extension anthropic.claude-code
\`\`\`

### 주요 기능

- **인라인 채팅**: 에디터 내에서 직접 Claude와 대화
- **코드 액션**: 선택한 코드에 대해 Claude 작업 요청
- **터미널 통합**: VS Code 터미널에서 Claude Code 직접 실행
- **진단 연동**: VS Code 문제 패널의 에러를 Claude에게 전달
- **파일 탐색기 통합**: 파일/폴더 우클릭으로 Claude 작업 수행

### 키보드 단축키

| 단축키 | 동작 |
|--------|------|
| \`Ctrl+Shift+P\` > Claude | Claude 명령 팔레트 |
| 에디터 내 선택 후 우클릭 | Claude에게 코드 관련 작업 요청 |

### 설정

VS Code 설정에서 Claude Code 관련 옵션을 구성할 수 있습니다:

\`\`\`json
{
  "claude-code.terminalAutoOpen": true,
  "claude-code.showInStatusBar": true
}
\`\`\``,contentEn:`Claude Code provides an official extension that deeply integrates with VS Code. You can use the same Claude Code experience from the terminal directly within the IDE.

### Installation

1. Search for **"Claude Code"** in VS Code Extensions Marketplace
2. Or from the terminal:
\`\`\`bash
code --install-extension anthropic.claude-code
\`\`\`

### Key Features

- **Inline Chat**: Chat with Claude directly in the editor
- **Code Actions**: Request Claude operations on selected code
- **Terminal Integration**: Run Claude Code directly from VS Code terminal
- **Diagnostics Integration**: Pass errors from VS Code Problems panel to Claude
- **File Explorer Integration**: Perform Claude operations via right-click on files/folders

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| \`Ctrl+Shift+P\` > Claude | Claude command palette |
| Right-click after selecting code | Request code-related tasks from Claude |

### Configuration

You can configure Claude Code options in VS Code settings:

\`\`\`json
{
  "claude-code.terminalAutoOpen": true,
  "claude-code.showInStatusBar": true
}
\`\`\``},{title:"JetBrains 통합",titleEn:"JetBrains Integration",content:`JetBrains IDE (IntelliJ IDEA, WebStorm, PyCharm 등)에서도 Claude Code를 사용할 수 있습니다.

### 설치 방법

1. JetBrains Marketplace에서 **"Claude Code"** 플러그인 설치
2. Settings > Plugins > Marketplace에서 검색

### 주요 기능

- **도구 창**: Claude Code 전용 도구 창에서 대화
- **에디터 통합**: 코드 선택 후 Claude에 컨텍스트 전송
- **터미널 통합**: 내장 터미널에서 Claude Code 실행

### 사용 방법

\`\`\`
1. 플러그인 설치 후 IDE 재시작
2. View > Tool Windows > Claude Code 선택
3. Claude Code 패널에서 바로 대화 시작
\`\`\`

또는 JetBrains 내장 터미널에서 직접 \`claude\` 명령어를 실행할 수도 있습니다.`,contentEn:`You can also use Claude Code in JetBrains IDEs (IntelliJ IDEA, WebStorm, PyCharm, etc.).

### Installation

1. Install the **"Claude Code"** plugin from JetBrains Marketplace
2. Search in Settings > Plugins > Marketplace

### Key Features

- **Tool Window**: Chat in a dedicated Claude Code tool window
- **Editor Integration**: Send code context to Claude after code selection
- **Terminal Integration**: Run Claude Code in the built-in terminal

### Usage

\`\`\`
1. Restart IDE after plugin installation
2. Select View > Tool Windows > Claude Code
3. Start chatting directly in the Claude Code panel
\`\`\`

Alternatively, you can run the \`claude\` command directly in the JetBrains built-in terminal.`},{title:"터미널 통합 설정",titleEn:"Terminal Integration Setup",content:`Claude Code는 터미널 셸과 통합하여 더 나은 경험을 제공합니다.

### 셸 통합 설치

\`\`\`bash
# 대화형 모드에서
> /terminal-setup

# 또는 CLI에서 직접
claude setup-terminal
\`\`\`

### 지원되는 셸

- **Bash** (\`.bashrc\` 수정)
- **Zsh** (\`.zshrc\` 수정)
- **Fish** (\`config.fish\` 수정)

### 셸 통합 기능

셸 통합을 설치하면 다음 기능을 사용할 수 있습니다:

1. **명령 줄 편집**: 터미널에서 Claude Code 빠른 호출
2. **이전 명령 컨텍스트**: 이전에 실행한 명령의 출력을 자동으로 컨텍스트에 포함
3. **에러 자동 감지**: 명령 실패 시 Claude에게 도움 요청

### SSH 원격 환경

SSH로 접속한 원격 서버에서도 Claude Code를 사용할 수 있습니다:

\`\`\`bash
# 원격 서버에 Claude Code 설치
ssh user@server "npm install -g @anthropic-ai/claude-code"

# 원격 서버에서 실행
ssh user@server "cd /project && claude -p 'describe this project'"
\`\`\`

### GitHub Codespaces

GitHub Codespaces에서도 Claude Code를 바로 사용할 수 있습니다:

\`\`\`bash
# Codespace 터미널에서
npm install -g @anthropic-ai/claude-code
claude
\`\`\``,contentEn:`Claude Code integrates with terminal shells to provide a better experience.

### Shell Integration Installation

\`\`\`bash
# In interactive mode
> /terminal-setup

# Or directly from CLI
claude setup-terminal
\`\`\`

### Supported Shells

- **Bash** (modifies \`.bashrc\`)
- **Zsh** (modifies \`.zshrc\`)
- **Fish** (modifies \`config.fish\`)

### Shell Integration Features

After installing shell integration, the following features become available:

1. **Command Line Editing**: Quick invocation of Claude Code from the terminal
2. **Previous Command Context**: Automatically includes output from previously executed commands in context
3. **Error Auto-detection**: Request help from Claude when commands fail

### SSH Remote Environments

You can also use Claude Code on remote servers accessed via SSH:

\`\`\`bash
# Install Claude Code on remote server
ssh user@server "npm install -g @anthropic-ai/claude-code"

# Run on remote server
ssh user@server "cd /project && claude -p 'describe this project'"
\`\`\`

### GitHub Codespaces

Claude Code can be used directly in GitHub Codespaces:

\`\`\`bash
# In Codespace terminal
npm install -g @anthropic-ai/claude-code
claude
\`\`\``}]},D={id:"cli-features",title:"CLI 기능",titleEn:"CLI Features",icon:"fa-rectangle-terminal",sections:[{title:"멀티턴 대화",titleEn:"Multi-turn Conversations",content:`Claude Code는 대화형 모드에서 멀티턴 대화를 지원합니다. 이전 대화 컨텍스트를 유지하면서 연속적인 작업을 수행할 수 있습니다.

### 대화 관리

\`\`\`bash
# 새 대화 시작
claude

# 마지막 대화 이어하기
claude --continue
claude -c

# 이전 세션 목록에서 선택
claude --resume
claude -r
\`\`\`

### 컨텍스트 윈도우 관리

Claude Code는 대화가 길어질수록 컨텍스트 윈도우를 사용합니다. 효과적인 관리를 위해:

- \`/compact\` 명령으로 대화 요약 및 압축
- \`/clear\` 명령으로 대화 초기화
- 컨텍스트가 80%를 넘으면 자동으로 compact 권장

### 대화 내 키보드 단축키

| 단축키 | 동작 |
|--------|------|
| \`Enter\` | 메시지 전송 |
| \`Shift+Enter\` | 줄바꿈 |
| \`Ctrl+C\` | 현재 응답 중단 |
| \`Ctrl+D\` | 세션 종료 |
| \`Escape\` | 현재 입력 취소 |
| \`↑\` / \`↓\` | 이전/다음 메시지 탐색 |`,contentEn:`Claude Code supports multi-turn conversations in interactive mode. You can perform continuous tasks while maintaining previous conversation context.

### Conversation Management

\`\`\`bash
# Start a new conversation
claude

# Continue the last conversation
claude --continue
claude -c

# Select from previous session list
claude --resume
claude -r
\`\`\`

### Context Window Management

Claude Code uses the context window as conversations get longer. For effective management:

- Use \`/compact\` command to summarize and compress the conversation
- Use \`/clear\` command to reset the conversation
- Auto-compact is recommended when context exceeds 80%

### In-conversation Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| \`Enter\` | Send message |
| \`Shift+Enter\` | New line |
| \`Ctrl+C\` | Interrupt current response |
| \`Ctrl+D\` | End session |
| \`Escape\` | Cancel current input |
| \`Up\` / \`Down\` | Navigate previous/next messages |`},{title:"파일 작업",titleEn:"File Operations",content:`Claude Code는 프로젝트의 파일을 읽고, 쓰고, 편집할 수 있습니다.

### 파일 읽기

Claude Code는 다양한 도구로 파일을 읽습니다:

- **Read**: 특정 파일 내용 읽기
- **Glob**: 파일 패턴으로 파일 목록 검색
- **Grep**: 파일 내용에서 텍스트 검색

\`\`\`
> src 폴더의 모든 TypeScript 파일을 찾아줘
> config.json 파일 내용을 보여줘
> "TODO"가 포함된 모든 파일을 찾아줘
\`\`\`

### 파일 작성 및 편집

- **Write**: 새 파일 작성 또는 기존 파일 전체 교체
- **Edit**: 기존 파일의 특정 부분만 수정

\`\`\`
> 새로운 React 컴포넌트 UserProfile.jsx를 만들어줘
> utils.js에서 formatDate 함수의 버그를 고쳐줘
> README.md에 설치 방법 섹션을 추가해줘
\`\`\`

### 멀티 파일 편집

Claude Code는 여러 파일에 걸친 변경을 한 번에 처리할 수 있습니다:

\`\`\`
> UserService 클래스의 이름을 AuthService로 변경하고 모든 import를 업데이트해줘
> 모든 컴포넌트에 TypeScript 타입을 추가해줘
\`\`\``,contentEn:`Claude Code can read, write, and edit files in your project.

### Reading Files

Claude Code reads files using various tools:

- **Read**: Read specific file contents
- **Glob**: Search file lists by file patterns
- **Grep**: Search for text within file contents

\`\`\`
> Find all TypeScript files in the src folder
> Show me the contents of config.json
> Find all files containing "TODO"
\`\`\`

### Writing and Editing Files

- **Write**: Create new files or replace entire existing files
- **Edit**: Modify only specific parts of existing files

\`\`\`
> Create a new React component UserProfile.jsx
> Fix the bug in the formatDate function in utils.js
> Add an installation section to README.md
\`\`\`

### Multi-file Editing

Claude Code can handle changes across multiple files at once:

\`\`\`
> Rename the UserService class to AuthService and update all imports
> Add TypeScript types to all components
\`\`\``},{title:"Git 통합",titleEn:"Git Integration",content:`Claude Code는 Git과 깊이 통합되어 버전 관리 작업을 자연어로 수행할 수 있습니다.

### 기본 Git 작업

\`\`\`
> 현재 변경사항을 커밋해줘
> "Fix login validation bug" 메시지로 커밋해줘
> 변경사항을 보여줘 (git diff)
> 최근 커밋 히스토리를 보여줘
\`\`\`

### 브랜치 관리

\`\`\`
> feature/user-auth 브랜치를 만들고 이동해줘
> main 브랜치에서 현재 브랜치로 리베이스해줘
> 이 브랜치를 main에 머지해줘
\`\`\`

### PR (Pull Request)

\`\`\`
> 이 변경사항으로 PR을 만들어줘
> PR #42의 리뷰 코멘트를 확인해줘
> 이 PR의 변경사항을 요약해줘
\`\`\`

### 안전한 Git 작업

Claude Code는 Git 작업에서 안전 장치를 제공합니다:

- **커밋 전 확인**: 변경 내용을 보여주고 확인 요청
- **위험한 명령 경고**: \`force push\`, \`reset --hard\` 등 위험한 명령 실행 전 경고
- **자동 커밋 메시지**: 변경 내용을 분석하여 의미 있는 커밋 메시지 자동 생성
- **Co-authored-by**: 커밋에 Claude 공동 저자 표시`,contentEn:`Claude Code deeply integrates with Git, allowing version control tasks to be performed in natural language.

### Basic Git Operations

\`\`\`
> Commit the current changes
> Commit with the message "Fix login validation bug"
> Show me the changes (git diff)
> Show me the recent commit history
\`\`\`

### Branch Management

\`\`\`
> Create and switch to feature/user-auth branch
> Rebase from the main branch onto the current branch
> Merge this branch into main
\`\`\`

### PR (Pull Request)

\`\`\`
> Create a PR with these changes
> Check the review comments on PR #42
> Summarize the changes in this PR
\`\`\`

### Safe Git Operations

Claude Code provides safety measures in Git operations:

- **Pre-commit Confirmation**: Shows changes and requests confirmation
- **Dangerous Command Warnings**: Warns before executing dangerous commands like \`force push\`, \`reset --hard\`
- **Auto Commit Messages**: Analyzes changes to automatically generate meaningful commit messages
- **Co-authored-by**: Marks Claude as co-author in commits`},{title:"이미지 및 고급 기능",titleEn:"Images & Advanced Features",content:`### 이미지 지원

Claude Code는 이미지를 이해하고 분석할 수 있습니다:

\`\`\`bash
# 이미지 파일을 컨텍스트에 포함
> 이 스크린샷의 UI를 구현해줘 (screenshot.png 드래그 앤 드롭)

# 클립보드의 이미지 붙여넣기
> [이미지 붙여넣기] 이 에러 스크린샷을 분석해줘
\`\`\`

### 사고 모드 (Thinking)

Claude Code는 복잡한 문제에 대해 단계적 사고 과정을 활용합니다:

\`\`\`bash
# 확장 사고 모드 활성화
claude --model claude-opus-4-20250514

# 대화 중 사고 깊이 조절
> /model claude-opus-4-20250514
\`\`\`

사고 모드에서 Claude는:
- 문제를 단계별로 분석
- 여러 접근 방식을 비교
- 최적의 솔루션을 도출

### 파이프라인 사용

\`\`\`bash
# 표준 입력으로 데이터 전달
cat data.csv | claude -p "이 데이터를 분석해줘"

# 명령어 출력을 분석
npm test 2>&1 | claude -p "실패한 테스트를 분석하고 수정 방법을 알려줘"

# 여러 파일 한 번에 분석
find . -name "*.log" -exec cat {} \\; | claude -p "에러 패턴을 분석해줘"
\`\`\`

### 비대화형 (Headless) 모드

CI/CD 파이프라인이나 스크립트에서 Claude Code를 사용합니다:

\`\`\`bash
# JSON 출력
claude -p "package.json의 의존성 목록" --output-format json

# 스트리밍 JSON 출력
claude -p "코드 리뷰 수행" --output-format stream-json

# 자동 허용 모드
claude -p "테스트 실행하고 결과 알려줘" --allowedTools "Bash(npm test)"
\`\`\``,contentEn:`### Image Support

Claude Code can understand and analyze images:

\`\`\`bash
# Include image files in context
> Implement this UI from the screenshot (drag and drop screenshot.png)

# Paste images from clipboard
> [paste image] Analyze this error screenshot
\`\`\`

### Thinking Mode

Claude Code uses step-by-step thinking processes for complex problems:

\`\`\`bash
# Enable extended thinking mode
claude --model claude-opus-4-20250514

# Adjust thinking depth during conversation
> /model claude-opus-4-20250514
\`\`\`

In thinking mode, Claude:
- Analyzes problems step by step
- Compares multiple approaches
- Derives optimal solutions

### Pipeline Usage

\`\`\`bash
# Pass data via standard input
cat data.csv | claude -p "Analyze this data"

# Analyze command output
npm test 2>&1 | claude -p "Analyze failed tests and suggest fixes"

# Analyze multiple files at once
find . -name "*.log" -exec cat {} \\; | claude -p "Analyze error patterns"
\`\`\`

### Headless Mode

Use Claude Code in CI/CD pipelines or scripts:

\`\`\`bash
# JSON output
claude -p "List dependencies from package.json" --output-format json

# Streaming JSON output
claude -p "Perform code review" --output-format stream-json

# Auto-allow mode
claude -p "Run tests and report results" --allowedTools "Bash(npm test)"
\`\`\``}]},R={id:"workflows",title:"실전 워크플로우",titleEn:"Practical Workflows",icon:"fa-diagram-project",sections:[{title:"코드 리뷰 워크플로우",titleEn:"Code Review Workflow",content:`Claude Code를 사용하여 체계적인 코드 리뷰를 수행할 수 있습니다.

### 기본 코드 리뷰

\`\`\`bash
# 현재 변경사항 리뷰
claude -p "현재 git diff를 리뷰해줘. 버그, 보안 이슈, 코드 품질을 확인해줘"

# 특정 PR 리뷰
claude -p "PR #42의 변경사항을 리뷰해줘"

# 대화형 모드에서
> /review
\`\`\`

### 체계적 리뷰 프로세스

1. **변경사항 파악**: 전체 변경 범위와 목적 이해
2. **보안 검토**: 취약점, 인증/인가 이슈 확인
3. **버그 탐지**: 엣지 케이스, null 체크, 에러 처리 확인
4. **코드 품질**: 네이밍, 구조, 중복 코드 확인
5. **테스트 확인**: 테스트 커버리지와 테스트 품질 검토

### 자동화된 리뷰 스크립트

\`\`\`bash
#!/bin/bash
# review.sh - PR 자동 리뷰 스크립트
PR_NUMBER=$1
claude -p "
GitHub PR #$PR_NUMBER을 리뷰해줘.
다음 기준으로 분석해줘:
1. 보안 취약점
2. 성능 이슈
3. 코드 스타일 일관성
4. 테스트 커버리지
5. 문서화 상태
" --allowedTools "Bash(gh *)" --output-format json
\`\`\``,contentEn:`You can perform systematic code reviews using Claude Code.

### Basic Code Review

\`\`\`bash
# Review current changes
claude -p "Review the current git diff. Check for bugs, security issues, and code quality"

# Review a specific PR
claude -p "Review the changes in PR #42"

# In interactive mode
> /review
\`\`\`

### Systematic Review Process

1. **Identify Changes**: Understand the scope and purpose of all changes
2. **Security Review**: Check for vulnerabilities, auth issues
3. **Bug Detection**: Check edge cases, null checks, error handling
4. **Code Quality**: Review naming, structure, duplicate code
5. **Test Verification**: Review test coverage and test quality

### Automated Review Script

\`\`\`bash
#!/bin/bash
# review.sh - Automated PR review script
PR_NUMBER=$1
claude -p "
Review GitHub PR #$PR_NUMBER.
Analyze based on these criteria:
1. Security vulnerabilities
2. Performance issues
3. Code style consistency
4. Test coverage
5. Documentation status
" --allowedTools "Bash(gh *)" --output-format json
\`\`\``},{title:"디버깅 워크플로우",titleEn:"Debugging Workflow",content:`Claude Code는 강력한 디버깅 도우미 역할을 합니다.

### 에러 분석

\`\`\`bash
# 에러 로그 분석
npm test 2>&1 | claude -p "이 테스트 실패 원인을 분석하고 수정해줘"

# 런타임 에러 분석
> 다음 에러가 발생합니다: TypeError: Cannot read property 'map' of undefined
> 원인을 찾고 수정해줘
\`\`\`

### 디버깅 전략

1. **에러 메시지 분석**: 에러 메시지와 스택 트레이스 전달
2. **코드 추적**: 관련 코드를 함께 분석 요청
3. **재현 확인**: 수정 후 테스트 실행으로 검증
4. **근본 원인 분석**: 표면적 수정이 아닌 근본 원인 해결

### 실전 예시

\`\`\`
> npm run build에서 에러가 발생해. 로그를 분석하고 수정해줘

[Claude가 빌드 실행, 에러 분석, 코드 수정, 빌드 재시도를 자동으로 수행]

> 데이터베이스 쿼리가 느려. 성능 문제를 분석해줘

[Claude가 쿼리 분석, 인덱스 확인, 최적화 제안]
\`\`\`

### 로그 분석 파이프라인

\`\`\`bash
# 서버 로그 분석
tail -n 1000 server.log | claude -p "에러 패턴을 분석하고 원인을 진단해줘"

# 크래시 리포트 분석
cat crash-report.txt | claude -p "이 크래시의 원인과 해결 방법을 알려줘"
\`\`\``,contentEn:`Claude Code serves as a powerful debugging assistant.

### Error Analysis

\`\`\`bash
# Analyze error logs
npm test 2>&1 | claude -p "Analyze the cause of these test failures and fix them"

# Analyze runtime errors
> I'm getting this error: TypeError: Cannot read property 'map' of undefined
> Find the cause and fix it
\`\`\`

### Debugging Strategy

1. **Error Message Analysis**: Pass error messages and stack traces
2. **Code Tracing**: Request analysis along with related code
3. **Reproduction Verification**: Verify with test execution after fixes
4. **Root Cause Analysis**: Resolve root causes, not just surface symptoms

### Practical Examples

\`\`\`
> I'm getting an error from npm run build. Analyze the log and fix it

[Claude automatically runs the build, analyzes errors, fixes code, retries the build]

> Database queries are slow. Analyze the performance issue

[Claude analyzes queries, checks indexes, suggests optimizations]
\`\`\`

### Log Analysis Pipeline

\`\`\`bash
# Server log analysis
tail -n 1000 server.log | claude -p "Analyze error patterns and diagnose the cause"

# Crash report analysis
cat crash-report.txt | claude -p "Tell me the cause of this crash and how to resolve it"
\`\`\``},{title:"리팩토링 워크플로우",titleEn:"Refactoring Workflow",content:`Claude Code로 안전하고 체계적인 리팩토링을 수행합니다.

### 코드 리팩토링 전략

\`\`\`
> UserController 클래스가 너무 큽니다. 책임 분리 원칙에 따라 리팩토링해줘
> 이 함수의 중첩 조건문을 early return 패턴으로 개선해줘
> 중복 코드를 유틸리티 함수로 추출해줘
\`\`\`

### 대규모 리팩토링

\`\`\`
> 프로젝트 전체에서 callback 패턴을 async/await로 변환해줘
> 모든 API 핸들러에 일관된 에러 처리를 적용해줘
> JavaScript 파일을 TypeScript로 마이그레이션해줘
\`\`\`

### 안전한 리팩토링 워크플로우

1. **현재 테스트 실행**: 리팩토링 전 모든 테스트가 통과하는지 확인
2. **리팩토링 수행**: Claude에게 리팩토링 요청
3. **테스트 재실행**: 리팩토링 후 테스트가 여전히 통과하는지 확인
4. **변경사항 검토**: diff를 확인하고 의도치 않은 변경이 없는지 확인

\`\`\`
> 먼저 테스트를 실행하고, utils.js를 리팩토링한 후, 다시 테스트를 실행해줘
\`\`\``,contentEn:`Perform safe and systematic refactoring with Claude Code.

### Code Refactoring Strategy

\`\`\`
> The UserController class is too large. Refactor it following the single responsibility principle
> Improve the nested conditionals in this function to early return pattern
> Extract duplicate code into utility functions
\`\`\`

### Large-scale Refactoring

\`\`\`
> Convert callback patterns to async/await across the entire project
> Apply consistent error handling to all API handlers
> Migrate JavaScript files to TypeScript
\`\`\`

### Safe Refactoring Workflow

1. **Run Current Tests**: Verify all tests pass before refactoring
2. **Perform Refactoring**: Request refactoring from Claude
3. **Re-run Tests**: Verify tests still pass after refactoring
4. **Review Changes**: Check the diff for unintended changes

\`\`\`
> First run the tests, refactor utils.js, then run the tests again
\`\`\``},{title:"테스트 및 문서화 워크플로우",titleEn:"Testing & Documentation Workflow",content:`### 테스트 작성

\`\`\`
> UserService 클래스에 대한 단위 테스트를 작성해줘
> 이 API 엔드포인트의 통합 테스트를 만들어줘
> 현재 테스트 커버리지를 확인하고 누락된 테스트를 추가해줘
\`\`\`

### 테스트 실행 및 수정

\`\`\`bash
# 테스트 실행 후 실패한 것을 자동 수정
> npm test를 실행하고 실패한 테스트를 수정해줘

# 특정 테스트 파일만 실행
> jest user.test.js를 실행해줘
\`\`\`

### 테스트 커버리지 개선

\`\`\`
> 현재 테스트 커버리지가 낮은 파일을 찾고 테스트를 추가해줘
> 엣지 케이스에 대한 테스트를 추가해줘:
> - 빈 입력
> - null/undefined
> - 매우 큰 데이터
> - 네트워크 오류 시나리오
\`\`\`

### 문서화

\`\`\`
> 이 API의 JSDoc 주석을 작성해줘
> README.md에 프로젝트 설치 및 사용 방법을 추가해줘
> API 엔드포인트 문서를 생성해줘
> CHANGELOG.md를 최신 변경사항으로 업데이트해줘
\`\`\`

### CI/CD 파이프라인에서 활용

\`\`\`yaml
# GitHub Actions 예시
- name: Auto-fix failing tests
  run: |
    npm test 2>&1 | claude -p "Fix failing tests" \\
      --allowedTools "Write" "Edit" "Bash(npm test)"
\`\`\``,contentEn:`### Writing Tests

\`\`\`
> Write unit tests for the UserService class
> Create integration tests for this API endpoint
> Check current test coverage and add missing tests
\`\`\`

### Running and Fixing Tests

\`\`\`bash
# Auto-fix failed tests after running them
> Run npm test and fix any failing tests

# Run specific test files only
> Run jest user.test.js
\`\`\`

### Improving Test Coverage

\`\`\`
> Find files with low test coverage and add tests
> Add tests for edge cases:
> - Empty input
> - null/undefined
> - Very large data
> - Network error scenarios
\`\`\`

### Documentation

\`\`\`
> Write JSDoc comments for this API
> Add project installation and usage instructions to README.md
> Generate API endpoint documentation
> Update CHANGELOG.md with latest changes
\`\`\`

### Usage in CI/CD Pipelines

\`\`\`yaml
# GitHub Actions example
- name: Auto-fix failing tests
  run: |
    npm test 2>&1 | claude -p "Fix failing tests" \\
      --allowedTools "Write" "Edit" "Bash(npm test)"
\`\`\``}]},U={id:"tips",title:"팁과 모범 사례",titleEn:"Tips & Best Practices",icon:"fa-star",sections:[{title:"CLAUDE.md 파일 활용",titleEn:"Using CLAUDE.md Files",content:`CLAUDE.md는 Claude Code가 프로젝트를 이해하는 데 사용하는 **메모리 파일**입니다. 프로젝트 컨벤션, 아키텍처 결정, 자주 사용하는 명령어 등을 기록해두면 Claude가 더 정확한 도움을 제공합니다.

### CLAUDE.md 생성

\`\`\`bash
# 자동 생성
claude /init

# 수동 생성
# 프로젝트 루트에 CLAUDE.md 파일을 만듭니다
\`\`\`

### CLAUDE.md 위치와 범위

| 위치 | 범위 |
|------|------|
| \`./CLAUDE.md\` | 현재 프로젝트 루트 |
| \`./src/CLAUDE.md\` | 특정 디렉토리 |
| \`~/.claude/CLAUDE.md\` | 모든 프로젝트 (전역) |

### 효과적인 CLAUDE.md 작성법

\`\`\`markdown
# Project: My App

## Tech Stack
- Frontend: React 19 + TypeScript
- Backend: Node.js + Express
- Database: PostgreSQL + Prisma
- Testing: Jest + React Testing Library

## Code Conventions
- Use functional components with hooks
- Name files in PascalCase for components
- Use kebab-case for utility files
- Always add TypeScript types
- Error handling: use Result pattern

## Common Commands
- \`npm run dev\` - Start dev server
- \`npm test\` - Run tests
- \`npm run lint\` - Run linter
- \`npm run build\` - Production build

## Architecture Decisions
- State management: React Query for server state, Zustand for client state
- API calls go through src/api/ directory
- Shared components in src/components/common/

## Important Notes
- Never modify files in src/generated/
- Database migrations must be reviewed before applying
- All API endpoints require authentication except /health
\`\`\`

### CLAUDE.md 업데이트

\`\`\`bash
# 대화형 모드에서
> /memory

# Claude에게 업데이트 요청
> CLAUDE.md에 새로운 코드 컨벤션을 추가해줘
\`\`\``,contentEn:`CLAUDE.md is a **memory file** that Claude Code uses to understand your project. Recording project conventions, architecture decisions, and commonly used commands helps Claude provide more accurate assistance.

### Creating CLAUDE.md

\`\`\`bash
# Auto-generate
claude /init

# Manual creation
# Create a CLAUDE.md file at the project root
\`\`\`

### CLAUDE.md Location and Scope

| Location | Scope |
|----------|-------|
| \`./CLAUDE.md\` | Current project root |
| \`./src/CLAUDE.md\` | Specific directory |
| \`~/.claude/CLAUDE.md\` | All projects (global) |

### Writing Effective CLAUDE.md

\`\`\`markdown
# Project: My App

## Tech Stack
- Frontend: React 19 + TypeScript
- Backend: Node.js + Express
- Database: PostgreSQL + Prisma
- Testing: Jest + React Testing Library

## Code Conventions
- Use functional components with hooks
- Name files in PascalCase for components
- Use kebab-case for utility files
- Always add TypeScript types
- Error handling: use Result pattern

## Common Commands
- \`npm run dev\` - Start dev server
- \`npm test\` - Run tests
- \`npm run lint\` - Run linter
- \`npm run build\` - Production build

## Architecture Decisions
- State management: React Query for server state, Zustand for client state
- API calls go through src/api/ directory
- Shared components in src/components/common/

## Important Notes
- Never modify files in src/generated/
- Database migrations must be reviewed before applying
- All API endpoints require authentication except /health
\`\`\`

### Updating CLAUDE.md

\`\`\`bash
# In interactive mode
> /memory

# Request Claude to update
> Add new code conventions to CLAUDE.md
\`\`\``},{title:"컨텍스트 관리",titleEn:"Context Management",content:`효과적인 컨텍스트 관리는 Claude Code의 성능과 비용 효율을 크게 향상시킵니다.

### 컨텍스트 최적화 전략

1. **명확한 지시**: 모호한 요청보다 구체적인 지시가 더 효율적
2. **범위 제한**: 전체 프로젝트보다 특정 파일/디렉토리에 집중
3. **적시 compact**: 대화가 길어지면 \`/compact\`로 요약
4. **새 세션 시작**: 완전히 다른 작업은 새 세션에서 시작

### 좋은 프롬프트 예시

\`\`\`
❌ 나쁜 예: "코드를 고쳐줘"
✅ 좋은 예: "src/api/auth.js의 login 함수에서 비밀번호 검증 로직의 버그를 찾아서 수정해줘"

❌ 나쁜 예: "테스트 만들어줘"
✅ 좋은 예: "UserService.createUser 메서드에 대한 단위 테스트를 작성해줘.
              성공 케이스, 중복 이메일, 잘못된 입력에 대한 케이스를 포함해줘"
\`\`\`

### 대규모 프로젝트 팁

- 작업 범위를 명시적으로 지정
- 관련 파일 경로를 직접 알려주기
- 한 번에 하나의 작업에 집중
- 복잡한 작업은 단계별로 나누기`,contentEn:`Effective context management greatly improves Claude Code's performance and cost efficiency.

### Context Optimization Strategies

1. **Clear Instructions**: Specific instructions are more efficient than ambiguous requests
2. **Scope Limitation**: Focus on specific files/directories rather than the entire project
3. **Timely Compact**: Summarize with \`/compact\` when conversations get long
4. **New Sessions**: Start a new session for completely different tasks

### Good Prompt Examples

\`\`\`
Bad: "Fix the code"
Good: "Find and fix the bug in the password validation logic of the login function in src/api/auth.js"

Bad: "Write tests"
Good: "Write unit tests for the UserService.createUser method.
       Include cases for success, duplicate email, and invalid input"
\`\`\`

### Large Project Tips

- Explicitly specify the scope of work
- Directly provide relevant file paths
- Focus on one task at a time
- Break complex tasks into steps`},{title:"비용 최적화",titleEn:"Cost Optimization",content:`Claude Code의 API 비용을 효과적으로 관리하는 방법을 알아봅니다.

### 비용 모니터링

\`\`\`bash
# 현재 세션 비용 확인
> /cost

# 세션 시작 시 비용 추적
claude --verbose
\`\`\`

### 비용 절약 전략

| 전략 | 방법 | 효과 |
|------|------|------|
| **모델 선택** | 간단한 작업은 Sonnet, 복잡한 작업은 Opus | 최대 50% 절감 |
| **Compact 활용** | 긴 대화 주기적 압축 | 입력 토큰 절약 |
| **원샷 모드** | 단순 질문은 \`-p\` 플래그 사용 | 불필요한 컨텍스트 제거 |
| **범위 제한** | 특정 파일/폴더 지정 | 불필요한 파일 읽기 방지 |
| **CLAUDE.md** | 프로젝트 정보 미리 정리 | 반복 분석 방지 |

### 모델별 비용 비교

\`\`\`
claude-sonnet-4-20250514:
  - 입력: $3 / 백만 토큰
  - 출력: $15 / 백만 토큰

claude-opus-4-20250514:
  - 입력: $15 / 백만 토큰
  - 출력: $75 / 백만 토큰
\`\`\`

### 비용 효율적인 워크플로우

\`\`\`bash
# 1. 분석은 Sonnet으로 (비용 절약)
claude --model claude-sonnet-4-20250514 -p "이 코드의 구조를 설명해줘"

# 2. 복잡한 리팩토링은 Opus로 (품질 우선)
claude --model claude-opus-4-20250514 -p "이 모듈을 마이크로서비스로 분리해줘"
\`\`\``,contentEn:`Learn how to effectively manage Claude Code's API costs.

### Cost Monitoring

\`\`\`bash
# Check current session cost
> /cost

# Track costs from session start
claude --verbose
\`\`\`

### Cost-saving Strategies

| Strategy | Method | Effect |
|----------|--------|--------|
| **Model Selection** | Sonnet for simple tasks, Opus for complex ones | Up to 50% savings |
| **Compact Usage** | Periodically compress long conversations | Save input tokens |
| **One-shot Mode** | Use \`-p\` flag for simple questions | Remove unnecessary context |
| **Scope Limitation** | Specify specific files/folders | Prevent unnecessary file reads |
| **CLAUDE.md** | Pre-organize project info | Prevent repeated analysis |

### Cost Comparison by Model

\`\`\`
claude-sonnet-4-20250514:
  - Input: $3 / million tokens
  - Output: $15 / million tokens

claude-opus-4-20250514:
  - Input: $15 / million tokens
  - Output: $75 / million tokens
\`\`\`

### Cost-efficient Workflows

\`\`\`bash
# 1. Use Sonnet for analysis (cost savings)
claude --model claude-sonnet-4-20250514 -p "Explain the structure of this code"

# 2. Use Opus for complex refactoring (quality priority)
claude --model claude-opus-4-20250514 -p "Split this module into microservices"
\`\`\``},{title:"보안 모범 사례",titleEn:"Security Best Practices",content:`Claude Code를 안전하게 사용하기 위한 보안 모범 사례입니다.

### API 키 관리

\`\`\`bash
# 환경 변수로 관리 (권장)
export ANTHROPIC_API_KEY="sk-ant-..."

# .env 파일 사용 시 반드시 .gitignore에 추가
echo ".env" >> .gitignore
\`\`\`

**절대 하지 말아야 할 것:**
- API 키를 코드에 하드코딩
- API 키를 Git에 커밋
- API 키를 로그에 출력

### 권한 설정 모범 사례

\`\`\`json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "Bash(npm test)",
      "Bash(npm run lint)",
      "Bash(npm run build)",
      "Write(src/**)",
      "Edit(src/**)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(curl *)",
      "Write(.env*)",
      "Write(*.pem)",
      "Write(*.key)"
    ]
  }
}
\`\`\`

### 프로젝트 설정 보안

- \`.claude/settings.local.json\`은 \`.gitignore\`에 추가
- 민감한 설정은 사용자 설정(\`~/.claude/settings.json\`)에 보관
- 프로젝트 설정에 시크릿을 포함하지 않기

### 코드 실행 안전

- 프로덕션 환경에서 \`--dangerously-skip-permissions\` 사용 금지
- CI/CD에서는 최소 권한 원칙 적용
- 신뢰할 수 없는 코드베이스에서는 권한을 제한

### 네트워크 보안

\`\`\`json
{
  "permissions": {
    "deny": [
      "Bash(curl *)",
      "Bash(wget *)",
      "WebFetch"
    ]
  }
}
\`\`\`

외부 네트워크 접근이 필요한 경우에만 선택적으로 허용하세요.`,contentEn:`Security best practices for using Claude Code safely.

### API Key Management

\`\`\`bash
# Manage via environment variables (recommended)
export ANTHROPIC_API_KEY="sk-ant-..."

# When using .env files, always add to .gitignore
echo ".env" >> .gitignore
\`\`\`

**Things you should never do:**
- Hard-code API keys in code
- Commit API keys to Git
- Print API keys in logs

### Permission Setting Best Practices

\`\`\`json
{
  "permissions": {
    "allow": [
      "Read",
      "Glob",
      "Grep",
      "Bash(npm test)",
      "Bash(npm run lint)",
      "Bash(npm run build)",
      "Write(src/**)",
      "Edit(src/**)"
    ],
    "deny": [
      "Bash(rm -rf *)",
      "Bash(curl *)",
      "Write(.env*)",
      "Write(*.pem)",
      "Write(*.key)"
    ]
  }
}
\`\`\`

### Project Settings Security

- Add \`.claude/settings.local.json\` to \`.gitignore\`
- Keep sensitive settings in user settings (\`~/.claude/settings.json\`)
- Don't include secrets in project settings

### Code Execution Safety

- Never use \`--dangerously-skip-permissions\` in production environments
- Apply the principle of least privilege in CI/CD
- Restrict permissions in untrusted codebases

### Network Security

\`\`\`json
{
  "permissions": {
    "deny": [
      "Bash(curl *)",
      "Bash(wget *)",
      "WebFetch"
    ]
  }
}
\`\`\`

Only selectively allow external network access when necessary.`}]},i=[k,x,w,I,j,T,D,R,U];function H(){const{language:s}=E(),o=s==="ko",[a,r]=C.useState(i[0].id),l=i.find(t=>t.id===a)||i[0],n=i.findIndex(t=>t.id===a),d=n>0?i[n-1]:null,u=n<i.length-1?i[n+1]:null,g={code({inline:t,className:m,children:c,...f}){const p=/language-(\w+)/.exec(m||"");return!t&&p?e.jsx(h,{code:String(c).replace(/\n$/,""),language:p[1]}):!t&&!p&&String(c).includes(`
`)?e.jsx(h,{code:String(c).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...f,children:c})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(A,{type:"tip",children:t})}};return e.jsxs(e.Fragment,{children:[e.jsx(b,{title:o?"Claude Code 가이드":"Claude Code Guide",description:o?"Claude Code CLI의 모든 기능을 배우세요. Hooks, MCP 서버, 슬래시 커맨드, IDE 통합 등을 다룹니다.":"Learn all features of Claude Code CLI. Covers Hooks, MCP Servers, Slash Commands, IDE integrations, and more.",path:"/claude-code"}),e.jsx("div",{className:"guide-page",children:e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:o?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:i.map(t=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${a===t.id?"active":""}`,onClick:()=>r(t.id),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`}),o?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:o?l.title:l.titleEn})}),l.sections.map((t,m)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:o?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(y,{remarkPlugins:[v],components:g,children:o?t.content:t.contentEn})})]},m)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:n===0,onClick:()=>r(d==null?void 0:d.id),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",o?"이전":"Previous"]}),e.jsxs("button",{disabled:n===i.length-1,onClick:()=>r(u==null?void 0:u.id),children:[o?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})})]})}export{H as default};
