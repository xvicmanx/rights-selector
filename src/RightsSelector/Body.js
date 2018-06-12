import React from "react";
import PropTypes from 'prop-types';
import Container from './wrappers';

const Body = props => (
  <Container.Body>
    {props.resources.map(resource => (
      <Container.Row key={`${resource.value}`}>
        <Container.HeaderCell
          modifiers="resource"
        >
          {resource.label}
        </Container.HeaderCell>
        {props.actions.map(action => (
          <Container.Cell key={`${action.value}::${resource.value}`}>
            <Container.Input
              onClick={props.onClick}
              type="checkbox"
              value={`${action.value}::${resource.value}`}
              checked={
                props.rights &&
                props.rights[resource.value] && 
                props.rights[resource.value][action.value]
              }
            />
          </Container.Cell>
        ))}
      </Container.Row>
    ))}
  </Container.Body>
);

Body.defaultProps = {
  rights: {},
};

Body.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })
  ).isRequired,
  resources: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  rights: PropTypes.instanceOf(Object),
};


export default Body;
