import { Spinner } from './spinner.js';
import { template } from './template.js';
import { styles } from './styles.js';

const def = Spinner.compose({
  name: 'figma-spinner',
  template,
  styles,
});

if (typeof customElements !== 'undefined') {
  def.define(customElements);
}
