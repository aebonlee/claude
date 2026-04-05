import { useState, useEffect, useCallback } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { getPosts } from '../../utils/posts';
import { getBoardById, getCategoriesForBoard } from '../../config/boards';

export default function Board() {
  const { board: boardId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isKo = language === 'ko';

  useEffect(() => {
    if (boardId === 'board') {
      navigate('/community/claude-general', { replace: true });
    }
  }, [boardId, navigate]);

  const boardInfo = getBoardById(boardId);
  const categories = getCategoriesForBoard(boardId);

  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setActiveCategory('all');
  }, [boardId]);

  const fetchPosts = useCallback(async () => {
    if (!boardInfo) return;
    setLoading(true);
    setError('');
    try {
      const data = await getPosts({ board: boardId, category: activeCategory, search });
      setPosts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [boardId, boardInfo, activeCategory, search]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchInput), 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('ko-KR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    });
  };

  if (!boardInfo && boardId !== 'board') {
    navigate('/community', { replace: true });
    return null;
  }

  if (boardId === 'board') return null;

  return (
    <div className="community-page">
      <SEOHead
        title={isKo ? boardInfo.nameKo : boardInfo.nameEn}
        description={isKo ? boardInfo.descKo : boardInfo.descEn}
        path={`/community/${boardId}`}
      />
      <div className="container">
        <div className="community-board-header">
          <Link to="/community" className="board-back-link">
            <i className="fa-solid fa-arrow-left" />
            {isKo ? '게시판 목록' : 'Board List'}
          </Link>
        </div>
        <div className="community-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <i className={`fa-solid ${boardInfo.icon}`} style={{ fontSize: '24px', color: boardInfo.color }} />
            <h1 style={{ fontSize: '28px', fontWeight: 800 }}>
              {isKo ? boardInfo.nameKo : boardInfo.nameEn}
            </h1>
          </div>
          <Link to={`/community/${boardId}/write`} className="btn btn-primary btn-sm">
            <i className="fa-solid fa-pen" />
            {isKo ? '글쓰기' : 'Write'}
          </Link>
        </div>

        <div className="community-tabs">
          {categories.map((tab) => (
            <button
              key={tab.key}
              className={`chip${activeCategory === tab.key ? ' active' : ''}`}
              onClick={() => setActiveCategory(tab.key)}
            >
              {isKo ? tab.labelKo : tab.labelEn}
            </button>
          ))}
        </div>

        <div className="community-search">
          <input
            type="text"
            placeholder={isKo ? '제목, 작성자 검색...' : 'Search title, author...'}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        <div className="post-list">
          {loading && (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '40px 0' }}>
              {isKo ? '로딩 중...' : 'Loading...'}
            </p>
          )}
          {error && (
            <p style={{ textAlign: 'center', color: 'var(--danger)', padding: '40px 0' }}>
              {error}
            </p>
          )}
          {!loading && !error && posts.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '40px 0' }}>
              {isKo ? '게시글이 없습니다.' : 'No posts found.'}
            </p>
          )}
          {!loading && posts.map((post) => (
            <Link key={post.id} to={`/community/${boardId}/${post.id}`} className="post-item">
              <span className={`post-category ${post.category}`}>
                {isKo
                  ? categories.find((c) => c.key === post.category)?.labelKo || post.category
                  : categories.find((c) => c.key === post.category)?.labelEn || post.category}
              </span>
              <span className="post-title">{post.title}</span>
              <div className="post-meta">
                <span>{post.author_name || (isKo ? '익명' : 'Anonymous')}</span>
                <span>{formatDate(post.created_at)}</span>
                <span>
                  <i className="fa-solid fa-eye" /> {post.view_count || 0}
                </span>
                <span>
                  <i className="fa-solid fa-comment" /> {post.comment_count || 0}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
