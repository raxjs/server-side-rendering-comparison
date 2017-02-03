
import Inferno from 'inferno';

import App from './app.inferno';

Inferno.render(<App {...window.GLOBAL} />, document.getElementById('container'));