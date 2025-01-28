import type { Preview } from '@storybook/html';
import '../src/theme-provider/define';
import { PartialStoryFn } from 'storybook/internal/types';
import { html } from '@microsoft/fast-element';
import { renderComponent } from '../src/helpers';

const ThemeDecorator = (Story: PartialStoryFn, context) => {
  const element = renderComponent(html`
    <style>
      :root,
      .sb-main-fullscreen,
      #storybook-root {
        width: 100%;
        height: 100%;
      }

      figma-theme-provider {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 1em;
      }
    </style>
    <figma-theme-provider>${() => Story()}</figma-theme-provider>
  `);

  return Story();
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
