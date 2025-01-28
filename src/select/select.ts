import { attr, FASTElement, observable } from '@microsoft/fast-element';

export class Select extends FASTElement {
  @attr({ mode: 'boolean' }) disabled = false;
  @observable test = 'test';
  @observable slottedNodes: Node[] = [];
  selectedIndex = 0;
  #selectEl?: HTMLSelectElement;

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

  testChanged(newVal: string, oldVal: string) {
    console.log('Test changed', newVal, oldVal);
  }

  slottedNodesChanged() {
    console.log('Slotted nodes changed', this.slottedNodes);
    if (this.#selectEl) {
      this.#selectEl.innerHTML = '';
      this.slottedNodes.forEach((node) => {
        if (node instanceof HTMLOptionElement) {
          console.log('Appending option element', node);
          this.#selectEl?.appendChild(node.cloneNode(true));
          if (node.selected) {
            this.selectedIndex = node.index;
          }
        } else {
          console.log('Only option elements are allowed as children');
        }
      });
    }
  }

  handleSelectChange = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    this.selectedIndex = target.selectedIndex;
    this.$emit('change', e);
  };
}
