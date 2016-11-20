'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const ReactApp = require('../assets/dest/app.react').default;

const appProps = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

console.time('react');
for (let i = 0; i < 100; i++) {
  ReactDOMServer.renderToString(React.createElement(ReactApp, appProps));
}
console.timeEnd('react');