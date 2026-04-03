const projects = {
  id: 'projects',
  title: '프로젝트',
  titleEn: 'Projects',
  icon: 'fa-folder-open',
  sections: [
    {
      title: '프로젝트란?',
      titleEn: 'What are Projects?',
      content: `Projects는 Claude.ai에서 관련 대화, 파일, 지침을 하나의 공간에 모아 관리할 수 있는 기능입니다. Pro, Team, Enterprise 요금제에서 사용할 수 있습니다.

### 프로젝트의 구성 요소

- **프로젝트 지식(Project Knowledge)**: 프로젝트에 업로드한 파일과 텍스트가 모든 대화의 컨텍스트로 사용됩니다
- **사용자 정의 지침(Custom Instructions)**: 프로젝트 내 모든 대화에 적용되는 시스템 수준 지침을 설정합니다
- **대화 히스토리**: 프로젝트 내에서 나눈 모든 대화가 정리되어 저장됩니다

### 프로젝트 생성 방법

1. 사이드바에서 **"프로젝트"** 메뉴를 클릭합니다
2. **"새 프로젝트"** 버튼을 클릭합니다
3. 프로젝트 이름과 설명을 입력합니다
4. 필요한 파일과 지침을 추가합니다
5. 프로젝트 내에서 대화를 시작합니다`,
      contentEn: `Projects is a feature in Claude.ai that lets you organize related conversations, files, and instructions in one space. It is available on Pro, Team, and Enterprise plans.

### Project Components

- **Project Knowledge**: Files and text uploaded to the project are used as context for all conversations
- **Custom Instructions**: Set system-level instructions that apply to all conversations within the project
- **Conversation History**: All conversations within the project are organized and saved

### How to Create a Project

1. Click the **"Projects"** menu in the sidebar
2. Click the **"New Project"** button
3. Enter a project name and description
4. Add necessary files and instructions
5. Start conversations within the project`
    },
    {
      title: '프로젝트 지식 관리',
      titleEn: 'Managing Project Knowledge',
      content: `### 지원되는 파일 형식

| 형식 | 확장자 | 최대 크기 |
|------|--------|-----------|
| 텍스트 | .txt, .md, .csv | 30MB |
| 문서 | .pdf, .docx | 30MB |
| 코드 | .py, .js, .ts 등 | 30MB |
| 이미지 | .png, .jpg, .gif | 20MB |

### 프로젝트 지식 활용 예시

- **코드 리뷰 프로젝트**: 코드베이스의 주요 파일을 업로드하고, 코딩 컨벤션을 지침으로 설정
- **문서 작성 프로젝트**: 기존 문서와 스타일 가이드를 업로드하여 일관된 톤의 문서 작성
- **연구 프로젝트**: 논문과 데이터를 업로드하고 분석 지침을 설정하여 체계적 연구 진행

### 사용자 정의 지침 작성 팁

\`\`\`
당신은 [역할]입니다.
다음 규칙을 따라 응답하세요:
1. [규칙 1]
2. [규칙 2]
3. [규칙 3]

출력 형식:
- [형식 지정]
\`\`\`

> **팁**: 지침은 구체적이고 명확할수록 좋습니다. Claude가 따라야 할 규칙, 톤, 출력 형식 등을 상세히 기술하세요.`,
      contentEn: `### Supported File Formats

| Format | Extensions | Max Size |
|--------|-----------|----------|
| Text | .txt, .md, .csv | 30MB |
| Documents | .pdf, .docx | 30MB |
| Code | .py, .js, .ts, etc. | 30MB |
| Images | .png, .jpg, .gif | 20MB |

### Project Knowledge Use Cases

- **Code Review Project**: Upload key codebase files and set coding conventions as instructions
- **Document Writing Project**: Upload existing documents and style guides to maintain a consistent tone
- **Research Project**: Upload papers and data, set analysis guidelines for systematic research

### Tips for Writing Custom Instructions

\`\`\`
You are a [role].
Follow these rules when responding:
1. [Rule 1]
2. [Rule 2]
3. [Rule 3]

Output format:
- [Format specification]
\`\`\`

> **Tip**: The more specific and clear the instructions, the better. Detail the rules, tone, and output format that Claude should follow.`
    },
    {
      title: '팀 프로젝트 공유',
      titleEn: 'Sharing Team Projects',
      content: `### Team 요금제에서의 프로젝트 공유

Team 요금제 이상에서는 프로젝트를 팀원들과 공유할 수 있습니다:

- **읽기 전용 공유**: 팀원이 프로젝트 지식과 지침을 사용할 수 있지만 수정 불가
- **편집 권한 공유**: 팀원이 파일과 지침을 수정할 수 있음
- **팀 전체 공유**: 조직 내 모든 팀원이 프로젝트에 접근 가능

### 베스트 프랙티스

1. **명확한 프로젝트 구조**: 목적별로 프로젝트를 분리하여 관리합니다
2. **지침 버전 관리**: 중요한 지침 변경 시 히스토리를 기록합니다
3. **정기적 정리**: 오래된 파일을 정리하고 지침을 업데이트합니다
4. **팀 가이드라인**: 프로젝트 사용에 대한 팀 내 규칙을 수립합니다`,
      contentEn: `### Sharing Projects on Team Plans

On Team plans and above, you can share projects with team members:

- **Read-only Sharing**: Team members can use project knowledge and instructions but cannot modify them
- **Edit Permission Sharing**: Team members can modify files and instructions
- **Organization-wide Sharing**: All team members in the organization can access the project

### Best Practices

1. **Clear Project Structure**: Separate projects by purpose for better management
2. **Instruction Version Control**: Record history when making important instruction changes
3. **Regular Cleanup**: Clean up old files and update instructions
4. **Team Guidelines**: Establish team rules for project usage`
    }
  ]
};

export default projects;
