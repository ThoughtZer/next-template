const path = require('path');
const withCss = require('@zeit/next-css');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const chalk = require('chalk');
const WithImages = require('next-images');

module.exports = WithImages(withCss({
  generateBuildId: async () => {
    return 'v1.0.0';
  },
  webpack(config) {
    // 编译进度展示
    config.plugins.push(new ProgressBarPlugin({
      format: `build [:bar]${chalk.green.bold(':percent')} (:elapsed seconds)`,
      clear: false,
    }));

    config.resolve.alias['@/components'] = path.join(__dirname, './components');
    config.resolve.alias['@/lib'] = path.join(__dirname, './lib');
    config.resolve.alias['@/store'] = path.join(__dirname, './store');
    config.resolve.alias['@/styled-components'] = path.join(__dirname, './styled-components');

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
