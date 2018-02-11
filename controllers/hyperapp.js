const hyperapp = require('hyperapp');
const { renderToString } = require('hyperapp-render');

module.exports = {
    home: function* () {
        const App = require('../assets/build/server.hyperapp.bundle').default;
        const config = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };
        yield this.render('page', {
            type: 'hyperapp',
            content: renderToString(hyperapp.h(App, config)),
            global: JSON.stringify(config)
        });
    }
}
