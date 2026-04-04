# Supabase 설정 가이드

## 프로젝트 정보
| 항목 | 값 |
|------|-----|
| Project Ref | `hcmgdztsgjvzcyxyayaj` |
| URL | `https://hcmgdztsgjvzcyxyayaj.supabase.co` |
| Dashboard | https://supabase.com/dashboard/project/hcmgdztsgjvzcyxyayaj |
| Auth Flow | PKCE |
| Site URL | `https://claude.dreamitbiz.com` |

## 디렉토리 구조
```
supabase/
├── config.toml                          # Supabase CLI 설정 (auth, db, storage 등)
├── seed.sql                             # 초기 데이터 (관리자 role 설정)
├── .gitignore                           # .temp/ 등 제외
└── migrations/
    ├── 20260404000001_create_profiles.sql           # 프로필 테이블 + RLS
    ├── 20260404000002_auto_create_profile_on_signup.sql  # 가입 시 프로필 자동 생성 트리거
    └── 20260404000003_create_posts.sql              # 게시판 테이블 + RLS

scripts/
├── supabase-setup.sh          # 초기 설정 (link + push)
├── supabase-db-push.sh        # 마이그레이션 원격 적용
├── supabase-db-reset.sh       # 로컬 DB 리셋
├── supabase-migration-new.sh  # 새 마이그레이션 생성
└── supabase-status.sh         # 상태 확인
```

## OAuth 인증 설정

### 지원 로그인 방식
1. **Google OAuth** - 구글 이메일로 가입/로그인
2. **Kakao OAuth** - 카카오 인증으로 가입/로그인
3. **Email/Password** - 이메일/비밀번호 직접 가입

### config.toml 설정
```toml
[auth.external.google]
enabled = true
client_id = "env(GOOGLE_OAUTH_CLIENT_ID)"
secret = "env(GOOGLE_OAUTH_CLIENT_SECRET)"
redirect_uri = "https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback"

[auth.external.kakao]
enabled = true
client_id = "env(KAKAO_OAUTH_CLIENT_ID)"
secret = "env(KAKAO_OAUTH_CLIENT_SECRET)"
redirect_uri = "https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback"
```

### Google OAuth 설정 (Google Cloud Console)
1. https://console.cloud.google.com → API & Services → Credentials
2. OAuth 2.0 Client ID 생성
3. Authorized redirect URI: `https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback`
4. Client ID / Secret을 Supabase Dashboard에 입력

### Kakao OAuth 설정 (Kakao Developers)
1. https://developers.kakao.com → 앱 생성
2. 카카오 로그인 > Redirect URI: `https://hcmgdztsgjvzcyxyayaj.supabase.co/auth/v1/callback`
3. REST API Key (Client ID) / Client Secret을 Supabase Dashboard에 입력
4. 동의항목: 이메일, 프로필 정보 필수 동의 설정

### Redirect URL 허용 목록
| 환경 | URL |
|------|-----|
| Production | `https://claude.dreamitbiz.com/` |
| Development | `http://localhost:5176/` |

## DB 테이블

### profiles
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | UUID (PK) | auth.users(id) 참조 |
| email | TEXT | 이메일 |
| full_name | TEXT | 전체 이름 |
| display_name | TEXT | 표시 이름 |
| avatar_url | TEXT | 프로필 이미지 |
| provider | TEXT | 가입 방식 (google, kakao, email) |
| role | TEXT | 권한 (user, admin) |
| created_at | TIMESTAMPTZ | 생성일 |
| updated_at | TIMESTAMPTZ | 수정일 (자동 갱신) |

**RLS 정책**: 본인 프로필 CRUD + 관리자 전체 조회

### posts
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | BIGINT (PK) | 자동 증가 |
| author_id | UUID | 작성자 (auth.users 참조) |
| category | TEXT | notice, resource, question, free |
| title | TEXT | 제목 |
| content | TEXT | 내용 |
| view_count | INT | 조회수 |
| created_at | TIMESTAMPTZ | 작성일 |
| updated_at | TIMESTAMPTZ | 수정일 (자동 갱신) |

**RLS 정책**: 전체 조회 + 로그인 사용자 작성 + 본인/관리자 수정/삭제

## 스크립트 사용법

### 초기 설정
```bash
# 환경변수에 액세스 토큰 설정
export SUPABASE_ACCESS_TOKEN="sbp_your_token_here"

# 프로젝트 링크 + 마이그레이션 적용
bash scripts/supabase-setup.sh
```

### 마이그레이션 관리
```bash
# 새 마이그레이션 생성
bash scripts/supabase-migration-new.sh add_comments_table

# 원격 DB에 적용
bash scripts/supabase-db-push.sh

# 로컬 DB 리셋 (개발용)
bash scripts/supabase-db-reset.sh

# 상태 확인
bash scripts/supabase-status.sh
```

## 프론트엔드 연동

### Supabase Client (`src/utils/supabase.js`)
```javascript
import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
  { auth: { flowType: 'pkce' } }
);
```

### Auth 함수 (`src/utils/auth.js`)
- `signInWithGoogle()` - Google OAuth 로그인
- `signInWithKakao()` - Kakao OAuth 로그인
- `signInWithEmail(email, password)` - 이메일 로그인
- `signUpWithEmail(email, password, metadata)` - 이메일 가입
- `resetPassword(email)` - 비밀번호 재설정
- `signOut()` - 로그아웃

### 환경변수 (.env)
```
VITE_SUPABASE_URL=https://hcmgdztsgjvzcyxyayaj.supabase.co
VITE_SUPABASE_ANON_KEY=<anon_key>
```

### GitHub Secrets (CI/CD)
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
