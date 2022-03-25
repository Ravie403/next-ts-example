import type { StorybookConfig } from '@storybook/core-common'
const config: StorybookConfig = {
  stories: [
    "../__stories__/**/*.stories.mdx",
    "../__stories__/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  refs: {
    'design-system': {
      title: 'Storybook Design System',
      url: 'https://62367e824fe4fc003a19f5ba-uzqmxfsqsn.chromatic.com',
    },
  }
}
export default config
