import {
  renderComponent,
  type StoryArgs,
  type Meta,
  type StoryObj,
} from '../helpers';
import { html } from '@microsoft/fast-element';
import { Button } from './button';
import './define';

const storyTemplate = html<StoryArgs<Button>>`<figma-button
  appearance="${(x) => x.appearance}"
  ?disabled="${(x) => x.disabled}"
  >Button</figma-button
>`;

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: renderComponent(storyTemplate),
  argTypes: {
    disabled: { control: 'boolean' },
  },
} as Meta<Button>;

export default meta;
type Story = StoryObj<Button>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    appearance: 'primary',
  },
};
