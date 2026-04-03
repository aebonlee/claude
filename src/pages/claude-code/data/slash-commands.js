export default {
  id: 'slash-commands',
  title: '슬래시 커맨드',
  titleEn: 'Slash Commands',
  icon: 'fa-terminal',
  sections: [
    {
      title: '슬래시 커맨드 개요',
      titleEn: 'Slash Commands Overview',
      content: `슬래시 커맨드는 Claude Code 대화형 세션에서 \`/\` 접두사로 시작하는 특수 명령어입니다. 이 명령어들은 Claude에게 메시지를 보내는 대신, Claude Code 자체의 기능을 제어합니다.

### 사용 방법

대화형 모드에서 프롬프트 입력 시 \`/\`를 먼저 입력하면 사용 가능한 명령어 목록이 자동 완성으로 표시됩니다.

\`\`\`
> /help      # 도움말 표시
> /clear     # 대화 내역 초기화
> /compact   # 대화 내역 압축
\`\`\``,
      contentEn: `Slash commands are special commands that start with the \`/\` prefix in Claude Code interactive sessions. Instead of sending messages to Claude, these commands control Claude Code's own functionality.

### Usage

When typing in interactive mode, entering \`/\` first will display available commands through auto-completion.

\`\`\`
> /help      # Show help
> /clear     # Clear conversation history
> /compact   # Compress conversation history
\`\`\``,
    },
    {
      title: '세션 관리 커맨드',
      titleEn: 'Session Management Commands',
      content: `### /help

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

현재 세션 상태, 인증 정보, 활성 설정 등을 표시합니다.`,
      contentEn: `### /help

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

Displays current session status, authentication info, active settings, etc.`,
    },
    {
      title: '설정 및 인증 커맨드',
      titleEn: 'Configuration & Auth Commands',
      content: `### /config

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

현재 세션의 도구 권한 설정을 관리합니다. 허용/거부된 도구 목록을 확인하고 수정할 수 있습니다.`,
      contentEn: `### /config

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

Manage tool permission settings for the current session. View and modify the list of allowed/denied tools.`,
    },
    {
      title: '프로젝트 및 도구 커맨드',
      titleEn: 'Project & Tool Commands',
      content: `### /init

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

Vim 키바인딩 모드를 토글합니다. Vim 사용자라면 익숙한 키바인딩으로 Claude Code를 사용할 수 있습니다.`,
      contentEn: `### /init

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

Toggle Vim keybinding mode. Vim users can use Claude Code with familiar keybindings.`,
    },
  ],
};
