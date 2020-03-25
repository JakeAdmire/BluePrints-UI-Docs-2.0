---
id: button
title: Button
hide_title: false
description: stuff
keywords:
  - blueprints-ui
sidebar_label: Button
---

import { BrandHighlight } from '../../src/Components/BrandHighlight/BrandHighlight';
import { Subtitle } from '../../src/Components/Subtitle/Subtitle';
import { Subheading } from '../../src/Components/Subheading/Subheading';
import { ComponentWrapper } from '../../src/Components/ComponentWrapper/ComponentWrapper';
import { Bookmark } from '../../src/Components/Bookmark/Bookmark';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'blueprints-ui';

<Subtitle text="Buttons allow users to take action" />

:::important warning:
Documentation is being worked on; some pages may be incomplete or not yet exist!
:::

---
<Bookmark icon={faGithub} 
          text="View source for this component"
          link="https://github.com/JakeAdmire/blueprints-ui/tree/master/src/components/Button" />
<br />

Buttons give users the option to take action and make decisions. Make it as efficient & convenient as possible for them with these pre-built <BrandHighlight override="Button" /> components.
<br />

```jsx
import { Button } from 'blueprints-ui';

return (
  <Button />
)
```
<ComponentWrapper extension>
  <Button />
</ComponentWrapper>
<br />

---
## Variants
The <BrandHighlight override="Button" /> component has a handful of variations, or variants. These are pre-built options that you can access with a single attribute without having to do any further customization.

### Default
The default appearance of the <BrandHighlight override="Button" />. Achieved directly out of the box, with no extra work necessary.

<ComponentWrapper>
  <Button />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Toggleable" toggleable />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Primary" backgroundColor="#0097e0" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Accent" backgroundColor="#0cb367" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Disabled" disabled />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Warning" backgroundColor="red" />
</ComponentWrapper>

### Neumorphism

<ComponentWrapper background="#0097e0">
  <Button text="neumorphic" backgroundColor="#0097e0" variant="neumorphism" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Toggleable" backgroundColor="#0097e0" variant="neumorphism" toggleable />
</ComponentWrapper>

---
## Attributes

### backgroundColor
<Subheading text='Type: string | Default: "#0099E3"' />

```jsx
<Button backgroundColor="black" />
```
<ComponentWrapper>
  <Button text="Dark" backgroundColor="black" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Light" backgroundColor="white" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Warning" backgroundColor="red" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Gradient" backgroundColor="linear-gradient(45deg, #00a1ff, #00ff726b)" />
</ComponentWrapper>
<br />

> Notice the text color changes automatically to reflect the lightness value of the background color.

### textColor
<Subheading text='Type: string | Default: "#FFFFFF"' />

```jsx
<Button textColor="black" />
```
<ComponentWrapper>
  <Button text="Dark" textColor="black" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Light" textColor="white" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="Warning" textColor="red" />
</ComponentWrapper>
<br />

### toggleable
<Subheading text='Type: boolean | Default: false' />

```jsx
<Button toggleable />
// OR
<Button toggleable={true}>
```
<ComponentWrapper>
  <Button text="non-toggleable" backgroundColor="#0097e0" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="toggleable" backgroundColor="#0097e0"toggleable />
</ComponentWrapper>
<br />

### disabled
<Subheading text='Type: boolean | Default: false' />

```jsx
<Button disabled />
// OR
<Button disabled={true}>
```
<ComponentWrapper>
  <Button backgroundColor="#0097e0" />
  <span style={{width:'1rem',display:'block'}}></span>
  <Button text="disabled" backgroundColor="#0097e0" disabled />
</ComponentWrapper>
<br />
