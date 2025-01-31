import {
  renderComponent,
  type StoryArgs,
  type Meta,
  type StoryObj,
} from '../../.storybook/helpers.js';
import { Spinner } from './spinner.js';
import './define';
import { html } from '@microsoft/fast-element';

const template = html<StoryArgs>`<figma-spinner></figma-spinner> `;

export default {
  title: 'Components/Spinner',
  tags: ['autodocs'],
  render: renderComponent(template),
  argTypes: {},
} as Meta<Spinner>;

type Story = StoryObj<Spinner>;

export const Default: Story = {};
