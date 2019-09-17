
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = {

    home: function* () {

        const ReactApp = require('../assets/build/server.react.bundle').default;

        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        const element = React.createElement(ReactApp, pageConfig);
        const content = ReactDOMServer.renderToString(element);

        yield this.render('page', {
            type: 'react',
            content,
            global: JSON.stringify(pageConfig)
        });

    }

}