import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';

const categoryOptions = [
  { key: 'resource', label: '자료', labelEn: 'Resource' },
  { key: 'question', label: '질문', labelEn: 'Question' },
  { key: 'free', label: '자유', labelEn: 'Free' },
];

export default function BoardWrite() {
  const { language } = useLanguage();
  const isKo = language === 'ko';
  const navigate = useNavigate();
  const [category, setCategory] = useState('free');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    // In a real app, this would save to a database
    navigate('/community/board');
  };

  const handleCancel = () => {
    navigate('/community/board');
  };

  return (
    <div className="community-page">
      <SEOHead
        title={isKo ? '글쓰기' : 'Write Post'}
        description={isKo ? '커뮤니티에 새 글을 작성합니다.' : 'Write a new post in the community.'}
        path="/community/board/write"
      />
      <div className="container">
        <div className="write-page">
          <h1 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '32px' }}>
            {isKo ? '글쓰기' : 'Write Post'}
          </h1>

          <form className="write-form" onSubmit={handleSubmit}>
            {/* Category Select */}
            <div className="form-group">
              <label className="form-label">{isKo ? '카테고리' : 'Category'}</label>
              <select
                className="form-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryOptions.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {isKo ? opt.label : opt.labelEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Title Input */}
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

            {/* Content Textarea */}
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

            {/* Actions */}
            <div className="write-actions">
              <button type="button" className="btn btn-secondary btn-sm" onClick={handleCancel}>
                {isKo ? '취소' : 'Cancel'}
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                disabled={!title.trim() || !content.trim()}
              >
                <i className="fa-solid fa-paper-plane" />
                {isKo ? '등록' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
