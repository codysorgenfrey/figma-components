import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid var(--figma-color-bg-brand-tertiary);
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner {
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: var(--figma-color-bg-brand);
    animation: spin 1s linear infinite;
  }
`;
