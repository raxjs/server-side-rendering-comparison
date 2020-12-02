import { app } from 'hyperapp';

import { init, view } from './app/index.hyperapp';

app({ init, view, node: document.getElementById('container') });
