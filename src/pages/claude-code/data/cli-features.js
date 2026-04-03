export default {
  id: 'cli-features',
  title: 'CLI 기능',
  titleEn: 'CLI Features',
  icon: 'fa-rectangle-terminal',
  sections: [
    {
      title: '멀티턴 대화',
      titleEn: 'Multi-turn Conversations',
      content: `Claude Code는 대화형 모드에서 멀티턴 대화를 지원합니다. 이전 대화 컨텍스트를 유지하면서 연속적인 작업을 수행할 수 있습니다.

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
| \`↑\` / \`↓\` | 이전/다음 메시지 탐색 |`,
      contentEn: `Claude Code supports multi-turn conversations in interactive mode. You can perform continuous tasks while maintaining previous conversation context.

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
| \`Up\` / \`Down\` | Navigate previous/next messages |`,
    },
    {
      title: '파일 작업',
      titleEn: 'File Operations',
      content: `Claude Code는 프로젝트의 파일을 읽고, 쓰고, 편집할 수 있습니다.

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
\`\`\``,
      contentEn: `Claude Code can read, write, and edit files in your project.

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
\`\`\``,
    },
    {
      title: 'Git 통합',
      titleEn: 'Git Integration',
      content: `Claude Code는 Git과 깊이 통합되어 버전 관리 작업을 자연어로 수행할 수 있습니다.

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
- **Co-authored-by**: 커밋에 Claude 공동 저자 표시`,
      contentEn: `Claude Code deeply integrates with Git, allowing version control tasks to be performed in natural language.

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
- **Co-authored-by**: Marks Claude as co-author in commits`,
    },
    {
      title: '이미지 및 고급 기능',
      titleEn: 'Images & Advanced Features',
      content: `### 이미지 지원

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
\`\`\``,
      contentEn: `### Image Support

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
\`\`\``,
    },
  ],
};
