---
id: installation
title: Installation
hide_title: false
description: stuff
keywords:
  - blueprints-ui
sidebar_label: Installation
---

import { BrandHighlight } from '../../src/Components/BrandHighlight/BrandHighlight';
import { Subheading } from '../../src/Components/Subheading/Subheading';
import { TabItem } from '../../src/Components/TabItem/TabItem';
import { Tabs } from '../../src/Components/Tabs/Tabs';

:::caution warning:
Documentation is being worked on; some pages may be incomplete or not yet exist!
:::

---

## npm / yarn
<Subheading text="Follow these instructions to install &amp; save in your package.json" />

<Tabs
  defaultValue="npm"
  values={[
    { label: 'npm', value: 'npm', },
    { label: 'yarn', value: 'yarn', },
  ]
}>
<TabItem value="npm">

```bash
npm install @blueprints-ui
```

</TabItem>
<TabItem value="yarn">

```bash
yarn add @blueprints-ui
```

</TabItem>
</Tabs>

> Please note that `react >= 16.12.0` and `react-dom >= 16.12.0` are peer dependencies.

