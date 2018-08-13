# Rights Selector
A Simple component to select rights.


## Example

```shell 
$ npm install rights-selector --save
```

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import RightsSelector from 'rights-selector'; 

const App = () => (
  <RightsSelector
    actionsLabel="Actions"
    resourcesLabel="Resources"
    actions={[
      {
        value: 'create',
        label: 'Create',
      },
      {
        value: 'read',
        label: 'Read',
      },
      {
        value: 'update',
        label: 'Update',
      },
      {
        value: 'delete',
        label: 'Delete',
      },
    ]}
    resources={[
      {
        value: 'book',
        label: 'Book',
      },
      {
        value: 'author',
        label: 'Author',
      }
    ]}
    onChange={(values) => {
      console.log(values);
    }}
  />
);


ReactDOM.render(
  <App />,
  document.getElementById('root')
);

```

## Component Properties

#### `actionsLabel`: string
the label for the actions section

#### `resourcesLabel`: string
the label for the resources section

#### `onChange`: function
Listener to change event.

#### `resources`: array
List of resources.

#### `actions`: array
List of actions.

#### `rights`: object
Initial rights values. This is an object whose keys are the resources values and the values are objects whose keys are actions values with boolean value.

#### `className`: string
Component's class

#### `style`: object
Component's style



## Comments
Feel free to make any suggestion to improve this component.

