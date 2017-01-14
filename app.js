'use strict';

const fs = require('fs');
const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();

const reactRoute = require('./assets/build/route.react.bundle');
const raxRoute = require('./assets/build/route.rax.bundle');
const Vue = require('vue');
const vueRenderToString = require('vue-server-renderer').createRenderer().renderToString;

const app = require('xtpl/lib/koa')(require('koa')(), {
  views:'./views'
});

router.get('/react', reactRoute.default);

router.get('/rax', raxRoute.default);

// note that we don't compile the vue route because the vue renderer is not
// compatible with webpack; it uses require in an unusual way that webpack does
// not understand.
router.get('/vue', function *() {

  const VueApp = require('./assets/build/server.vue.bundle').default;
  const pageConfig = {
    listData: require('./mock/list'),
    bannerData: require('./mock/banner')
  };

  const vm = new Vue({
    render(h) {
      return h(VueApp, {
        attrs: {
          listData: pageConfig.listData,
          bannerData: pageConfig.bannerData
        }
      });
    }
  });

  const content = yield new Promise((resolve, reject) => {
    vueRenderToString(vm, (err, html) => {
      if(err) {
        return reject(err);
      }
      resolve(html);
    });
  });

  yield this.render('page', {
    type: 'vue',
    content: content,
    global: JSON.stringify(pageConfig)
  });

});

app.use(serve('./assets/build'));
app.use(router.routes());

app.listen(3300, () => {
  console.log('Server start listen at 3300');
});
