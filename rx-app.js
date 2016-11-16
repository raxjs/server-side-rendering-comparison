'use strict';

const path = require('path');
const koa = require('koa');
const listData = require('./mock/list');

const reactMiddleWare = require('./middlewares/render');

const app = koa();
const viewpath = path.join(__dirname, 'views');

reactMiddleWare(app, {
  type: 'rx',
  views: viewpath,
  extname: 'js'
});

app.use(function* () {
  this.render('RxList', {list: listData});
});

app.listen(3000);

console.log('Server(Rx) start listen at 3000');