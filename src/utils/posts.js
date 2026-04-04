import { supabase } from './supabase';

/**
 * 게시글 목록 조회 (댓글 수 포함)
 */
export async function getPosts({ category, search, limit } = {}) {
  let query = supabase
    .from('posts')
    .select('*, comment_count:comments(count)')
    .order('created_at', { ascending: false });

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

  // comment_count 배열에서 숫자 추출
  return data.map(post => ({
    ...post,
    comment_count: post.comment_count?.[0]?.count ?? 0,
  }));
}

/**
 * 게시글 단건 조회 + 댓글 + 조회수 증가
 */
export async function getPostById(id) {
  // 조회수 증가 (RPC 없이 직접 update — RLS가 SELECT만 허용하므로 rpc 사용)
  await supabase.rpc('increment_view_count', { post_id: Number(id) }).catch(() => {
    // rpc 없으면 무시 — 아래에서 fallback
  });

  const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;

  const { data: comments } = await supabase
    .from('comments')
    .select('*')
    .eq('post_id', id)
    .order('created_at', { ascending: true });

  return { ...post, comments: comments || [] };
}

/**
 * 게시글 작성
 */
export async function createPost({ category, title, content, authorId, authorName }) {
  const { data, error } = await supabase
    .from('posts')
    .insert({
      author_id: authorId,
      author_name: authorName,
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
    .from('posts')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

/**
 * 댓글 작성
 */
export async function createComment({ postId, body, authorId, authorName }) {
  const { data, error } = await supabase
    .from('comments')
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
    .from('comments')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

/**
 * 관리자용 통계
 */
export async function getPostStats() {
  const [postsRes, commentsRes, viewsRes] = await Promise.all([
    supabase.from('posts').select('id', { count: 'exact', head: true }),
    supabase.from('comments').select('id', { count: 'exact', head: true }),
    supabase.from('posts').select('view_count'),
  ]);

  const totalViews = (viewsRes.data || []).reduce((sum, p) => sum + (p.view_count || 0), 0);

  return {
    posts: postsRes.count ?? 0,
    comments: commentsRes.count ?? 0,
    views: totalViews,
  };
}
