const Rax = require('rax');
const raxRenderToString = require('rax-server-renderer').renderToString;
const RaxApp = require('../assets/src/app.rax').default;

const data = {
  listData: require('../mock/list'),
  bannerData: require('../mock/banner')
};

module.exports = function() {
  raxRenderToString(Rax.createElement(RaxApp, data));
};
