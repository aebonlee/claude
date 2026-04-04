#!/usr/bin/env bash
# ============================================
# Supabase 로컬 DB 리셋 (개발용)
# 사용법: bash scripts/supabase-db-reset.sh
# ============================================

set -euo pipefail

echo "=== Supabase 로컬 DB 리셋 ==="
echo "※ 주의: 로컬 DB의 모든 데이터가 삭제됩니다."
read -p "계속하시겠습니까? (y/N): " confirm
if [[ "$confirm" != "y" && "$confirm" != "Y" ]]; then
  echo "취소됨."
  exit 0
fi

# 리셋 (마이그레이션 재적용 + seed 실행)
npx supabase db reset

echo ""
echo "=== 로컬 DB 리셋 완료 ==="
