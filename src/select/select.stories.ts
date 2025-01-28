import type { Args, Meta, StoryObj } from '@storybook/html';
import { fn } from '@storybook/test';
import { Select } from './select';
import './define';

const render = (args: Args) => {
  document.addEventListener('change', (e) => {
    if (e.target instanceof Select)
      args.onChange(`Selected index: ${e.target.selectedIndex}`);
  });
  return /* html */ `<figma-select
    ${args.disabled ? 'disabled' : ''}
    >
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
  </figma-select>`;
};

const meta = {
  title: 'Components/Select',
  tags: ['autodocs'],
  render,
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    onChange: fn(),
  },
} as Meta;

export default meta;
type Story = StoryObj<Select>;

export const Default: Story = {};
