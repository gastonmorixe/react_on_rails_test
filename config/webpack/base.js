const { webpackConfig } = require("@rails/webpacker");

webpackConfig.output = {
  ...webpackConfig.output,
  // library: 'myLib',
  // libraryTarget: 'umd',
  // filename: 'myLib.js',
  globalObject: "this",
};

module.exports = webpackConfig;
