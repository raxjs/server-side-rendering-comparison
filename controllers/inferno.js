const createElement = require('inferno-create-element');
const InfernoServer = require('inferno-server');

module.exports = {

    home: function* () {

        const InfernoApp = require('../assets/build/server.inferno.bundle').default;

        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        yield this.render('page', {
            type: 'inferno',
            content: InfernoServer.renderToString(
                createElement(InfernoApp, pageConfig)
            ),
            global: JSON.stringify(pageConfig)
        });

    }

}