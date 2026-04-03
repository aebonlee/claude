const overview = {
  id: 'overview',
  title: 'Claude.ai 개요',
  titleEn: 'Claude.ai Overview',
  icon: 'fa-globe',
  sections: [
    {
      title: 'Claude.ai란?',
      titleEn: 'What is Claude.ai?',
      content: `Claude.ai는 Anthropic이 제공하는 공식 웹 인터페이스로, Claude AI 모델과 대화하고 다양한 작업을 수행할 수 있는 플랫폼입니다.

### 주요 특징

- **대화형 인터페이스**: 자연어로 Claude와 소통하며 질문, 분석, 작성, 코딩 등 다양한 작업 수행
- **멀티모달 지원**: 텍스트뿐만 아니라 이미지, PDF, 코드 파일 등 다양한 형식의 입력 지원
- **실시간 아티팩트**: 코드, 문서, 다이어그램 등을 실시간으로 생성하고 미리보기
- **프로젝트 관리**: 관련 대화와 자료를 프로젝트로 구성하여 체계적 관리

### 요금제

| 요금제 | 가격 | 주요 기능 |
|--------|------|-----------|
| Free | 무료 | 기본 대화, 제한된 사용량 |
| Pro | $20/월 | 더 많은 사용량, 우선 접근, Projects |
| Team | $25/사용자/월 | 팀 협업, 관리자 기능 |
| Enterprise | 문의 | SSO, 감사 로그, SLA |`,
      contentEn: `Claude.ai is the official web interface provided by Anthropic, a platform where you can converse with Claude AI models and perform various tasks.

### Key Features

- **Conversational Interface**: Communicate with Claude in natural language for questions, analysis, writing, coding, and more
- **Multimodal Support**: Supports various input formats including text, images, PDFs, and code files
- **Real-time Artifacts**: Generate and preview code, documents, diagrams in real-time
- **Project Management**: Organize related conversations and materials into projects for systematic management

### Pricing Plans

| Plan | Price | Key Features |
|------|-------|--------------|
| Free | Free | Basic conversations, limited usage |
| Pro | $20/mo | More usage, priority access, Projects |
| Team | $25/user/mo | Team collaboration, admin features |
| Enterprise | Contact | SSO, audit logs, SLA |`
    },
    {
      title: '시작하기',
      titleEn: 'Getting Started',
      content: `### 계정 생성 및 로그인

1. [claude.ai](https://claude.ai)에 접속합니다
2. Google, Apple, 또는 이메일로 회원가입합니다
3. 이메일 인증을 완료합니다
4. 대시보드에서 바로 대화를 시작할 수 있습니다

### 인터페이스 둘러보기

- **사이드바**: 이전 대화 목록, 프로젝트, 설정 접근
- **대화 영역**: 메시지 입력 및 Claude의 응답 확인
- **모델 선택**: 사용할 Claude 모델 선택 (Opus, Sonnet, Haiku)
- **파일 첨부**: 이미지, PDF, 코드 파일 등을 드래그앤드롭으로 첨부

### 효과적인 사용 팁

- **구체적으로 질문하기**: 모호한 질문보다 구체적인 지시가 더 나은 결과를 제공합니다
- **컨텍스트 제공하기**: 배경 정보를 제공하면 더 정확한 답변을 얻을 수 있습니다
- **반복 개선하기**: 첫 답변이 만족스럽지 않으면 추가 지시를 통해 개선할 수 있습니다`,
      contentEn: `### Creating an Account and Signing In

1. Visit [claude.ai](https://claude.ai)
2. Sign up with Google, Apple, or email
3. Complete email verification
4. Start chatting from the dashboard right away

### Exploring the Interface

- **Sidebar**: Access previous conversations, projects, and settings
- **Chat Area**: Enter messages and view Claude's responses
- **Model Selection**: Choose which Claude model to use (Opus, Sonnet, Haiku)
- **File Attachment**: Drag and drop images, PDFs, code files, and more

### Tips for Effective Use

- **Be Specific**: Specific instructions produce better results than vague questions
- **Provide Context**: Background information helps Claude give more accurate answers
- **Iterate and Refine**: If the first response is not satisfactory, provide additional instructions to improve it`
    }
  ]
};

export default overview;
