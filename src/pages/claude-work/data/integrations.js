const integrations = {
  id: 'integrations',
  title: '통합 연동',
  titleEn: 'Integrations',
  icon: 'fa-plug',
  sections: [
    {
      title: 'Google Drive 연동',
      titleEn: 'Google Drive Integration',
      content: `Claude.ai는 Google Drive와 직접 연동하여 문서, 스프레드시트, 프레젠테이션 등을 대화에 활용할 수 있습니다.

### 연동 설정 방법

1. Claude.ai 설정에서 **"연동(Integrations)"** 메뉴로 이동
2. **Google Drive**를 선택하고 계정을 연결
3. 필요한 권한을 승인합니다
4. 대화 중 Google Drive 파일을 직접 참조할 수 있습니다

### 지원되는 Google Drive 파일

- **Google Docs**: 문서 내용을 직접 읽고 분석
- **Google Sheets**: 스프레드시트 데이터 분석 및 시각화
- **Google Slides**: 프레젠테이션 내용 검토 및 개선
- **PDF, 이미지**: Drive에 저장된 파일 직접 접근

### 활용 사례

- 스프레드시트 데이터를 분석하여 인사이트 도출
- 기존 문서를 기반으로 새로운 콘텐츠 작성
- 프레젠테이션 내용 리뷰 및 개선 제안
- 여러 문서를 교차 참조하여 종합 보고서 작성`,
      contentEn: `Claude.ai integrates directly with Google Drive to use documents, spreadsheets, presentations, and more in conversations.

### How to Set Up Integration

1. Go to **"Integrations"** menu in Claude.ai settings
2. Select **Google Drive** and connect your account
3. Approve the necessary permissions
4. You can directly reference Google Drive files during conversations

### Supported Google Drive Files

- **Google Docs**: Directly read and analyze document content
- **Google Sheets**: Analyze and visualize spreadsheet data
- **Google Slides**: Review and improve presentation content
- **PDFs, Images**: Direct access to files stored in Drive

### Use Cases

- Analyze spreadsheet data to derive insights
- Create new content based on existing documents
- Review and suggest improvements for presentations
- Cross-reference multiple documents to create comprehensive reports`
    },
    {
      title: 'Slack 및 기타 연동',
      titleEn: 'Slack and Other Integrations',
      content: `### Slack 연동

Claude를 Slack 워크스페이스에 추가하여 팀 커뮤니케이션 내에서 직접 활용할 수 있습니다.

**주요 기능:**
- **다이렉트 메시지**: Claude에게 1:1로 질문
- **채널 멘션**: 채널에서 @Claude로 멘션하여 팀 대화에 참여
- **스레드 응답**: 스레드 내에서 컨텍스트를 유지하며 대화
- **파일 분석**: Slack에 공유된 파일을 Claude가 분석

**설정 방법:**
1. Slack 앱 디렉토리에서 Claude 앱을 검색
2. 워크스페이스에 설치
3. 필요한 채널에 Claude를 초대

### Notion 연동

- Notion 페이지와 데이터베이스를 Claude 대화에 연결
- 기존 지식 베이스를 활용한 질의 응답

### Zapier / Make 통합

- 자동화 워크플로우에 Claude를 통합
- 트리거 기반으로 Claude에게 자동 작업 요청
- 이메일 분류, 데이터 처리, 콘텐츠 생성 자동화

> **참고**: 연동 기능은 요금제와 지역에 따라 가용성이 다를 수 있습니다. 최신 정보는 Anthropic 공식 문서를 확인하세요.`,
      contentEn: `### Slack Integration

Add Claude to your Slack workspace to use it directly within team communications.

**Key Features:**
- **Direct Messages**: Ask Claude questions 1:1
- **Channel Mentions**: Mention @Claude in channels to participate in team conversations
- **Thread Replies**: Maintain context while conversing within threads
- **File Analysis**: Claude can analyze files shared in Slack

**Setup Steps:**
1. Search for the Claude app in the Slack App Directory
2. Install it to your workspace
3. Invite Claude to the channels where it is needed

### Notion Integration

- Connect Notion pages and databases to Claude conversations
- Q&A leveraging existing knowledge bases

### Zapier / Make Integration

- Integrate Claude into automated workflows
- Trigger-based automatic task requests to Claude
- Automate email classification, data processing, content generation

> **Note**: Integration availability may vary by plan and region. Check the official Anthropic documentation for the latest information.`
    }
  ]
};

export default integrations;
