const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')
const mdx = require('@next/mdx')

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  [mdx, {
    extension: /\.mdx?$/,
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
  }]
])