const workflows = {
  id: 'workflows',
  title: '코워크 워크플로우',
  titleEn: 'Co-work Workflows',
  icon: 'fa-diagram-project',
  sections: [
    {
      title: '개발 워크플로우',
      titleEn: 'Development Workflow',
      content: `Claude와의 코워크를 개발 프로세스에 체계적으로 통합하는 방법을 소개합니다.

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

> Claude Code는 프로젝트의 전체 파일 구조를 파악하므로, 기존 코드 스타일에 맞춰 일관된 코드를 생성합니다.`,
      contentEn: `Learn how to systematically integrate co-work with Claude into your development process.

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

> Claude Code understands your entire project file structure, so it generates consistent code matching your existing code style.`
    },
    {
      title: '비즈니스 워크플로우',
      titleEn: 'Business Workflow',
      content: `### 보고서 작성 코워크

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
- **월간**: 코드 품질 분석 리포트 생성`,
      contentEn: `### Report Writing Co-work

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
- **Monthly**: Generate code quality analysis reports`
    }
  ]
};

export default workflows;
