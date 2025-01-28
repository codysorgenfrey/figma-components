import {
  renderComponent,
  type StoryArgs,
  type Meta,
  type StoryObj,
} from '../helpers';
import { Input } from './input';
import './define';
import { html } from '@microsoft/fast-element';

const template = html<StoryArgs>`<figma-input
  ?disabled="${(x) => x.disabled}"
  type="${(x) => x.type}"
  placeholder="${(x) => x.placeholder}"
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
} as Meta<Input>;

type Story = StoryObj<Input>;

export const Default: Story = {};
