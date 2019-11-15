'use strict';

/**
 * compare renderToString
 */
const os = require('os');
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

const reactPkg = require('react/package.json');
const raxPkg = require('rax/package.json');
const infernoPkg = require('inferno/package.json');
const preactPkg = require('preact/package.json');
const vuePkg = require('vue/package.json');
const markoPkg = require('marko/package.json');
const xtplPkg = require('xtpl/package.json');

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
  .add(`React(${reactPkg.version})#renderToString`, function() {
    ReactDOMServer.renderToString(React.createElement(ReactApp, data));
  })
  .add(`Rax(${raxPkg.version})#renderToString`, function() {
    raxRenderToString(Rax.createElement(RaxApp, data));
  })
  .add(`Inferno(${infernoPkg.version})#renderToString`, function() {
    InfernoServer.renderToString(infernoCreateElement.createElement(InfernoApp, data));
  })
  .add(`Preact(${preactPkg.version})#renderToString`, function() {
    preactRenderToString(Preact.h(PreactApp, data));
  })
  .add(`Vue(${vuePkg.version})#renderToString`, function(deferred) {
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
  .add(`Marko(${markoPkg.version})#renderToString`, function() {
    MarkoApp.renderToString(data);
  })
  .add(`Xtpl(${xtplPkg.version})#renderFile`, function(deferred){
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
    console.log();
    console.log('The benchmark was run on:');
    const osInformation = getOSInformation();
    Object.keys(osInformation).map(info => {
      console.log('   ' + info.toUpperCase() + ': ' + osInformation[info]);
    });
  })
  // run async
  .run({ 'async': true });


function getOSInformation() {
  return {
    platform: os.platform() + ' ' + os.release(),
    cpu: os.cpus()[0].model,
    'system memory': os.totalmem() / ( 1024 * 1024 * 1024 ) + 'GB',
    'node version': process.version
  };
}