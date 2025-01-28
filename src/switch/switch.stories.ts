import {
  renderComponent,
  type StoryArgs,
  type Meta,
  type StoryObj,
} from '../../.storybook/helpers.js';
import { Switch } from './switch.js';
import './define';
import { html } from '@microsoft/fast-element';
import { fn } from '@storybook/test';

const template = html<StoryArgs>`<figma-switch
  ?disabled="${(x) => x.disabled}"
  ?checked="${(x) => x.checked}"
  @change="${(x, c) => x.onChange((c.event.target as Switch).checked)}"
  @click="${(x, c) => x.onClick((c.event.target as Switch).checked)}"
></figma-switch> `;

export default {
  title: 'Components/Switch',
  tags: ['autodocs'],
  render: renderComponent(template),
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: {
    onChange: fn(),
    onClick: fn(),
  },
} as Meta<Switch>;

type Story = StoryObj<Switch>;

export const Default: Story = {};
