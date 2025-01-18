import { Switch } from './switch.js';
import { template } from './template.js';
import { styles } from './styles.js';

const def = Switch.compose({
  name: 'figma-switch',
  template,
  styles,
});

if (typeof customElements !== 'undefined') {
  def.define(customElements);
}
