#!/usr/bin/env bash
# ============================================
# 새 Supabase 마이그레이션 파일 생성
# 사용법: bash scripts/supabase-migration-new.sh <migration_name>
# 예시:   bash scripts/supabase-migration-new.sh add_comments_table
# ============================================

set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "사용법: bash scripts/supabase-migration-new.sh <migration_name>"
  echo "예시:   bash scripts/supabase-migration-new.sh add_comments_table"
  exit 1
fi

MIGRATION_NAME="$1"

echo "=== 새 마이그레이션 생성: $MIGRATION_NAME ==="
npx supabase migration new "$MIGRATION_NAME"

echo ""
echo "생성된 파일:"
ls -t supabase/migrations/ | head -1
echo ""
echo "파일을 편집한 후 'bash scripts/supabase-db-push.sh'로 적용하세요."
