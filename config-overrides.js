const path = require('path');
const { override, addWebpackAlias, adjustStyleLoaders, fixBabelImports } = require("customize-cra");

const options = {
  indexFileName: "index.html",
}
module.exports = override(

  addWebpackAlias({
    '@app': path.resolve(__dirname, './src'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@components': path.resolve(__dirname, './src/components'),
    '@page': path.resolve(__dirname, './src/page/'),
    '@api': path.resolve(__dirname, './src/data'),
    '@typeTs': path.resolve(__dirname, './src/typeTs'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@hook': path.resolve(__dirname, './src/hook'),

  }),
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes('scss')) {
      rule.use.push({
        loader: require.resolve('sass-resources-loader'),
        options: {
          resources: [
            './node_modules/bootstrap/scss/_functions.scss',
            './node_modules/bootstrap/scss/_mixins.scss',
            './src/assets/mixins/_mixins.scss',
            './src/assets/_variables.scss',
          ]
        }
      });
    }
  }),
  (config) => {
    // 🔒 根據環境變數設定 publicPath
    const restrictPreview = process.env.REACT_APP_PREVIEW_RESTRICT === 'true';
    if (restrictPreview) {
      config.output.publicPath = '/minMInisMy/';
    }

    if (process.env.NODE_ENV === 'production') {
      config.devtool = false;
    }
    // if (process.env.NODE_ENV === "production") config.devtool = false;

    return config
  },

  adjustStyleLoaders(({ use: [css, postcss, resolve, processor] }) => {
    // css.options.sourceMap = true;// css-loader
    // postcss.options.sourceMap = true; // postcss-loader
    // // when enable pre-processor,
    // // resolve-url-loader will be enabled too
    // if (resolve) {
    //   resolve.options.sourceMap = true;
    //   // resolve-url-loader
    // }
    // // // pre-processor
    // if (processor && processor.loader.includes('sass-loader')) {
    //   //   console.log(processor.options)
    //   processor.options.sourceMap = true; // sass-loader
    // }
  }),
);