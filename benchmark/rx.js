'use strict';

const listData = require('../mock/list');
const Rx = require('@ali/rx');
const rxRenderToString = require('@ali/rx/lib/server/renderToString').default;
const props = { list: listData };
const RxList = require('../views/RxList').default;


console.time('rx');
for (var i = 0; i < 100; i++) {
  rxRenderToString(Rx.createElement(RxList, props));
}
console.timeEnd('rx');