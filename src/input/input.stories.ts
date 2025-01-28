import {
  renderComponent,
  type StoryArgs,
  type Meta,
  type StoryObj,
} from '../../.storybook/helpers';
import { Input } from './input';
import './define';
import { html } from '@microsoft/fast-element';
import { fn } from '@storybook/test';

const template = html<StoryArgs>`<figma-input
  ?disabled="${(x) => x.disabled}"
  type="${(x) => x.type}"
  placeholder="${(x) => x.placeholder}"
  @change="${(x, c) => {
    x.onChange((c.event.target as Input).value);
    return true;
  }}"
  @keyup="${(x, c) => {
    x.onKeyUp((c.event.target as Input).value);
    return true;
  }}"
  @keydown="${(x, c) => {
    x.onKeyDown((c.event.target as Input).value);
    return true;
  }}"
  @submit="${(x, c) => {
    x.onSubmit((c.event.target as Input).value);
    return true;
  }}"
></figma-input> `;

export default {
  title: 'Components/Input',
  tags: ['autodocs'],
  render: renderComponent(template),
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    type: {
      control: 'radio',
      options: ['text', 'password', 'email', 'number'],
    },
  },
  args: {
    onChange: fn(),
    onKeyUp: fn(),
    onKeyDown: fn(),
    onSubmit: fn(),
  },
} as Meta<Input>;

type Story = StoryObj<Input>;

export const Default: Story = {};
