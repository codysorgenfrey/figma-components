import { css } from '@microsoft/fast-element';

export const styles = css`
  select {
    box-sizing: border-box;
    flex: 1;
    width: 100%;
    height: 24px;
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
`;
