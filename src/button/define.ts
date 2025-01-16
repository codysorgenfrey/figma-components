import { Button } from './button.js';
import { template } from './template.js';
import { styles } from './styles.js';

Button.compose({
  name: 'figma-button',
  template,
  styles,
}).define();
