-- ============================================================
-- Claude Master 전용 테이블 통합 SQL
-- Supabase 대시보드 > SQL Editor에 통째로 붙여넣기 후 실행
-- ============================================================

-- ============================================
-- 1. claude_posts 테이블
-- ============================================

CREATE TABLE IF NOT EXISTS public.claude_posts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  board TEXT NOT NULL DEFAULT 'claude-general',
  category TEXT NOT NULL DEFAULT 'free',
  title TEXT NOT NULL,
  author_name TEXT,
  content TEXT,
  view_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.claude_posts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view claude_posts" ON public.claude_posts;
DROP POLICY IF EXISTS "Authenticated users can create claude_posts" ON public.claude_posts;
DROP POLICY IF EXISTS "Authors can update own claude_posts" ON public.claude_posts;
DROP POLICY IF EXISTS "Authors or admins can delete claude_posts" ON public.claude_posts;

CREATE POLICY "Anyone can view claude_posts"
  ON public.claude_posts FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create claude_posts"
  ON public.claude_posts FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors can update own claude_posts"
  ON public.claude_posts FOR UPDATE
  USING (auth.uid() = author_id);

CREATE POLICY "Authors or admins can delete claude_posts"
  ON public.claude_posts FOR DELETE
  USING (
    auth.uid() = author_id
    OR EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );

DROP TRIGGER IF EXISTS on_claude_posts_updated ON public.claude_posts;
CREATE TRIGGER on_claude_posts_updated
  BEFORE UPDATE ON public.claude_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

CREATE INDEX IF NOT EXISTS idx_claude_posts_board ON public.claude_posts(board);
CREATE INDEX IF NOT EXISTS idx_claude_posts_category ON public.claude_posts(category);
CREATE INDEX IF NOT EXISTS idx_claude_posts_board_category ON public.claude_posts(board, category);
CREATE INDEX IF NOT EXISTS idx_claude_posts_created_at ON public.claude_posts(created_at DESC);


-- ============================================
-- 2. claude_comments 테이블
-- ============================================

CREATE TABLE IF NOT EXISTS public.claude_comments (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  post_id BIGINT NOT NULL REFERENCES public.claude_posts(id) ON DELETE CASCADE,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.claude_comments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can view claude_comments" ON public.claude_comments;
DROP POLICY IF EXISTS "Authenticated users can create claude_comments" ON public.claude_comments;
DROP POLICY IF EXISTS "Authors or admins can delete claude_comments" ON public.claude_comments;

CREATE POLICY "Anyone can view claude_comments"
  ON public.claude_comments FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create claude_comments"
  ON public.claude_comments FOR INSERT
  WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Authors or admins can delete claude_comments"
  ON public.claude_comments FOR DELETE
  USING (
    auth.uid() = author_id
    OR EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );

CREATE INDEX IF NOT EXISTS idx_claude_comments_post_id ON public.claude_comments(post_id);
CREATE INDEX IF NOT EXISTS idx_claude_comments_created_at ON public.claude_comments(created_at);


-- ============================================
-- 3. 조회수 증가 RPC 함수
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


-- ============================================
-- 4. 시드 데이터 (더미 게시글 12개 + 댓글 3개)
--    이미 데이터가 있으면 건너뜀
-- ============================================

DO $$
BEGIN
  IF (SELECT count(*) FROM public.claude_posts) > 0 THEN
    RAISE NOTICE 'claude_posts already exist, skipping seed';
    RETURN;
  END IF;

  INSERT INTO public.claude_posts (author_id, author_name, board, category, title, content, view_count, created_at) VALUES
    (NULL, 'Admin', 'claude-general', 'notice', 'Claude Master 사이트 오픈!',
     E'안녕하세요, Claude Master 사이트가 정식 오픈되었습니다!\n\n이 사이트는 Claude를 체계적으로 학습할 수 있는 종합 플랫폼입니다.\n\n## 주요 기능\n\n- **Claude Code 가이드**: 설치부터 고급 활용까지\n- **프롬프트 엔지니어링**: 효과적인 프롬프트 작성법\n- **API 활용 가이드**: Anthropic API 개발 가이드\n- **Agent SDK**: 자율 에이전트 구축 가이드\n- **프롬프트 갤러리**: 바로 사용 가능한 템플릿\n- **커뮤니티**: 사용자 간 정보 공유\n\n많은 이용 부탁드립니다!',
     1520, '2025-05-15T09:00:00Z'),

    (NULL, 'Admin', 'claude-general', 'notice', '커뮤니티 이용 규칙 안내',
     E'커뮤니티를 이용하실 때 다음 규칙을 지켜주세요.\n\n1. 상호 존중하는 대화\n2. 관련 없는 광고 금지\n3. 개인정보 보호\n4. 저작권 준수\n\n규칙 위반 시 게시글이 삭제될 수 있습니다.',
     4500, '2025-05-01T09:00:00Z'),

    (NULL, 'newbie123', 'claude-code', 'question', 'Claude Code에서 MCP 서버 설정 방법 질문',
     E'Claude Code에서 MCP 서버를 설정하려고 하는데, 정확한 방법을 모르겠습니다.\n\n.claude/settings.json 파일에 어떻게 설정해야 하나요?\n\n도움 부탁드립니다!',
     456, '2025-05-12T14:00:00Z'),

    (NULL, 'builder99', 'claude-code', 'free', 'Claude로 사이드 프로젝트 완성 후기',
     E'Claude를 활용해서 사이드 프로젝트를 완성한 후기를 공유합니다.\n\n## 프로젝트 개요\nReact + Supabase로 만든 할 일 관리 앱입니다.\n\nClaude Code를 사용해서 전체 개발 과정을 진행했는데, 정말 생산성이 높았습니다.\n\n특히 디버깅과 리팩토링에서 큰 도움을 받았습니다.',
     1890, '2025-05-09T11:00:00Z'),

    (NULL, 'promptmaster', 'claude-prompt', 'resource', 'Prompt Engineering 치트시트 공유',
     E'프롬프트 엔지니어링에 유용한 치트시트를 공유합니다.\n\n## 핵심 원칙\n1. **명확한 지시**: 구체적으로 요청하기\n2. **예시 제공**: Few-shot 프롬프팅\n3. **역할 부여**: 전문가 페르소나 설정\n4. **단계적 사고**: Chain-of-thought\n5. **출력 형식 지정**: JSON, 마크다운 등',
     3210, '2025-05-11T09:30:00Z'),

    (NULL, 'curious_dev', 'claude-prompt', 'question', 'Extended Thinking vs 일반 모드 차이점?',
     E'Extended Thinking 모드와 일반 모드의 차이가 정확히 무엇인가요?\n\n어떤 상황에서 Extended Thinking을 사용하는 것이 좋을까요?',
     678, '2025-05-10T16:00:00Z'),

    (NULL, 'devkim', 'claude-api', 'resource', 'Claude API 시작 가이드 (Python)',
     E'Python으로 Claude API를 시작하는 방법을 정리했습니다.\n\n## 설치\n```bash\npip install anthropic\n```\n\n## 기본 사용법\n```python\nimport anthropic\nclient = anthropic.Anthropic()\nmessage = client.messages.create(\n    model="claude-sonnet-4-20250514",\n    max_tokens=1024,\n    messages=[{"role": "user", "content": "Hello!"}]\n)\nprint(message.content)\n```',
     2340, '2025-05-13T11:00:00Z'),

    (NULL, 'json_lover', 'claude-api', 'question', 'Tool Use에서 JSON 스키마 작성 팁',
     E'Claude의 Tool Use 기능에서 JSON 스키마를 효과적으로 작성하는 팁이 있을까요?\n\n특히 복잡한 중첩 객체를 다룰 때 어려움을 겪고 있습니다.',
     543, '2025-05-07T10:00:00Z'),

    (NULL, 'agent_dev', 'claude-agent-sdk', 'resource', 'Agent SDK 멀티 에이전트 예제 코드',
     E'Agent SDK를 사용한 멀티 에이전트 시스템 예제입니다.\n\n## 구조\n- Orchestrator Agent: 작업 분배\n- Research Agent: 정보 수집\n- Writer Agent: 콘텐츠 생성\n\n코드는 GitHub에서 확인하세요.',
     1560, '2025-05-08T13:00:00Z'),

    (NULL, 'Admin', 'claude-general', 'notice', '프롬프트 갤러리가 업데이트되었습니다',
     E'프롬프트 갤러리에 새로운 템플릿이 추가되었습니다.\n\n다양한 분야의 프롬프트를 확인해보세요.',
     890, '2025-05-14T10:00:00Z'),

    (NULL, 'meetup_fan', 'claude-general', 'free', 'AI 개발자 모임 참가 후기',
     E'지난 주말 AI 개발자 모임에 다녀왔습니다.\n\nClaude를 활용한 개발 경험을 공유하는 시간이었는데, 다양한 활용 사례를 들을 수 있었습니다.\n\n다음에도 참가할 예정입니다!',
     920, '2025-05-06T15:00:00Z'),

    (NULL, 'ai_explorer', 'claude-general', 'free', 'Claude Opus 4 써본 소감',
     E'Claude Opus 4를 사용해본 소감을 공유합니다.\n\n## 장점\n- 코드 생성 품질이 매우 높음\n- 복잡한 맥락 이해력 향상\n- 멀티턴 대화에서 일관성 유지\n\n## 인상적이었던 점\nExtended Thinking 모드에서 정말 깊이 있는 분석을 해줍니다.',
     2780, '2025-05-05T12:00:00Z');

  INSERT INTO public.claude_comments (post_id, author_id, author_name, body, created_at)
  SELECT p.id, NULL, v.author_name, v.body, v.created_at::timestamptz
  FROM (VALUES
    ('devkim', '드디어 오픈했군요! 기대됩니다.', '2025-05-15T10:00:00Z'),
    ('promptmaster', '프롬프트 갤러리가 정말 유용하네요.', '2025-05-15T11:00:00Z'),
    ('newbie123', '초보자도 쉽게 따라할 수 있는 가이드가 있어서 좋습니다!', '2025-05-16T09:00:00Z')
  ) AS v(author_name, body, created_at)
  CROSS JOIN (
    SELECT id FROM public.claude_posts WHERE title = 'Claude Master 사이트 오픈!' LIMIT 1
  ) AS p;

END $$;
