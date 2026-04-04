const sharedProjects = {
  id: 'shared-projects',
  title: '공유 프로젝트 협업',
  titleEn: 'Shared Project Collaboration',
  icon: 'fa-folder-open',
  sections: [
    {
      title: '프로젝트 기반 협업',
      titleEn: 'Project-based Collaboration',
      content: `Claude.ai의 **프로젝트(Projects)** 기능을 활용하면 팀 전체가 동일한 컨텍스트에서 Claude와 협업할 수 있습니다.

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

> Custom Instructions에 프로젝트의 컨벤션과 규칙을 상세히 작성하면, 모든 대화에서 일관된 품질의 결과물을 얻을 수 있습니다.`,
      contentEn: `With Claude.ai's **Projects** feature, your entire team can collaborate with Claude in the same context.

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

> Writing detailed conventions and rules in Custom Instructions ensures consistent quality outputs across all conversations.`
    },
    {
      title: '팀 워크스페이스',
      titleEn: 'Team Workspace',
      content: `### Team 플랜 활용

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
4. **정기 리뷰**: 주간/월간 프로젝트 결과물 리뷰 및 Instructions 업데이트`,
      contentEn: `### Using the Team Plan

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
4. **Regular Reviews**: Weekly/monthly project output reviews and Instructions updates`
    }
  ]
};

export default sharedProjects;
