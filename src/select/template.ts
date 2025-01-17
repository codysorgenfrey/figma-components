import { html, slotted } from '@microsoft/fast-element';
import { Select } from './select.js';

export const template = html<Select>` <select part="control"></select>
  <slot ${slotted('slottedNodes')}></slot>`;
