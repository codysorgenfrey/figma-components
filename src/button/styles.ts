import { css } from '@microsoft/fast-element';

export const styles = css`
  button {
    width: fit-content;
    border: 1px solid var(--figma-color-border);
    border-radius: 4px;
    background: var(--figma-color-bg);
    color: var(--figma-color-text);
    font-size: 11px;
    font-weight: medium;
    padding: 10px 12px;
    cursor: pointer;
    align-self: flex-end;

    &:hover {
      background: var(--figma-color-bg-hover);
    }

    &:active {
      background: var(--figma-color-bg-pressed);
    }

    &:focus-visible {
      border: 1px solid white;
      outline: 1px solid black;
    }
  }

  :host([appearance='primary']) button {
    background: var(--figma-color-bg-brand);
    color: var(--figma-color-text-onbrand);

    &:hover {
      background: var(--figma-color-bg-brand-hover);
    }

    &:active {
      background: var(--figma-color-bg-brand-pressed);
    }
  }

  :host([disabled]) button {
    background: var(--figma-color-bg-disabled);
    color: var(--figma-color-text-disabled);
    cursor: not-allowed;

    &:hover {
      background: var(--figma-color-bg-disabled);
    }

    &:active {
      background: var(--figma-color-bg-disabled);
    }
  }
`;
