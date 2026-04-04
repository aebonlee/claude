#!/usr/bin/env bash
# ============================================
# Supabase 프로젝트 상태 확인
# 사용법: bash scripts/supabase-status.sh
# ============================================

set -euo pipefail

PROJECT_REF="hcmgdztsgjvzcyxyayaj"

echo "=== Supabase 프로젝트 상태 ==="
echo "Project Ref: $PROJECT_REF"
echo "Dashboard:   https://supabase.com/dashboard/project/$PROJECT_REF"
echo ""

# 마이그레이션 목록
echo "--- 마이그레이션 목록 ---"
npx supabase migration list 2>/dev/null || echo "(링크되지 않음 - npx supabase link 먼저 실행)"

echo ""
echo "--- 로컬 마이그레이션 파일 ---"
ls -la supabase/migrations/ 2>/dev/null || echo "(마이그레이션 파일 없음)"
