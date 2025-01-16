import { Input } from './input.js';
import { template } from './template.js';
import { styles } from './styles.js';

Input.compose({
  name: 'figma-input',
  template,
  styles,
}).define();
