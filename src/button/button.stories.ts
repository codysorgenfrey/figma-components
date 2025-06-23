import { html } from '@microsoft/fast-element';
import {
  renderComponent,
  type StoryArgs,
  type Meta,
  type StoryObj,
} from '../../.storybook/helpers.js';
import { Button } from './button.js';
import './define';
import { fn } from '@storybook/test';

const template = html<StoryArgs>`<figma-button
  appearance="${(x) => x.appearance}"
  size="${(x) => x.size}"
  ?disabled="${(x) => x.disabled}"
  ?icon-only="${(x) => x.iconOnly}"
  @click="${(x, c) => x.onClick(c.event)}"
>
  ${(x) =>
    x.iconOnly
      ? html`<svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.08859 4.21569L4.14645 4.14645C4.32001 3.97288 4.58944 3.9536 4.78431 4.08859L4.85355 4.14645L10 9.293L15.1464 4.14645C15.32 3.97288 15.5894 3.9536 15.7843 4.08859L15.8536 4.14645C16.0271 4.32001 16.0464 4.58944 15.9114 4.78431L15.8536 4.85355L10.707 10L15.8536 15.1464C16.0271 15.32 16.0464 15.5894 15.9114 15.7843L15.8536 15.8536C15.68 16.0271 15.4106 16.0464 15.2157 15.9114L15.1464 15.8536L10 10.707L4.85355 15.8536C4.67999 16.0271 4.41056 16.0464 4.21569 15.9114L4.14645 15.8536C3.97288 15.68 3.9536 15.4106 4.08859 15.2157L4.14645 15.1464L9.293 10L4.14645 4.85355C3.97288 4.67999 3.9536 4.41056 4.08859 4.21569L4.14645 4.14645L4.08859 4.21569Z"
            fill="currentColor"
          />
        </svg> `
      : 'Button'}
</figma-button>`;

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: renderComponent(template),
  argTypes: {
    disabled: { control: 'boolean' },
    appearance: {
      control: 'radio',
      options: ['primary', 'secondary', 'subtle'],
    },
    size: {
      control: 'radio',
      options: ['medium', 'small'],
    },
    iconOnly: { control: 'boolean' },
  },
  args: {
    onClick: fn(),
  },
} as Meta<Button>;

type Story = StoryObj<Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    appearance: 'primary',
  },
};

export const Subtle: Story = {
  args: {
    appearance: 'subtle',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const IconOnly: Story = {
  args: {
    appearance: 'primary',
    iconOnly: true,
  },
};
