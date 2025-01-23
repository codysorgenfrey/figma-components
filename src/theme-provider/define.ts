import { ThemeProvider } from './theme-provider.js';
import { template } from './template.js';
import { styles } from './styles.js';

const def = ThemeProvider.compose({
  name: 'figma-theme-provider',
  template,
  styles,
});

if (typeof customElements !== 'undefined') {
  def.define(customElements);
}
