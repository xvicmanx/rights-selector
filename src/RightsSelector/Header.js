import React from "react";
import PropTypes from 'prop-types';
import Container from './wrappers';

const Header = props => (
  <Container.Header>
    <Container.Row>
      <Container.HeaderCell />
      <Container.HeaderCell colSpan={props.actions.length}>
        {props.actionsLabel}
      </Container.HeaderCell>
    </Container.Row>
    <Container.Row>
      <Container.HeaderCell>
        {props.resourcesLabel}
      </Container.HeaderCell>
      {props.actions.map(action => (
        <Container.HeaderCell
          key={action.value}
          modifiers="action"
        >
          {action.label}
        </Container.HeaderCell>
      ))}
    </Container.Row>
  </Container.Header>
);

Header.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    })
  ).isRequired,
  actionsLabel: PropTypes.string.isRequired,
  resourcesLabel: PropTypes.string.isRequired,
};


export default Header;
