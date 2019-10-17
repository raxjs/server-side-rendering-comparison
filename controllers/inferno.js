const {createElement} = require('inferno-create-element');
const {renderToString} = require('inferno-server');

module.exports = {

    home: function* () {
        const InfernoApp = require('../assets/build/server.inferno.bundle').default;

        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        renderToString(createElement(InfernoApp, pageConfig))

        yield this.render('page', {
            type: 'inferno',
            content: renderToString(
                createElement(InfernoApp, pageConfig)
            ),
            global: JSON.stringify(pageConfig)
        });

    }

}
