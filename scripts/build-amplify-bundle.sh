#!/usr/bin/env bash
# Build the Amplify Hosting SSR deployment bundle (deployment-spec format) and zip it.
#
# NEXT_PUBLIC_* vars are inlined at BUILD time, so set them before running this
# (e.g. in a .env.production file) or OAuth/base-url will be undefined on the client.
# Runtime-only secrets (GOOGLE_CLIENT_SECRET, FACEBOOK_CLIENT_SECRET, NEXTAUTH_SECRET,
# NEXTAUTH_URL) are read by the server at runtime — set those in the Amplify app env, not here.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=".amplify-hosting"
ZIP="receipters-amplify.zip"

echo "==> next build (output: standalone)"
yarn build

echo "==> assembling $OUT"
rm -rf "$OUT" "$ZIP"
mkdir -p "$OUT/compute/default" "$OUT/static/_next/static"

# Compute = self-contained Node server (server.js + node_modules + .next + public).
# public/ must be in compute: the /api/locales route reads it from the filesystem at runtime.
cp -R .next/standalone/. "$OUT/compute/default/"
# Static CDN assets.
cp -R .next/static/. "$OUT/static/_next/static/"
cp -R public/. "$OUT/static/"

# deploy-manifest.json is version-controlled at the repo root — copy it into the bundle root.
if [ ! -f deploy-manifest.json ]; then
  echo "ERROR: ./deploy-manifest.json missing (it should be version-controlled)." >&2
  exit 1
fi
cp deploy-manifest.json "$OUT/deploy-manifest.json"

echo "==> zipping -> $ZIP (deploy-manifest.json at archive root)"
( cd "$OUT" && zip -rqy "../$ZIP" . -x '*.DS_Store' )

echo "==> done: $ZIP"
ls -lh "$ZIP"
