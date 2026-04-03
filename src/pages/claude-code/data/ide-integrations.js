export default {
  id: 'ide-integrations',
  title: 'IDE 통합',
  titleEn: 'IDE Integrations',
  icon: 'fa-puzzle-piece',
  sections: [
    {
      title: 'VS Code 확장',
      titleEn: 'VS Code Extension',
      content: `Claude Code는 VS Code와 깊이 통합되는 공식 확장을 제공합니다. 터미널에서의 Claude Code 경험을 IDE 내에서 그대로 사용할 수 있습니다.

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
\`\`\``,
      contentEn: `Claude Code provides an official extension that deeply integrates with VS Code. You can use the same Claude Code experience from the terminal directly within the IDE.

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
\`\`\``,
    },
    {
      title: 'JetBrains 통합',
      titleEn: 'JetBrains Integration',
      content: `JetBrains IDE (IntelliJ IDEA, WebStorm, PyCharm 등)에서도 Claude Code를 사용할 수 있습니다.

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

또는 JetBrains 내장 터미널에서 직접 \`claude\` 명령어를 실행할 수도 있습니다.`,
      contentEn: `You can also use Claude Code in JetBrains IDEs (IntelliJ IDEA, WebStorm, PyCharm, etc.).

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

Alternatively, you can run the \`claude\` command directly in the JetBrains built-in terminal.`,
    },
    {
      title: '터미널 통합 설정',
      titleEn: 'Terminal Integration Setup',
      content: `Claude Code는 터미널 셸과 통합하여 더 나은 경험을 제공합니다.

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
\`\`\``,
      contentEn: `Claude Code integrates with terminal shells to provide a better experience.

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
\`\`\``,
    },
  ],
};
