-- ============================================
-- claude_comments 테이블: Claude Master 전용 댓글
-- ============================================

CREATE TABLE IF NOT EXISTS public.claude_comments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES public.claude_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- RLS 활성화
ALTER TABLE public.claude_comments ENABLE ROW LEVEL SECURITY;

-- 기존 정책 제거 (재생성을 위해)
DROP POLICY IF EXISTS "Anyone can view claude_comments" ON public.claude_comments;
DROP POLICY IF EXISTS "Authenticated users can create claude_comments" ON public.claude_comments;
DROP POLICY IF EXISTS "Authors or admins can delete claude_comments" ON public.claude_comments;

-- 정책: 누구나 댓글 조회 가능
CREATE POLICY "Anyone can view claude_comments"
  ON public.claude_comments FOR SELECT
  USING (true);

-- 정책: 로그인 사용자만 댓글 작성
CREATE POLICY "Authenticated users can create claude_comments"
  ON public.claude_comments FOR INSERT
  WITH CHECK (auth.uid() = author_id);

-- 정책: 작성자 본인 또는 관리자만 삭제
CREATE POLICY "Authors or admins can delete claude_comments"
  ON public.claude_comments FOR DELETE
  USING (
    auth.uid() = author_id
    OR EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_claude_comments_post_id ON public.claude_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_claude_comments_created_at ON public.claude_comments(created_at);
