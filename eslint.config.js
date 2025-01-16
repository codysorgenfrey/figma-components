import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['**/dist/*', '**/node_modules/*'],
  },
  {
    files: ['*.ts'],
  },
  prettierConfig,
];
