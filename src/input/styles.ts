import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    display: inline-block;
    box-sizing: border-box;
    min-width: 128px;
    height: 24px;
  }

  input {
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;
    background: var(--figma-color-bg-secondary);
    color: var(--figma-color-text);
    font-size: 11px;
    font-weight: medium;
    font-family: Inter, sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 4px 8px;
    cursor: text;

    &:hover {
      border: 1px solid var(--figma-color-border);
    }

    &::placeholder {
      color: var(--figma-color-text-tertiary);
    }

    &:focus-visible {
      border: 1px solid var(--figma-color-border-selected);
      outline: none;
    }
  }

  :host([disabled]) input {
    background: var(--figma-color-bg-tertiary);
    color: var(--figma-color-text-tertiary);
    cursor: not-allowed;
  }
`;
