import RaxApp from '../assets/src/app.rax'
const Rax = require('rax');
import { renderToString } from 'rax-server-renderer'

export default function *() {

  const pageConfig = {
    listData: require('../mock/list'),
    bannerData: require('../mock/banner')
  };

  yield this.render('page', {
    type: 'rax',
    content: renderToString(Rax.createElement(RaxApp, pageConfig)),
    global: JSON.stringify(pageConfig)
  });

}
