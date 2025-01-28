import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    box-sizing: border-box;
    display: inline-block;
    min-width: 128px;
    height: 24px;
  }

  select {
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    height: 100%;
    border: 1px solid var(--figma-color-border);
    border-radius: 4px;
    background: var(--figma-color-bg);
    color: var(--figma-color-text);
    font-size: 11px;
    font-weight: medium;
    font-family: Inter, sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 4px 8px;

    &:hover {
      background: var(--figma-color-bg-hover);
      cursor: pointer;
    }

    &:active {
      background: var(--figma-color-bg-pressed);
    }

    &:focus-visible {
      border: 1px solid white;
      outline: 1px solid black;
    }
  }

  slot {
    display: none;
  }

  :host([disabled]) select {
    background: var(--figma-color-bg-disabled);
    color: var(--figma-color-text-disabled);
    border: 1px solid var(--figma-color-border-disabled);
    cursor: not-allowed;
  }
`;
