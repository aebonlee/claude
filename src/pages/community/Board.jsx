import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const categoryTabs = [
  { key: 'all', label: '전체', labelEn: 'All' },
  { key: 'notice', label: '공지', labelEn: 'Notice' },
  { key: 'resource', label: '자료', labelEn: 'Resource' },
  { key: 'question', label: '질문', labelEn: 'Question' },
  { key: 'free', label: '자유', labelEn: 'Free' },
];

const dummyPosts = [
  { id: 1, category: 'notice', title: 'Claude Master 사이트 오픈!', titleEn: 'Claude Master Site Launch!', author: 'Admin', date: '2025-05-15', views: 1520, comments: 12 },
  { id: 2, category: 'notice', title: '프롬프트 갤러리가 업데이트되었습니다', titleEn: 'Prompt Gallery has been updated', author: 'Admin', date: '2025-05-14', views: 890, comments: 5 },
  { id: 3, category: 'resource', title: 'Claude API 시작 가이드 (Python)', titleEn: 'Claude API Getting Started Guide (Python)', author: 'devkim', date: '2025-05-13', views: 2340, comments: 28 },
  { id: 4, category: 'question', title: 'Claude Code에서 MCP 서버 설정 방법 질문', titleEn: 'Question about MCP server setup in Claude Code', author: 'newbie123', date: '2025-05-12', views: 456, comments: 7 },
  { id: 5, category: 'resource', title: 'Prompt Engineering 치트시트 공유', titleEn: 'Sharing Prompt Engineering Cheat Sheet', author: 'promptmaster', date: '2025-05-11', views: 3210, comments: 45 },
  { id: 6, category: 'question', title: 'Extended Thinking vs 일반 모드 차이점?', titleEn: 'Difference between Extended Thinking vs Normal mode?', author: 'curious_dev', date: '2025-05-10', views: 678, comments: 11 },
  { id: 7, category: 'free', title: 'Claude로 사이드 프로젝트 완성 후기', titleEn: 'Review: Completed a side project with Claude', author: 'builder99', date: '2025-05-09', views: 1890, comments: 33 },
  { id: 8, category: 'resource', title: 'Agent SDK 멀티 에이전트 예제 코드', titleEn: 'Agent SDK Multi-Agent Example Code', author: 'agent_dev', date: '2025-05-08', views: 1560, comments: 19 },
  { id: 9, category: 'question', title: 'Tool Use에서 JSON 스키마 작성 팁', titleEn: 'Tips for writing JSON schemas in Tool Use', author: 'json_lover', date: '2025-05-07', views: 543, comments: 8 },
  { id: 10, category: 'free', title: 'AI 개발자 모임 참가 후기', titleEn: 'AI Developer Meetup Review', author: 'meetup_fan', date: '2025-05-06', views: 920, comments: 14 },
  { id: 11, category: 'notice', title: '커뮤니티 이용 규칙 안내', titleEn: 'Community Usage Guidelines', author: 'Admin', date: '2025-05-01', views: 4500, comments: 2 },
  { id: 12, category: 'free', title: 'Claude Opus 4 써본 소감', titleEn: 'My impressions of Claude Opus 4', author: 'ai_explorer', date: '2025-05-05', views: 2780, comments: 41 },
];

export default function Board() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let list = dummyPosts;
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.titleEn.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, search]);

  return (
    <div className="community-page">
      <SEOHead
        title={isKo ? '커뮤니티' : 'Community'}
        description={isKo ? 'Claude 사용자 커뮤니티 게시판입니다.' : 'Claude user community board.'}
        path="/community/board"
      />
      <div className="container">
        <div className="community-header">
          <h1 style={{ fontSize: '28px', fontWeight: 800 }}>
            {isKo ? '커뮤니티' : 'Community'}
          </h1>
          <Link to="/community/board/write" className="btn btn-primary btn-sm">
            <i className="fa-solid fa-pen" />
            {isKo ? '글쓰기' : 'Write'}
          </Link>
        </div>

        {/* Category Tabs */}
        <div className="community-tabs">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              className={`chip${activeCategory === tab.key ? ' active' : ''}`}
              onClick={() => setActiveCategory(tab.key)}
            >
              {isKo ? tab.label : tab.labelEn}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="community-search">
          <input
            type="text"
            placeholder={isKo ? '제목, 작성자 검색...' : 'Search title, author...'}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Post List */}
        <div className="post-list">
          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--text-light)', padding: '40px 0' }}>
              {isKo ? '게시글이 없습니다.' : 'No posts found.'}
            </p>
          )}
          {filtered.map((post) => (
            <Link key={post.id} to={`/community/board/${post.id}`} className="post-item">
              <span className={`post-category ${post.category}`}>
                {isKo
                  ? categoryTabs.find((c) => c.key === post.category)?.label
                  : categoryTabs.find((c) => c.key === post.category)?.labelEn}
              </span>
              <span className="post-title">{isKo ? post.title : post.titleEn}</span>
              <div className="post-meta">
                <span>{post.author}</span>
                <span>{post.date}</span>
                <span>
                  <i className="fa-solid fa-eye" /> {post.views}
                </span>
                <span>
                  <i className="fa-solid fa-comment" /> {post.comments}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
