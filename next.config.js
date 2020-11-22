const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/olsonjosh/_next/static/images/',
    optimizeImagesInDev: true,
  }],
  {
    basePath: '/olsonjosh',
    assetPrefix: '/olsonjosh/',
  },
]);