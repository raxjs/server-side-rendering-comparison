'use strict';

const Rax = require('rax');
const raxRenderToString = require('rax-server-renderer').renderToString;

const RxApp = require('../assets/build/server.rax.bundle').default;

const appProps = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

console.time('rax');
for (var i = 0; i < 100; i++) {
  raxRenderToString(Rax.createElement(RxApp, appProps));
}
console.timeEnd('rax');