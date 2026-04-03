# 라우팅 구조

## 전체 라우트 (22개)

| 경로 | 컴포넌트 | 가드 | 설명 |
|------|----------|------|------|
| `/` | Home | - | 랜딩 페이지 |
| `/about` | AboutPage | - | 소개 페이지 |
| `/login` | Login | - | 로그인 |
| `/register` | Register | - | 회원가입 |
| `/forgot-password` | ForgotPassword | - | 비밀번호 찾기 |
| `/claude-code` | ClaudeCodeGuide | - | Claude Code 가이드 |
| `/claude-work` | ClaudeWorkGuide | - | Claude Work 가이드 |
| `/prompt-engineering` | PromptEngineering | - | 프롬프트 엔지니어링 |
| `/api-usage` | APIUsage | - | API 활용 가이드 |
| `/agent-sdk` | AgentSDK | - | Agent SDK 가이드 |
| `/model-comparison` | ModelComparison | - | 모델 비교 |
| `/glossary` | Glossary | - | AI 용어 사전 |
| `/roadmap` | Roadmap | - | 학습 로드맵 |
| `/resources` | Resources | - | 리소스 모음 |
| `/prompt-practice` | PromptPractice | - | 프롬프트 연습 |
| `/prompt-gallery` | PromptGallery | - | 프롬프트 갤러리 |
| `/ai-news` | AINews | - | AI 뉴스 |
| `/community/board` | Board | - | 게시판 목록 |
| `/community/board/:id` | BoardDetail | - | 게시글 상세 |
| `/community/board/write` | BoardWrite | AuthGuard | 글쓰기 (로그인 필요) |
| `/admin/*` | AdminDashboard | AdminGuard | 관리자 (관리자 권한 필요) |
| `*` | NotFound | - | 404 페이지 |

## 라우팅 특징
- React Router 7 사용
- 모든 페이지 lazy loading (React.lazy + Suspense)
- SPA 라우팅을 위한 404.html 리다이렉트 (GitHub Pages)
- AuthGuard: 미인증 시 /login으로 리다이렉트
- AdminGuard: 관리자가 아닌 경우 /로 리다이렉트

## 네비게이션 구조

### Guides 드롭다운
- Claude Code (/claude-code)
- Claude Work (/claude-work)
- Prompt Engineering (/prompt-engineering)
- API Usage (/api-usage)
- Agent SDK (/agent-sdk)

### Learn 드롭다운
- Model Comparison (/model-comparison)
- Glossary (/glossary)
- Roadmap (/roadmap)
- Resources (/resources)

### Tools 드롭다운
- Prompt Practice (/prompt-practice)
- Prompt Gallery (/prompt-gallery)

### 직접 링크
- About (/about)
- AI News (/ai-news)
- Community (/community/board)
