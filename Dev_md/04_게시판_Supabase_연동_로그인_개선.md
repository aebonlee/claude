# 게시판 Supabase DB 연동 + 로그인 재설정

## 작업 일자
2026-04-04

## 작업 개요
커뮤니티 게시판(Board, BoardWrite, BoardDetail)을 하드코딩 더미 데이터에서 Supabase DB 실시간 연동으로 전환하고, 로그인/회원가입 UX를 Toast 알림 기반으로 개선했습니다.

---

## 변경 파일 목록

| # | 파일 | 작업 유형 |
|---|------|-----------|
| 1 | `supabase/migrations/20260404000001_create_profiles.sql` | 수정 - 멱등성(idempotent) 보강 |
| 2 | `supabase/migrations/20260404000002_auto_create_profile_on_signup.sql` | 수정 - 트리거 DROP IF EXISTS 추가 |
| 3 | `supabase/migrations/20260404000003_create_posts.sql` | 수정 - author_name 컬럼 추가, 멱등성 보강 |
| 4 | `supabase/migrations/20260404000004_create_comments.sql` | **신규** - 댓글 테이블 + RLS |
| 5 | `supabase/migrations/20260404000005_seed_dummy_posts.sql` | **신규** - 기존 더미 12개 시드 |
| 6 | `supabase/migrations/20260404000006_increment_view_count_rpc.sql` | **신규** - 조회수 증가 RPC 함수 |
| 7 | `src/utils/posts.js` | **신규** - Supabase CRUD 유틸리티 |
| 8 | `src/pages/community/Board.jsx` | 수정 - 더미 → DB 연동 |
| 9 | `src/pages/community/BoardWrite.jsx` | 수정 - 실제 DB 저장 |
| 10 | `src/pages/community/BoardDetail.jsx` | 수정 - DB 연동 + 댓글 + 마크다운 |
| 11 | `src/pages/admin/AdminDashboard.jsx` | 수정 - 실제 통계/목록 |
| 12 | `src/pages/Login.jsx` | 수정 - Toast 연동 + OAuth 에러 체크 |
| 13 | `src/pages/Register.jsx` | 수정 - Toast 연동 |
| 14 | `src/contexts/AuthContext.jsx` | 수정 - profiles role 조회 병행 |

---

## 상세 변경 내역

### 1. 데이터베이스 마이그레이션

#### comments 테이블 (신규)
```sql
CREATE TABLE public.comments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

**RLS 정책:**
- 전체 조회 허용
- 로그인 사용자 작성 (auth.uid() = author_id)
- 본인 또는 관리자 삭제

#### posts 테이블 변경
- `author_name TEXT` 컬럼 추가 (비정규화 - 목록 조회 성능 최적화)

#### increment_view_count RPC
```sql
CREATE OR REPLACE FUNCTION public.increment_view_count(post_id BIGINT)
RETURNS void LANGUAGE sql SECURITY DEFINER
```

#### 시드 데이터
- 기존 하드코딩 더미 게시글 12개를 DB 시드로 이관
- 첫 번째 게시글에 댓글 3개 시드
- 이미 데이터가 있으면 건너뛰는 안전 로직 포함

---

### 2. src/utils/posts.js (CRUD 유틸리티)

| 함수 | 설명 |
|------|------|
| `getPosts({ category, search, limit })` | 목록 조회 + 댓글 count |
| `getPostById(id)` | 단건 조회 + 댓글 join + 조회수 증가 |
| `createPost({ category, title, content, authorId, authorName })` | 게시글 작성 |
| `deletePost(id)` | 게시글 삭제 |
| `createComment({ postId, body, authorId, authorName })` | 댓글 작성 |
| `deleteComment(id)` | 댓글 삭제 |
| `getPostStats()` | 관리자 통계 (게시글 수, 댓글 수, 총 조회수) |

---

### 3. Board.jsx 리팩토링
- `dummyPosts` 배열 제거
- `useEffect` + `useCallback`으로 `getPosts()` 호출
- `useState`: posts, loading, error 상태 관리
- 카테고리/검색 변경 시 자동 재조회
- 검색 입력 400ms debounce 적용
- 작성자: `author_name`, 날짜: `formatDate()` 포맷팅
- 댓글 수: DB `comment_count` 표시

### 4. BoardWrite.jsx 리팩토링
- `useAuth()`로 user 정보 가져오기
- `useToast()`로 Toast 알림 연동
- `createPost()` 호출로 실제 DB 저장
- 성공: `toast.success('게시글이 등록되었습니다')` + navigate
- 실패: `toast.error(에러메시지)`
- loading 상태로 중복 제출 방지

### 5. BoardDetail.jsx 리팩토링
- 더미 데이터 제거 → `getPostById(id)` 호출
- 조회수: 페이지 진입 시 자동 +1 (RPC)
- **마크다운 렌더링**: `ReactMarkdown` 컴포넌트 사용
- 댓글 목록: DB에서 로드
- 댓글 작성: `createComment()` → 상태 갱신 (목록에 바로 반영)
- 댓글 삭제: 본인/관리자만 삭제 버튼 표시
- 게시글 삭제: 본인/관리자만 삭제 버튼 표시
- 비로그인 사용자: "로그인 후 댓글 작성 가능" 안내

### 6. AdminDashboard.jsx
- 하드코딩 통계 제거 → `getPostStats()` 실제 데이터
- 최근 게시글 → `getPosts({ limit: 10 })` 실제 데이터
- loading 상태 표시

### 7. Login.jsx 개선
- `useToast()` 연동
- 이메일 로그인 성공: `toast.success('로그인 성공!')`
- 이메일 로그인 실패: `toast.error(메시지)` + inline 에러 유지
- OAuth 에러 핸들링: URL `error_description` 파라미터 체크
- `useSearchParams` 추가

### 8. Register.jsx 개선
- `useToast()` 연동
- 가입 성공: `toast.success('가입 완료! 이메일을 확인해주세요')`
- 가입 실패: `toast.error(메시지)`
- 비밀번호 불일치/짧음: toast.error 동시 표시

### 9. AuthContext.jsx 개선
- 기존 `config/admin.js` 이메일 목록 체크 유지
- profiles 테이블 `role='admin'` 조회 병행
- 이메일 기반 또는 DB role 기반 어느 한쪽이라도 admin이면 관리자 인정

---

## 기술 스택 추가
- `react-markdown`: 게시글 본문 마크다운 렌더링

## 마이그레이션 적용
```bash
npx supabase db push
```
- 6개 마이그레이션 모두 성공 적용
- 멱등성 보장 (기존 테이블/컬럼이 있어도 에러 없음)

## 빌드 결과
- `npm run build` 성공 (412 modules, 4.50s)
- 에러/경고 없음
