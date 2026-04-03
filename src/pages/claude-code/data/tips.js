export default {
  id: 'tips',
  title: '팁과 모범 사례',
  titleEn: 'Tips & Best Practices',
  icon: 'fa-star',
  sections: [
    {
      title: 'CLAUDE.md 파일 활용',
      titleEn: 'Using CLAUDE.md Files',
      content: `CLAUDE.md는 Claude Code가 프로젝트를 이해하는 데 사용하는 **메모리 파일**입니다. 프로젝트 컨벤션, 아키텍처 결정, 자주 사용하는 명령어 등을 기록해두면 Claude가 더 정확한 도움을 제공합니다.

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
\`\`\``,
      contentEn: `CLAUDE.md is a **memory file** that Claude Code uses to understand your project. Recording project conventions, architecture decisions, and commonly used commands helps Claude provide more accurate assistance.

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
\`\`\``,
    },
    {
      title: '컨텍스트 관리',
      titleEn: 'Context Management',
      content: `효과적인 컨텍스트 관리는 Claude Code의 성능과 비용 효율을 크게 향상시킵니다.

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
- 복잡한 작업은 단계별로 나누기`,
      contentEn: `Effective context management greatly improves Claude Code's performance and cost efficiency.

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
- Break complex tasks into steps`,
    },
    {
      title: '비용 최적화',
      titleEn: 'Cost Optimization',
      content: `Claude Code의 API 비용을 효과적으로 관리하는 방법을 알아봅니다.

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
\`\`\``,
      contentEn: `Learn how to effectively manage Claude Code's API costs.

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
\`\`\``,
    },
    {
      title: '보안 모범 사례',
      titleEn: 'Security Best Practices',
      content: `Claude Code를 안전하게 사용하기 위한 보안 모범 사례입니다.

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

외부 네트워크 접근이 필요한 경우에만 선택적으로 허용하세요.`,
      contentEn: `Security best practices for using Claude Code safely.

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

Only selectively allow external network access when necessary.`,
    },
  ],
};
