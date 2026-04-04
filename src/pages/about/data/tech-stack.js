const techStack = {
  id: 'tech-stack',
  title: '기술 스택',
  titleEn: 'Tech Stack',
  icon: 'fa-layer-group',
  sections: [
    {
      title: '사용 기술',
      titleEn: 'Technologies Used',
      content: `### 프론트엔드

| 기술 | 버전 | 용도 |
|------|------|------|
| React | 19 | UI 프레임워크 |
| Vite | 6 | 빌드 도구 |
| React Router | 7.1 | 클라이언트 사이드 라우팅 |
| React Markdown | 9 | 마크다운 렌더링 |
| Pure CSS | - | 스타일링 (프레임워크 없이) |

### 백엔드 & 인프라

| 기술 | 용도 |
|------|------|
| Supabase | 인증(Auth) + 데이터베이스(PostgreSQL) |
| GitHub Pages | 정적 사이트 호스팅 |
| GitHub Actions | CI/CD 자동 빌드 & 배포 |

### 주요 설계 결정

- **Pure CSS 선택**: Tailwind 등 프레임워크 없이 직접 CSS 작성하여 번들 사이즈 최소화
- **코드 스플리팅**: React.lazy + Suspense로 페이지별 동적 임포트
- **다국어 지원**: 커스텀 i18n 시스템 (외부 라이브러리 없이)
- **다크모드**: CSS 변수 기반 테마 시스템 (라이트/다크/오토)
- **마크다운 콘텐츠**: 가이드 데이터를 JS 파일로 분리하여 관리 용이`,
      contentEn: `### Frontend

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19 | UI Framework |
| Vite | 6 | Build Tool |
| React Router | 7.1 | Client-side Routing |
| React Markdown | 9 | Markdown Rendering |
| Pure CSS | - | Styling (no framework) |

### Backend & Infrastructure

| Technology | Purpose |
|-----------|---------|
| Supabase | Authentication (Auth) + Database (PostgreSQL) |
| GitHub Pages | Static Site Hosting |
| GitHub Actions | CI/CD Auto Build & Deploy |

### Key Design Decisions

- **Pure CSS**: No frameworks like Tailwind — handwritten CSS for minimal bundle size
- **Code Splitting**: React.lazy + Suspense for per-page dynamic imports
- **Internationalization**: Custom i18n system (no external libraries)
- **Dark Mode**: CSS variable-based theme system (light/dark/auto)
- **Markdown Content**: Guide data separated into JS files for easy maintenance`
    }
  ]
};

export default techStack;
