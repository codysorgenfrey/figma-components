import { FASTElement, attr } from '@microsoft/fast-element';

export class Button extends FASTElement {
  @attr({ mode: 'boolean' }) disabled = false;
}
