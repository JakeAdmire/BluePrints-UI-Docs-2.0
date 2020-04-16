---
id: modal
title: Modal
hide_title: false
description: stuff
keywords:
  - blueprints-ui
sidebar_label: Modal
---

import { 
  BrandHighlight, 
  Bookmark, 
  ComponentWrapper, 
  MarkdownModal, 
  Spacer, 
  Subheading, 
  Subtitle,
  TabItem,
  Tabs 
} from '../../src/Components/index.js'

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button, Modal } from 'blueprints-ui';

<Subtitle text="A convenient popup to display important & interactive information" />

:::caution  warning
Documentation is being worked on; some pages may be incomplete or not yet exist!
:::

---
<Bookmark icon={faGithub} 
          text="View source for this component on GitHub"
          link="https://github.com/JakeAdmire/blueprints-ui/tree/master/src/components/Modal" />
<br />

A sentence about what modals are. A sentence about why my <BrandHighlight override="Modals" /> are great.
<br />

```jsx {1,14-17}
import { Button, Modal } from 'blueprints-ui';

...

constructor() {
  super();
  this.state = { isModalOpen: false };
}

render() {
  return (
    <Button onClick={() => this.setState({ isModalOpen: true })} />

    <Modal  open={this.state.isModalOpen}
            closeMethod={() => this.setState({ isModalOpen: false })}>
      I'm a Modal!
    </Modal>
  )
}
```
<ComponentWrapper extension>
  <MarkdownModal  buttonText="open modal"
                  buttonColor="#0097e0">
    I'm a <BrandHighlight override="Modal" />!
  </MarkdownModal>
</ComponentWrapper>
<br />

---
## Attributes
<Subheading text='Options that control your component' />

### open
<Subheading text='Type: boolean | Default: false | Required' />
<Spacer spacing={.5} />

The `open` attribute allows you to pass a boolean specifying whether or not your modal is `open`. We recommend connecting it to a piece of stateful data in order to properly update & re-render.

```jsx {4,12}
class ExampleComponent extends Component {
  constructor() {
    super();
    this.state = { isModalOpen: false } ;
    // The `open` attribute and the boolean that controls it should have a default value of `false`.
  }

  render() {
    return (
      <Button onClick={() => this.setState({ isModalOpen: true })} />

      <Modal open={this.state.isModalOpen}></Modal>
    )
  }
}
```
<br />

### closeMethod
<Subheading text='Type: function | Default: null | Required' />
<Spacer spacing={.5} />

The `closeMethod` attribute calls a passed method whenever a user clicks away from the modal, closing it instantly. The `closeMethod` can be as simple as this:

```jsx
<Modal closeMethod={() => this.setState({ isModalOpen: false })}></Modal>
```
<br />


---
<!-- ## Usage Examples

Test
<Tabs
  defaultValue="Example"
  values={[
    { label: 'Example', value: 'Example', },
    { label: 'Code', value: 'Code', },
  ]
}>
<TabItem value="Example">

<ComponentWrapper>
  Example goes in here...
</ComponentWrapper>

</TabItem>
<TabItem value="Code">

```jsx
code goes in here...
```

</TabItem>
</Tabs> -->

<Spacer spacing={5} />

---
:::important Something missing?
<a target="_blank" href="https://github.com/JakeAdmire/blueprints-ui/issues/new/choose">Click here to tell us how we can improve!</a>
:::
