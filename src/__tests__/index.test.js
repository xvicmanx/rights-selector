import React from 'react';
import RightsSelector from '../RightsSelector/index';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() })

describe('RightsSelector Component', () => {

  it('renders correctly', () => {
    const tree = renderer
      .create(<RightsSelector
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
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})

