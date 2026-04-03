const artifacts = {
  id: 'artifacts',
  title: '아티팩트',
  titleEn: 'Artifacts',
  icon: 'fa-cube',
  sections: [
    {
      title: '아티팩트란?',
      titleEn: 'What are Artifacts?',
      content: `Artifacts는 Claude.ai에서 코드, 문서, 다이어그램 등의 콘텐츠를 별도의 패널에서 생성하고 미리보기할 수 있는 기능입니다. 대화 흐름과 분리된 독립적인 콘텐츠를 만들어냅니다.

### 아티팩트 유형

| 유형 | 설명 | 예시 |
|------|------|------|
| **코드** | 실행 가능한 코드 스니펫 | Python 스크립트, JavaScript 함수 |
| **문서** | 마크다운 형식의 문서 | 보고서, 가이드, README |
| **HTML** | 인터랙티브 웹 페이지 | 대시보드, 폼, 랜딩 페이지 |
| **SVG** | 벡터 그래픽 | 로고, 아이콘, 다이어그램 |
| **Mermaid** | 다이어그램 | 플로우차트, 시퀀스 다이어그램 |
| **React** | React 컴포넌트 | 인터랙티브 UI 컴포넌트 |

### 아티팩트 생성 트리거

Claude는 다음과 같은 경우에 자동으로 아티팩트를 생성합니다:

- 코드 작성을 요청했을 때
- 문서나 보고서 작성을 요청했을 때
- 다이어그램이나 시각적 콘텐츠를 요청했을 때
- HTML 페이지나 React 컴포넌트를 요청했을 때`,
      contentEn: `Artifacts is a feature in Claude.ai that lets you generate and preview content like code, documents, and diagrams in a separate panel. It creates independent content separated from the conversation flow.

### Artifact Types

| Type | Description | Examples |
|------|-------------|----------|
| **Code** | Executable code snippets | Python scripts, JavaScript functions |
| **Documents** | Markdown-formatted documents | Reports, guides, READMEs |
| **HTML** | Interactive web pages | Dashboards, forms, landing pages |
| **SVG** | Vector graphics | Logos, icons, diagrams |
| **Mermaid** | Diagrams | Flowcharts, sequence diagrams |
| **React** | React components | Interactive UI components |

### Artifact Creation Triggers

Claude automatically creates artifacts when:

- You request code to be written
- You request documents or reports
- You request diagrams or visual content
- You request HTML pages or React components`
    },
    {
      title: '아티팩트 활용하기',
      titleEn: 'Working with Artifacts',
      content: `### 아티팩트 미리보기

아티팩트가 생성되면 대화 옆 패널에서 바로 미리볼 수 있습니다:

- **코드**: 구문 강조가 적용된 코드 뷰어
- **HTML/React**: 실시간 렌더링된 웹 페이지
- **SVG/Mermaid**: 렌더링된 그래픽/다이어그램
- **문서**: 포맷이 적용된 문서 뷰어

### 아티팩트 수정

기존 아티팩트를 수정하려면:

1. 아티팩트를 참조하며 수정 사항을 요청합니다
2. Claude가 기존 아티팩트를 업데이트합니다
3. 변경 이력을 통해 이전 버전으로 돌아갈 수 있습니다

### 아티팩트 다운로드 및 공유

- **코드 복사**: 코드 블록의 복사 버튼으로 클립보드에 복사
- **파일 다운로드**: 아티팩트를 파일로 다운로드
- **공유 링크**: 아티팩트를 공유 가능한 링크로 생성 (Public Share)

### 활용 예시

**인터랙티브 대시보드 만들기:**

\`\`\`
"월별 매출 데이터를 보여주는 인터랙티브 대시보드를 HTML로 만들어줘.
차트는 Chart.js를 사용하고, 필터 기능을 추가해줘."
\`\`\`

**Mermaid 다이어그램 생성:**

\`\`\`
"사용자 인증 플로우를 Mermaid 시퀀스 다이어그램으로 그려줘.
로그인, 회원가입, 비밀번호 재설정 흐름을 포함해줘."
\`\`\``,
      contentEn: `### Previewing Artifacts

When an artifact is created, you can preview it in a panel next to the conversation:

- **Code**: Code viewer with syntax highlighting
- **HTML/React**: Live-rendered web pages
- **SVG/Mermaid**: Rendered graphics/diagrams
- **Documents**: Formatted document viewer

### Modifying Artifacts

To modify an existing artifact:

1. Reference the artifact and request changes
2. Claude will update the existing artifact
3. You can revert to previous versions through change history

### Downloading and Sharing Artifacts

- **Copy Code**: Copy to clipboard using the code block's copy button
- **File Download**: Download the artifact as a file
- **Share Link**: Generate a shareable link for the artifact (Public Share)

### Usage Examples

**Creating an Interactive Dashboard:**

\`\`\`
"Create an interactive dashboard in HTML showing monthly sales data.
Use Chart.js for charts and add filter functionality."
\`\`\`

**Generating Mermaid Diagrams:**

\`\`\`
"Draw a user authentication flow as a Mermaid sequence diagram.
Include login, registration, and password reset flows."
\`\`\``
    }
  ]
};

export default artifacts;
