import type { Args, Meta, StoryObj } from '@storybook/html';
import { Input } from './input';
import './define';

const render = (args: Args) => /* html */ `<figma-input
  ${args.disabled ? 'disabled' : ''}
  type="${args.type}"
  placeholder="${args.placeholder}"
  ></figma-input>
`;

const meta = {
  title: 'Components/Input',
  tags: ['autodocs'],
  render,
  argTypes: {
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
    type: {
      control: 'radio',
      options: ['text', 'password', 'email', 'number'],
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<Input>;

export const Default: Story = {};
