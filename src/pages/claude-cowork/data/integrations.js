const integrations = {
  id: 'integrations',
  title: '외부 서비스 연동',
  titleEn: 'External Integrations',
  icon: 'fa-plug',
  sections: [
    {
      title: 'MCP를 통한 연동',
      titleEn: 'Integration via MCP',
      content: `**MCP(Model Context Protocol)**는 Claude가 외부 도구와 데이터 소스에 접근할 수 있게 해주는 프로토콜입니다. 이를 통해 Claude와의 코워크가 실제 업무 환경과 연결됩니다.

### MCP 개요

\`\`\`
[Claude] ←→ [MCP Server] ←→ [외부 서비스]
                              ├── GitHub
                              ├── Slack
                              ├── Notion
                              ├── Google Drive
                              ├── Database
                              └── 기타 API
\`\`\`

### 주요 MCP 서버

| MCP 서버 | 기능 | 활용 사례 |
|----------|------|----------|
| GitHub | 이슈, PR, 코드 관리 | 코드 리뷰, 이슈 트래킹 |
| Slack | 메시지, 채널 관리 | 팀 커뮤니케이션 자동화 |
| Notion | 페이지, DB 관리 | 문서 작성, 프로젝트 관리 |
| Google Drive | 파일 접근 | 문서 분석, 데이터 처리 |
| PostgreSQL | DB 쿼리 | 데이터 분석, 리포트 생성 |

### Claude Code에서 MCP 설정

\`\`\`json
// ~/.claude/settings.json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-xxxxxxxxxxxx"
      }
    }
  }
}
\`\`\`

> MCP를 활용하면 Claude가 직접 GitHub에서 코드를 읽고, Slack으로 결과를 공유하는 등 실제 업무 도구와 연결된 코워크가 가능합니다.`,
      contentEn: `**MCP (Model Context Protocol)** is a protocol that allows Claude to access external tools and data sources. This connects co-work with Claude to your actual work environment.

### MCP Overview

\`\`\`
[Claude] ←→ [MCP Server] ←→ [External Services]
                              ├── GitHub
                              ├── Slack
                              ├── Notion
                              ├── Google Drive
                              ├── Database
                              └── Other APIs
\`\`\`

### Major MCP Servers

| MCP Server | Features | Use Cases |
|------------|----------|-----------|
| GitHub | Issues, PRs, code management | Code review, issue tracking |
| Slack | Messages, channel management | Team communication automation |
| Notion | Pages, DB management | Documentation, project management |
| Google Drive | File access | Document analysis, data processing |
| PostgreSQL | DB queries | Data analysis, report generation |

### MCP Configuration in Claude Code

\`\`\`json
// ~/.claude/settings.json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_TOKEN": "ghp_xxxxxxxxxxxx"
      }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-xxxxxxxxxxxx"
      }
    }
  }
}
\`\`\`

> With MCP, Claude can directly read code from GitHub, share results via Slack, and more — enabling co-work connected to your actual work tools.`
    },
    {
      title: 'Slack & Notion 연동 실전',
      titleEn: 'Slack & Notion Integration in Practice',
      content: `### Slack 연동 워크플로우

Claude를 Slack과 연동하면 팀 채널에서 직접 Claude와 협업할 수 있습니다.

#### 활용 예시

1. **일일 스탠드업 요약**: 채널의 메시지를 분석하여 자동 요약
2. **질문 답변 봇**: 프로젝트 문서를 기반으로 팀원 질문에 답변
3. **알림 관리**: 중요 이벤트 감지 시 적절한 채널에 알림

\`\`\`
# Slack 코워크 예시
사용자: @Claude 이번 주 #dev 채널의 주요 논의 사항을 요약해줘
Claude: 이번 주 #dev 채널 주요 논의:
        1. API v2 마이그레이션 일정 확정 (3/15)
        2. 성능 최적화: 캐싱 전략 논의
        3. 신규 모니터링 도구 도입 검토
\`\`\`

### Notion 연동 워크플로우

#### 활용 예시

1. **회의록 자동 정리**: 회의 내용을 구조화된 Notion 페이지로 작성
2. **프로젝트 문서 관리**: 기술 문서, 스펙 문서를 자동 생성 및 업데이트
3. **태스크 관리**: Notion DB에 자동으로 작업 항목 생성

\`\`\`
# Notion 코워크 예시
사용자: 오늘 회의 내용을 Notion에 정리해줘
Claude: 회의록을 생성했습니다:
        - 페이지: "2025-03-12 스프린트 회의"
        - 참석자, 논의사항, 액션아이템 정리 완료
        - 담당자별 태스크를 DB에 추가했습니다
\`\`\`

### Google Calendar 연동

- **일정 확인**: Claude가 팀 캘린더를 확인하고 미팅 시간 조율
- **미팅 준비**: 다가오는 미팅의 안건과 필요 자료를 미리 준비
- **일정 관리**: 반복 업무, 데드라인 기반 알림 설정`,
      contentEn: `### Slack Integration Workflow

Integrating Claude with Slack allows you to collaborate with Claude directly in team channels.

#### Usage Examples

1. **Daily Standup Summary**: Analyze channel messages for automatic summaries
2. **Q&A Bot**: Answer team questions based on project documentation
3. **Alert Management**: Notify appropriate channels when important events are detected

\`\`\`
# Slack Co-work Example
User: @Claude Summarize the key discussions in #dev this week
Claude: Key #dev channel discussions this week:
        1. API v2 migration timeline confirmed (3/15)
        2. Performance optimization: caching strategy discussion
        3. New monitoring tool adoption review
\`\`\`

### Notion Integration Workflow

#### Usage Examples

1. **Auto-organized Meeting Notes**: Write meeting content as structured Notion pages
2. **Project Documentation**: Auto-generate and update technical docs and specs
3. **Task Management**: Automatically create work items in Notion DB

\`\`\`
# Notion Co-work Example
User: Organize today's meeting notes in Notion
Claude: Meeting notes created:
        - Page: "2025-03-12 Sprint Meeting"
        - Attendees, discussion items, action items organized
        - Tasks added to DB by assignee
\`\`\`

### Google Calendar Integration

- **Schedule Checking**: Claude checks team calendar and coordinates meeting times
- **Meeting Preparation**: Prepare agendas and materials for upcoming meetings
- **Schedule Management**: Set up recurring tasks, deadline-based reminders`
    }
  ]
};

export default integrations;
