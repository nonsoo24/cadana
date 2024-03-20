const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // chainWebpack: (config) => {
  //   const svgRule = config.module.rule('svg');

  //   svgRule.uses.clear();
  //   svgRule
  //     .use('vue-svg-loader')
  //     .loader('vue-svg-loader');
  // },
  transpileDependencies: true,
});
