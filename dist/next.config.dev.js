"use strict";

var withPlugins = require('next-compose-plugins');

var optimizedImages = require('next-optimized-images');

module.exports = withPlugins([[optimizedImages, {
  mozjpeg: {
    quality: 80
  },
  pngquant: {
    speed: 3,
    strip: true,
    verbose: true
  },
  imagesPublicPath: '/olsonjosh/_next/static/images/'
}], {
  basePath: '/olsonjosh',
  assetPrefix: '/olsonjosh/',
  env: env
}]);