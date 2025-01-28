import type { Preview } from '@storybook/html';
import '../src/theme-provider/define';
import { PartialStoryFn } from 'storybook/internal/types';

const ThemeDecorator = (Story: PartialStoryFn) => {
  const story = Story() as DocumentFragment | Element;
  const provider = document.createElement('figma-theme-provider');
  provider.appendChild(story);
  return provider;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [ThemeDecorator],
};

export default preview;
