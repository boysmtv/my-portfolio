#!/bin/bash
# sync.sh — Sesuaikan kode dengan .ai-memory

MASTER_PROMPT=$(cat .ai-memory/master_prompt.md)
CONTEXT=$(cat .ai-memory/context.md)
WORK_LOG=$(cat .ai-memory/work_log.json)

# Gabungkan semua kode
CODE_DUMP=""
for file in $(find . -type f \( \
  -name "*.tsx" -o -name "*.ts" -o \
  -name "*.css" -o -name "Dockerfile" -o \
  -name "docker-compose.yml" \
  \) \
  ! -path "*/node_modules/*" \
  ! -path "*/.next/*" \
  ! -path "*/.ai-memory/*" \
); do
  CODE_DUMP+="
=== FILE: $file ===
$(cat $file)
"
done

gemini "$MASTER_PROMPT

---

$CONTEXT

---

Work log (sudah dikerjakan):
$WORK_LOG

---

Ini semua kode project yang sudah ada:
$CODE_DUMP

---

Sesuaikan semua kode di atas agar 100% sesuai dengan master_prompt dan context di atas.
Output: tulis ulang file yang perlu diubah secara LENGKAP."