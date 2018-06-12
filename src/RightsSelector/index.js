import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import Container from './wrappers';

const RIGHT_REGEX = /(.+)::(.+)/;

class RightsSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rights: props.rights || {}
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    const { value } = evt.target;
    const { rights } = this.state;
    const action = value.replace(RIGHT_REGEX, "$1");
    const resource = value.replace(RIGHT_REGEX, "$2");
    const update = { ...rights };
    update[resource] = update[resource] || {};
    update[resource][action] = !update[resource][action];
    this.setState({ rights: update });
    this.props.onChange(update);
  }

  render() {
    const {
      actions,
      resources,
      actionsLabel,
      resourcesLabel,
      className,
      style
    } = this.props;
    return (
      <Container
        className={className}
        style={style}
      >
        <Header
          actions={actions}
          resourcesLabel={resourcesLabel}
          actionsLabel={actionsLabel}
        />
        <Body
          actions={actions}
          resources={resources}
          onClick={this.handleClick}
        />
      </Container>
    );
  }
}

RightsSelector.defaultProps = {
  className: '',
  style: {},
};

RightsSelector.propTypes = {
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
  onChange: PropTypes.func.isRequired,
  actionsLabel: PropTypes.string.isRequired,
  resourcesLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.instanceOf(Object),
};

export default RightsSelector;
