---
id: usage
title: Usage
hide_title: false
description: stuff
keywords:
  - blueprints-ui
sidebar_label: Usage
---

import { BrandHighlight } from '../src/Components/BrandHighlight/BrandHighlight';
import { Subtitle } from '../src/Components/Subtitle/Subtitle';

:::important warning:
Documentation is being worked on; some pages may be incomplete or not yet exist!
:::

---

<BrandHighlight /> is a component library at heart. This means that there's very little boilerplate that you have to do to get started. You just choose which components you'd like to use, and you have immediate access to them.

## Components
<Subtitle text="Collections of JSX, logic, and styling" />

BluePrints-UI provides a full library of React components. To use a <BrandHighlight /> component in your project just import the component by name from 'blueprints-ui' and render it:

```jsx
import { Button } from 'blueprints-ui';

...

return (
  <Button />
)
```
:::tip hot tip:
Look under the **Components** section in the sidebar to see the full list of available components.
:::


## Attributes
<Subtitle text="An overview of the most common component attributes" />

Components use attributes to give you customization options. Attributes can be anything from `textColor` to `tooltip`.

Here's an example of how you'd use a `textColor` attribute on a `Button` component:
```jsx
<Button textColor="#FFFFFF" />
```