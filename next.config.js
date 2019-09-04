const path = require('path');
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');

const prod = process.env.NODE_ENV === 'production';

module.exports = withLess(withCss({
  distDir: prod ? 'build' : '.next',
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
    localIdentName: '[local]___[hash:base64:5]',
  },
  postcssLoaderOptions: {
    parser: true,
  },
  webpack(config) {
    // 编译进度展示
    config.plugins.push(new ProgressBarPlugin({
      format: `build [:bar]${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }));

    // eslint 校验 loader
    const eslintRule = {
      enforce: 'pre',
      test: /.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: [
        path.resolve(__dirname, '/node_modules'),
      ],
    };
    config.module.rules.push(eslintRule);
    return config;
  },
}));
