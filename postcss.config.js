
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    ...(process.env.NODE_ENV === 'production'
      ? {
        '@fullhuman/postcss-purgecss': {
          content: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        },
      }
      : {}
    ),
    'postcss-preset-env': { stage: 4 },
    'autoprefixer': {},
  },
};