'use strict';

const Vue = require('vue');
const vueRenderToString = require('vue-server-renderer').createRenderer().renderToString;

const VueApp = require('../assets/build/server.vue.bundle').default;

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
