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
const svelteController = require('./controllers/svelte');

const app = require('xtpl/lib/koa')(require('koa')(), {
  views:'./views'
});


router.get('/react', reactController.home);
router.get('/rax', raxController.home);
router.get('/vue', vueController.home);
router.get('/preact', preactController.home);
router.get('/svelte', svelteController.home);


app.use(serve('./assets/build'));
app.use(router.routes());

app.listen(3300, () => {
  console.log('Server start listen at 3300');
});
