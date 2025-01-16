import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    display: inline-block;
    box-sizing: border-box;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid transparent;
    outline: 1px solid transparent;
    cursor: pointer;
  }

  :host(:focus-visible) {
    border: 1px solid white;
    outline: 1px solid black;
  }

  .container {
    --switch-width: 32px;
    --switch-height: 16px;
    --switch-padding: 1px;
    width: var(--switch-width);
    height: var(--switch-height);
    display: inline-block;
    position: relative;
    border-radius: 1000px;
    background-color: var(--figma-color-bg-disabled);
  }

  :host(:hover) .container {
    background-color: var(--figma-color-bg-hover);
  }

  :host(:active) .container {
    background-color: var(--figma-color-bg-pressed);
  }

  :host([checked]) .container {
    background-color: var(--figma-color-bg-brand);
  }

  :host([checked]:hover) .container {
    background-color: var(--figma-color-bg-brand-hover);
  }

  :host([checked]:active) .container {
    background-color: var(--figma-color-bg-brand-pressed);
  }

  .indicator {
    position: absolute;
    top: var(--switch-padding);
    left: var(--switch-padding);
    width: calc(var(--switch-height) - var(--switch-padding) * 2);
    height: calc(var(--switch-height) - var(--switch-padding) * 2);
    border-radius: 1000px;
    background-color: var(--figma-color-bg);
    transition: transform 0.2s;
  }

  :host([checked]) .indicator {
    transform: translateX(var(--switch-height));
  }
`;
