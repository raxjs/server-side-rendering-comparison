
import React from 'react';
import ReactDom from 'react-dom';

import App from './app/index.react';

ReactDom.hydrate(<App {...window.GLOBAL} />, document.getElementById('container'));
