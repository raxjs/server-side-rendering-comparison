'use strict';

const listData = require('../mock/list');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const props = { list: listData };
const ReactList = require('../views/ReactList').default;

console.time('react');
for (let i = 0; i < 100; i++) {
  ReactDOMServer.renderToString(React.createElement(ReactList, props));
}
console.timeEnd('react');