
const preact = require('preact');
const preactRenderToString = require('preact-render-to-string');

module.exports = {

    home: function* () {

        const PreactApp = require('../assets/build/server.preact.bundle').default;
        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        yield this.render('page', {
            type: 'rax',
            content: preactRenderToString(preact.h(PreactApp, pageConfig)),
            global: JSON.stringify(pageConfig)
        });

    }

}