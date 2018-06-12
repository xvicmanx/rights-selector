"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function Body(props) {
  return _react2.default.createElement(
    "tbody",
    null,
    props.resources.map(function (resource) {
      return _react2.default.createElement(
        "tr",
        { key: "" + resource.value },
        _react2.default.createElement(
          "th",
          null,
          resource.label
        ),
        props.actions.map(function (action) {
          return _react2.default.createElement(
            "td",
            { key: action.value + "::" + resource.value },
            _react2.default.createElement("input", {
              onClick: props.onClick,
              type: "checkbox",
              value: action.value + "::" + resource.value
            })
          );
        })
      );
    })
  );
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
  onClick: _propTypes2.default.func.isRequired
};

exports.default = Body;