'use strict';

const Vue = require('vue');
const vueRenderToString = require('vue-server-renderer').createRenderer().renderToString;

// note that this is different than the other benchmarks, which directly require
// ../assets/src/app.xxx. This is because we can't webpack this file (vueRenderToString).
// If we try we get errors because vue-server-renderer use require in unusual ways.
// So instead we leave this file un-webpack-ed and bundle up just the vue app code.
const VueApp = require('../assets/build/app.vue.bundle').default;

const appProps = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

console.time('vue');

const vm = new Vue({
  render(h) {
    return h(VueApp, {
      attrs: {
        listData: appProps.listData,
        bannerData: appProps.bannerData
      }
    });
  }
});

const total = 100;
let count = 0;

for (var i = 0; i < total; i++) {

  vueRenderToString(vm, (err, html) => {
    count ++;

    if(err) {
      console.error(err);
    }

    if (count >= total) {
      console.timeEnd('vue');
    }
  });

}
