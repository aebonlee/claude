-- ============================================
-- claude_posts 테이블: Claude Master 전용 게시판
-- ============================================

CREATE TABLE IF NOT EXISTS public.claude_posts (
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

-- RLS 활성화
ALTER TABLE public.claude_posts ENABLE ROW LEVEL SECURITY;

-- 기존 정책 제거 (재생성을 위해)
DROP POLICY IF EXISTS "Anyone can view claude_posts" ON public.claude_posts;
DROP POLICY IF EXISTS "Authenticated users can create claude_posts" ON public.claude_posts;
DROP POLICY IF EXISTS "Authors can update own claude_posts" ON public.claude_posts;
DROP POLICY IF EXISTS "Authors or admins can delete claude_posts" ON public.claude_posts;

-- 정책: 누구나 게시글 조회 가능
CREATE POLICY "Anyone can view claude_posts"
  ON public.claude_posts FOR SELECT
  USING (true);

-- 정책: 로그인 사용자만 글 작성
CREATE POLICY "Authenticated users can create claude_posts"
  ON public.claude_posts FOR INSERT
  WITH CHECK (auth.uid() = author_id);

-- 정책: 작성자 본인만 수정
CREATE POLICY "Authors can update own claude_posts"
  ON public.claude_posts FOR UPDATE
  USING (auth.uid() = author_id);

-- 정책: 작성자 본인 또는 관리자만 삭제
CREATE POLICY "Authors or admins can delete claude_posts"
  ON public.claude_posts FOR DELETE
  USING (
    auth.uid() = author_id
    OR EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );

-- updated_at 자동 갱신
DROP TRIGGER IF EXISTS on_claude_posts_updated ON public.claude_posts;
CREATE TRIGGER on_claude_posts_updated
  BEFORE UPDATE ON public.claude_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_claude_posts_board ON public.claude_posts(board);
CREATE INDEX IF NOT EXISTS idx_claude_posts_category ON public.claude_posts(category);
CREATE INDEX IF NOT EXISTS idx_claude_posts_created_at ON public.claude_posts(created_at DESC);
