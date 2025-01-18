import { Select } from './select.js';
import { template } from './template.js';
import { styles } from './styles.js';

const def = Select.compose({
  name: 'figma-select',
  template,
  styles,
});

if (typeof customElements !== 'undefined') {
  def.define(customElements);
}
