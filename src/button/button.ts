import { FASTElement, attr } from '@microsoft/fast-element';

export const ButtonAppearance = {
  primary: 'primary',
} as const;

export type ButtonAppearance = keyof typeof ButtonAppearance;

export type ButtonProps = ButtonAppearance & {
  disabled: boolean;
};

export class Button extends FASTElement {
  @attr({ mode: 'boolean' }) disabled = false;
  @attr appearance?: ButtonAppearance;
}
