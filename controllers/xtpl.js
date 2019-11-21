const path = require('path');
const fs = require('fs');
const xtemplate = require('xtemplate');

module.exports = {

    home: function* () {
        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        const xtplPath = path.join(__dirname, '../assets/src/app/index.xtpl');
        const xtplString = fs.readFileSync(xtplPath, 'utf8');
        const xtpl = xtemplate.compile(xtplString);
        const xtplApp = new xtemplate(xtpl);

        const content = xtplApp.render(pageConfig);

        yield this.render('page', {
          type: 'xtpl',
          content: content,
          global: JSON.stringify(pageConfig)
      });
    }

}