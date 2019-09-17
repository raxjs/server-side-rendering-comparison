
import {render} from 'inferno';

import App from './app/index.inferno';

render(<App {...window.GLOBAL} />, document.getElementById('container'));
