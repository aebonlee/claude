-- ============================================
-- comments 테이블: 게시글 댓글
-- ============================================

CREATE TABLE IF NOT EXISTS public.comments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 기존 테이블에 누락된 컬럼 추가
DO $$ BEGIN
  ALTER TABLE public.comments ADD COLUMN IF NOT EXISTS author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;
  ALTER TABLE public.comments ADD COLUMN IF NOT EXISTS author_name TEXT;
  ALTER TABLE public.comments ADD COLUMN IF NOT EXISTS post_id BIGINT REFERENCES public.posts(id) ON DELETE CASCADE;
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

-- RLS 활성화
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;

-- 기존 정책 제거 (재생성을 위해)
DROP POLICY IF EXISTS "Anyone can view comments" ON public.comments;
DROP POLICY IF EXISTS "Authenticated users can create comments" ON public.comments;
DROP POLICY IF EXISTS "Authors or admins can delete comments" ON public.comments;

-- 정책: 누구나 댓글 조회 가능
CREATE POLICY "Anyone can view comments"
  ON public.comments FOR SELECT
  USING (true);

-- 정책: 로그인 사용자만 댓글 작성
CREATE POLICY "Authenticated users can create comments"
  ON public.comments FOR INSERT
  WITH CHECK (auth.uid() = author_id);

-- 정책: 작성자 본인 또는 관리자만 삭제
CREATE POLICY "Authors or admins can delete comments"
  ON public.comments FOR DELETE
  USING (
    auth.uid() = author_id
    OR EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_comments_post_id ON public.comments(post_id);
CREATE INDEX IF NOT EXISTS idx_comments_created_at ON public.comments(created_at);
