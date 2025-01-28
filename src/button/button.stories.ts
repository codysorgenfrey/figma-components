import type { Args, Meta, StoryObj } from '@storybook/html';
import { Button, ButtonAppearance } from './button';
import './define';

const render = (args: Args) => /* html */ `<figma-button
  appearance="${args.appearance}"
  ${args.disabled ? 'disabled' : ''}
  >
  Button
  </figma-button
>`;

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render,
  argTypes: {
    disabled: { control: 'boolean' },
    appearance: {
      control: {
        type: 'inline-radio',
        options: Object.keys(ButtonAppearance),
      },
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    appearance: 'primary',
  },
};
