#!/usr/bin/env bash
set -euo pipefail

GREEN='\033[0;32m'
YELLOW='\033[0;33m'
RED='\033[0;31m'
NC='\033[0m'

ok()   { printf "${GREEN}✓${NC} %s\n" "$1"; }
warn() { printf "${YELLOW}!${NC} %s\n" "$1"; }
fail() { printf "${RED}✗${NC} %s\n" "$1"; }

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Kahve Yorumla — güvenlik kontrol çıktısı"
echo "----------------------------------------"

if [ -f "public/_headers" ]; then
  ok "public/_headers mevcut (Cloudflare Pages security headers)."
  for header in "X-Content-Type-Options" "X-Frame-Options" "Referrer-Policy" \
                "Permissions-Policy" "Strict-Transport-Security" \
                "Content-Security-Policy"; do
    if grep -q "$header" public/_headers; then
      ok "Header bulundu: $header"
    else
      warn "Header eksik olabilir: $header"
    fi
  done
else
  fail "public/_headers bulunamadı."
fi

echo
if grep -RIn --include="*.tsx" --include="*.ts" "target=\"_blank\"" src \
   | grep -v "rel=\"noopener noreferrer\"" >/dev/null; then
  warn "rel=\"noopener noreferrer\" olmayan target=\"_blank\" link(ler)i bulundu."
else
  ok "Tüm target=\"_blank\" linkleri rel=\"noopener noreferrer\" içeriyor."
fi

echo
if grep -RIn --include="*.ts" --include="*.tsx" --include="*.json" \
  -E "(api[-_]key|secret|password)\s*[:=]\s*[\"'][^\"']+[\"']" src 2>/dev/null \
  | grep -v "placeholder\|example" >/dev/null; then
  fail "Kaynak kodda olası gizli anahtar bulundu — incelenmeli."
else
  ok "Kaynak kodda apaçık gizli anahtar tespit edilmedi."
fi

echo
if [ -f ".env" ] || [ -f ".env.local" ]; then
  warn "Yerel .env dosyası mevcut. Repository'ye eklenmediğinden emin olun."
else
  ok ".env / .env.local dosyası bulunmuyor."
fi

echo
if command -v npm >/dev/null 2>&1; then
  echo "npm audit (production) çalıştırılıyor..."
  npm audit --omit=dev --audit-level=high || warn "npm audit yüksek/kritik bulgular bildirdi."
else
  warn "npm bulunamadı; npm audit atlanıyor."
fi

echo
ok "Güvenlik kontrolü tamamlandı."
