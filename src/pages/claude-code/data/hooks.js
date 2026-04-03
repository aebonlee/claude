export default {
  id: 'hooks',
  title: 'Hooks 시스템',
  titleEn: 'Hooks System',
  icon: 'fa-plug',
  sections: [
    {
      title: 'Hooks 개요',
      titleEn: 'Hooks Overview',
      content: `Hooks는 Claude Code의 동작 과정에서 특정 이벤트가 발생할 때 **사용자 정의 셸 명령을 자동 실행**하는 시스템입니다. 코드 변환, 알림, 로깅, 커스텀 검증 등 다양한 자동화를 구현할 수 있습니다.

### Hooks의 장점

- **코드 변환 자동화**: 파일 수정 후 자동으로 포맷팅, 린팅 적용
- **알림 시스템**: 특정 이벤트 발생 시 알림 전송
- **커스텀 로깅**: 모든 명령 실행과 파일 변경을 기록
- **보안 검증**: LLM 응답이 적용되기 전에 검증 로직 실행
- **LLM 우회**: 프롬프트 인젝션 위험 없이 셸에서 직접 실행`,
      contentEn: `Hooks is a system that **automatically executes user-defined shell commands** when specific events occur during Claude Code's operation. You can implement various automations such as code transformation, notifications, logging, and custom validation.

### Benefits of Hooks

- **Code Transformation Automation**: Automatically apply formatting and linting after file modifications
- **Notification System**: Send notifications when specific events occur
- **Custom Logging**: Record all command executions and file changes
- **Security Validation**: Run validation logic before LLM responses are applied
- **LLM Bypass**: Execute directly in the shell without prompt injection risk`,
    },
    {
      title: '이벤트 타입',
      titleEn: 'Event Types',
      content: `Hooks에서 사용할 수 있는 이벤트 타입은 다음과 같습니다:

| 이벤트 | 실행 시점 | 주요 용도 |
|--------|----------|----------|
| \`PreToolUse\` | 도구 호출 전 | 작업 차단 또는 수정 |
| \`PostToolUse\` | 도구 호출 후 | 결과 변환, 알림 |
| \`Notification\` | 알림 발생 시 | 외부 알림 전송 |
| \`Stop\` | Claude 응답 완료 시 | 추가 작업 실행 |
| \`SubagentStop\` | 서브에이전트 완료 시 | 서브에이전트 결과 처리 |

### 도구 이름 매칭

\`PreToolUse\`와 \`PostToolUse\`에서는 특정 도구에만 반응하도록 매처를 설정할 수 있습니다:

- \`Write\` - 파일 쓰기
- \`Edit\` - 파일 편집
- \`Bash\` - 셸 명령 실행
- \`Read\` - 파일 읽기
- \`Glob\` - 파일 패턴 매칭
- \`Grep\` - 텍스트 검색
- \`WebFetch\` - 웹 요청
- \`TodoWrite\` - TODO 목록 관리`,
      contentEn: `The event types available in Hooks are as follows:

| Event | Trigger Point | Primary Use |
|-------|--------------|-------------|
| \`PreToolUse\` | Before tool call | Block or modify operations |
| \`PostToolUse\` | After tool call | Transform results, notifications |
| \`Notification\` | When notification occurs | Send external notifications |
| \`Stop\` | When Claude response completes | Execute additional tasks |
| \`SubagentStop\` | When subagent completes | Process subagent results |

### Tool Name Matching

In \`PreToolUse\` and \`PostToolUse\`, you can set matchers to respond only to specific tools:

- \`Write\` - File writing
- \`Edit\` - File editing
- \`Bash\` - Shell command execution
- \`Read\` - File reading
- \`Glob\` - File pattern matching
- \`Grep\` - Text search
- \`WebFetch\` - Web requests
- \`TodoWrite\` - TODO list management`,
    },
    {
      title: 'Hook 설정',
      titleEn: 'Hook Configuration',
      content: `Hooks는 settings 파일에서 설정합니다:

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
- 값 없음 - 일반적인 권한 흐름 진행`,
      contentEn: `Hooks are configured in settings files:

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
- No value - Continue normal permission flow`,
    },
    {
      title: '실전 Hook 예제',
      titleEn: 'Practical Hook Examples',
      content: `### 자동 포맷팅 Hook

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
            "command": "curl -X POST $SLACK_WEBHOOK_URL -d '{\"text\": \"Claude Code 작업이 완료되었습니다.\"}'"
          }
        ]
      }
    ]
  }
}
\`\`\``,
      contentEn: `### Auto-formatting Hook

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
            "command": "curl -X POST $SLACK_WEBHOOK_URL -d '{\"text\": \"Claude Code task completed.\"}'"
          }
        ]
      }
    ]
  }
}
\`\`\``,
    },
  ],
};
