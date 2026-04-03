import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const dummyPostData = {
  1: {
    id: 1,
    category: 'notice',
    title: 'Claude Master 사이트 오픈!',
    titleEn: 'Claude Master Site Launch!',
    author: 'Admin',
    date: '2025-05-15',
    views: 1520,
    body: `안녕하세요, Claude Master 사이트가 정식 오픈되었습니다!

이 사이트는 Claude를 체계적으로 학습할 수 있는 종합 플랫폼입니다.

## 주요 기능

- **Claude Code 가이드**: 설치부터 고급 활용까지
- **프롬프트 엔지니어링**: 효과적인 프롬프트 작성법
- **API 활용 가이드**: Anthropic API 개발 가이드
- **Agent SDK**: 자율 에이전트 구축 가이드
- **프롬프트 갤러리**: 바로 사용 가능한 템플릿
- **커뮤니티**: 사용자 간 정보 공유

많은 이용 부탁드립니다!`,
    bodyEn: `Hello, the Claude Master site is now officially open!

This site is a comprehensive platform for systematically learning Claude.

## Key Features

- **Claude Code Guide**: From installation to advanced usage
- **Prompt Engineering**: Effective prompt writing techniques
- **API Usage Guide**: Anthropic API development guide
- **Agent SDK**: Autonomous agent building guide
- **Prompt Gallery**: Ready-to-use templates
- **Community**: Information sharing among users

We look forward to your active participation!`,
    comments: [
      { id: 1, author: 'devkim', date: '2025-05-15', body: '드디어 오픈했군요! 기대됩니다.', bodyEn: 'Finally launched! Looking forward to it.' },
      { id: 2, author: 'promptmaster', date: '2025-05-15', body: '프롬프트 갤러리가 정말 유용하네요.', bodyEn: 'The prompt gallery is really useful.' },
      { id: 3, author: 'newbie123', date: '2025-05-16', body: '초보자도 쉽게 따라할 수 있는 가이드가 있어서 좋습니다!', bodyEn: 'Great to have guides that beginners can easily follow!' },
    ],
  },
};

const fallbackPost = {
  id: 0,
  category: 'free',
  title: '게시글 제목',
  titleEn: 'Post Title',
  author: 'user',
  date: '2025-05-10',
  views: 100,
  body: '이 게시글은 샘플 데이터입니다. 실제 데이터베이스와 연결되면 실제 게시글이 표시됩니다.',
  bodyEn: 'This is sample data. Real posts will be displayed once connected to a database.',
  comments: [
    { id: 1, author: 'commenter', date: '2025-05-10', body: '좋은 글이네요!', bodyEn: 'Great post!' },
  ],
};

export default function BoardDetail() {
  const { id } = useParams();
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const [commentText, setCommentText] = useState('');

  const post = dummyPostData[id] || fallbackPost;

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    setCommentText('');
  };

  return (
    <div className="community-page">
      <SEOHead
        title={isKo ? post.title : post.titleEn}
        description={isKo ? post.title : post.titleEn}
        path={`/community/board/${id}`}
      />
      <div className="container">
        <div className="post-detail">
          {/* Header */}
          <div className="post-detail-header">
            <h1 className="post-detail-title">{isKo ? post.title : post.titleEn}</h1>
            <div className="post-detail-info">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <span>
                <i className="fa-solid fa-eye" /> {post.views}
              </span>
            </div>
          </div>

          {/* Body */}
          <div className="post-detail-body">
            {(isKo ? post.body : post.bodyEn).split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="post-detail-actions">
            <Link to="/community/board" className="btn btn-secondary btn-sm">
              <i className="fa-solid fa-arrow-left" />
              {isKo ? '목록으로' : 'Back to List'}
            </Link>
          </div>

          {/* Comments */}
          <div className="comments-section">
            <h3 className="comments-title">
              {isKo ? `댓글 ${post.comments.length}개` : `${post.comments.length} Comments`}
            </h3>

            {post.comments.map((comment) => (
              <div key={comment.id} className="comment-item">
                <div className="comment-header">
                  <span className="comment-author">{comment.author}</span>
                  <span className="comment-date">{comment.date}</span>
                </div>
                <div className="comment-body">
                  {isKo ? comment.body : comment.bodyEn}
                </div>
              </div>
            ))}

            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <textarea
                placeholder={isKo ? '댓글을 입력하세요...' : 'Write a comment...'}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <button type="submit" className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-end' }}>
                {isKo ? '등록' : 'Post'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
