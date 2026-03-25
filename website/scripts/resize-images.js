const sharp = require('sharp');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '../assets');

const IMAGES = [
  'connectivity',
  'intelligence',
  'live_signals',
  'profile_enrichment',
  'compliance',
  'segmentation',
  'prediction',
  'accessibility',
];

const SIZES = [
  { suffix: '-500w', width: 500, height: 273 },
  { suffix: '-1000w', width: 1000, height: 546 },
];

async function resizeImages() {
  for (const name of IMAGES) {
    const src = path.join(ASSETS_DIR, `${name}.webp`);
    for (const { suffix, width, height } of SIZES) {
      const dest = path.join(ASSETS_DIR, `${name}${suffix}.webp`);
      await sharp(src)
        .resize(width, height, { fit: 'cover', position: 'centre' })
        .webp({ quality: 82 })
        .toFile(dest);
      console.log(`Created: ${name}${suffix}.webp (${width}x${height})`);
    }
  }
  console.log(`\nDone. Generated ${IMAGES.length * SIZES.length} images.`);
}

resizeImages().catch(err => { console.error(err); process.exit(1); });
