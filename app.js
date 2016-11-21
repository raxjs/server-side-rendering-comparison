'use strict';

const koa = require('koa');
const serve = require('koa-static');
const router = require('koa-router')();

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Rx = require('universal-rx');
const rxRenderToString = require('universal-rx/lib/server/renderToString').default;

/**
  static getFetchConfig = function(query) {
    return {
      // 协议
      api: '/user/get',
      query: {
        pageIndex: 1,
        // 动态 query
        uid: query.uid
      }
    };
  };

  static preFetch = true;

  statice state = {
    data: this.props.data
  };

  componentDidMount() {
    if (!this.state.data) {
      const config = this.getFetchConfig({uid: window.uid});

      fetch(config.api)
        .then(() => {
          this.setState();
        });
    }
  }
*/
/**
 * server controller
 * 
 * // get from ReactApp
 * const ReactApp = require('./assets/dest/app.react').default;
 * const components = [User, List]; // get components by ReactApp ?
 * const appProps = {};
 * 
 * components.forEach((component) => {
 *   if (component.preFetch) {
 *     let dynamicQuery = {};
 *     
 *     if (component === 'User') {
 *       dynamicQuery = {uid: this.session.uid};
 *     } else if (component === 'List') {
 *       dynamicQuery = {key: this.query.key};
 *     }
 *  
 *     const fetchConfig = Component.getFetchConfig(dynamicQuery);
 *     const data = yield model.get(fetchConfig);
 *   }
 * });
 *
 * const markup = ReactDOMServer.renderToString(
                React.createElement(ReactApp, appProps)
              );
 *            
 */
// TODO:
//   - 传入 cache 的 get 和 set
//   - rx 内置内存缓存的方案

const app = require('xtpl/lib/koa')(require('koa')(), {
  views:'./views'
});

router.get('/react', function *() {

  const ReactApp = require('./assets/dest/app.react').default;

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

router.get('/rx', function *() {

  const RxApp = require('./assets/dest/app.rx').default;
  const pageConfig = {
    listData: require('./mock/list'),
    bannerData: require('./mock/banner')
  };

  yield this.render('page', {
    type: 'rx',
    content: rxRenderToString(Rx.createElement(RxApp, pageConfig)),
    global: JSON.stringify(pageConfig)
  });

});

app.use(serve('./assets/build'));
app.use(router.routes());

app.listen(3300, () => {
  console.log('Server start listen at 3300');
});
