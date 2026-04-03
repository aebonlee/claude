export default {
  id: 'settings',
  title: '설정',
  titleEn: 'Settings',
  icon: 'fa-gear',
  sections: [
    {
      title: '설정 구조',
      titleEn: 'Settings Structure',
      content: `Claude Code는 계층적 설정 시스템을 사용합니다. 여러 레벨에서 설정을 정의할 수 있으며, 더 구체적인 설정이 일반 설정을 덮어씁니다.

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
\`\`\``,
      contentEn: `Claude Code uses a hierarchical settings system. You can define settings at multiple levels, where more specific settings override general ones.

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
\`\`\``,
    },
    {
      title: '권한 설정',
      titleEn: 'Permission Settings',
      content: `### 권한 모드

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
- **d** (Don't allow) - 이 세션에서 항상 거부`,
      contentEn: `### Permission Modes

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
- **d** (Don't allow) - Always deny in this session`,
    },
    {
      title: '환경 변수',
      titleEn: 'Environment Variables',
      content: `Claude Code는 다양한 환경 변수를 통해 동작을 제어할 수 있습니다.

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
\`\`\``,
      contentEn: `Claude Code's behavior can be controlled through various environment variables.

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
\`\`\``,
    },
  ],
};
