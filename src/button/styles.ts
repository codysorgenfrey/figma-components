import { css } from '@microsoft/fast-element';

export const styles = css`
  button {
    width: fit-content;
    border: 1px solid var(--figma-color-border);
    border-radius: 4px;
    background: var(--figma-color-bg);
    color: var(--figma-color-text);
    font-size: var(--figma-font-size-default);
    line-height: 16px;
    font-weight: var(--figma-font-weight-default);
    padding: 7px 11px; /* Adjust padding for stroke */
    cursor: pointer;
    align-self: flex-end;

    &:hover {
      background: var(--figma-color-bg-hover);
    }

    &:hover:active {
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
    border-color: transparent;

    &:hover {
      background: var(--figma-color-bg-brand-hover);
    }

    &:hover:active {
      background: var(--figma-color-bg-brand-pressed);
    }
  }

  :host([appearance='subtle']) button {
    background: transparent;
    border-color: transparent;

    &:hover {
      background: var(--figma-color-bg-hover);
    }

    &:hover:active {
      background: var(--figma-color-bg-tertiary);
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

  :host([size='small']) button {
    padding: 3px 7px; /* Adjust padding for stroke */
  }

  :host([icon-only]) button {
    line-height: 0;
    padding: 5px; /* Adjust padding for stroke */
  }

  :host([size='small'][icon-only]) button {
    padding: 1px; /* Adjust padding for stroke */
  }
`;
