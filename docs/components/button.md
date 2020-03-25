---
id: button
title: Button
hide_title: false
description: stuff
keywords:
  - blueprints-ui
sidebar_label: Button
---

import { BrandHighlight, Bookmark, ComponentWrapper, Spacer, Subheading, Subtitle } from '../../src/Components/index.js'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'blueprints-ui';

<Subtitle text="Buttons allow users to take action" />

:::caution  warning
Documentation is being worked on; some pages may be incomplete or not yet exist!
:::

---
<Bookmark icon={faGithub} 
          text="View source for this component on GitHub"
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
The <BrandHighlight override="Button" /> component has a handful of variations, or variants. These are pre-built options that you can access using a single attribute without having to do any further customization.

### Default
The default appearance of the <BrandHighlight override="Button" />. Achieved directly out of the box, with no extra work necessary.

```jsx
<Button />
// OR
<Button variant="default" />
```

<ComponentWrapper>
  <Button />
  <Spacer horizontal />
  <Button text="Toggleable" toggleable />
  <Spacer horizontal />
  <Button text="Primary" backgroundColor="#0097e0" />
  <Spacer horizontal />
  <Button text="Accent" backgroundColor="#0cb367" />
  <Spacer horizontal />
  <Button text="Disabled" disabled />
  <Spacer horizontal />
  <Button text="Warning" backgroundColor="red" />
</ComponentWrapper>

### Neumorphism
New skeuomorphism, or <BrandHighlight override="neumorphism" />, is a new design trend that utilizes soft-shadows to create a semi-realistic appearance.

```jsx
<Button variant="neumorphism" />
```

<ComponentWrapper background="#0097e0">
  <Button text="neumorphic" backgroundColor="#0097e0" variant="neumorphism" />
  <Spacer horizontal />
  <Button text="Toggleable" backgroundColor="#0097e0" variant="neumorphism" toggleable />
</ComponentWrapper>

<br />

#### Resources
Here are some useful resources if you'd like to learn more about neumorphism:
<Bookmark text="neumorphism.io | Neumorphism/Soft UI CSS shadow generator"
          link="http://neumorphism.io" />
<Spacer spacing={.5} />
<Bookmark text="uxdesign.cc | Neumorphism in user interfaces"
          link="https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6" />

---
## Attributes
<Subheading text='Options that change the look of your component' />

### backgroundColor
<Subheading text='Type: string | Default: "#0099E3"' />
<Spacer spacing={.5} />

The `backgroundColor` attribute works similarly to the CSS `background` property and accepts any CSS color string as input to fill the <BrandHighlight override="Button" /> background.

Accepted strings include:
- Hexadecimal colors
- RGB/RGBA colors
- HSL/HSLA colors
- Predefined color names
- Linear/radial gradients

```jsx
<Button backgroundColor="black" />
```
<ComponentWrapper>
  <Button text="default" />
  <Spacer horizontal />
  <Button text="Dark" backgroundColor="black" />
  <Spacer horizontal />
  <Button text="Light" backgroundColor="white" />
  <Spacer horizontal />
  <Button text="Warning" backgroundColor="red" />
  <Spacer horizontal />
  <Button text="gradient" backgroundColor="linear-gradient(45deg, #00a1ff, #00ff726b)" />
</ComponentWrapper>
<br />

> Notice the text color changes automatically to reflect the lightness value of the background color.

### textColor
<Subheading text='Type: string | Default: "#FFFFFF"/"#000000"' />
<Spacer spacing={.5} />

The `textColor` attribute accepts almost any color as input, except gradients. By default, the <BrandHighlight override="Button" /> component will fill the text with white or black, depending on the lightness value of the background color.

Accepted strings include:
- Hexadecimal colors
- RGB/RGBA colors
- HSL/HSLA colors
- Predefined color names

```jsx
<Button textColor="black" />
```
<ComponentWrapper>
  <Button text="Dark" textColor="black" />
  <Spacer horizontal />
  <Button text="Light" textColor="white" />
  <Spacer horizontal />
  <Button text="Warning" textColor="red" />
</ComponentWrapper>
<br />

> `textColor` gradient support is planned for the near future.

### toggleable
<Subheading text='Type: boolean | Default: false' />
<Spacer spacing={.5} />

Sometimes you need a button that can represent two different states. The `toggleable` attribute provides exactly that by utilizing a hidden `<input type="checkbox">` under the hood.

```jsx
<Button toggleable />
// OR
<Button toggleable={true}>
```
<ComponentWrapper>
  <Button text="non-toggleable" backgroundColor="#0097e0" />
  <Spacer horizontal />
  <Button text="toggleable" backgroundColor="#0097e0"toggleable />
</ComponentWrapper>
<br />

### disabled
<Subheading text='Type: boolean | Default: false' />
<Spacer spacing={.5} />

There are many reasons why you might need a button to be disabled, like preventing a form from being submitted until it's properly filled out. 

The `disabled` attribute is designed for these use-cases by providing a fully non-interactive, visually disabled display.

```jsx
<Button disabled />
// OR
<Button disabled={true} />
// OR try tying the disabled attribute to a state-controlled boolean
<Button disabled={this.state.isFormValid} /> 
```
<ComponentWrapper>
  <Button text="enabled" backgroundColor="#0097e0" />
  <Spacer horizontal />
  <Button text="disabled" backgroundColor="#0097e0" disabled />
</ComponentWrapper>
<br />

## Additional Information
<Subheading text='Important info about some Button specifics' />

### Disabled Button - cursor
The `disabled` attribute sets `pointer-events: none` to the <BrandHighlight override="Button" /> component, preventing you from assigning a specific cursor (such as `not-allowed`). 

You can override this by wrapping the disabled Button in a `<span>` and assinging the `cursor` property to that instead.

```jsx
<Button disabled />


<span style={{cursor:'not-allowed'}}>
  <Button disabled />
</span>
```
<ComponentWrapper>
  <Button disabled />
  <Spacer horizontal />
  <span style={{cursor:'not-allowed'}}>
    <Button text="wrapped" disabled />
  </span>
</ComponentWrapper>
<br />

<Spacer spacing={5} />

---
:::important Something missing?
<a target="_blank" href="https://github.com/JakeAdmire/blueprints-ui/issues/new/choose">Click here to tell us how we can improve!</a>
:::
