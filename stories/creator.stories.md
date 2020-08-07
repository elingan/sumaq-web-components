```js script
import { html } from '@open-wc/demoing-storybook';
import '../sumaq-creator';

export default {
  title: 'Sumaq Creator',
  component: 'sumaq-creator',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# sumaq-creator

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
import 'sumaq-web-components/sumaq-creator.js';
```

```js preview-story
export const Default = () => html`
  <sumaq-creator></sumaq-creator>
`;
```
