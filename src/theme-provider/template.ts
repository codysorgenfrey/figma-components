import { html } from '@microsoft/fast-element';
import { ThemeProvider } from './theme-provider.js';

export const template = html<ThemeProvider>` <slot></slot>`;
