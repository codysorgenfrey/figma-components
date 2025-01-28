import {
  renderComponent,
  type StoryArgs,
  type Meta,
  type StoryObj,
} from '../helpers';
import { fn } from '@storybook/test';
import { Select } from './select';
import './define';
import { html } from '@microsoft/fast-element';

type Story = StoryObj<Select>;

const template = html<StoryArgs>`<figma-select
  ?disabled=${(x) => x.disabled}
  @change=${(x, c) => x.onChange((c.event.target as Select).selectedIndex)}
>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</figma-select>`;

export default {
  title: 'Components/Select',
  tags: ['autodocs'],
  render: renderComponent(template),
  argTypes: {
    disabled: { control: 'boolean' },
  },
  args: {
    onChange: fn(),
  },
} as Meta<Select>;

export const Default: Story = {};
