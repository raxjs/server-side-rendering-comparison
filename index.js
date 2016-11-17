'use strict';

const koa = require('koa');
const listData = require('./mock/list');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Rx = require('@ali/rx');
const rxRenderToString = require('@ali/rx/lib/server/renderToString').default;
const props = { list: listData };
const ReactList = require('./views/ReactList').default;
const RxList = require('./views/RxList').default;

koa()
  .use(function*() {
    switch (this.path) {
      case '/react': 
        this.body = ReactDOMServer.renderToString(React.createElement(ReactList, props));
        break;
      case '/rx':
        this.body = rxRenderToString(Rx.createElement(RxList, props));
        break;
      default:
        this.body = 'not found';
    }
  })
  .listen(3300, () => {
    console.log('Server start listen at 3300');
  });
