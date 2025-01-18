import { Button } from './button.js';
import { template } from './template.js';
import { styles } from './styles.js';

const def = Button.compose({
  name: 'figma-button',
  template,
  styles,
});

if (typeof customElements !== 'undefined') {
  def.define(customElements);
}
