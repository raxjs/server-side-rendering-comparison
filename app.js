'use strict';

const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Rx = require('universal-rx');
const rxRenderToString = require('universal-rx/lib/server/renderToString').default;
const pageConfig = {
  listData: require('./mock/list'),
  bannerData: require('./mock/banner')
};


const app = require('xtpl/lib/koa')(require('koa')(), {
  views:'./views'
});

router.get('/react', function *() {

  const ReactApp = require('./assets/dest/app.react').default;
  
  yield this.render('home.react', {
    content: ReactDOMServer.renderToString(
                React.createElement(ReactApp, pageConfig)
              ),
    global: JSON.stringify(pageConfig)
  });
});

router.get('/rx', function *() {

  const RxApp = require('./assets/dest/app.rx').default;

  yield this.render('home.rx', {
    content: rxRenderToString(Rx.createElement(RxApp, pageConfig)),
    global: JSON.stringify(pageConfig)
  });

});

app.use(serve('./assets/build'));
app.use(router.routes());

app.listen(3300, () => {
  console.log('Server start listen at 3300');
});
