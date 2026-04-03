export default {
  id: 'mcp-servers',
  title: 'MCP 서버',
  titleEn: 'MCP Servers',
  icon: 'fa-server',
  sections: [
    {
      title: 'MCP란?',
      titleEn: 'What is MCP?',
      content: `**MCP (Model Context Protocol)**는 AI 모델이 외부 도구와 데이터 소스에 접근할 수 있게 해주는 개방형 프로토콜입니다. Claude Code는 MCP 클라이언트로서, MCP 서버에서 제공하는 도구들을 자연스럽게 사용할 수 있습니다.

### MCP의 핵심 개념

- **서버**: 도구와 리소스를 제공하는 프로세스
- **클라이언트**: 서버에 연결하여 도구를 사용하는 프로세스 (Claude Code)
- **도구 (Tools)**: 서버가 제공하는 실행 가능한 기능
- **리소스 (Resources)**: 서버가 제공하는 데이터 소스

### MCP를 사용하는 이유

- **확장성**: Claude Code의 기능을 무한히 확장 가능
- **표준화**: 표준 프로토콜로 다양한 서비스와 통합
- **보안**: 서버별 권한 격리
- **커뮤니티**: 다양한 오픈소스 MCP 서버 활용 가능`,
      contentEn: `**MCP (Model Context Protocol)** is an open protocol that enables AI models to access external tools and data sources. Claude Code acts as an MCP client, naturally using tools provided by MCP servers.

### Core Concepts of MCP

- **Server**: A process that provides tools and resources
- **Client**: A process that connects to servers and uses tools (Claude Code)
- **Tools**: Executable functions provided by the server
- **Resources**: Data sources provided by the server

### Why Use MCP

- **Extensibility**: Infinitely extend Claude Code's capabilities
- **Standardization**: Integrate with various services via a standard protocol
- **Security**: Permission isolation per server
- **Community**: Leverage diverse open-source MCP servers`,
    },
    {
      title: 'MCP 서버 설정',
      titleEn: 'MCP Server Configuration',
      content: `### 설정 파일 위치

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
\`\`\``,
      contentEn: `### Configuration File Locations

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
\`\`\``,
    },
    {
      title: '유용한 MCP 서버',
      titleEn: 'Useful MCP Servers',
      content: `### 파일 시스템 서버

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
\`\`\``,
      contentEn: `### Filesystem Server

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
\`\`\``,
    },
    {
      title: 'MCP 서버 디버깅',
      titleEn: 'Debugging MCP Servers',
      content: `### 서버 상태 확인

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
- 프로젝트 설정 파일(\`.claude/settings.json\`)에 시크릿을 직접 넣지 마세요`,
      contentEn: `### Check Server Status

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
- Don't put secrets directly in project settings files (\`.claude/settings.json\`)`,
    },
  ],
};
