'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bemReactComponentCreator = require('bem-react-component-creator');

var _bemReactComponentCreator2 = _interopRequireDefault(_bemReactComponentCreator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _bcc = (0, _bemReactComponentCreator2.default)('rights-selector'),
    block = _bcc.block,
    element = _bcc.element;

var Container = block('table');
Container.Header = element('thead', 'header');
Container.Body = element('tbody', 'body');
Container.Row = element('tr', 'row');
Container.HeaderCell = element('th', 'header-cell');
Container.Cell = element('td', 'cell');
Container.Input = element('input', 'input');

exports.default = Container;