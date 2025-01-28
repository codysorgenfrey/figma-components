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
  ?disabled="${(x) => x.disabled}"
  @click="${(x, c) => x.onClick(c.event)}"
>
  Button
</figma-button>`;

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: renderComponent(template),
  argTypes: {
    disabled: { control: 'boolean' },
    appearance: {
      control: 'radio',
      options: ['primary'],
    },
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
