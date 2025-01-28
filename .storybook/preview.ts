import type { Preview } from '@storybook/html';
import '../src/theme-provider/define';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => `<figma-theme-provider>${Story()}</figma-theme-provider>`,
  ],
};

export default preview;
