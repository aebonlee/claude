-- ============================================
-- RPC: Claude Master 전용 조회수 증가 함수
-- ============================================

CREATE OR REPLACE FUNCTION public.increment_claude_view_count(post_id BIGINT)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
AS $$
  UPDATE public.claude_posts
  SET view_count = view_count + 1
  WHERE id = post_id;
$$;
