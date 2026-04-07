import{j as e,M as g,r as C}from"./markdown-Bb6HBFF6.js";import{b as h}from"./vendor-Cbm2kc8j.js";import{u as v}from"./index-CAmAqOsJ.js";import{S as k}from"./SEOHead-DfBpSINb.js";import{T as w,C as d}from"./TipBox-CSlg_9ru.js";import"./supabase-BiHzSKx7.js";import"./pdf-ckwbz45p.js";const f={id:"overview",title:"Claude 코워크 개요",titleEn:"Claude Co-work Overview",icon:"fa-handshake",sections:[{title:"코워크란?",titleEn:"What is Co-work?",content:`Claude 코워크(Co-work)는 Claude AI와 사람이 **함께 협업하여 작업을 수행**하는 워크플로우를 의미합니다. 단순히 질문-답변을 넘어, Claude가 팀의 일원처럼 프로젝트에 참여하여 실질적인 업무를 수행합니다.

### 코워크의 핵심 개념

- **능동적 협업**: Claude가 단순 응답이 아닌, 주도적으로 작업을 제안하고 실행
- **컨텍스트 공유**: 프로젝트 파일, 문서, 대화 이력을 공유하여 일관된 작업 수행
- **역할 분담**: 사람은 방향을 설정하고 Claude는 실행을 담당하는 효율적 분업
- **반복 개선**: 결과물을 함께 검토하고 지속적으로 개선하는 피드백 루프

### 기존 방식 vs 코워크

| 구분 | 기존 AI 활용 | Claude 코워크 |
|------|-------------|--------------|
| 상호작용 | 일회성 질문-답변 | 지속적 협업 |
| 컨텍스트 | 매번 새로 설명 | 프로젝트 단위 공유 |
| 산출물 | 텍스트 응답 | 문서, 코드, 아티팩트 |
| 워크플로우 | 수동 | 자동화 가능 |
| 팀 연동 | 개인 사용 | 팀 전체 협업 |`,contentEn:`Claude Co-work refers to workflows where Claude AI and humans **collaborate together to perform tasks**. Beyond simple question-and-answer, Claude participates in projects as a team member, performing substantial work.

### Core Concepts of Co-work

- **Active Collaboration**: Claude proactively suggests and executes tasks, not just responses
- **Context Sharing**: Share project files, documents, and conversation history for consistent work
- **Role Division**: Humans set direction while Claude handles execution — efficient division of labor
- **Iterative Improvement**: Review outputs together and continuously improve through feedback loops

### Traditional Approach vs Co-work

| Aspect | Traditional AI Use | Claude Co-work |
|--------|-------------------|----------------|
| Interaction | One-off Q&A | Continuous collaboration |
| Context | Explain each time | Shared per project |
| Output | Text responses | Documents, code, artifacts |
| Workflow | Manual | Automatable |
| Team Integration | Individual use | Whole team collaboration |`},{title:"코워크 활용 시나리오",titleEn:"Co-work Use Cases",content:`### 소프트웨어 개발

- **코드 리뷰 파트너**: PR을 분석하고 개선점을 제안, 버그를 사전에 탐지
- **페어 프로그래밍**: Claude Code를 통해 실시간으로 함께 코딩
- **문서 작성**: API 문서, README, 아키텍처 문서를 자동 생성 및 유지

### 비즈니스 운영

- **보고서 작성**: 데이터 분석 후 인사이트가 포함된 보고서 자동 생성
- **이메일/문서 초안**: 비즈니스 커뮤니케이션 초안 작성 및 검토
- **미팅 준비**: 안건 정리, 자료 요약, 발표 자료 작성

### 리서치 & 분석

- **시장 조사**: 산업 트렌드 분석, 경쟁사 비교, SWOT 분석
- **논문 리뷰**: 학술 논문 요약, 핵심 포인트 추출, 비판적 분석
- **데이터 분석**: CSV, JSON 데이터를 분석하고 시각화 제안

### 크리에이티브

- **콘텐츠 기획**: 블로그 시리즈, 소셜 미디어 캘린더 기획
- **카피라이팅**: 마케팅 카피, 제품 설명, 슬로건 작성
- **디자인 협업**: UI/UX 피드백, 와이어프레임 아이디어 제안`,contentEn:`### Software Development

- **Code Review Partner**: Analyze PRs, suggest improvements, detect bugs proactively
- **Pair Programming**: Code together in real-time through Claude Code
- **Documentation**: Auto-generate and maintain API docs, READMEs, architecture docs

### Business Operations

- **Report Writing**: Auto-generate insightful reports after data analysis
- **Email/Document Drafts**: Draft and review business communications
- **Meeting Preparation**: Organize agendas, summarize materials, create presentations

### Research & Analysis

- **Market Research**: Industry trend analysis, competitor comparison, SWOT analysis
- **Paper Review**: Summarize academic papers, extract key points, critical analysis
- **Data Analysis**: Analyze CSV, JSON data and suggest visualizations

### Creative

- **Content Planning**: Blog series, social media calendar planning
- **Copywriting**: Marketing copy, product descriptions, slogans
- **Design Collaboration**: UI/UX feedback, wireframe ideation`}]},x={id:"shared-projects",title:"공유 프로젝트 협업",titleEn:"Shared Project Collaboration",icon:"fa-folder-open",sections:[{title:"프로젝트 기반 협업",titleEn:"Project-based Collaboration",content:`Claude.ai의 **프로젝트(Projects)** 기능을 활용하면 팀 전체가 동일한 컨텍스트에서 Claude와 협업할 수 있습니다.

### 프로젝트 설정하기

1. **프로젝트 생성**: Claude.ai 사이드바에서 "New Project" 클릭
2. **이름과 설명 지정**: 프로젝트의 목적을 명확하게 기술
3. **Custom Instructions 설정**: 프로젝트 전용 시스템 프롬프트 작성
4. **파일 업로드**: 관련 문서, 코드, 데이터를 프로젝트에 첨부

### Custom Instructions 작성 가이드

\`\`\`text
# 프로젝트: 신규 웹 서비스 개발

## 역할
당신은 시니어 풀스택 개발자입니다.

## 기술 스택
- Frontend: React 19, TypeScript, Tailwind CSS
- Backend: Node.js, Express, PostgreSQL
- Deploy: AWS (ECS, RDS, S3)

## 코딩 컨벤션
- 함수형 컴포넌트 + Hooks 사용
- ESLint + Prettier 규칙 준수
- 모든 함수에 JSDoc 주석 작성

## 응답 규칙
- 코드 변경 시 항상 테스트 코드 포함
- 보안 취약점 확인 후 제안
- 한국어로 응답
\`\`\`

### 프로젝트 파일 관리

| 파일 유형 | 용도 | 예시 |
|-----------|------|------|
| 문서 | 요구사항, 스펙 공유 | PRD, API 스펙 |
| 코드 | 기존 코드 참조 | 컴포넌트, 모듈 |
| 데이터 | 분석 대상 데이터 | CSV, JSON |
| 이미지 | 디자인 참고 | 와이어프레임, 스크린샷 |

> Custom Instructions에 프로젝트의 컨벤션과 규칙을 상세히 작성하면, 모든 대화에서 일관된 품질의 결과물을 얻을 수 있습니다.`,contentEn:`With Claude.ai's **Projects** feature, your entire team can collaborate with Claude in the same context.

### Setting Up a Project

1. **Create Project**: Click "New Project" in the Claude.ai sidebar
2. **Set Name and Description**: Clearly describe the project's purpose
3. **Configure Custom Instructions**: Write project-specific system prompts
4. **Upload Files**: Attach relevant documents, code, and data to the project

### Custom Instructions Writing Guide

\`\`\`text
# Project: New Web Service Development

## Role
You are a senior full-stack developer.

## Tech Stack
- Frontend: React 19, TypeScript, Tailwind CSS
- Backend: Node.js, Express, PostgreSQL
- Deploy: AWS (ECS, RDS, S3)

## Coding Conventions
- Use functional components + Hooks
- Follow ESLint + Prettier rules
- Write JSDoc comments for all functions

## Response Rules
- Always include test code with code changes
- Check for security vulnerabilities before suggesting
- Respond in English
\`\`\`

### Project File Management

| File Type | Purpose | Examples |
|-----------|---------|----------|
| Documents | Share requirements, specs | PRD, API specs |
| Code | Reference existing code | Components, modules |
| Data | Analysis target data | CSV, JSON |
| Images | Design reference | Wireframes, screenshots |

> Writing detailed conventions and rules in Custom Instructions ensures consistent quality outputs across all conversations.`},{title:"팀 워크스페이스",titleEn:"Team Workspace",content:`### Team 플랜 활용

Claude Team 플랜($25/사용자/월)을 사용하면 팀 단위 협업이 가능합니다.

### 팀 워크스페이스의 장점

- **공유 프로젝트**: 팀원 모두가 동일한 프로젝트에 접근
- **지식 축적**: 팀의 프로젝트 지식이 Claude에 누적
- **일관된 품질**: 동일한 Custom Instructions로 균일한 산출물
- **관리자 기능**: 사용량 모니터링, 권한 관리

### 팀 협업 워크플로우

\`\`\`
[팀 리더] → 프로젝트 생성 & Custom Instructions 설정
    ↓
[개발자 A] → Claude와 프론트엔드 개발 협업
[개발자 B] → Claude와 백엔드 API 개발 협업
[디자이너] → Claude와 UI/UX 리뷰 협업
    ↓
[팀 전체] → 프로젝트 내에서 결과물 공유 & 리뷰
\`\`\`

### 효과적인 팀 활용 팁

1. **역할별 프로젝트 분리**: 프론트엔드, 백엔드, 디자인 등 역할별 프로젝트 운영
2. **공통 가이드라인 프로젝트**: 팀 컨벤션, 코딩 가이드를 별도 프로젝트로 관리
3. **온보딩 프로젝트**: 신규 팀원을 위한 프로젝트 생성으로 빠른 적응 지원
4. **정기 리뷰**: 주간/월간 프로젝트 결과물 리뷰 및 Instructions 업데이트`,contentEn:`### Using the Team Plan

The Claude Team plan ($25/user/month) enables team-level collaboration.

### Benefits of Team Workspace

- **Shared Projects**: All team members access the same projects
- **Knowledge Accumulation**: Team project knowledge accumulates in Claude
- **Consistent Quality**: Uniform outputs with shared Custom Instructions
- **Admin Features**: Usage monitoring, permission management

### Team Collaboration Workflow

\`\`\`
[Team Lead] → Create project & set Custom Instructions
    ↓
[Developer A] → Collaborate with Claude on frontend
[Developer B] → Collaborate with Claude on backend API
[Designer] → Collaborate with Claude on UI/UX review
    ↓
[Whole Team] → Share & review outputs within the project
\`\`\`

### Effective Team Tips

1. **Separate Projects by Role**: Operate separate projects for frontend, backend, design, etc.
2. **Common Guidelines Project**: Manage team conventions and coding guides as a separate project
3. **Onboarding Project**: Create projects for new team members to accelerate adaptation
4. **Regular Reviews**: Weekly/monthly project output reviews and Instructions updates`}]},y={id:"integrations",title:"외부 서비스 연동",titleEn:"External Integrations",icon:"fa-plug",sections:[{title:"MCP를 통한 연동",titleEn:"Integration via MCP",content:`**MCP(Model Context Protocol)**는 Claude가 외부 도구와 데이터 소스에 접근할 수 있게 해주는 프로토콜입니다. 이를 통해 Claude와의 코워크가 실제 업무 환경과 연결됩니다.

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

> MCP를 활용하면 Claude가 직접 GitHub에서 코드를 읽고, Slack으로 결과를 공유하는 등 실제 업무 도구와 연결된 코워크가 가능합니다.`,contentEn:`**MCP (Model Context Protocol)** is a protocol that allows Claude to access external tools and data sources. This connects co-work with Claude to your actual work environment.

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

> With MCP, Claude can directly read code from GitHub, share results via Slack, and more — enabling co-work connected to your actual work tools.`},{title:"Slack & Notion 연동 실전",titleEn:"Slack & Notion Integration in Practice",content:`### Slack 연동 워크플로우

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
- **일정 관리**: 반복 업무, 데드라인 기반 알림 설정`,contentEn:`### Slack Integration Workflow

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
- **Schedule Management**: Set up recurring tasks, deadline-based reminders`}]},P={id:"workflows",title:"코워크 워크플로우",titleEn:"Co-work Workflows",icon:"fa-diagram-project",sections:[{title:"개발 워크플로우",titleEn:"Development Workflow",content:`Claude와의 코워크를 개발 프로세스에 체계적으로 통합하는 방법을 소개합니다.

### 풀사이클 개발 코워크

\`\`\`
1. 요구사항 분석    → Claude와 PRD 작성, 기술 스펙 정의
2. 설계             → 아키텍처 설계, DB 스키마, API 설계
3. 구현             → Claude Code로 페어 프로그래밍
4. 코드 리뷰        → Claude가 PR 리뷰, 개선점 제안
5. 테스트           → 테스트 코드 자동 생성, 엣지 케이스 탐색
6. 문서화           → API 문서, README 자동 생성
7. 배포             → CI/CD 스크립트 작성, 배포 체크리스트
\`\`\`

### 요구사항 분석 코워크

\`\`\`markdown
# 프롬프트 예시
다음 요구사항을 기술 스펙으로 변환해주세요:

## 요구사항
- 사용자가 게시글을 작성, 수정, 삭제할 수 있어야 합니다
- 게시글에 이미지를 첨부할 수 있어야 합니다
- 카테고리별 필터링이 가능해야 합니다

## 기대 산출물
1. DB 스키마 (PostgreSQL)
2. REST API 엔드포인트 설계
3. 컴포넌트 구조 설계
4. 예상 작업 시간
\`\`\`

### Claude Code 페어 프로그래밍

Claude Code를 활용한 실시간 코워크:

\`\`\`bash
# 프로젝트 디렉토리에서 Claude Code 시작
cd my-project
claude

# 기능 구현 요청
> 게시판 CRUD API를 Express로 구현해줘.
> 기존 DB 스키마는 prisma/schema.prisma를 참고해.
> 에러 핸들링과 validation도 포함해줘.
\`\`\`

> Claude Code는 프로젝트의 전체 파일 구조를 파악하므로, 기존 코드 스타일에 맞춰 일관된 코드를 생성합니다.`,contentEn:`Learn how to systematically integrate co-work with Claude into your development process.

### Full-cycle Development Co-work

\`\`\`
1. Requirements Analysis → Write PRD with Claude, define tech specs
2. Design               → Architecture design, DB schema, API design
3. Implementation        → Pair programming with Claude Code
4. Code Review           → Claude reviews PRs, suggests improvements
5. Testing               → Auto-generate test code, explore edge cases
6. Documentation         → Auto-generate API docs, README
7. Deployment            → Write CI/CD scripts, deployment checklists
\`\`\`

### Requirements Analysis Co-work

\`\`\`markdown
# Prompt Example
Convert the following requirements into technical specs:

## Requirements
- Users should be able to create, edit, and delete posts
- Users should be able to attach images to posts
- Category filtering should be available

## Expected Output
1. DB schema (PostgreSQL)
2. REST API endpoint design
3. Component structure design
4. Estimated timeline
\`\`\`

### Pair Programming with Claude Code

Real-time co-work using Claude Code:

\`\`\`bash
# Start Claude Code in the project directory
cd my-project
claude

# Request feature implementation
> Implement a board CRUD API with Express.
> Reference the existing DB schema in prisma/schema.prisma.
> Include error handling and validation.
\`\`\`

> Claude Code understands your entire project file structure, so it generates consistent code matching your existing code style.`},{title:"비즈니스 워크플로우",titleEn:"Business Workflow",content:`### 보고서 작성 코워크

\`\`\`
[데이터 수집] → [Claude에게 분석 요청] → [초안 생성] → [인간 검토] → [최종본]
\`\`\`

#### 프롬프트 예시

\`\`\`markdown
첨부한 매출 데이터(sales_q1.csv)를 분석하여 분기 보고서를 작성해주세요.

## 보고서 구조
1. 요약 (Executive Summary)
2. 주요 지표 분석
3. 전분기 대비 변화
4. 카테고리별 성과
5. 개선 제안사항

## 형식
- 한국어, 비즈니스 톤
- 차트/테이블 포함
- 핵심 인사이트 하이라이트
\`\`\`

### 콘텐츠 제작 코워크

\`\`\`
[주제 선정] → [Claude와 아웃라인 작성] → [초안 작성] → [피드백 & 수정] → [최종 발행]
\`\`\`

#### 효과적인 반복 작업 패턴

1. **초안 요청**: 전체 구조와 초안을 먼저 생성
2. **부분 수정**: 특정 섹션만 집중 수정 요청
3. **톤 조정**: 대상 독자에 맞게 문체 변경
4. **최종 검토**: 오탈자, 팩트체크, 일관성 확인

### 자동화된 반복 작업

Claude Code의 **Hooks**와 **스케줄링**을 활용한 자동 코워크:

- **매일 아침**: 전날 커밋 요약 리포트 생성
- **PR 생성 시**: 자동 코드 리뷰 및 피드백
- **주간**: 프로젝트 진행 상황 보고서 생성
- **월간**: 코드 품질 분석 리포트 생성`,contentEn:`### Report Writing Co-work

\`\`\`
[Data Collection] → [Request Analysis from Claude] → [Draft Generation] → [Human Review] → [Final Version]
\`\`\`

#### Prompt Example

\`\`\`markdown
Analyze the attached sales data (sales_q1.csv) and write a quarterly report.

## Report Structure
1. Executive Summary
2. Key Metrics Analysis
3. Quarter-over-Quarter Changes
4. Performance by Category
5. Improvement Recommendations

## Format
- English, business tone
- Include charts/tables
- Highlight key insights
\`\`\`

### Content Creation Co-work

\`\`\`
[Topic Selection] → [Write Outline with Claude] → [Draft Writing] → [Feedback & Revision] → [Final Publication]
\`\`\`

#### Effective Iteration Patterns

1. **Request Draft**: Generate overall structure and draft first
2. **Partial Edits**: Request focused edits on specific sections
3. **Tone Adjustment**: Change writing style for target audience
4. **Final Review**: Check typos, fact-check, consistency verification

### Automated Recurring Tasks

Automated co-work using Claude Code **Hooks** and **scheduling**:

- **Every Morning**: Generate summary report of previous day's commits
- **On PR Creation**: Automatic code review and feedback
- **Weekly**: Generate project progress reports
- **Monthly**: Generate code quality analysis reports`}]},S={id:"best-practices",title:"코워크 베스트 프랙티스",titleEn:"Co-work Best Practices",icon:"fa-star",sections:[{title:"효과적인 코워크 원칙",titleEn:"Effective Co-work Principles",content:`### 1. 명확한 역할 분담

Claude와의 코워크에서 가장 중요한 것은 **사람과 AI의 역할을 명확히 구분**하는 것입니다.

| 사람의 역할 | Claude의 역할 |
|------------|--------------|
| 목표 설정 & 방향 결정 | 실행 & 구현 |
| 품질 검증 & 의사결정 | 초안 작성 & 옵션 제시 |
| 도메인 전문 지식 제공 | 데이터 분석 & 패턴 발견 |
| 최종 승인 | 반복 작업 자동화 |

### 2. 컨텍스트 최적화

\`\`\`markdown
# 좋은 예 ✓
"첨부한 API 스펙(api-spec.yaml)을 기반으로 Express 라우터를 구현해줘.
기존 라우터 패턴은 src/routes/users.js를 참고해."

# 나쁜 예 ✗
"API를 만들어줘."
\`\`\`

### 3. 점진적 작업 분할

큰 작업을 한 번에 요청하지 말고, 단계별로 나누어 진행합니다:

1. **계획 단계**: "이 기능의 구현 계획을 세워줘"
2. **구조 단계**: "데이터 모델과 API 구조를 설계해줘"
3. **구현 단계**: "계획대로 하나씩 구현해줘"
4. **검증 단계**: "테스트와 리뷰를 진행해줘"

### 4. 피드백 루프 활용

\`\`\`
요청 → Claude 응답 → 검토 → 구체적 피드백 → 개선 → 반복
\`\`\`

효과적인 피드백 예시:
- "함수명을 더 직관적으로 변경해줘 (예: getData → fetchUserProfile)"
- "에러 처리가 부족해. try-catch를 추가하고 사용자 친화적 에러 메시지를 반환해"
- "이 부분의 성능이 우려돼. N+1 쿼리를 join으로 최적화해줘"`,contentEn:`### 1. Clear Role Division

The most important aspect of co-work with Claude is **clearly distinguishing roles between human and AI**.

| Human's Role | Claude's Role |
|-------------|--------------|
| Goal setting & direction | Execution & implementation |
| Quality verification & decisions | Draft creation & option presentation |
| Domain expertise | Data analysis & pattern discovery |
| Final approval | Repetitive task automation |

### 2. Context Optimization

\`\`\`markdown
# Good Example ✓
"Implement an Express router based on the attached API spec (api-spec.yaml).
Reference the existing router pattern in src/routes/users.js."

# Bad Example ✗
"Make an API."
\`\`\`

### 3. Incremental Task Division

Don't request everything at once — break it into steps:

1. **Planning Phase**: "Create an implementation plan for this feature"
2. **Structure Phase**: "Design the data model and API structure"
3. **Implementation Phase**: "Implement each part according to the plan"
4. **Verification Phase**: "Run tests and review"

### 4. Leverage Feedback Loops

\`\`\`
Request → Claude Response → Review → Specific Feedback → Improvement → Repeat
\`\`\`

Effective feedback examples:
- "Rename functions to be more intuitive (e.g., getData → fetchUserProfile)"
- "Error handling is insufficient. Add try-catch and return user-friendly error messages"
- "Performance concern here. Optimize N+1 queries with joins"`},{title:"코워크 안티패턴",titleEn:"Co-work Anti-patterns",content:`### 피해야 할 패턴

#### 1. 블랙박스 위임
\`\`\`markdown
# 안티패턴 ✗
"전체 프로젝트를 완성해줘"

# 올바른 접근 ✓
"먼저 프로젝트 구조를 설계하고, 핵심 모듈부터 하나씩 구현하자"
\`\`\`

#### 2. 검증 없는 수용
Claude의 결과물을 검증 없이 그대로 사용하는 것은 위험합니다.

**반드시 확인할 사항:**
- 코드: 로직 정확성, 보안 취약점, 성능
- 문서: 팩트 정확성, 최신 정보 반영 여부
- 분석: 데이터 해석의 타당성, 결론의 논리성

#### 3. 컨텍스트 과부하
\`\`\`markdown
# 안티패턴 ✗
한 대화에 너무 많은 파일과 요청을 동시에 전달

# 올바른 접근 ✓
관련된 파일만 선택적으로 공유하고, 명확한 범위의 작업을 요청
\`\`\`

#### 4. 재시작 반복
\`\`\`markdown
# 안티패턴 ✗
매번 새 대화를 시작하여 같은 컨텍스트를 반복 설명

# 올바른 접근 ✓
프로젝트 기능을 활용하여 컨텍스트를 유지
\`\`\`

### 코워크 체크리스트

- [ ] 작업 목표와 기대 결과물을 명확히 정의했는가?
- [ ] 필요한 컨텍스트(파일, 배경 정보)를 제공했는가?
- [ ] 작업을 적절한 크기로 분할했는가?
- [ ] 결과물을 검증하고 피드백을 제공했는가?
- [ ] Custom Instructions를 활용하고 있는가?
- [ ] 팀과 결과물을 공유하고 있는가?`,contentEn:`### Patterns to Avoid

#### 1. Black Box Delegation
\`\`\`markdown
# Anti-pattern ✗
"Complete the entire project"

# Correct Approach ✓
"Let's design the project structure first, then implement core modules one by one"
\`\`\`

#### 2. Accepting Without Verification
Using Claude's output without verification is risky.

**Always verify:**
- Code: Logic correctness, security vulnerabilities, performance
- Documents: Fact accuracy, whether latest info is reflected
- Analysis: Validity of data interpretation, logic of conclusions

#### 3. Context Overload
\`\`\`markdown
# Anti-pattern ✗
Sending too many files and requests simultaneously in one conversation

# Correct Approach ✓
Selectively share relevant files and request clearly scoped tasks
\`\`\`

#### 4. Restart Loop
\`\`\`markdown
# Anti-pattern ✗
Starting new conversations each time, re-explaining the same context

# Correct Approach ✓
Use the Projects feature to maintain context
\`\`\`

### Co-work Checklist

- [ ] Are work goals and expected outputs clearly defined?
- [ ] Is necessary context (files, background) provided?
- [ ] Is the work divided into appropriate sizes?
- [ ] Are outputs verified with feedback provided?
- [ ] Are Custom Instructions being utilized?
- [ ] Are outputs being shared with the team?`}]},A={id:"enterprise",title:"엔터프라이즈 코워크",titleEn:"Enterprise Co-work",icon:"fa-building",sections:[{title:"Enterprise 도입 가이드",titleEn:"Enterprise Adoption Guide",content:`### Claude Enterprise 코워크

대규모 조직에서 Claude를 도입하여 전사적 코워크를 구축하는 방법을 안내합니다.

### 요금제별 코워크 기능 비교

| 기능 | Pro | Team | Enterprise |
|------|-----|------|-----------|
| 기본 대화 | ✓ | ✓ | ✓ |
| Projects | ✓ | ✓ | ✓ |
| 팀 공유 프로젝트 | - | ✓ | ✓ |
| 관리자 대시보드 | - | ✓ | ✓ |
| SSO/SAML | - | - | ✓ |
| 감사 로그 | - | - | ✓ |
| 사용량 분석 | - | 기본 | 상세 |
| API 연동 | 별도 | 별도 | 통합 |
| SLA | - | - | ✓ |
| 전담 지원 | - | - | ✓ |

### 도입 단계

\`\`\`
Phase 1 (1-2주): 파일럿
├── 핵심 팀(3-5명) 선정
├── Team 플랜 시작
├── 사용 사례 테스트
└── ROI 측정 기준 수립

Phase 2 (3-4주): 확대
├── 부서별 확장 (10-20명)
├── Custom Instructions 표준화
├── 워크플로우 가이드 작성
└── 보안 정책 수립

Phase 3 (5-8주): 전사 도입
├── Enterprise 플랜 전환
├── SSO 연동
├── 전사 교육 프로그램
└── 사용량 모니터링 체계 구축
\`\`\`

### 보안 고려사항

- **데이터 처리**: Claude는 대화 내용을 모델 학습에 사용하지 않음 (Enterprise)
- **접근 제어**: SSO/SAML을 통한 중앙화된 인증 관리
- **감사 로그**: 모든 사용 이력 추적 가능
- **데이터 보존**: 대화 보존 기간 정책 설정 가능
- **IP 제한**: 특정 IP 범위에서만 접근 허용 설정`,contentEn:`### Claude Enterprise Co-work

Guide for implementing Claude across large organizations to build company-wide co-work.

### Co-work Feature Comparison by Plan

| Feature | Pro | Team | Enterprise |
|---------|-----|------|-----------|
| Basic Chat | ✓ | ✓ | ✓ |
| Projects | ✓ | ✓ | ✓ |
| Shared Team Projects | - | ✓ | ✓ |
| Admin Dashboard | - | ✓ | ✓ |
| SSO/SAML | - | - | ✓ |
| Audit Logs | - | - | ✓ |
| Usage Analytics | - | Basic | Detailed |
| API Integration | Separate | Separate | Unified |
| SLA | - | - | ✓ |
| Dedicated Support | - | - | ✓ |

### Adoption Phases

\`\`\`
Phase 1 (Weeks 1-2): Pilot
├── Select core team (3-5 people)
├── Start Team plan
├── Test use cases
└── Establish ROI measurement criteria

Phase 2 (Weeks 3-4): Expansion
├── Expand by department (10-20 people)
├── Standardize Custom Instructions
├── Write workflow guides
└── Establish security policies

Phase 3 (Weeks 5-8): Company-wide Rollout
├── Upgrade to Enterprise plan
├── SSO integration
├── Company-wide training program
└── Build usage monitoring infrastructure
\`\`\`

### Security Considerations

- **Data Processing**: Claude does not use conversation data for model training (Enterprise)
- **Access Control**: Centralized authentication via SSO/SAML
- **Audit Logs**: Full usage history tracking
- **Data Retention**: Configurable conversation retention policies
- **IP Restrictions**: Restrict access to specific IP ranges`},{title:"ROI 측정 및 사례",titleEn:"ROI Measurement & Case Studies",content:`### 코워크 ROI 측정 프레임워크

#### 정량적 지표

| 지표 | 측정 방법 | 기대 효과 |
|------|----------|----------|
| 개발 속도 | 기능 구현 소요 시간 | 30-50% 단축 |
| 코드 품질 | 버그 발생률, 리뷰 수정 횟수 | 20-40% 감소 |
| 문서 작성 | 문서 작성 소요 시간 | 60-80% 단축 |
| 온보딩 | 신규 인원 적응 기간 | 40-60% 단축 |
| 미팅 효율 | 미팅 준비/정리 시간 | 50-70% 단축 |

#### 정성적 지표

- **팀 만족도**: 반복 작업 감소로 인한 업무 만족도 향상
- **지식 공유**: 프로젝트 기반 지식의 체계적 축적
- **의사결정 품질**: 데이터 기반 인사이트를 통한 의사결정 향상
- **혁신**: 루틴 업무 자동화로 창의적 업무에 집중

### 활용 사례

#### 스타트업 A사 (개발팀 8명)
- **도입 전**: 스프린트당 평균 15개 태스크 완료
- **도입 후**: 스프린트당 평균 24개 태스크 완료 (+60%)
- **핵심 활용**: Claude Code 페어 프로그래밍, PR 자동 리뷰

#### 중견기업 B사 (마케팅팀 12명)
- **도입 전**: 콘텐츠 제작에 주 40시간 소요
- **도입 후**: 동일 품질 콘텐츠 주 15시간으로 단축 (-62%)
- **핵심 활용**: 콘텐츠 초안 생성, 다국어 번역, SEO 최적화

#### 대기업 C사 (전사 200명)
- **도입 전**: 보고서 작성에 인당 주 8시간 소요
- **도입 후**: 인당 주 2시간으로 단축 (-75%)
- **핵심 활용**: 데이터 분석, 자동 보고서 생성, 미팅 요약`,contentEn:`### Co-work ROI Measurement Framework

#### Quantitative Metrics

| Metric | Measurement Method | Expected Impact |
|--------|-------------------|-----------------|
| Dev Speed | Feature implementation time | 30-50% reduction |
| Code Quality | Bug rate, review revision count | 20-40% decrease |
| Documentation | Doc writing time | 60-80% reduction |
| Onboarding | New member adaptation period | 40-60% reduction |
| Meeting Efficiency | Meeting prep/summary time | 50-70% reduction |

#### Qualitative Metrics

- **Team Satisfaction**: Improved satisfaction from reduced repetitive work
- **Knowledge Sharing**: Systematic accumulation of project-based knowledge
- **Decision Quality**: Better decisions through data-driven insights
- **Innovation**: Focus on creative work by automating routine tasks

### Case Studies

#### Startup A (8-person dev team)
- **Before**: Average 15 tasks completed per sprint
- **After**: Average 24 tasks completed per sprint (+60%)
- **Key Usage**: Claude Code pair programming, automated PR reviews

#### Mid-size Company B (12-person marketing team)
- **Before**: 40 hours/week on content production
- **After**: Same quality content in 15 hours/week (-62%)
- **Key Usage**: Content draft generation, multilingual translation, SEO optimization

#### Enterprise C (200 employees company-wide)
- **Before**: 8 hours/person/week on report writing
- **After**: 2 hours/person/week (-75%)
- **Key Usage**: Data analysis, automated report generation, meeting summaries`}]},l=[f,x,y,P,S,A];function N(){const{language:u}=v(),a=u==="ko",[o,s]=h.useState(0),r=l[o],m={code({inline:t,className:n,children:i,...p}){const c=/language-(\w+)/.exec(n||"");return!t&&c?e.jsx(d,{code:String(i).replace(/\n$/,""),language:c[1]}):!t&&!c&&String(i).includes(`
`)?e.jsx(d,{code:String(i).replace(/\n$/,""),language:""}):e.jsx("code",{className:"inline-code",...p,children:i})},table({children:t}){return e.jsx("div",{className:"table-responsive",children:e.jsx("table",{children:t})})},blockquote({children:t}){return e.jsx(w,{type:"tip",children:t})}};return e.jsxs("div",{className:"guide-page",children:[e.jsx(k,{title:a?"Claude 코워크 가이드":"Claude Co-work Guide",path:"/claude-cowork"}),e.jsxs("div",{className:"guide-layout",children:[e.jsxs("aside",{className:"guide-sidebar",children:[e.jsx("div",{className:"guide-sidebar-title",children:a?"목차":"Contents"}),e.jsx("ul",{className:"guide-nav",children:l.map((t,n)=>e.jsx("li",{className:"guide-nav-item",children:e.jsxs("button",{className:`guide-nav-link ${n===o?"active":""}`,onClick:()=>s(n),children:[e.jsx("i",{className:`fa-solid ${t.icon} nav-icon`}),a?t.title:t.titleEn]})},t.id))})]}),e.jsxs("div",{className:"guide-content",children:[e.jsx("div",{className:"guide-content-header",children:e.jsx("h1",{children:a?r.title:r.titleEn})}),r.sections.map((t,n)=>e.jsxs("div",{className:"guide-section",children:[e.jsx("h2",{children:a?t.title:t.titleEn}),e.jsx("div",{className:"markdown-body",children:e.jsx(g,{remarkPlugins:[C],components:m,children:a?t.content:t.contentEn})})]},n)),e.jsxs("div",{className:"guide-section-nav",children:[e.jsxs("button",{disabled:o===0,onClick:()=>s(o-1),children:[e.jsx("i",{className:"fa-solid fa-chevron-left"})," ",a?"이전":"Previous"]}),e.jsxs("button",{disabled:o===l.length-1,onClick:()=>s(o+1),children:[a?"다음":"Next"," ",e.jsx("i",{className:"fa-solid fa-chevron-right"})]})]})]})]})]})}export{N as default};
