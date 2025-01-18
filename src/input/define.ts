import { Input } from './input.js';
import { template } from './template.js';
import { styles } from './styles.js';

const def = Input.compose({
  name: 'figma-input',
  template,
  styles,
});

if (typeof customElements !== 'undefined') {
  def.define(customElements);
}
