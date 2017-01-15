
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = {

    home: function* () {

        const ReactApp = require('../assets/build/server.react.bundle').default;

        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        yield this.render('page', {
            type: 'react',
            content: ReactDOMServer.renderToString(
                        React.createElement(ReactApp, pageConfig)
                    ),
            global: JSON.stringify(pageConfig)
        });

    }

}