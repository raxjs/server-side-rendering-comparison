
const Rax = require('rax');
const raxRenderToString = require('rax-server-renderer').renderToString;

module.exports = {

    home: function* () {

        const RaxApp = require('../assets/src/app.rax').default;
        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        yield this.render('page', {
            type: 'rax',
            content: raxRenderToString(Rax.createElement(RaxApp, pageConfig)),
            global: JSON.stringify(pageConfig)
        });

    }

}
