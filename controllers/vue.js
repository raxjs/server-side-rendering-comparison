
const Vue = require('vue');
const vueRenderToString = require('vue-server-renderer').createRenderer().renderToString;

module.exports = {

    home: function* () {

        const VueApp = require('../assets/build/server.vue.bundle').default;
        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        const vm = new Vue({
            render(h) {
            return h(VueApp, {
                attrs: {
                listData: pageConfig.listData,
                bannerData: pageConfig.bannerData
                }
            });
            }
        });

        const content = yield new Promise((resolve, reject) => {
            vueRenderToString(vm, (err, html) => {
                if(err) {
                    return reject(err);
                }
                resolve(html);
            });
        });

        yield this.render('page', {
            type: 'vue',
            content: content,
            global: JSON.stringify(pageConfig)
        });
    }

}