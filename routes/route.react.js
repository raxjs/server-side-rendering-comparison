import ReactApp from '../assets/src/app.react'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

export default function *() {

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
