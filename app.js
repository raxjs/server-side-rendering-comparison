'use strict';

process.env.NODE_ENV = 'production';

const fs = require('fs');
const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();

const reactController = require('./assets/build/controller.react.bundle');
const raxController = require('./assets/build/controller.rax.bundle');
const vueController = require('./controllers/vue');

const app = require('xtpl/lib/koa')(require('koa')(), {
  views:'./views'
});


router.get('/react', reactController.home);
router.get('/rax', raxController.home);
router.get('/vue', vueController.home);


app.use(serve('./assets/build'));
app.use(router.routes());

app.listen(3300, () => {
  console.log('Server start listen at 3300');
});
