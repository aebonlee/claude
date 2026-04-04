# 커뮤니티 주제별 게시판 분리

## 개요
단일 커뮤니티 게시판을 **주제별 5개 게시판**으로 분리하고, 각 게시판 내에 **목적별 서브탭**(Q&A, 자료공유, 자유)을 두는 2단계 구조로 전환.

## 게시판 구성

| Board ID | 이름(KO) | 이름(EN) | 아이콘 | 색상 |
|----------|----------|----------|--------|------|
| `claude-code` | Claude Code | Claude Code | fa-terminal | #10B981 |
| `claude-prompt` | 프롬프트 엔지니어링 | Prompt Engineering | fa-wand-magic-sparkles | #8B5CF6 |
| `claude-api` | API 활용 | API Usage | fa-code | #3B82F6 |
| `claude-agent-sdk` | Agent SDK | Agent SDK | fa-robot | #F59E0B |
| `claude-general` | 자유 게시판 | General | fa-comments | #6B7280 |

- 모든 Board ID에 `claude-` 접두어를 붙여 다른 사이트와 충돌 방지
- 각 게시판 서브탭: **전체 / Q&A / 자료공유 / 자유**
- `claude-general`만 추가로 **공지** 탭 포함

## URL 구조

```
/community                    → 허브 (게시판 카드 목록)
/community/:board             → 특정 게시판 글 목록
/community/:board/write       → 글쓰기
/community/:board/:id         → 글 상세
```

- 레거시 URL `/community/board` → `/community/claude-general` 자동 리다이렉트

## DB 설계 (Supabase)

다른 AI 사이트(openclaw 등)와 Supabase 인스턴스를 공유하므로, **기존 `posts`/`comments` 테이블을 수정하지 않고** 완전히 새로운 테이블을 생성.

### claude_posts 테이블
```sql
CREATE TABLE public.claude_posts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  board TEXT NOT NULL DEFAULT 'claude-general',
  category TEXT NOT NULL DEFAULT 'free',
  title TEXT NOT NULL,
  content TEXT,
  view_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### claude_comments 테이블
```sql
CREATE TABLE public.claude_comments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES public.claude_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

### RPC 함수
```sql
CREATE OR REPLACE FUNCTION public.increment_claude_view_count(post_id BIGINT)
RETURNS void LANGUAGE sql SECURITY DEFINER AS $$
  UPDATE public.claude_posts SET view_count = view_count + 1 WHERE id = post_id;
$$;
```

- RLS 정책: 조회(누구나), 작성(로그인), 수정(본인), 삭제(본인 또는 관리자)
- 인덱스: board, category, created_at, post_id

## 변경 파일 목록 (19개)

### 신규 파일 (3개)
| 파일 | 설명 |
|------|------|
| `src/config/boards.js` | 게시판 정의 배열 + 카테고리 헬퍼 |
| `src/pages/community/CommunityHub.jsx` | 허브 페이지 (게시판 카드 그리드) |
| `supabase/claude_master_all_in_one.sql` | 통합 SQL (수동 설정용) |

### 수정 파일 (12개)
| 파일 | 변경 내용 |
|------|-----------|
| `src/utils/posts.js` | `claude_posts`/`claude_comments` 테이블 사용, `board` 파라미터 추가 |
| `src/layouts/PublicLayout.jsx` | 커뮤니티 라우트 4개로 분리 |
| `src/pages/community/Board.jsx` | `useParams`로 `:board` 동적 필터링 |
| `src/pages/community/BoardWrite.jsx` | `board` 파라미터 전달 |
| `src/pages/community/BoardDetail.jsx` | `:board` 기반 뒤로가기 + 정규 URL 리다이렉트 |
| `src/components/layout/Navbar.jsx` | 커뮤니티 드롭다운 메뉴 (데스크톱 hover + 모바일 접힘) |
| `src/components/layout/Footer.jsx` | 링크 `/community/board` → `/community` |
| `src/styles/community.css` | 허브 그리드, 드롭다운, 모바일 서브메뉴 CSS 추가 |
| `src/utils/translations.js` | hub, selectBoard 등 번역 키 추가 |
| `src/pages/admin/AdminDashboard.jsx` | 게시판(board) 컬럼 추가 |

### 마이그레이션 SQL (4개)
| 파일 | 변경 내용 |
|------|-----------|
| `20260404000003_create_posts.sql` | `posts` → `claude_posts` 테이블 |
| `20260404000004_create_comments.sql` | `comments` → `claude_comments` 테이블 |
| `20260404000005_seed_dummy_posts.sql` | 5개 게시판 분산 시드 데이터 |
| `20260404000006_increment_view_count_rpc.sql` | `increment_claude_view_count` RPC |

## 핵심 구현 포인트

### 1. 게시판 설정 중앙 관리 (`boards.js`)
- `BOARDS` 배열에서 모든 게시판 정보 관리
- `getBoardById()`, `getCategoriesForBoard()` 헬퍼 제공
- 게시판 추가 시 이 파일만 수정하면 됨

### 2. Navbar 드롭다운
- 데스크톱: CSS hover 기반 (`opacity` + `visibility` 트랜지션)
- 모바일: React state (`mobileCommExpanded`)로 접힘/펼침

### 3. 정규 URL 리다이렉트
- `BoardDetail.jsx`에서 `post.board !== boardId`이면 올바른 URL로 자동 리다이렉트
- `Board.jsx`에서 `boardId === 'board'`이면 `/community/claude-general`로 리다이렉트

### 4. 데이터 격리
- 테이블 자체를 `claude_posts`/`claude_comments`로 분리
- 다른 사이트 게시판과 완전히 독립
