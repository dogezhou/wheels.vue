// karma.conf.js
// 参考 https://vue-test-utils.vuejs.org/guides/#testing-single-file-components-with-karma
var webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],

    files: ['tests/**/*.spec.js'],

    preprocessors: {
      '**/*.spec.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    reporters: ['spec'],

    browsers: ['ChromeHeadless']
  })
}