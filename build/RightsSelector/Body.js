'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _wrappers = require('./wrappers');

var _wrappers2 = _interopRequireDefault(_wrappers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(props) {
  return _react2.default.createElement(
    _wrappers2.default.Body,
    null,
    props.resources.map(function (resource) {
      return _react2.default.createElement(
        _wrappers2.default.Row,
        { key: '' + resource.value },
        _react2.default.createElement(
          _wrappers2.default.HeaderCell,
          {
            modifiers: 'resource'
          },
          resource.label
        ),
        props.actions.map(function (action) {
          return _react2.default.createElement(
            _wrappers2.default.Cell,
            { key: action.value + '::' + resource.value },
            _react2.default.createElement(_wrappers2.default.Input, {
              onClick: props.onClick,
              type: 'checkbox',
              value: action.value + '::' + resource.value,
              checked: props.rights && props.rights[resource.value] && props.rights[resource.value][action.value]
            })
          );
        })
      );
    })
  );
};

Body.defaultProps = {
  rights: {}
};

Body.propTypes = {
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.any
  })).isRequired,
  resources: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.any
  })).isRequired,
  onClick: _propTypes2.default.func.isRequired,
  rights: _propTypes2.default.instanceOf(Object)
};

exports.default = Body;