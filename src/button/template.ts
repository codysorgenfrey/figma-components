import { html } from '@microsoft/fast-element';
import { Button } from './button.js';

export const template = html<Button>`
  <button ?disabled="${(x) => x.disabled}">
    <slot>Button</slot>
  </button>
`;
