import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { getPostStats, getPosts } from '../../utils/posts';
import { getBoardById } from '../../config/boards';

export default function AdminDashboard() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  const [stats, setStats] = useState({ posts: 0, comments: 0, views: 0 });
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [statsData, postsData] = await Promise.all([
          getPostStats(),
          getPosts({ limit: 10 }),
        ]);
        setStats(statsData);
        setRecentPosts(postsData);
      } catch (err: any) {
        console.error('AdminDashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const statCards = [
    { icon: 'fa-file-lines', value: stats.posts.toLocaleString(), label: '게시글', labelEn: 'Posts', color: '#10B981' },
    { icon: 'fa-comments', value: stats.comments.toLocaleString(), label: '댓글', labelEn: 'Comments', color: '#F59E0B' },
    { icon: 'fa-eye', value: stats.views.toLocaleString(), label: '조회수', labelEn: 'Views', color: '#8B5CF6' },
  ];

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('ko-KR', {
      year: 'numeric', month: '2-digit', day: '2-digit',
    });
  };

  return (
    <div className="admin-page">
      <SEOHead
        title={isKo ? '관리자 대시보드' : 'Admin Dashboard'}
        description={isKo ? '사이트 관리자 대시보드입니다.' : 'Site admin dashboard.'}
        path="/admin"
      />
      <div className="container">
        <div className="admin-header">
          <h1>{isKo ? '관리자 대시보드' : 'Admin Dashboard'}</h1>
        </div>

        {/* Stats */}
        <div className="admin-stats">
          {statCards.map((stat, idx) => (
            <div key={idx} className="admin-stat-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <i
                  className={`fa-solid ${stat.icon}`}
                  style={{ fontSize: '20px', color: stat.color }}
                />
              </div>
              <div className="admin-stat-value">
                {loading ? '...' : stat.value}
              </div>
              <div className="admin-stat-title">{isKo ? stat.label : stat.labelEn}</div>
            </div>
          ))}
        </div>

        {/* Recent Posts Table */}
        <div className="admin-section">
          <h2>{isKo ? '최근 게시글' : 'Recent Posts'}</h2>
          {loading ? (
            <p style={{ color: 'var(--text-light)' }}>{isKo ? '로딩 중...' : 'Loading...'}</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>{isKo ? '게시판' : 'Board'}</th>
                  <th>{isKo ? '제목' : 'Title'}</th>
                  <th>{isKo ? '작성자' : 'Author'}</th>
                  <th>{isKo ? '카테고리' : 'Category'}</th>
                  <th>{isKo ? '날짜' : 'Date'}</th>
                  <th>{isKo ? '조회수' : 'Views'}</th>
                </tr>
              </thead>
              <tbody>
                {recentPosts.map((post) => {
                  const board = getBoardById(post.board);
                  return (
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>
                        <span style={{ fontSize: '12px', color: board?.color || 'var(--text-light)' }}>
                          {board ? (isKo ? board.nameKo : board.nameEn) : (post.board || 'general')}
                        </span>
                      </td>
                      <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
                        {post.title}
                      </td>
                      <td>{post.author_name || '-'}</td>
                      <td>
                        <span
                          style={{
                            padding: '2px 8px',
                            fontSize: '11px',
                            fontWeight: 600,
                            borderRadius: 'var(--radius-full)',
                            background: post.category === 'notice' ? '#DBEAFE'
                              : post.category === 'resource' ? '#D1FAE5'
                              : post.category === 'question' ? '#FEF3C7'
                              : '#F3F4F6',
                            color: post.category === 'notice' ? '#1D4ED8'
                              : post.category === 'resource' ? '#059669'
                              : post.category === 'question' ? '#D97706'
                              : '#6B7280',
                          }}
                        >
                          {post.category}
                        </span>
                      </td>
                      <td>{formatDate(post.created_at)}</td>
                      <td>{(post.view_count || 0).toLocaleString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>

        {/* Quick Actions */}
        <div className="admin-section">
          <h2>{isKo ? '빠른 작업' : 'Quick Actions'}</h2>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-sm">
              <i className="fa-solid fa-plus" />
              {isKo ? '공지 작성' : 'Write Notice'}
            </button>
            <button className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-users" />
              {isKo ? '사용자 관리' : 'Manage Users'}
            </button>
            <button className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-chart-bar" />
              {isKo ? '통계 보기' : 'View Analytics'}
            </button>
            <button className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-gear" />
              {isKo ? '사이트 설정' : 'Site Settings'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
