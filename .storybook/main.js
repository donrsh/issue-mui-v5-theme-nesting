const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config, { configType }) => {
    /* 
      Set project root as baseUrl in stories. 
      Ref: https://github.com/storybookjs/storybook/issues/3916#issuecomment-490287662
    */
    config.resolve.modules.push(path.resolve(__dirname, "../src/"));

    return config;
  },
};
