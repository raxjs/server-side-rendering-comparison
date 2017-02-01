module.exports = {

    home: function* () {

        const SvelteApp = require('../assets/build/server.svelte.bundle').default;

        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        yield this.render('page', {
            type: 'svelte',
            content: SvelteApp.render(pageConfig),
            global: JSON.stringify(pageConfig)
        });

    }

}
