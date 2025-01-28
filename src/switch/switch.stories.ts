import type { Meta, StoryObj } from '@storybook/html';
import { Switch } from './switch';
import './define';

const render = () => /* html */ `<figma-switch></figma-switch>
`;

const meta = {
  title: 'Components/Switch',
  tags: ['autodocs'],
  render,
  argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<Switch>;

export const Default: Story = {};
