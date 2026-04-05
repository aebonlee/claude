import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import SEOHead from '../../components/SEOHead';
import { createPost } from '../../utils/posts';
import { getBoardById, getCategoriesForBoard } from '../../config/boards';

export default function BoardWrite() {
  const { board: boardId } = useParams();
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const navigate = useNavigate();
  const { user } = useAuth();
  const toast = useToast();

  const boardInfo = getBoardById(boardId);
  const categories = getCategoriesForBoard(boardId).filter((c) => c.key !== 'all' && c.key !== 'notice');

  const [category, setCategory] = useState('free');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!boardInfo) navigate('/community', { replace: true });
  }, [boardInfo, navigate]);

  if (!boardInfo) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    setLoading(true);
    try {
      const authorName = user?.user_metadata?.display_name
        || user?.user_metadata?.full_name
        || user?.email?.split('@')[0]
        || 'Anonymous';

      await createPost({
        board: boardId,
        category,
        title: title.trim(),
        content: content.trim(),
        authorId: user.id,
        authorName,
      });

      toast.success(isKo ? '게시글이 등록되었습니다.' : 'Post has been created.');
      navigate(`/community/${boardId}`);
    } catch (err: any) {
      toast.error(err.message || (isKo ? '게시글 등록에 실패했습니다.' : 'Failed to create post.'));
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(`/community/${boardId}`);
  };

  return (
    <div className="community-page">
      <SEOHead
        title={isKo ? '글쓰기' : 'Write Post'}
        description={isKo ? '커뮤니티에 새 글을 작성합니다.' : 'Write a new post in the community.'}
        path={`/community/${boardId}/write`}
      />
      <div className="container">
        <div className="write-page">
          <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '32px' }}>
            <i className={`fa-solid ${boardInfo.icon}`} style={{ color: boardInfo.color, marginRight: '12px' }} />
            {isKo ? boardInfo.nameKo : boardInfo.nameEn} — {isKo ? '글쓰기' : 'Write Post'}
          </h1>

          <form className="write-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">{isKo ? '카테고리' : 'Category'}</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {isKo ? opt.labelKo : opt.labelEn}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">{isKo ? '제목' : 'Title'}</label>
              <input
                type="text"
                className="form-input"
                placeholder={isKo ? '제목을 입력하세요' : 'Enter title'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">{isKo ? '내용' : 'Content'}</label>
              <textarea
                className="form-textarea"
                style={{ minHeight: '300px' }}
                placeholder={isKo ? '마크다운 형식을 지원합니다.\n\n# 제목\n## 소제목\n**굵게** *기울임*\n- 목록\n```코드```' : 'Markdown format is supported.\n\n# Title\n## Subtitle\n**bold** *italic*\n- list\n```code```'}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <p style={{ fontSize: '12px', color: 'var(--text-light)', marginTop: '8px' }}>
                {isKo ? '마크다운 형식을 지원합니다.' : 'Markdown format is supported.'}
              </p>
            </div>

            <div className="write-actions">
              <button type="button" className="btn btn-secondary btn-sm" onClick={handleCancel}>
                {isKo ? '취소' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                disabled={!title.trim() || !content.trim() || loading}
              >
                {loading ? (
                  <>{isKo ? '등록 중...' : 'Submitting...'}</>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane" />
                    {isKo ? '등록' : 'Submit'}
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
