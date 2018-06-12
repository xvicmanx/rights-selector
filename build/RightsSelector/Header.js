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

var Header = function Header(props) {
  return _react2.default.createElement(
    _wrappers2.default.Header,
    null,
    _react2.default.createElement(
      _wrappers2.default.Row,
      null,
      _react2.default.createElement(_wrappers2.default.HeaderCell, null),
      _react2.default.createElement(
        _wrappers2.default.HeaderCell,
        { colSpan: props.actions.length },
        props.actionsLabel
      )
    ),
    _react2.default.createElement(
      _wrappers2.default.Row,
      null,
      _react2.default.createElement(
        _wrappers2.default.HeaderCell,
        null,
        props.resourcesLabel
      ),
      props.actions.map(function (action) {
        return _react2.default.createElement(
          _wrappers2.default.HeaderCell,
          {
            key: action.value,
            modifiers: 'action'
          },
          action.label
        );
      })
    )
  );
};

Header.propTypes = {
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string
  })).isRequired,
  actionsLabel: _propTypes2.default.string.isRequired,
  resourcesLabel: _propTypes2.default.string.isRequired
};

exports.default = Header;