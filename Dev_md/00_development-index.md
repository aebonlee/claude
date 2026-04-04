# Claude Master 개발 문서 인덱스

## 프로젝트 정보
- **사이트**: Claude Master (claude.dreamitbiz.com)
- **기술 스택**: React 19 + Vite + Supabase + React Router v7
- **저장소**: GitHub (dreamitbiz 조직)

## 개발 문서 목록

| # | 파일 | 내용 | 날짜 |
|---|------|------|------|
| 01 | [community-board-separation.md](./01_community-board-separation.md) | 커뮤니티 주제별 게시판 5개 분리 (2단계 구조) | 2026-04-04 |
| 02 | [hero-highlight-effect.md](./02_hero-highlight-effect.md) | 히어로 섹션 형광펜 효과 개선 | 2026-04-04 |
| 03 | [site-evaluation-report.md](./03_site-evaluation-report.md) | 사이트 종합 평가 보고서 (83/100, B+) | 2026-04-04 |

## DB 구조
- `profiles` — 사용자 프로필 (기존)
- `claude_posts` — Claude Master 전용 게시글
- `claude_comments` — Claude Master 전용 댓글
- `increment_claude_view_count()` — 조회수 증가 RPC

## 주요 라우트
```
/                         → 홈
/about                    → 소개
/claude-code              → Claude Code 가이드
/claude-cowork            → Claude Co-work 가이드
/prompt-engineering       → 프롬프트 엔지니어링
/api-usage                → API 활용
/agent-sdk                → Agent SDK
/ai-news                  → AI 뉴스
/community                → 커뮤니티 허브
/community/:board         → 게시판 목록
/community/:board/write   → 글쓰기
/community/:board/:id     → 글 상세
/login                    → 로그인
/register                 → 회원가입
/admin                    → 관리자 대시보드
```
