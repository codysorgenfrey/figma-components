# figma-components

A set of reusable web components for figma plugins.

## Usage

Be sure to call `figma.showUI()` with the option `{ themeColors: true }`.

### Installation

```bash
npm install @codysorgenfrey/figma-components
```

### Example

```html
<html>
  <head>
    <script>
      import '@codysorgenfrey/figma-components/button.js';
    </script>
  </head>
  <body>
    <figma-button>Button</figma-button>
  </body>
</html>
```
