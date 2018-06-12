import React from "react";
import PropTypes from 'prop-types';

const Body = props => (
  <tbody>
    {props.resources.map(resource => (
      <tr key={`${resource.value}`}>
        <th>{resource.label}</th>
        {props.actions.map(action => (
          <td key={`${action.value}::${resource.value}`}>
            <input
              onClick={props.onClick}
              type="checkbox"
              value={`${action.value}::${resource.value}`}
            />
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);

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
};


export default Body;
