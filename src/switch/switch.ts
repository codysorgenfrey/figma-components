import { FASTElement, attr } from '@microsoft/fast-element';

export class Switch extends FASTElement {
  @attr({ mode: 'boolean' }) checked = false;
  @attr({ mode: 'boolean' }) disabled = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('role', 'switch');
    this.setAttribute('tabindex', '0');
    this.addEventListener('click', this.onClick);
    this.addEventListener('keydown', this.onKeyDown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.onClick);
    this.removeEventListener('keydown', this.onKeyDown);
  }

  onClick = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.setAttribute('aria-checked', this.checked.toString());
    this.$emit('change', { checked: this.checked });
  };

  onKeyDown = (e: Event) => {
    if (this.disabled) return;
    if (!(e instanceof KeyboardEvent)) return;
    if (e.key === 'Enter' || e.key === ' ') {
      this.onClick();
    }
  };
}
