import { FASTElement, attr } from '@microsoft/fast-element';

export class Input extends FASTElement {
  @attr type: string = '';
  @attr placeholder: string = '';
  value: string = '';

  handleInputKeyUp = (e: KeyboardEvent) => {
    this.value = (e.target as HTMLInputElement).value;
    if (e.key === 'Enter') {
      this.$emit('submit', this.value);
    }
  };

  handleInputChange = (e: Event) => {
    this.value = (e.target as HTMLInputElement).value;
    this.$emit('change', this.value);
  };
}
