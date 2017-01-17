
import React from 'react';
import ReactDom from 'react-dom';

import App from './app/index.react';

ReactDom.render(<App {...window.GLOBAL} />, document.getElementById('container'));