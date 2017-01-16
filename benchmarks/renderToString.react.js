const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactApp = require('../assets/src/app.react').default;

const data = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

module.exports = function() {
  ReactDOMServer.renderToString(React.createElement(ReactApp, data));
};
