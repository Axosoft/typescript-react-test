// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

// custom loaders
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx']
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        // use: [{
        //   loader: require.resolve('ts-loader'),
        //   options: {
        //     // disable type checker - we will use it in fork plugin
        //     getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        //     transpileOnly: true,
        //   },
        // }, {
        use: [{
          loader: require.resolve('awesome-typescript-loader')
        }, {
          loader: require.resolve('react-docgen-typescript-loader')
        }]
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../')
      },
      // {
      //   loader: require.resolve('file-loader'),
      //   // Exclude `js` files to keep "css" loader working as it injects
      //   // it's runtime that would otherwise processed through "file" loader.
      //   // Also exclude `html` and `json` extensions so they get processed
      //   // by webpacks internal loaders.
      //   exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
      //   options: {
      //     name: 'static/media/[name].[hash:8].[ext]',
      //   },
      // },
      {
        test: /\.svg$/,
        loaders: ['file-loader'],
        include: path.resolve(__dirname, '../')
      }
      // add your custom rules.
    ],
  },
};
