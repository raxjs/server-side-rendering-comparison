
import { hydrate } from 'inferno-hydrate';

import App from './app/index.inferno';

hydrate(<App {...window.GLOBAL} />, document.getElementById('container'));
