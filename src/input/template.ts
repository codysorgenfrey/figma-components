import { html } from '@microsoft/fast-element';
import { Input } from './input.js';

export const template = html<Input>` <input
  type="${(x) => x.type}"
  placeholder="${(x) => x.placeholder}"
  part="control"
  @change="${(x, c) => x.handleInputChange(c.event)}"
  @keyup="${(x, c) => x.handleInputKeyUp(c.event as KeyboardEvent)}"
  ?disabled="${(x) => x.disabled}"
/>`;
