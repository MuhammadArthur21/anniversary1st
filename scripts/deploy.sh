#!/usr/bin/env bash
# Simple helper to push this repository to your GitHub and trigger the Actions deploy.
# Usage: edit the REMOTE_URL below if needed, then run: ./scripts/deploy.sh

set -euo pipefail

REMOTE_URL="https://github.com/MuhammadArthur21/anniversary.git"

if [ ! -d .git ]; then
  git init
fi

git add -A
git commit -m "chore: site update" || true
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE_URL"
git push -u origin main

echo "Pushed to origin. GitHub Actions will deploy to gh-pages branch shortly."
