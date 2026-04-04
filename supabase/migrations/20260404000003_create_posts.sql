-- ============================================
-- posts 테이블: 커뮤니티 게시판
-- ============================================

CREATE TABLE IF NOT EXISTS public.posts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  category TEXT NOT NULL DEFAULT 'free',  -- notice, resource, question, free
  title TEXT NOT NULL,
  author_name TEXT,
  content TEXT,
  view_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 기존 테이블에 누락된 컬럼 추가
DO $$ BEGIN
  ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;
  ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS author_name TEXT;
  ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'free';
  ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS view_count INT DEFAULT 0;
  ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT now();
EXCEPTION WHEN OTHERS THEN NULL;
END $$;

-- RLS 활성화
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- 기존 정책 제거 (재생성을 위해)
DROP POLICY IF EXISTS "Anyone can view posts" ON public.posts;
DROP POLICY IF EXISTS "Authenticated users can create posts" ON public.posts;
DROP POLICY IF EXISTS "Authors can update own posts" ON public.posts;
DROP POLICY IF EXISTS "Authors or admins can delete posts" ON public.posts;

-- 정책: 누구나 게시글 조회 가능
CREATE POLICY "Anyone can view posts"
  ON public.posts FOR SELECT
  USING (true);

-- 정책: 로그인 사용자만 글 작성
CREATE POLICY "Authenticated users can create posts"
  ON public.posts FOR INSERT
  WITH CHECK (auth.uid() = author_id);

-- 정책: 작성자 본인만 수정
CREATE POLICY "Authors can update own posts"
  ON public.posts FOR UPDATE
  USING (auth.uid() = author_id);

-- 정책: 작성자 본인 또는 관리자만 삭제
CREATE POLICY "Authors or admins can delete posts"
  ON public.posts FOR DELETE
  USING (
    auth.uid() = author_id
    OR EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );

-- updated_at 자동 갱신
DROP TRIGGER IF EXISTS on_posts_updated ON public.posts;
CREATE TRIGGER on_posts_updated
  BEFORE UPDATE ON public.posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_posts_category ON public.posts(category);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON public.posts(created_at DESC);
