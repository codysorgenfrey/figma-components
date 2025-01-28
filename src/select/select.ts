import { attr, FASTElement, observable } from '@microsoft/fast-element';

export class Select extends FASTElement {
  @attr({ mode: 'boolean' }) disabled = false;
  #selectEl?: HTMLSelectElement;
  @observable slottedNodes!: Node[];
  selectedIndex = 0;

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
        if (node instanceof HTMLOptionElement) {
          this.#selectEl?.appendChild(node.cloneNode(true));
          if (node.selected) {
            this.selectedIndex = node.index;
          }
        }
      });
    }
  }

  handleSelectChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    this.selectedIndex = target.selectedIndex;
    console.log('Selected index:', this.selectedIndex);
    this.$emit('change', e);
  };
}
