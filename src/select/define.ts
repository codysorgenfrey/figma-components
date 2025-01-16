import { Select } from './select.js';
import { template } from './template.js';
import { styles } from './styles.js';

Select.compose({
  name: 'figma-select',
  template,
  styles,
}).define();
