const overview = {
  id: 'overview',
  title: 'Claude 코워크 개요',
  titleEn: 'Claude Co-work Overview',
  icon: 'fa-handshake',
  sections: [
    {
      title: '코워크란?',
      titleEn: 'What is Co-work?',
      content: `Claude 코워크(Co-work)는 Claude AI와 사람이 **함께 협업하여 작업을 수행**하는 워크플로우를 의미합니다. 단순히 질문-답변을 넘어, Claude가 팀의 일원처럼 프로젝트에 참여하여 실질적인 업무를 수행합니다.

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
| 팀 연동 | 개인 사용 | 팀 전체 협업 |`,
      contentEn: `Claude Co-work refers to workflows where Claude AI and humans **collaborate together to perform tasks**. Beyond simple question-and-answer, Claude participates in projects as a team member, performing substantial work.

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
| Team Integration | Individual use | Whole team collaboration |`
    },
    {
      title: '코워크 활용 시나리오',
      titleEn: 'Co-work Use Cases',
      content: `### 소프트웨어 개발

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
- **디자인 협업**: UI/UX 피드백, 와이어프레임 아이디어 제안`,
      contentEn: `### Software Development

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
- **Design Collaboration**: UI/UX feedback, wireframe ideation`
    }
  ]
};

export default overview;
