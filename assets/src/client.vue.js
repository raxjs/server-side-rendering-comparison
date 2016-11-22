import Vue from 'vue';

import App from './app.vue';

new Vue({
  el: '#container',
  render (h) {
    return (
      <App bannerData={window.GLOBAL.bannerData} listData={window.GLOBAL.listData} />
    )
  }
})