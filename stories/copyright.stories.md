```js script
import { html } from '@open-wc/demoing-storybook';
import '../sumaq-copyright';

export default {
  title: 'Sumaq Copyright',
  component: 'sumaq-copyright',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# sumaq-copyright

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
import 'sumaq-web-components/sumaq-copyright.js';
```

```js preview-story
export const Default = () => html`
  <sumaq-copyright></sumaq-copyright>
`;
```
