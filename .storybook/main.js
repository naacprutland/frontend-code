const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
    stories: [
        "../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
      ],
    staticDirs: ['../public', '../static'],
    addons: [
      '@storybook/addon-queryparams',
        '@chakra-ui/storybook-addon',
        '@storybook/addon-links',
        '@storybook/addon-actions',
        '@storybook/addon-viewport',
        // '@storybook/addon-docs',
        {
          name: '@storybook/addon-docs',
          options: {
            configureJSX: true,
            babelOptions: {},
            sourceLoaderOptions: null,
            transcludeMarkdown: true,
          },
        },
        '@storybook/addon-controls',
        '@storybook/addon-backgrounds',
        '@storybook/addon-toolbars',
        '@storybook/addon-measure',
        '@storybook/addon-outline',
    ],
    core: {
        builder: 'webpack5'
    },
    typescript: { reactDocgen: false },
};