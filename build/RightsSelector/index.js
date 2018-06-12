'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

var _wrappers = require('./wrappers');

var _wrappers2 = _interopRequireDefault(_wrappers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RIGHT_REGEX = /(.+)::(.+)/;

var RightsSelector = function (_React$Component) {
  _inherits(RightsSelector, _React$Component);

  function RightsSelector(props) {
    _classCallCheck(this, RightsSelector);

    var _this = _possibleConstructorReturn(this, (RightsSelector.__proto__ || Object.getPrototypeOf(RightsSelector)).call(this, props));

    _this.state = {
      rights: props.rights || {}
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(RightsSelector, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.rights) {
        this.setState({ rights: nextProps.rights });
      }
    }
  }, {
    key: 'handleClick',
    value: function handleClick(evt) {
      var value = evt.target.value;
      var rights = this.state.rights;

      var action = value.replace(RIGHT_REGEX, "$1");
      var resource = value.replace(RIGHT_REGEX, "$2");
      var update = _extends({}, rights);
      update[resource] = update[resource] || {};
      update[resource][action] = !update[resource][action];
      this.setState({ rights: update });
      this.props.onChange(update);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          actions = _props.actions,
          resources = _props.resources,
          actionsLabel = _props.actionsLabel,
          resourcesLabel = _props.resourcesLabel,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        _wrappers2.default,
        {
          className: className,
          style: style
        },
        _react2.default.createElement(_Header2.default, {
          actions: actions,
          resourcesLabel: resourcesLabel,
          actionsLabel: actionsLabel
        }),
        _react2.default.createElement(_Body2.default, {
          actions: actions,
          resources: resources,
          onClick: this.handleClick
        })
      );
    }
  }]);

  return RightsSelector;
}(_react2.default.Component);

RightsSelector.defaultProps = {
  className: '',
  style: {}
};

RightsSelector.propTypes = {
  actions: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.any
  })).isRequired,
  resources: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string,
    value: _propTypes2.default.any
  })).isRequired,
  onChange: _propTypes2.default.func.isRequired,
  actionsLabel: _propTypes2.default.string.isRequired,
  resourcesLabel: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  style: _propTypes2.default.instanceOf(Object)
};

exports.default = RightsSelector;