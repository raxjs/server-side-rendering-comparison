'use strict';

process.env.NODE_ENV = 'production';

const fs = require('fs');
const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Rax = require('rax');
const raxRenderToString = require('rax-server-renderer').renderToString;
const Vue = require('vue');
const vueRenderToString = require('vue-server-renderer').createRenderer().renderToString;

const app = require('xtpl/lib/koa')(require('koa')(), {
  views:'./views'
});

router.get('/react', function *() {

  const ReactApp = require('./assets/build/server.react.bundle').default;

  const pageConfig = {
    listData: require('./mock/list'),
    bannerData: require('./mock/banner')
  };

  yield this.render('page', {
    type: 'react',
    content: ReactDOMServer.renderToString(
                React.createElement(ReactApp, pageConfig)
              ),
    global: JSON.stringify(pageConfig)
  });
});

router.get('/rax', function *() {

  const RaxApp = require('./assets/build/server.rax.bundle').default;
  const pageConfig = {
    listData: require('./mock/list'),
    bannerData: require('./mock/banner')
  };

  yield this.render('page', {
    type: 'rax',
    content: raxRenderToString(Rax.createElement(RaxApp, pageConfig)),
    global: JSON.stringify(pageConfig)
  });

});

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
