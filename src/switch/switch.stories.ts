import {
  renderComponent,
  type StoryArgs,
  type Meta,
  type StoryObj,
} from '../helpers';
import { Switch } from './switch';
import './define';
import { html } from '@microsoft/fast-element';

const template = html<StoryArgs>`<figma-switch></figma-switch> `;

export default {
  title: 'Components/Switch',
  tags: ['autodocs'],
  render: renderComponent(template),
  argTypes: {},
} as Meta<Switch>;

type Story = StoryObj<Switch>;

export const Default: Story = {};
