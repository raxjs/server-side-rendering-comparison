'use strict';

const path = require('path');
const koa = require('koa');
const listData = require('./mock/list');
const reactMiddleWare = require('./middlewares/render');

const app = koa();
const viewpath = path.join(__dirname, 'views');

reactMiddleWare(app, {
  type: 'react',
  views: viewpath,
  extname: 'js'
});

app.use(function* () {
  this.render('ReactList', {list: listData});
});

app.listen(3300);

console.log('Server(React) start listen at 3300');