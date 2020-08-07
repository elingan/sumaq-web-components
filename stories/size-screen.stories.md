```js script
import { html } from '@open-wc/demoing-storybook';
import '../sumaq-size-screen';

export default {
  title: 'Sumaq Size Screen',
  component: 'sumaq-size-screen',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# sumaq-size-screen

A component for website's author

## Attributes:

- name
- link

## How to use

### Installation

```bash
npm install sumaq-web-components
```

```js
import 'sumaq-web-components/sumaq-size-screen.js';
```

```js preview-story
export const Default = () => html`
  <sumaq-size-screen></sumaq-size-screen>
`;
```
