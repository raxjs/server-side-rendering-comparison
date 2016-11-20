'use strict';

const Rx = require('universal-rx');
const rxRenderToString = require('universal-rx/lib/server/renderToString').default;

const RxApp = require('../assets/dest/app.rx').default;

const appProps = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

console.time('rx');
for (var i = 0; i < 100; i++) {
  rxRenderToString(Rx.createElement(RxApp, appProps));
}
console.timeEnd('rx');