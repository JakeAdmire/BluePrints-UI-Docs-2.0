---
id: tooltip
title: Tooltip
hide_title: false
description: stuff
keywords:
  - blueprints-ui
sidebar_label: Tooltip
---

import { BrandHighlight, Bookmark, ComponentWrapper, Spacer, Subheading, Subtitle } from '../../src/Components/index.js'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button, Tooltip } from 'blueprints-ui';

<Subtitle text="Tooltips display helpful information in convenient places" />

:::caution  warning
Documentation is being worked on; some pages may be incomplete or not yet exist!
:::

---
<Bookmark icon={faGithub} 
          text="View source for this component on GitHub"
          link="https://github.com/JakeAdmire/blueprints-ui/tree/master/src/components/Tooltip" />
<br />

Tooltips provide additional context to an element. We make it easy for you by providing a quick & easy <BrandHighlight override="Tooltip" /> component. Just wrap it around any element you need and it's ready to go.

```jsx
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
<br />

---
## Attributes
<Subheading text='Options that change the look of your component' />

### text
<Subheading text='Type: string|HTMLElement | Default: null' />
<Spacer spacing={.5} />

The <BrandHighlight override="Tooltip" /> is intended to provide additional context an element of your choosing. Use the `text` attribute to fill in that context with a string or html.

*Try not to get too fancy with html within the <BrandHighlight override="Tooltip" />, it's intended for basic syntax improvements only.*

```jsx {1,6}
<Tooltip text="I'm a regular string">
    <Button />
</Tooltip>


<Tooltip text={<span>I'm made with <i>fancy</i> <b>HTML</b></span>}>
    <Button />
</Tooltip>
```
<ComponentWrapper>
    <Tooltip text="I'm a regular string">
        <Button backgroundColor="#0097e0" text="string" />
    </Tooltip>
    <Spacer horizontal />
    <Tooltip text={<span>I'm made with <i>fancy</i> <b>HTML</b></span>}>
        <Button backgroundColor="#0097e0" text="html" />
    </Tooltip>
</ComponentWrapper>
<br />

### pointed
<Subheading text='Type: boolean | Default: true' />
<Spacer spacing={.5} />

Sometimes you need a tooltip with some direction, sometimes you don't. The `pointed` attribute allows you to customize whether or not the <BrandHighlight override="Tooltip" /> has an arrow pointing towards the child element.

```jsx {1,6}
<Tooltip> // You can also use `pointed` or `pointed={true}`
    <Button />
</Tooltip>


<Tooltip pointed={false}>
    <Button />
</Tooltip>
```
<ComponentWrapper>
    <Tooltip text="I have a point">
        <Button backgroundColor="#0097e0" text="button 1" />
    </Tooltip>
    <Spacer horizontal />
    <Tooltip pointed={false} text="I'm pointless">
        <Button backgroundColor="#0097e0" text="button 2" />
    </Tooltip>
</ComponentWrapper>
<br />

### position
<Subheading text='Type: string | Default: "bottom"' />
<Spacer spacing={.5} />

The <BrandHighlight override="Tooltip" /> can exist on any of the four sides of it's child element: 
- `top`
- `right`
- `bottom`
- `left`

Each of these positions also has a `start` & `end` alignment, totaling **12** different <BrandHighlight override="Tooltip" /> placement options

```jsx {1,6,11}
<Tooltip position="left-start">
    <Button />
</Tooltip>


<Tooltip position="top">
    <Button />
</Tooltip>


<Tooltip position="right-end">
    <Button />
</Tooltip>
```
<ComponentWrapper>
    <Tooltip position="left-start" text="left-start">
        <Button backgroundColor="#0097e0" text="left" />
    </Tooltip>
    <Spacer horizontal />
    <Tooltip position="top" text="top">
        <Button backgroundColor="#0097e0" text="top" />
    </Tooltip>
    <Spacer horizontal />
    <Tooltip position="right-end" text="right-end">
        <Button backgroundColor="#0097e0" text="right" />
    </Tooltip>
</ComponentWrapper>
<br />

## Additional Information
<Subheading text='Important info about some Tooltip specifics' />

### Disabled Elements
The <BrandHighlight override="Tooltip" /> component is designed not to appear on any element with the CSS attribute `pointer-events: none`. You can override this by wrapping the child element in a `<span>`:

```jsx
<Tooltip text="This tooltip doesn't work">
    <Button disabled />
</Tooltip>


<Tooltip text="This tooltip does">
    <span>
        <Button disabled />
    </span>
</Tooltip>
```
<ComponentWrapper>
    <Tooltip>
        <Button disabled />
    </Tooltip>
    <Spacer horizontal />
    <Tooltip text="You're breaking the rules!">
        <span>
            <Button text="wrapped" disabled />
        </span>
    </Tooltip>
</ComponentWrapper>
<br />

<Spacer spacing={5} />

---
:::important Something missing?
<a target="_blank" href="https://github.com/JakeAdmire/blueprints-ui/issues/new/choose">Click here to tell us how we can improve!</a>
:::
