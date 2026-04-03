export default {
  id: 'overview',
  title: '개요',
  titleEn: 'Overview',
  icon: 'fa-book',
  sections: [
    {
      title: 'Claude Code란?',
      titleEn: 'What is Claude Code?',
      content: `Claude Code는 Anthropic이 만든 **에이전틱 코딩 도구**로, 터미널에서 직접 실행됩니다. 코드베이스를 이해하고, 명령을 실행하며, 코드를 편집하고, 복잡한 소프트웨어 엔지니어링 작업을 자율적으로 수행할 수 있습니다.

Claude Code는 별도의 복잡한 설정 없이 프로젝트 디렉토리에서 바로 작동하며, 기존 워크플로우에 자연스럽게 통합됩니다.

### 주요 특징

- **터미널 네이티브**: 기존 개발 환경과 도구 체인에 자연스럽게 통합
- **코드베이스 이해**: 프로젝트 구조와 코드를 자동으로 분석
- **다중 파일 편집**: 여러 파일에 걸친 변경사항을 한 번에 처리
- **Git 통합**: 커밋, PR 생성, 브랜치 관리 등 Git 작업 수행
- **도구 실행**: 테스트, 린터, 빌드 도구 등을 직접 실행
- **안전한 실행**: 파일 변경 전 확인 요청, 권한 기반 실행 제어`,
      contentEn: `Claude Code is an **agentic coding tool** built by Anthropic that runs directly in your terminal. It can understand your codebase, execute commands, edit code, and autonomously perform complex software engineering tasks.

Claude Code works right from your project directory without any complex configuration and integrates naturally into your existing workflow.

### Key Features

- **Terminal Native**: Integrates naturally with your existing development environment and toolchain
- **Codebase Understanding**: Automatically analyzes project structure and code
- **Multi-file Editing**: Handles changes across multiple files at once
- **Git Integration**: Performs Git operations like commits, PR creation, branch management
- **Tool Execution**: Directly runs tests, linters, build tools, and more
- **Safe Execution**: Asks for confirmation before file changes, permission-based execution control`,
    },
    {
      title: '설치 방법',
      titleEn: 'Installation',
      content: `### 시스템 요구사항

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
\`\`\``,
      contentEn: `### System Requirements

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
\`\`\``,
    },
    {
      title: '기본 사용법',
      titleEn: 'Basic Usage',
      content: `### 대화형 모드

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
| \`--allowedTools\` | 허용할 도구 지정 |`,
      contentEn: `### Interactive Mode

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
| \`--allowedTools\` | Specify allowed tools |`,
    },
  ],
};
