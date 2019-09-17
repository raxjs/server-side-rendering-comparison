
const Rax = require('rax');
const xtpl = require('xtpl');
const path = require('path');

module.exports = {

    home: function* () {

        const xtplAppPath = path.join(__dirname, '../assets/src/app/index.xtpl');
        const pageConfig = {
            listData: require('../mock/list'),
            bannerData: require('../mock/banner')
        };

        const content = yield new Promise((resolve, reject) => {
          xtpl.renderFile(xtplAppPath, pageConfig, function(error, content){
            resolve(content)
          });
        });

        yield this.render('page', {
          type: 'xtpl',
          content: content,
          global: JSON.stringify(pageConfig)
      });
    }

}