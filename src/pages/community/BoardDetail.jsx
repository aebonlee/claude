import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import SEOHead from '../../components/SEOHead';
import { getPostById, createComment, deleteComment, deletePost } from '../../utils/posts';

export default function BoardDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const { user, isAdmin } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      setError('');
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim() || !user) return;

    setSubmitting(true);
    try {
      const authorName = user?.user_metadata?.display_name
        || user?.user_metadata?.full_name
        || user?.email?.split('@')[0]
        || 'Anonymous';

      const newComment = await createComment({
        postId: Number(id),
        body: commentText.trim(),
        authorId: user.id,
        authorName,
      });

      setPost(prev => ({
        ...prev,
        comments: [...(prev.comments || []), newComment],
      }));
      setCommentText('');
      toast.success(isKo ? '댓글이 등록되었습니다.' : 'Comment posted.');
    } catch (err) {
      toast.error(err.message || (isKo ? '댓글 등록에 실패했습니다.' : 'Failed to post comment.'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!confirm(isKo ? '댓글을 삭제하시겠습니까?' : 'Delete this comment?')) return;
    try {
      await deleteComment(commentId);
      setPost(prev => ({
        ...prev,
        comments: prev.comments.filter(c => c.id !== commentId),
      }));
      toast.success(isKo ? '댓글이 삭제되었습니다.' : 'Comment deleted.');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDeletePost = async () => {
    if (!confirm(isKo ? '게시글을 삭제하시겠습니까?' : 'Delete this post?')) return;
    try {
      await deletePost(Number(id));
      toast.success(isKo ? '게시글이 삭제되었습니다.' : 'Post deleted.');
      navigate('/community/board');
    } catch (err) {
      toast.error(err.message);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('ko-KR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    });
  };

  const canDelete = post && user && (user.id === post.author_id || isAdmin);

  if (loading) {
    return (
      <div className="community-page">
        <div className="container">
          <p style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-light)' }}>
            {isKo ? '로딩 중...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="community-page">
        <div className="container">
          <p style={{ textAlign: 'center', padding: '60px 0', color: 'var(--danger)' }}>
            {error || (isKo ? '게시글을 찾을 수 없습니다.' : 'Post not found.')}
          </p>
          <div style={{ textAlign: 'center' }}>
            <Link to="/community/board" className="btn btn-secondary btn-sm">
              {isKo ? '목록으로' : 'Back to List'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="community-page">
      <SEOHead
        title={post.title}
        description={post.title}
        path={`/community/board/${id}`}
      />
      <div className="container">
        <div className="post-detail">
          {/* Header */}
          <div className="post-detail-header">
            <h1 className="post-detail-title">{post.title}</h1>
            <div className="post-detail-info">
              <span>{post.author_name || (isKo ? '익명' : 'Anonymous')}</span>
              <span>{formatDate(post.created_at)}</span>
              <span>
                <i className="fa-solid fa-eye" /> {post.view_count || 0}
              </span>
            </div>
          </div>

          {/* Body — 마크다운 렌더링 */}
          <div className="post-detail-body markdown-body">
            <ReactMarkdown>{post.content || ''}</ReactMarkdown>
          </div>

          {/* Actions */}
          <div className="post-detail-actions">
            <Link to="/community/board" className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-arrow-left" />
              {isKo ? '목록으로' : 'Back to List'}
            </Link>
            {canDelete && (
              <button
                className="btn btn-sm"
                style={{ background: 'var(--danger)', color: '#fff' }}
                onClick={handleDeletePost}
              >
                <i className="fa-solid fa-trash" />
                {isKo ? '삭제' : 'Delete'}
              </button>
            )}
          </div>

          {/* Comments */}
          <div className="comments-section">
            <h3 className="comments-title">
              {isKo
                ? `댓글 ${post.comments?.length || 0}개`
                : `${post.comments?.length || 0} Comments`}
            </h3>

            {(post.comments || []).map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <span className="comment-author">{comment.author_name || 'Anonymous'}</span>
                  <span className="comment-date">{formatDate(comment.created_at)}</span>
                  {user && (user.id === comment.author_id || isAdmin) && (
                    <button
                      className="comment-delete"
                      style={{
                        marginLeft: '8px', background: 'none', border: 'none',
                        color: 'var(--danger)', cursor: 'pointer', fontSize: '12px',
                      }}
                      onClick={() => handleDeleteComment(comment.id)}
                    >
                      <i className="fa-solid fa-trash" />
                    </button>
                  )}
                </div>
                <div className="comment-body">{comment.body}</div>
              </div>
            ))}

            {user ? (
              <form className="comment-form" onSubmit={handleCommentSubmit}>
                <textarea
                  placeholder={isKo ? '댓글을 입력하세요...' : 'Write a comment...'}
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-sm"
                  style={{ alignSelf: 'flex-end' }}
                  disabled={!commentText.trim() || submitting}
                >
                  {submitting
                    ? (isKo ? '등록 중...' : 'Posting...')
                    : (isKo ? '등록' : 'Post')}
                </button>
              </form>
            ) : (
              <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '16px 0' }}>
                <Link to="/login">{isKo ? '로그인' : 'Login'}</Link>
                {isKo ? ' 후 댓글을 작성할 수 있습니다.' : ' to write a comment.'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
