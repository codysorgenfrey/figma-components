import {
  renderComponent,
  type StoryArgs,
  type Meta,
  type StoryObj,
} from '../helpers';
import { Spinner } from './spinner';
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
