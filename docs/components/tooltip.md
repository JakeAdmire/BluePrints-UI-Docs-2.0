---
id: tooltip
title: Tooltip
hide_title: false
description: stuff
keywords:
  - blueprints-ui
sidebar_label: Tooltip
---

import { BrandHighlight } from '../../src/Components/BrandHighlight/BrandHighlight';
import { Subtitle } from '../../src/Components/Subtitle/Subtitle';
import { Subheading } from '../../src/Components/Subheading/Subheading';
import { ComponentWrapper } from '../../src/Components/ComponentWrapper/ComponentWrapper';
import { Bookmark } from '../../src/Components/Bookmark/Bookmark';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button, Tooltip } from 'blueprints-ui';

<Subtitle text="Tooltips display helpful information in convenient places" />

:::important warning:
Documentation is being worked on; some pages may be incomplete or not yet exist!
:::

---
<Bookmark icon={faGithub} 
          text="View source for this component"
          link="https://github.com/JakeAdmire/blueprints-ui/tree/master/src/components/Tooltip" />
<br />

```jsx {4,7}
import { Tooltip, Button } from 'blueprints-ui';

return (
    <Tooltip text="I am a tooltip">
        <Button backgroundColor="#0097e0" 
                text="hover over me" />
    </Tooltip>
)
```

<ComponentWrapper extension>
    <Tooltip text="I am a tooltip">
        <Button backgroundColor="#0097e0" text="hover over me" />
    </Tooltip>
</ComponentWrapper>
