const memory = {
  id: 'memory',
  title: '메모리 기능',
  titleEn: 'Memory Feature',
  icon: 'fa-brain',
  sections: [
    {
      title: '메모리란?',
      titleEn: 'What is Memory?',
      content: `Memory는 Claude가 이전 대화에서 얻은 정보를 기억하여 이후 대화에서 활용할 수 있게 하는 기능입니다. 사용자의 선호도, 프로젝트 정보, 작업 스타일 등을 기억합니다.

### 메모리의 작동 방식

- **자동 저장**: Claude가 대화 중 중요한 정보를 자동으로 기억합니다
- **명시적 저장**: "이것을 기억해줘"라고 요청하면 특정 정보를 저장합니다
- **컨텍스트 활용**: 이후 대화에서 저장된 정보를 자동으로 참조합니다
- **프라이버시 제어**: 사용자가 저장된 메모리를 확인하고 삭제할 수 있습니다

### 메모리가 기억하는 정보

- **개인 선호도**: 선호하는 프로그래밍 언어, 코딩 스타일, 응답 형식
- **프로젝트 컨텍스트**: 진행 중인 프로젝트의 기술 스택, 요구사항
- **작업 패턴**: 자주 수행하는 작업의 패턴과 워크플로우
- **피드백 반영**: 이전에 받은 피드백을 향후 응답에 반영`,
      contentEn: `Memory is a feature that allows Claude to remember information from previous conversations and use it in future conversations. It remembers user preferences, project information, work styles, and more.

### How Memory Works

- **Automatic Saving**: Claude automatically remembers important information during conversations
- **Explicit Saving**: Request "Remember this" to save specific information
- **Context Utilization**: Automatically references saved information in subsequent conversations
- **Privacy Control**: Users can view and delete saved memories

### What Memory Remembers

- **Personal Preferences**: Preferred programming languages, coding styles, response formats
- **Project Context**: Technology stacks and requirements of ongoing projects
- **Work Patterns**: Patterns and workflows of frequently performed tasks
- **Feedback Integration**: Reflects previous feedback in future responses`
    },
    {
      title: '메모리 관리',
      titleEn: 'Managing Memory',
      content: `### 메모리 확인 및 편집

1. Claude.ai 설정에서 **"메모리"** 섹션으로 이동
2. 저장된 모든 메모리 항목을 확인할 수 있습니다
3. 개별 항목을 삭제하거나 전체 메모리를 초기화할 수 있습니다

### 메모리 활용 팁

**효과적인 메모리 저장:**
- "내 이름은 [이름]이고 [회사]에서 [직책]으로 일해. 이걸 기억해줘."
- "나는 Python과 TypeScript를 주로 사용해. 코드 예제는 이 언어들로 작성해줘."
- "응답은 항상 한국어로, 코드 주석은 영어로 작성해줘."

**메모리 비활성화:**
- 설정에서 메모리 기능을 완전히 비활성화할 수 있습니다
- 특정 대화에서만 메모리를 사용하지 않도록 설정 가능

### 메모리 vs 프로젝트 지침

| 특성 | 메모리 | 프로젝트 지침 |
|------|--------|---------------|
| **범위** | 모든 대화에 적용 | 특정 프로젝트 내에서만 적용 |
| **설정 방식** | 자동 또는 대화 중 요청 | 프로젝트 설정에서 직접 작성 |
| **내용** | 개인 선호도, 일반 정보 | 프로젝트별 구체적 지침 |
| **수정** | 설정 페이지에서 관리 | 프로젝트 설정에서 수정 |

> **팁**: 개인 전반에 걸친 선호도는 메모리로, 프로젝트 특화 지침은 프로젝트 설정으로 관리하세요.`,
      contentEn: `### Viewing and Editing Memory

1. Go to the **"Memory"** section in Claude.ai settings
2. You can view all saved memory entries
3. You can delete individual entries or reset all memory

### Tips for Using Memory

**Effective Memory Storage:**
- "My name is [name] and I work at [company] as a [title]. Remember this."
- "I primarily use Python and TypeScript. Please write code examples in these languages."
- "Always respond in Korean, but write code comments in English."

**Disabling Memory:**
- You can completely disable the memory feature in settings
- You can set specific conversations to not use memory

### Memory vs Project Instructions

| Aspect | Memory | Project Instructions |
|--------|--------|---------------------|
| **Scope** | Applies to all conversations | Only within specific project |
| **Setup** | Automatic or requested in chat | Written directly in project settings |
| **Content** | Personal preferences, general info | Project-specific instructions |
| **Editing** | Managed in settings page | Modified in project settings |

> **Tip**: Use memory for general personal preferences and project settings for project-specific instructions.`
    }
  ]
};

export default memory;
