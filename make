magick convert -background none -density 1200 -resize 512x512 logo.svg ./public/wordnet-512.png
magick convert -background none -density 1200 -resize 192x192 logo.svg ./public/wordnet-192.png
magick convert -background none -density 1200 -resize 32x32 logo.svg ./app/favicon.ico
magick convert -background none -density 1200 -resize 410x410 logo.svg -gravity center -extent 512x512 ./public/wordnet-512-maskable.png
magick convert -background none -density 1200 -resize 154x154 logo.svg -gravity center -extent 192x192 ./public/wordnet-192-maskable.png
