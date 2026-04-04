/**
 * 게시판 정의 및 카테고리 헬퍼
 * Board ID에 'claude-' 접두어를 붙여 다른 사이트와 충돌 방지
 */

export const BOARDS = [
  {
    id: 'claude-code',
    icon: 'fa-terminal',
    nameKo: 'Claude Code',
    nameEn: 'Claude Code',
    descKo: 'Claude Code CLI 사용법, 팁, 문제 해결을 공유합니다.',
    descEn: 'Share Claude Code CLI usage tips, tricks, and troubleshooting.',
    color: '#10B981',
  },
  {
    id: 'claude-prompt',
    icon: 'fa-wand-magic-sparkles',
    nameKo: '프롬프트 엔지니어링',
    nameEn: 'Prompt Engineering',
    descKo: '효과적인 프롬프트 작성법과 테크닉을 나눕니다.',
    descEn: 'Discuss effective prompt writing techniques and strategies.',
    color: '#8B5CF6',
  },
  {
    id: 'claude-api',
    icon: 'fa-code',
    nameKo: 'API 활용',
    nameEn: 'API Usage',
    descKo: 'Claude API 연동, 코드 예제, 활용 사례를 공유합니다.',
    descEn: 'Share Claude API integration, code examples, and use cases.',
    color: '#3B82F6',
  },
  {
    id: 'claude-agent-sdk',
    icon: 'fa-robot',
    nameKo: 'Agent SDK',
    nameEn: 'Agent SDK',
    descKo: 'Agent SDK를 활용한 에이전트 개발 경험을 공유합니다.',
    descEn: 'Share agent development experiences using the Agent SDK.',
    color: '#F59E0B',
  },
  {
    id: 'claude-general',
    icon: 'fa-comments',
    nameKo: '자유 게시판',
    nameEn: 'General',
    descKo: '자유롭게 이야기를 나누는 공간입니다.',
    descEn: 'A space for free discussion on any topic.',
    color: '#6B7280',
  },
];

export const BOARD_CATEGORIES = [
  { key: 'all', labelKo: '전체', labelEn: 'All' },
  { key: 'question', labelKo: 'Q&A', labelEn: 'Q&A' },
  { key: 'resource', labelKo: '자료공유', labelEn: 'Resources' },
  { key: 'free', labelKo: '자유', labelEn: 'Free' },
];

export const GENERAL_BOARD_CATEGORIES = [
  { key: 'all', labelKo: '전체', labelEn: 'All' },
  { key: 'notice', labelKo: '공지', labelEn: 'Notice' },
  { key: 'question', labelKo: 'Q&A', labelEn: 'Q&A' },
  { key: 'resource', labelKo: '자료공유', labelEn: 'Resources' },
  { key: 'free', labelKo: '자유', labelEn: 'Free' },
];

export function getBoardById(id) {
  return BOARDS.find((b) => b.id === id) || null;
}

export function getCategoriesForBoard(boardId) {
  return boardId === 'claude-general' ? GENERAL_BOARD_CATEGORIES : BOARD_CATEGORIES;
}
