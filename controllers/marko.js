
const pageTemplatePath = require.resolve('../views/page.marko');
const pageTemplate = require('marko').load(pageTemplatePath, { writeToDisk:false });

module.exports = {

    home: function* () {

        const app = require('../assets/build/server.marko.bundle');
        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        this.body = pageTemplate.renderToString({ pageConfig, app });
    }

}