# 파일 구조

```
D:\dreamit-web\claude\
├── index.html
├── package.json
├── vite.config.js
├── .env
├── .gitignore
├── CNAME (claude.dreamitbiz.com)
├── .nojekyll
├── .github/workflows/deploy.yml
│
├── public/
│   ├── favicon.svg
│   ├── 404.html
│   ├── CNAME
│   └── og/
│       └── default.png          # OG 이미지 (1200x630, sharp 생성)
│
├── scripts/
│   └── generate-og-image.mjs
│
├── Dev_md/                      # 개발 문서
│   ├── PROJECT_OVERVIEW.md
│   ├── TECH_STACK.md
│   ├── FILE_STRUCTURE.md
│   ├── ROUTING.md
│   ├── DESIGN_SYSTEM.md
│   └── DEPLOYMENT.md
│
└── src/
    ├── main.jsx                 # 앱 진입점
    ├── App.jsx                  # Provider 래핑
    │
    ├── config/
    │   ├── site.js              # SITE_CONFIG, LEARNING_PATHS
    │   └── admin.js             # ADMIN_EMAILS
    │
    ├── contexts/
    │   ├── ThemeContext.jsx      # 다크모드 + 컬러테마
    │   ├── LanguageContext.jsx   # ko/en 다국어
    │   ├── AuthContext.jsx       # Supabase 인증
    │   └── ToastContext.jsx      # 알림 토스트
    │
    ├── utils/
    │   ├── supabase.js          # Supabase 클라이언트
    │   ├── auth.js              # OAuth + Email 인증
    │   └── translations.js      # ko/en 번역 데이터
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx       # 글래스모피즘 네비게이션
    │   │   └── Footer.jsx       # 다크 풋터
    │   ├── SEOHead.jsx          # OG 메타 태그
    │   ├── AuthGuard.jsx        # 인증 가드
    │   ├── AdminGuard.jsx       # 관리자 가드
    │   ├── Pagination.jsx       # 페이지네이션
    │   ├── HeroBackground.jsx   # 히어로 배경
    │   ├── HeroCarousel.jsx     # 히어로 캐러셀
    │   ├── CodeBlock.jsx        # 코드 블록 + 복사
    │   ├── TipBox.jsx           # 팁/경고 박스
    │   └── FeatureCard.jsx      # 피처 카드
    │
    ├── layouts/
    │   └── PublicLayout.jsx     # 라우팅 + Navbar + Footer
    │
    ├── pages/
    │   ├── Home.jsx             # 랜딩 페이지
    │   ├── Login.jsx            # 로그인
    │   ├── Register.jsx         # 회원가입
    │   ├── ForgotPassword.jsx   # 비밀번호 찾기
    │   ├── NotFound.jsx         # 404
    │   ├── about/AboutPage.jsx  # 소개 페이지
    │   │
    │   ├── claude-code/         # Claude Code 가이드 (9 data + 1 page)
    │   ├── claude-work/         # Claude Work 가이드 (6 data + 1 page)
    │   ├── prompt-engineering/  # 프롬프트 엔지니어링 (7 data + 1 page)
    │   ├── api-usage/           # API Usage (7 data + 1 page)
    │   ├── agent-sdk/           # Agent SDK (5 data + 1 page)
    │   ├── model-comparison/    # 모델 비교 (1 data + 1 page)
    │   ├── glossary/            # 용어 사전
    │   ├── roadmap/             # 학습 로드맵
    │   ├── resources/           # 리소스 모음
    │   ├── prompt-practice/     # 프롬프트 연습
    │   ├── prompt-gallery/      # 프롬프트 갤러리
    │   ├── ai-news/             # AI 뉴스
    │   ├── community/           # 커뮤니티 (Board, Detail, Write)
    │   └── admin/               # 관리자 대시보드
    │
    └── styles/                  # CSS 파일 (18개)
        ├── index.css            # 마스터 import
        ├── base.css             # 변수, 리셋, 테마
        ├── navbar.css           # 네비게이션
        ├── hero.css             # 히어로 섹션
        ├── home.css             # 홈 페이지
        ├── footer.css           # 풋터
        ├── auth.css             # 인증 페이지
        ├── guide-pages.css      # 가이드 레이아웃
        ├── code-blocks.css      # 코드 블록
        ├── content-pages.css    # 콘텐츠 페이지
        ├── model-comparison.css # 모델 비교
        ├── community.css        # 커뮤니티
        ├── dashboard.css        # 대시보드
        ├── admin.css            # 관리자
        ├── ai-tools.css         # AI 도구
        ├── animations.css       # 애니메이션
        ├── toast.css            # 토스트
        ├── dark-mode.css        # 다크 모드
        └── responsive.css       # 반응형
```

## 파일 통계
- **총 소스 파일**: 93개 (jsx + js + css)
- **페이지 컴포넌트**: 20개
- **데이터 파일**: 35개
- **CSS 파일**: 18개
- **컴포넌트**: 11개
- **컨텍스트**: 4개
- **유틸리티**: 3개
