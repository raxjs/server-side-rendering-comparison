const Vue = require('vue');
const vueRenderToString = require('vue-server-renderer').createRenderer().renderToString;
const VueApp = require('../assets/build/server.vue.bundle').default;

const data = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

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

module.exports = function(deferred) {
  vueRenderToString(vueVm, (err, html) => {
    if(err) {
      throw err;
    } else {
      deferred.resolve();
    }
  });
};
