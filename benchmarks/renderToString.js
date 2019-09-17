'use strict';

/**
 * compare renderToString
 */

const Benchmark = require('benchmark');
const xtpl = require('xtpl');
const Rax = require('rax');
const raxRenderToString = require('rax-server-renderer').renderToString;
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Vue = require('vue');
const vueRenderToString = require('vue-server-renderer').createRenderer().renderToString;
const Preact = require('preact');
const preactRenderToString = require('preact-render-to-string');
const InfernoServer = require('inferno-server');
const infernoCreateElement = require('inferno-create-element');

const ReactApp = require('../assets/build/server.react.bundle').default;
const RaxApp = require('../assets/build/server.rax.bundle').default;
const VueApp = require('../assets/build/server.vue.bundle').default;
const PreactApp = require('../assets/build/server.preact.bundle').default;
const MarkoApp = require('../assets/build/server.marko.bundle');
const InfernoApp = require('../assets/build/server.inferno.bundle').default;

const path = require('path');
const xtplAppPath = path.join(__dirname, '../assets/src/app/index.xtpl');

const data = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

const suite = new Benchmark.Suite;

suite
  .add('React#renderToString', function() {
    ReactDOMServer.renderToString(React.createElement(ReactApp, data));
  })
  .add('Rax#renderToString', function() {
    raxRenderToString(Rax.createElement(RaxApp, data));
  })
  .add('Inferno#renderToString', function() {
    InfernoServer.renderToString(infernoCreateElement.createElement(InfernoApp, data));
  })
  .add('Preact#renderToString', function() {
    preactRenderToString(Preact.h(PreactApp, data));
  })
  .add('Vue#renderToString', function(deferred) {
    const vueVm = new Vue({
      render(h) {
        return h(VueApp, {
          attrs: {
            listData: data.listData,
            bannerData: data.bannerData
          }
        });
      }
    });
    vueRenderToString(vueVm, (err, html) => {
      if(err) {
        return deferred.reject(err);
      }
      deferred.resolve();
    });
  }, {defer: true})
  .add('Marko#renderToString', function() {
    MarkoApp.renderToString(data);
  })
  .add('Xtpl#renderFile', function(deferred){
    xtpl.renderFile(xtplAppPath, data, function(error, content){
      deferred.resolve();
    });
  }, {defer: true})
  .on('cycle', function(event) {
    // const t = event.target.stats.mean;
    // console.log('mean:' + (t*1000).toFixed(3) + 'ms');
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });
