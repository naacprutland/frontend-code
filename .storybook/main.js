const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    stories: [
        "../src/stories/**/*.stories.mdx",
        "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
      ],
    staticDirs: ['../public', '../static'],
    addons: ['@chakra-ui/storybook-addon'],
    core: {
        builder: 'webpack5'
    },
    typescript: { reactDocgen: false },
};