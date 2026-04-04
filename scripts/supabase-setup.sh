#!/usr/bin/env bash
# ============================================
# Supabase 프로젝트 초기 설정 스크립트
# 사용법: bash scripts/supabase-setup.sh
# ============================================

set -euo pipefail

PROJECT_REF="hcmgdztsgjvzcyxyayaj"
SITE_URL="https://claude.dreamitbiz.com"

echo "=== Supabase 프로젝트 설정 ==="

# 1. 프로젝트 링크
echo "[1/3] 프로젝트 링크..."
npx supabase link --project-ref "$PROJECT_REF"

# 2. 마이그레이션 적용
echo "[2/3] 마이그레이션 적용..."
npx supabase db push

# 3. 상태 확인
echo "[3/3] 프로젝트 상태 확인..."
npx supabase status

echo ""
echo "=== 설정 완료 ==="
echo "Dashboard: https://supabase.com/dashboard/project/$PROJECT_REF"
echo "Site URL:  $SITE_URL"
echo ""
echo "※ Google/Kakao OAuth는 Supabase Dashboard > Authentication > Providers에서"
echo "  Client ID / Secret을 직접 설정해야 합니다."
