import bcc from 'bem-react-component-creator';

const { block, element } = bcc('rights-selector');

const Container = block('table');
Container.Header = element('thead', 'header');
Container.Body = element('tbody', 'body');
Container.Row = element('tr', 'row');
Container.HeaderCell = element('th', 'header-cell');
Container.Cell = element('td', 'cell');
Container.Input = element('input', 'input');

export default Container;