import { html, slotted } from '@microsoft/fast-element';
import { Select } from './select.js';

export const template = html<Select>` <select
    part="control"
    ?disabled="${(x) => x.disabled}"
    @change="${(x, c) => x.handleSelectChange(c.event)}"
  ></select>
  <slot ${slotted('slottedNodes')}></slot>`;
