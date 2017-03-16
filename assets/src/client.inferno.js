
import Inferno from 'inferno';

import App from './app/index.inferno';

Inferno.render(<App {...window.GLOBAL} />, document.getElementById('container'));
