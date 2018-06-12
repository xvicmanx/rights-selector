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


## Comments
Feel free to make any suggestion to improve this component.
