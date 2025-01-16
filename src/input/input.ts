import { FASTElement, attr } from '@microsoft/fast-element';

export class Input extends FASTElement {
  @attr type: string = 'text';
  @attr placeholder: string = '';
  value: string = '';

  handleInputChange = (e: Event) => {
    this.value = (e.target as HTMLInputElement).value;
    this.$emit('change', this.value);
  };
}
