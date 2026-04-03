import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const stats = [
  { icon: 'fa-users', value: '1,247', label: '사용자', labelEn: 'Users', color: '#3B82F6' },
  { icon: 'fa-file-lines', value: '356', label: '게시글', labelEn: 'Posts', color: '#10B981' },
  { icon: 'fa-comments', value: '2,891', label: '댓글', labelEn: 'Comments', color: '#F59E0B' },
  { icon: 'fa-eye', value: '48,320', label: '조회수', labelEn: 'Views', color: '#8B5CF6' },
];

const recentPosts = [
  { id: 1, title: 'Claude Master 사이트 오픈!', titleEn: 'Claude Master Site Launch!', author: 'Admin', category: 'notice', date: '2025-05-15', views: 1520 },
  { id: 2, title: '프롬프트 갤러리 업데이트', titleEn: 'Prompt Gallery Update', author: 'Admin', category: 'notice', date: '2025-05-14', views: 890 },
  { id: 3, title: 'Claude API 시작 가이드 (Python)', titleEn: 'Claude API Getting Started (Python)', author: 'devkim', category: 'resource', date: '2025-05-13', views: 2340 },
  { id: 4, title: 'MCP 서버 설정 방법 질문', titleEn: 'MCP Server Setup Question', author: 'newbie123', category: 'question', date: '2025-05-12', views: 456 },
  { id: 5, title: 'Prompt Engineering 치트시트', titleEn: 'Prompt Engineering Cheat Sheet', author: 'promptmaster', category: 'resource', date: '2025-05-11', views: 3210 },
  { id: 6, title: 'Claude Opus 4 써본 소감', titleEn: 'My impressions of Claude Opus 4', author: 'ai_explorer', category: 'free', date: '2025-05-05', views: 2780 },
  { id: 7, title: 'Agent SDK 멀티 에이전트 예제', titleEn: 'Agent SDK Multi-Agent Example', author: 'agent_dev', category: 'resource', date: '2025-05-08', views: 1560 },
  { id: 8, title: 'AI 개발자 모임 후기', titleEn: 'AI Developer Meetup Review', author: 'meetup_fan', category: 'free', date: '2025-05-06', views: 920 },
];

export default function AdminDashboard() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

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
          {stats.map((stat, idx) => (
            <div key={idx} className="admin-stat-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <i
                  className={`fa-solid ${stat.icon}`}
                  style={{ fontSize: '20px', color: stat.color }}
                />
              </div>
              <div className="admin-stat-value">{stat.value}</div>
              <div className="admin-stat-title">{isKo ? stat.label : stat.labelEn}</div>
            </div>
          ))}
        </div>

        {/* Recent Posts Table */}
        <div className="admin-section">
          <h2>{isKo ? '최근 게시글' : 'Recent Posts'}</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>{isKo ? '제목' : 'Title'}</th>
                <th>{isKo ? '작성자' : 'Author'}</th>
                <th>{isKo ? '카테고리' : 'Category'}</th>
                <th>{isKo ? '날짜' : 'Date'}</th>
                <th>{isKo ? '조회수' : 'Views'}</th>
              </tr>
            </thead>
            <tbody>
              {recentPosts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td style={{ fontWeight: 500, color: 'var(--text-primary)' }}>
                    {isKo ? post.title : post.titleEn}
                  </td>
                  <td>{post.author}</td>
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
                  <td>{post.date}</td>
                  <td>{post.views.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
