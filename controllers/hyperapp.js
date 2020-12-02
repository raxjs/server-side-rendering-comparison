const { renderToString } = require("hyperapp-render");

module.exports = {
  home: function*() {
    const Hyperapp = require("../assets/build/server.hyperapp.bundle").default;
    const pageConfig = {
      listData: require("../mock/list"),
      bannerData: require("../mock/banner")
    };
    yield this.render("page", {
      type: "hyperapp",
      content: renderToString(Hyperapp.view, Hyperapp.init),
      global: JSON.stringify(pageConfig)
    });
  }
};
