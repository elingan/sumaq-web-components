```js script
import { html } from '@open-wc/demoing-storybook';
import '../sumaq-web-components.js';

export default {
  title: 'SumaqWebComponents',
  component: 'sumaq-web-components',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# SumaqWebComponents

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add sumaq-web-components
```

```js
import 'sumaq-web-components/sumaq-web-components.js';
```

```js preview-story
export const Simple = () => html`
  <sumaq-web-components></sumaq-web-components>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <sumaq-web-components title="Hello World"></sumaq-web-components>
`;
```
