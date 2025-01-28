import type { Meta, StoryObj } from '@storybook/html';
import { Spinner } from './spinner';
import './define';

const render = () => /* html */ `<figma-spinner></figma-spinner>
`;

const meta = {
  title: 'Components/Spinner',
  tags: ['autodocs'],
  render,
  argTypes: {},
} as Meta;

export default meta;
type Story = StoryObj<Spinner>;

export const Default: Story = {};
