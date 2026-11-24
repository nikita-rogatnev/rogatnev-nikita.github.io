#!/usr/bin/env bash
# Generates display-sized WebP copies next to the source images in public/img.
# Requires cwebp (brew install webp). Usage: npm run images
set -euo pipefail
cd "$(dirname "$0")/../public/img"

# to_webp <source> <max-width> <max-height> [output]   (0 = keep aspect ratio)
to_webp() {
    local src="$1" out="${4:-${1%.*}.webp}"
    if [ "$out" -nt "$src" ]; then return; fi
    cwebp -quiet -q 86 -alpha_q 100 -m 6 -resize "$2" "$3" "$src" -o "$out"
    echo "$out"
}

# Badges are shown at most 115px tall (2x for retina).
for f in badges/*.png; do
    case "$f" in
        badges/star-lead-auditor.png) ;; # palette PNG is already smaller than WebP
        badges/yellow.png) ;; # not shown on the page
        badges/yandex-partner.png) to_webp "$f" 480 0 ;;
        *) to_webp "$f" 0 240 ;;
    esac
done

# Company / school logos are shown at most 50px tall.
for f in resume/breakout.png resume/csa.png resume/ix.png resume/mamk.png resume/spbgut.png resume/profolios.jpeg; do
    to_webp "$f" 0 150
done
to_webp resume/soc2.jpeg 0 150 resume/soc2-guild.webp

# Article thumbnails are shown at most 210px wide.
for f in dpdp gdpr star soc2; do
    to_webp "resume/$f.png" 420 0 "resume/$f-article.webp"
done
