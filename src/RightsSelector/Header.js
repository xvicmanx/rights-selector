import React from "react";
import PropTypes from 'prop-types';

const Header = props => (
  <thead>
    <tr>
      <th />
      <th colSpan={props.actions.length}>{props.actionsLabel}</th>
    </tr>
    <tr>
      <th>{props.resourcesLabel}</th>
      {props.actions.map(action => <th key={action.value}>{action.label}</th>)}
    </tr>
  </thead>
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
