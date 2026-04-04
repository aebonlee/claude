# 코드 Syntax Highlighting + 형광펜 강조 기능

## 개요
가이드 페이지의 코드 블록에 Syntax Highlighting과 형광펜 강조 기능을 추가하여 코드 가독성을 대폭 개선.

## 구현 방식
- **순수 CSS + Regex 토크나이저** (외부 라이브러리 없이 구현)
- prism-react-renderer(50KB) 등 외부 라이브러리 대비 **번들 사이즈 증가 제로**
- 학습 플랫폼 수준의 코드에서는 간단한 regex로 충분

## 변경 파일

### 1. `src/components/CodeBlock.jsx`
- `highlightCode()` 함수 추가: 코드 문자열을 받아 HTML로 변환
- `tokenizeLine()` 함수: 한 줄의 코드를 regex 룰로 토큰화
- 언어별 토큰 규칙:
  - **Python**: keyword, string, comment, decorator, builtin, function, number, operator
  - **JavaScript/TypeScript**: keyword, string, comment, builtin, function, number, operator
  - **Bash/Shell**: keyword, string, comment, builtin(명령어), 변수($var), number, operator
  - **JSON**: key(string), value(string), builtin(true/false/null), number
  - **Generic fallback**: 언어 미지정 시 기본 하이라이팅
- `dangerouslySetInnerHTML`로 토큰화된 HTML 렌더링 (코드는 사용자 입력이 아닌 마크다운 콘텐츠이므로 안전)

### 2. `src/styles/code-blocks.css`
#### Syntax Highlighting 토큰 색상 (Dracula/One Dark 계열)
| 토큰 | CSS 클래스 | 색상 | 예시 |
|------|-----------|------|------|
| keyword | `.token.keyword` | #ff79c6 (핑크) | `import`, `def`, `class`, `const` |
| string | `.token.string` | #f1fa8c (노란) | `"hello"`, `'world'` |
| comment | `.token.comment` | #9baec8 (밝은 회청색) | `# comment`, `// comment` |
| function | `.token.function` | #50fa7b (초록) | `print()`, `len()` |
| number | `.token.number` | #bd93f9 (보라) | `42`, `3.14` |
| operator | `.token.operator` | #ff79c6 (핑크) | `=`, `+`, `=>` |
| decorator | `.token.decorator` | #50fa7b (초록) | `@app.route` |
| builtin | `.token.builtin` | #8be9fd (시안) | `True`, `False`, `None`, `self` |

#### 형광펜 라인 강조
- `.code-line-highlight`: 코드 내 `← 중요!`, `# highlight`, `# 주목` 등 주석이 포함된 라인 자동 강조
- 반투명 노란 배경 + 좌측 3px 노란 보더

#### 마크다운 Bold 형광펜
- `.guide-content strong`: bold 텍스트에 하단 40% 형광펜 배경
- `linear-gradient(transparent 60%, rgba(251, 191, 36, 0.3) 60%)`

#### 다크모드
- `[data-theme="dark"]` 셀렉터로 inline-code, TipBox, strong 색상 조정
- 코드 블록은 항상 다크 배경이므로 별도 처리 불필요

### 3. 가이드 페이지 markdownComponents 통일 (4개 파일)
- `src/pages/claude-work/ClaudeWorkGuide.jsx`
- `src/pages/prompt-engineering/PromptEngineering.jsx`
- `src/pages/api-usage/APIUsage.jsx`
- `src/pages/agent-sdk/AgentSDK.jsx`

각 페이지에 동일한 `markdownComponents` 추가:
- **code**: 코드 블록 → `<CodeBlock>`, 인라인 코드 → `<code className="inline-code">`
- **table**: `<div className="table-responsive">` 래퍼
- **blockquote**: `<TipBox type="tip">` 변환

## 지원 언어 매핑
| 마크다운 언어 태그 | 토큰 규칙 |
|-------------------|----------|
| `python`, `py` | RULES_PYTHON |
| `javascript`, `js`, `jsx`, `typescript`, `ts`, `tsx` | RULES_JS |
| `bash`, `sh`, `shell`, `zsh`, `terminal`, `console` | RULES_BASH |
| `json`, `jsonc` | RULES_JSON |
| 기타/미지정 | Generic fallback |

## 형광펜 트리거 키워드
코드 라인에 아래 키워드가 포함되면 자동 하이라이트:
- `←` (화살표)
- `highlight`
- `주목`
- `중요`
- `important`

## 빌드 결과
- 빌드 에러: 없음
- 번들 사이즈 증가: 최소 (순수 JS regex, CSS만 추가)
- 복사 버튼 기능: 정상 유지 (원본 code 텍스트 복사)
