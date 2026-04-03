# 기술 스택

## 프론트엔드
| 기술 | 버전 | 용도 |
|------|------|------|
| React | 19 | UI 프레임워크 |
| Vite | 6 | 빌드 도구 |
| React Router | 7 | 클라이언트 사이드 라우팅 |

## 백엔드/인프라
| 기술 | 용도 |
|------|------|
| Supabase | Auth, Database |
| GitHub Pages | 정적 사이트 호스팅 |
| GitHub Actions | CI/CD |

## 라이브러리
| 라이브러리 | 용도 |
|------------|------|
| react-markdown | 마크다운 렌더링 |
| remark-gfm | GitHub Flavored Markdown |
| jsPDF | PDF 내보내기 |
| @supabase/supabase-js | Supabase 클라이언트 |

## 스타일링
- 순수 CSS (CSS Variables)
- Font Awesome 6 (CDN)
- Glassmorphism 디자인

## 환경 변수
```
VITE_SUPABASE_URL=https://hcmgdztsgjvzcyxyayaj.supabase.co
VITE_SUPABASE_ANON_KEY=<anon-key>
```

## 개발 명령어
```bash
npm install          # 의존성 설치
npm run dev          # 개발 서버 (localhost:5176)
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 미리보기
npm run generate-og  # OG 이미지 생성
```
