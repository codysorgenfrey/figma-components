import { attr, FASTElement, observable } from '@microsoft/fast-element';

export class Select extends FASTElement {
  @attr({ mode: 'boolean' }) disabled = false;
  #selectEl?: HTMLSelectElement;
  @observable slottedNodes!: Node[];

  connectedCallback(): void {
    super.connectedCallback();
    this.#selectEl = this.shadowRoot?.querySelector(
      'select',
    ) as HTMLSelectElement;
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#selectEl = undefined;
  }

  slottedNodesChanged() {
    if (this.#selectEl) {
      this.#selectEl.innerHTML = '';
      this.slottedNodes.forEach((node) => {
        this.#selectEl?.appendChild(node.cloneNode(true));
      });
    }
  }
}
