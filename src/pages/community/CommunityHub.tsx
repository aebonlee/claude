import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import { BOARDS } from '../../config/boards';

export default function CommunityHub() {
  const { language } = useLanguage();
  const isKo = language === 'ko';

  return (
    <div className="community-page">
      <SEOHead
        title={isKo ? '커뮤니티' : 'Community'}
        description={isKo ? 'Claude 학습 주제별 게시판입니다.' : 'Claude topic-based community boards.'}
        path="/community"
      />
      <div className="container">
        <div className="community-header">
          <h1 style={{ fontSize: '28px', fontWeight: 800 }}>
            {isKo ? '커뮤니티' : 'Community'}
          </h1>
        </div>
        <p style={{ color: 'var(--text-light)', marginBottom: '32px', fontSize: '15px' }}>
          {isKo ? '주제별 게시판에서 함께 배우고 나누세요.' : 'Learn and share in topic-based boards.'}
        </p>

        <div className="community-hub-grid">
          {BOARDS.map((board) => (
            <Link
              key={board.id}
              to={`/community/${board.id}`}
              className="community-board-card"
            >
              <div className="board-card-icon" style={{ color: board.color }}>
                <i className={`fa-solid ${board.icon}`} />
              </div>
              <div className="board-card-body">
                <h3 className="board-card-title">
                  {isKo ? board.nameKo : board.nameEn}
                </h3>
                <p className="board-card-desc">
                  {isKo ? board.descKo : board.descEn}
                </p>
              </div>
              <i className="fa-solid fa-chevron-right board-card-arrow" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
