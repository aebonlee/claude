import { supabase } from './supabase';

/**
 * Claude Master 전용 게시글/댓글 유틸리티
 * 테이블: claude_posts, claude_comments
 */

/**
 * 게시글 목록 조회 (댓글 수 포함)
 */
export async function getPosts({ board, category, search, limit } = {}) {
  let query = supabase
    .from('claude_posts')
    .select('*, comment_count:claude_comments(count)')
    .order('created_at', { ascending: false });

  if (board) {
    query = query.eq('board', board);
  }

  if (category && category !== 'all') {
    query = query.eq('category', category);
  }

  if (search && search.trim()) {
    const q = search.trim();
    query = query.or(`title.ilike.%${q}%,author_name.ilike.%${q}%`);
  }

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) throw error;

  return data.map(post => ({
    ...post,
    comment_count: post.comment_count?.[0]?.count ?? 0,
  }));
}

/**
 * 게시글 단건 조회 + 댓글 + 조회수 증가
 */
export async function getPostById(id) {
  await supabase.rpc('increment_claude_view_count', { post_id: Number(id) }).catch(() => {});

  const { data: post, error } = await supabase
    .from('claude_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;

  const { data: comments } = await supabase
    .from('claude_comments')
    .select('*')
    .eq('post_id', id)
    .order('created_at', { ascending: true });

  return { ...post, comments: comments || [] };
}

/**
 * 게시글 작성
 */
export async function createPost({ board, category, title, content, authorId, authorName }) {
  const { data, error } = await supabase
    .from('claude_posts')
    .insert({
      author_id: authorId,
      author_name: authorName,
      board: board || 'claude-general',
      category,
      title,
      content,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * 게시글 삭제
 */
export async function deletePost(id) {
  const { error } = await supabase
    .from('claude_posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

/**
 * 댓글 작성
 */
export async function createComment({ postId, body, authorId, authorName }) {
  const { data, error } = await supabase
    .from('claude_comments')
    .insert({
      post_id: postId,
      author_id: authorId,
      author_name: authorName,
      body,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * 댓글 삭제
 */
export async function deleteComment(id) {
  const { error } = await supabase
    .from('claude_comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

/**
 * 관리자용 통계
 */
export async function getPostStats() {
  const [postsRes, commentsRes, viewsRes] = await Promise.all([
    supabase.from('claude_posts').select('id', { count: 'exact', head: true }),
    supabase.from('claude_comments').select('id', { count: 'exact', head: true }),
    supabase.from('claude_posts').select('view_count'),
  ]);

  const totalViews = (viewsRes.data || []).reduce((sum, p) => sum + (p.view_count || 0), 0);

  return {
    posts: postsRes.count ?? 0,
    comments: commentsRes.count ?? 0,
    views: totalViews,
  };
}
