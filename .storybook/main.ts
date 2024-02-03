import type { StorybookConfig } from '@storybook/react-webpack5'
import '../src/styles/index.css'

const config: StorybookConfig = {
  stories: [
    '../src/stories/*.mdx',
    '../src/stories/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
