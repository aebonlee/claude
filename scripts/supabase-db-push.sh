#!/usr/bin/env bash
# ============================================
# Supabase DB 마이그레이션 푸시
# 사용법: bash scripts/supabase-db-push.sh
# ============================================

set -euo pipefail

echo "=== Supabase DB 마이그레이션 푸시 ==="

# 마이그레이션 파일 목록 확인
echo "[1/3] 마이그레이션 파일 확인..."
ls -la supabase/migrations/

# 원격 DB에 마이그레이션 적용
echo "[2/3] 원격 DB에 마이그레이션 적용..."
npx supabase db push

# 적용 상태 확인
echo "[3/3] 마이그레이션 상태 확인..."
npx supabase migration list

echo ""
echo "=== DB 마이그레이션 완료 ==="
