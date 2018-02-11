'use strict';

process.env.NODE_ENV = 'production';

const fs = require('fs');
const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();

const reactController = require('./controllers/react');
const raxController = require('./controllers/rax');
const vueController = require('./controllers/vue');
const preactController = require('./controllers/preact');
const markoController = require('./controllers/marko');
const infernoController = require('./controllers/inferno');
const hyperappController = require('./controllers/hyperapp');

const app = require('xtpl/lib/koa')(require('koa')(), {
  views:'./views'
});


router.get('/react', reactController.home);
router.get('/rax', raxController.home);
router.get('/vue', vueController.home);
router.get('/preact', preactController.home);
router.get('/marko', markoController.home);
router.get('/inferno', infernoController.home);
router.get('/hyperapp', hyperappController.home);


app.use(serve('./assets/build'));
app.use(router.routes());

app.listen(3300, () => {
  console.log('Server start listen at 3300');
});
