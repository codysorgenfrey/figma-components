import { css } from '@microsoft/fast-element';

export const styles = css`
  :host {
    /* Added myself */
    --figma-font-size-default: 11px;
    --figma-font-size-large: 13px;
    --figma-font-weight-default: 400;
    --figma-font-weight-strong: 600;
    --figma-font-family-default: Inter, sans-serif;

    /* From Figma */
    --figma-color-bg: #ffffff;
    --figma-color-bg-brand: #0d99ff;
    --figma-color-bg-brand-hover: #007be5;
    --figma-color-bg-brand-pressed: #007be5;
    --figma-color-bg-brand-secondary: #0768cf;
    --figma-color-bg-brand-tertiary: #e5f4ff;
    --figma-color-bg-component: #9747ff;
    --figma-color-bg-component-hover: #8638e5;
    --figma-color-bg-component-pressed: #8638e5;
    --figma-color-bg-component-secondary: #7c2bda;
    --figma-color-bg-component-tertiary: #f1e5ff;
    --figma-color-bg-danger: #f24822;
    --figma-color-bg-danger-hover: #dc3412;
    --figma-color-bg-danger-pressed: #dc3412;
    --figma-color-bg-danger-secondary: #bd2915;
    --figma-color-bg-danger-tertiary: #ffe2e0;
    --figma-color-bg-disabled: #d9d9d9;
    --figma-color-bg-disabled-secondary: #b3b3b3;
    --figma-color-bg-hover: #f5f5f5;
    --figma-color-bg-inverse: #2c2c2c;
    --figma-color-bg-onselected: #bde3ff;
    --figma-color-bg-onselected-hover: #bde3ff;
    --figma-color-bg-onselected-pressed: #bde3ff;
    --figma-color-bg-pressed: #f5f5f5;
    --figma-color-bg-secondary: #f5f5f5;
    --figma-color-bg-selected: #e5f4ff;
    --figma-color-bg-selected-hover: #bde3ff;
    --figma-color-bg-selected-pressed: #bde3ff;
    --figma-color-bg-selected-secondary: #f2f9ff;
    --figma-color-bg-selected-strong: #0d99ff;
    --figma-color-bg-selected-tertiary: #f2f9ff;
    --figma-color-bg-success: #14ae5c;
    --figma-color-bg-success-hover: #009951;
    --figma-color-bg-success-pressed: #009951;
    --figma-color-bg-success-secondary: #008043;
    --figma-color-bg-success-tertiary: #cff7d3;
    --figma-color-bg-tertiary: #e6e6e6;
    --figma-color-bg-warning: #ffcd29;
    --figma-color-bg-warning-hover: #ffc21a;
    --figma-color-bg-warning-pressed: #ffc21a;
    --figma-color-bg-warning-secondary: #fab815;
    --figma-color-bg-warning-tertiary: #fff1c2;
    --figma-color-border: #e6e6e6;
    --figma-color-border-brand: #bde3ff;
    --figma-color-border-brand-strong: #007be5;
    --figma-color-border-component: #e4ccff;
    --figma-color-border-component-hover: #9747ff;
    --figma-color-border-component-strong: #8638e5;
    --figma-color-border-danger: #ffc7c2;
    --figma-color-border-danger-strong: #dc3412;
    --figma-color-border-disabled: #e6e6e6;
    --figma-color-border-disabled-strong: #0000004d;
    --figma-color-border-onbrand: #007be5;
    --figma-color-border-onbrand-strong: #ffffff;
    --figma-color-border-oncomponent: #8638e5;
    --figma-color-border-oncomponent-strong: #ffffff;
    --figma-color-border-ondanger: #dc3412;
    --figma-color-border-ondanger-strong: #ffffff;
    --figma-color-border-onselected: #bde3ff;
    --figma-color-border-onselected-strong: #000000e5;
    --figma-color-border-onsuccess: #009951;
    --figma-color-border-onsuccess-strong: #ffffff;
    --figma-color-border-onwarning: #fab815;
    --figma-color-border-onwarning-strong: #000000e5;
    --figma-color-border-selected: #0d99ff;
    --figma-color-border-selected-strong: #007be5;
    --figma-color-border-strong: #2c2c2c;
    --figma-color-border-success: #aff4c6;
    --figma-color-border-success-strong: #009951;
    --figma-color-border-warning: #ffe8a3;
    --figma-color-border-warning-strong: #b86200;
    --figma-color-icon: #000000e5;
    --figma-color-icon-brand: #007be5;
    --figma-color-icon-brand-pressed: #0768cf;
    --figma-color-icon-brand-secondary: #80caff;
    --figma-color-icon-brand-tertiary: #bde3ff;
    --figma-color-icon-component: #8638e5;
    --figma-color-icon-component-pressed: #7c2bda;
    --figma-color-icon-component-secondary: #c5b2dc;
    --figma-color-icon-component-tertiary: #c5b2dc;
    --figma-color-icon-danger: #f24822;
    --figma-color-icon-danger-hover: #bd2915;
    --figma-color-icon-danger-pressed: #bd2915;
    --figma-color-icon-danger-secondary: #f24822;
    --figma-color-icon-danger-secondary-hover: #f24822;
    --figma-color-icon-danger-tertiary: #f24822;
    --figma-color-icon-disabled: #0000004d;
    --figma-color-icon-hover: #000000e5;
    --figma-color-icon-onbrand: #ffffff;
    --figma-color-icon-onbrand-secondary: #ffffffcc;
    --figma-color-icon-onbrand-tertiary: #ffffff66;
    --figma-color-icon-oncomponent: #ffffff;
    --figma-color-icon-oncomponent-secondary: #ffffffcc;
    --figma-color-icon-oncomponent-tertiary: #ffffff66;
    --figma-color-icon-ondanger: #ffffff;
    --figma-color-icon-ondanger-secondary: #ffffffcc;
    --figma-color-icon-ondanger-tertiary: #ffffff66;
    --figma-color-icon-ondisabled: #ffffff;
    --figma-color-icon-oninverse: #ffffffe5;
    --figma-color-icon-onselected: #000000e5;
    --figma-color-icon-onselected-secondary: #00000080;
    --figma-color-icon-onselected-strong: #ffffff;
    --figma-color-icon-onselected-tertiary: #0000004d;
    --figma-color-icon-onsuccess: #ffffff;
    --figma-color-icon-onsuccess-secondary: #ffffffcc;
    --figma-color-icon-onsuccess-tertiary: #ffffff66;
    --figma-color-icon-onwarning: #000000e5;
    --figma-color-icon-onwarning-secondary: #ffffffcc;
    --figma-color-icon-onwarning-tertiary: #ffffff66;
    --figma-color-icon-pressed: #007be5;
    --figma-color-icon-secondary: #00000080;
    --figma-color-icon-secondary-hover: #000000e5;
    --figma-color-icon-selected: #007be5;
    --figma-color-icon-selected-secondary: #007be5;
    --figma-color-icon-selected-tertiary: #007be5;
    --figma-color-icon-success: #14ae5c;
    --figma-color-icon-success-pressed: #008043;
    --figma-color-icon-success-secondary: #14ae5c;
    --figma-color-icon-success-tertiary: #14ae5c;
    --figma-color-icon-tertiary: #0000004d;
    --figma-color-icon-tertiary-hover: #000000e5;
    --figma-color-icon-warning: #ffcd29;
    --figma-color-icon-warning-pressed: #b86200;
    --figma-color-icon-warning-secondary: #ffcd29;
    --figma-color-icon-warning-tertiary: #ffcd29;
    --figma-color-text: #000000e5;
    --figma-color-text-brand: #007be5;
    --figma-color-text-brand-secondary: #007be5;
    --figma-color-text-brand-tertiary: #007be5;
    --figma-color-text-component: #8638e5;
    --figma-color-text-component-pressed: #7c2bda;
    --figma-color-text-component-secondary: #c5b2dc;
    --figma-color-text-component-tertiary: #c5b2dc;
    --figma-color-text-danger: #dc3412;
    --figma-color-text-danger-secondary: #dc3412;
    --figma-color-text-danger-tertiary: #dc3412;
    --figma-color-text-disabled: #0000004d;
    --figma-color-text-hover: #000000e5;
    --figma-color-text-onbrand: #ffffff;
    --figma-color-text-onbrand-secondary: #ffffffcc;
    --figma-color-text-onbrand-tertiary: #ffffff66;
    --figma-color-text-oncomponent: #ffffff;
    --figma-color-text-oncomponent-secondary: #ffffffcc;
    --figma-color-text-oncomponent-tertiary: #ffffff66;
    --figma-color-text-ondanger: #ffffff;
    --figma-color-text-ondanger-secondary: #ffffffcc;
    --figma-color-text-ondanger-tertiary: #ffffff66;
    --figma-color-text-ondisabled: #ffffff;
    --figma-color-text-oninverse: #ffffffe5;
    --figma-color-text-onselected: #000000e5;
    --figma-color-text-onselected-secondary: #00000080;
    --figma-color-text-onselected-strong: #ffffff;
    --figma-color-text-onselected-tertiary: #0000004d;
    --figma-color-text-onsuccess: #ffffff;
    --figma-color-text-onsuccess-secondary: #ffffffcc;
    --figma-color-text-onsuccess-tertiary: #ffffff66;
    --figma-color-text-onwarning: #000000e5;
    --figma-color-text-onwarning-secondary: #00000080;
    --figma-color-text-onwarning-tertiary: #0000004d;
    --figma-color-text-secondary: #00000080;
    --figma-color-text-secondary-hover: #000000e5;
    --figma-color-text-selected: #007be5;
    --figma-color-text-selected-secondary: #007be5;
    --figma-color-text-selected-tertiary: #007be5;
    --figma-color-text-success: #009951;
    --figma-color-text-success-secondary: #009951;
    --figma-color-text-success-tertiary: #009951;
    --figma-color-text-tertiary: #0000004d;
    --figma-color-text-tertiary-hover: #000000e5;
    --figma-color-text-warning: #b86200;
    --figma-color-text-warning-secondary: #b86200;
    --figma-color-text-warning-tertiary: #b86200;

    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--figma-color-bg);
    color: var(--figma-color-text);
    background-color: var(--figma-color-bg);
    font-family: var(--figma-font-family-default);
    font-size: var(--figma-font-size-default);
    font-weight: var(--figma-font-weight-default);
  }

  @media (prefers-color-scheme: dark) {
    :host {
      --figma-color-bg: #2c2c2c;
      --figma-color-bg-brand: #0c8ce9;
      --figma-color-bg-brand-hover: #0a6dc2;
      --figma-color-bg-brand-pressed: #0a6dc2;
      --figma-color-bg-brand-secondary: #105cad;
      --figma-color-bg-brand-tertiary: #394360;
      --figma-color-bg-component: #8a38f5;
      --figma-color-bg-component-hover: #7a2ed6;
      --figma-color-bg-component-pressed: #7a2ed6;
      --figma-color-bg-component-secondary: #652ca8;
      --figma-color-bg-component-tertiary: #473956;
      --figma-color-bg-danger: #e03e1a;
      --figma-color-bg-danger-hover: #c4381c;
      --figma-color-bg-danger-pressed: #c4381c;
      --figma-color-bg-danger-secondary: #963323;
      --figma-color-bg-danger-tertiary: #7c2622;
      --figma-color-bg-disabled: #757575;
      --figma-color-bg-disabled-secondary: #b3b3b3;
      --figma-color-bg-hover: #383838;
      --figma-color-bg-inverse: #ffffff;
      --figma-color-bg-onselected: #667799;
      --figma-color-bg-onselected-hover: #667799;
      --figma-color-bg-onselected-pressed: #667799;
      --figma-color-bg-pressed: #383838;
      --figma-color-bg-secondary: #383838;
      --figma-color-bg-selected: #4a5878;
      --figma-color-bg-selected-hover: #536383;
      --figma-color-bg-selected-pressed: #536383;
      --figma-color-bg-selected-secondary: #394360;
      --figma-color-bg-selected-strong: #0c8ce9;
      --figma-color-bg-selected-tertiary: #394360;
      --figma-color-bg-success: #198f51;
      --figma-color-bg-success-hover: #078348;
      --figma-color-bg-success-pressed: #078348;
      --figma-color-bg-success-secondary: #0a5c35;
      --figma-color-bg-success-tertiary: #0a4c2d;
      --figma-color-bg-tertiary: #444444;
      --figma-color-bg-warning: #f3c11b;
      --figma-color-bg-warning-hover: #f2b50d;
      --figma-color-bg-warning-pressed: #f2b50d;
      --figma-color-bg-warning-secondary: #e4a711;
      --figma-color-bg-warning-tertiary: #c58011;
      --figma-color-border: #444444;
      --figma-color-border-brand: #105cad;
      --figma-color-border-brand-strong: #7cc4f8;
      --figma-color-border-component: #652ca8;
      --figma-color-border-component-hover: #8a38f5;
      --figma-color-border-component-strong: #d6b6fb;
      --figma-color-border-danger: #963323;
      --figma-color-border-danger-strong: #fca397;
      --figma-color-border-disabled: #444444;
      --figma-color-border-disabled-strong: #ffffff66;
      --figma-color-border-onbrand: #0a6dc2;
      --figma-color-border-onbrand-strong: #ffffff;
      --figma-color-border-oncomponent: #7a2ed6;
      --figma-color-border-oncomponent-strong: #ffffff;
      --figma-color-border-ondanger: #c4381c;
      --figma-color-border-ondanger-strong: #ffffff;
      --figma-color-border-onselected: #667799;
      --figma-color-border-onselected-strong: #ffffffe5;
      --figma-color-border-onsuccess: #078348;
      --figma-color-border-onsuccess-strong: #ffffff;
      --figma-color-border-onwarning: #e4a711;
      --figma-color-border-onwarning-strong: #000000e5;
      --figma-color-border-selected: #0c8ce9;
      --figma-color-border-selected-strong: #7cc4f8;
      --figma-color-border-strong: #ffffffe5;
      --figma-color-border-success: #0a5c35;
      --figma-color-border-success-strong: #79d297;
      --figma-color-border-warning: #925711;
      --figma-color-border-warning-strong: #f7d15f;
      --figma-color-icon: #ffffff;
      --figma-color-icon-brand: #7cc4f8;
      --figma-color-icon-brand-pressed: #0c8ce9;
      --figma-color-icon-brand-secondary: #536383;
      --figma-color-icon-brand-tertiary: #394360;
      --figma-color-icon-component: #d1a8ff;
      --figma-color-icon-component-pressed: #d6b6fb;
      --figma-color-icon-component-secondary: #6b5884;
      --figma-color-icon-component-tertiary: #6b5884;
      --figma-color-icon-danger: #e03e1a;
      --figma-color-icon-danger-hover: #fbbcb6;
      --figma-color-icon-danger-pressed: #fbbcb6;
      --figma-color-icon-danger-secondary: #e03e1a;
      --figma-color-icon-danger-secondary-hover: #e03e1a;
      --figma-color-icon-danger-tertiary: #e03e1a;
      --figma-color-icon-disabled: #ffffff66;
      --figma-color-icon-hover: #ffffff;
      --figma-color-icon-onbrand: #ffffff;
      --figma-color-icon-onbrand-secondary: #ffffffcc;
      --figma-color-icon-onbrand-tertiary: #ffffff66;
      --figma-color-icon-oncomponent: #ffffff;
      --figma-color-icon-oncomponent-secondary: #ffffffcc;
      --figma-color-icon-oncomponent-tertiary: #ffffff66;
      --figma-color-icon-ondanger: #ffffff;
      --figma-color-icon-ondanger-secondary: #ffffffcc;
      --figma-color-icon-ondanger-tertiary: #ffffff66;
      --figma-color-icon-ondisabled: #2c2c2c;
      --figma-color-icon-oninverse: #000000e5;
      --figma-color-icon-onselected: #ffffff;
      --figma-color-icon-onselected-secondary: #ffffffb2;
      --figma-color-icon-onselected-strong: #ffffff;
      --figma-color-icon-onselected-tertiary: #ffffff66;
      --figma-color-icon-onsuccess: #ffffff;
      --figma-color-icon-onsuccess-secondary: #ffffffcc;
      --figma-color-icon-onsuccess-tertiary: #ffffff66;
      --figma-color-icon-onwarning: #000000e5;
      --figma-color-icon-onwarning-secondary: #00000080;
      --figma-color-icon-onwarning-tertiary: #0000004d;
      --figma-color-icon-pressed: #0a6dc2;
      --figma-color-icon-secondary: #ffffffb2;
      --figma-color-icon-secondary-hover: #ffffff;
      --figma-color-icon-selected: #7cc4f8;
      --figma-color-icon-selected-secondary: #7cc4f8;
      --figma-color-icon-selected-tertiary: #7cc4f8;
      --figma-color-icon-success: #198f51;
      --figma-color-icon-success-pressed: #a1e8b9;
      --figma-color-icon-success-secondary: #198f51;
      --figma-color-icon-success-tertiary: #198f51;
      --figma-color-icon-tertiary: #ffffff66;
      --figma-color-icon-tertiary-hover: #ffffff;
      --figma-color-icon-warning: #f3c11b;
      --figma-color-icon-warning-pressed: #f7d15f;
      --figma-color-icon-warning-secondary: #f3c11b;
      --figma-color-icon-warning-tertiary: #f3c11b;
      --figma-color-text: #ffffff;
      --figma-color-text-brand: #7cc4f8;
      --figma-color-text-brand-secondary: #7cc4f8;
      --figma-color-text-brand-tertiary: #7cc4f8;
      --figma-color-text-component: #d1a8ff;
      --figma-color-text-component-pressed: #d6b6fb;
      --figma-color-text-component-secondary: #6b5884;
      --figma-color-text-component-tertiary: #6b5884;
      --figma-color-text-danger: #fca397;
      --figma-color-text-danger-secondary: #fca397;
      --figma-color-text-danger-tertiary: #fca397;
      --figma-color-text-disabled: #ffffff66;
      --figma-color-text-hover: #ffffff;
      --figma-color-text-onbrand: #ffffff;
      --figma-color-text-onbrand-secondary: #ffffffcc;
      --figma-color-text-onbrand-tertiary: #ffffff66;
      --figma-color-text-oncomponent: #ffffff;
      --figma-color-text-oncomponent-secondary: #ffffffcc;
      --figma-color-text-oncomponent-tertiary: #ffffff66;
      --figma-color-text-ondanger: #ffffff;
      --figma-color-text-ondanger-secondary: #ffffffcc;
      --figma-color-text-ondanger-tertiary: #ffffff66;
      --figma-color-text-ondisabled: #2c2c2c;
      --figma-color-text-oninverse: #000000e5;
      --figma-color-text-onselected: #ffffffe5;
      --figma-color-text-onselected-secondary: #ffffffb2;
      --figma-color-text-onselected-strong: #ffffff;
      --figma-color-text-onselected-tertiary: #ffffff66;
      --figma-color-text-onsuccess: #ffffff;
      --figma-color-text-onsuccess-secondary: #ffffffcc;
      --figma-color-text-onsuccess-tertiary: #ffffff66;
      --figma-color-text-onwarning: #000000e5;
      --figma-color-text-onwarning-secondary: #00000080;
      --figma-color-text-onwarning-tertiary: #0000004d;
      --figma-color-text-secondary: #ffffffb2;
      --figma-color-text-secondary-hover: #ffffff;
      --figma-color-text-selected: #7cc4f8;
      --figma-color-text-selected-secondary: #7cc4f8;
      --figma-color-text-selected-tertiary: #7cc4f8;
      --figma-color-text-success: #79d297;
      --figma-color-text-success-secondary: #79d297;
      --figma-color-text-success-tertiary: #79d297;
      --figma-color-text-tertiary: #ffffff66;
      --figma-color-text-tertiary-hover: #ffffff;
      --figma-color-text-warning: #f7d15f;
      --figma-color-text-warning-secondary: #f7d15f;
      --figma-color-text-warning-tertiary: #f7d15f;
    }
  }
`;
