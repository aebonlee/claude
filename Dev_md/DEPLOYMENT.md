# 배포 가이드

## GitHub Pages 배포

### 자동 배포 (GitHub Actions)
`.github/workflows/deploy.yml` 파일이 main 브랜치 푸시 시 자동 빌드 및 배포를 수행합니다.

### 배포 프로세스
1. `main` 브랜치에 푸시
2. GitHub Actions 워크플로우 자동 실행
3. Node.js 22 환경에서 `npm ci` 및 `npm run build`
4. `dist/` 폴더를 GitHub Pages에 배포

### 필요한 GitHub Secrets
| Secret 이름 | 설명 |
|-------------|------|
| `VITE_SUPABASE_URL` | Supabase 프로젝트 URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase Anonymous Key |

### GitHub Pages 설정
1. Repository Settings > Pages
2. Source: GitHub Actions
3. Custom domain: claude.dreamitbiz.com

## Supabase 설정

### 프로젝트 정보
- **URL**: https://hcmgdztsgjvzcyxyayaj.supabase.co
- **Auth Flow**: PKCE

### Auth Providers 설정
1. **Google OAuth**: Google Cloud Console에서 OAuth 2.0 클라이언트 생성
2. **Kakao OAuth**: Kakao Developers에서 앱 생성
3. **Email/Password**: Supabase Dashboard에서 활성화

### Redirect URLs
- `https://claude.dreamitbiz.com`
- `http://localhost:5176` (개발용)

## SPA 라우팅
GitHub Pages는 SPA를 직접 지원하지 않으므로:
- `public/404.html`에 리다이렉트 스크립트 포함
- 모든 404 요청을 `index.html`로 리다이렉트

## OG 이미지 생성
```bash
npm run generate-og
```
- `scripts/generate-og-image.mjs` 실행
- sharp 라이브러리로 1200x630 PNG 생성 (82KB)
- SVG → PNG 변환 (다크블루 그라데이션 배경, 앰버 악센트, 피처 태그 뱃지)
- `public/og/default.png`에 저장

### OG 메타 태그 (index.html)
| 태그 | 값 |
|------|-----|
| `og:url` | https://claude.dreamitbiz.com |
| `og:title` | Claude Master - Claude AI 학습 플랫폼 |
| `og:description` | Claude AI의 모든 기능을 학습하는 종합 플랫폼 |
| `og:type` | website |
| `og:image` | https://claude.dreamitbiz.com/og/default.png |
| `og:image:width` | 1200 |
| `og:image:height` | 630 |
| `og:site_name` | Claude Master |
| `og:locale` | ko_KR |
| `twitter:card` | summary_large_image |

### OG 디버거
- 카카오: https://developers.kakao.com/tool/debugger/sharing
- 페이스북: https://developers.facebook.com/tools/debug/
- 트위터: https://cards-dev.twitter.com/validator

## 도메인 설정
1. CNAME 파일에 `claude.dreamitbiz.com` 설정
2. DNS에 GitHub Pages IP 또는 CNAME 레코드 추가
3. HTTPS 자동 적용 (GitHub Pages)

## 빌드 결과
- 총 빌드 시간: ~8초
- 빌드 출력: `dist/` 폴더
- CSS: ~52KB (gzip ~9KB)
- JS 번들: index ~210KB, vendor ~49KB, supabase ~194KB, markdown ~157KB
