"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement(
    "thead",
    null,
    _react2.default.createElement(
      "tr",
      null,
      _react2.default.createElement("th", null),
      _react2.default.createElement(
        "th",
        { colSpan: props.actions.length },
        props.actionsLabel
      )
    ),
    _react2.default.createElement(
      "tr",
      null,
      _react2.default.createElement(
        "th",
        null,
        props.resourcesLabel
      ),
      props.actions.map(function (action) {
        return _react2.default.createElement(
          "th",
          { key: action.value },
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