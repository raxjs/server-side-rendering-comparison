
const Rax = require('rax');
const raxRenderToString = require('rax-server-renderer').renderToString;

module.exports = {

    home: function* () {

        const RaxApp = require('../assets/build/server.rax.bundle').default;
        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        const element = Rax.createElement(RaxApp, pageConfig);
        const content = raxRenderToString(element);

        yield this.render('page', {
            type: 'rax',
            content,
            global: JSON.stringify(pageConfig)
        });

    }

}