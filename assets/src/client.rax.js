/** @jsx createElement */

'use strict';

import { createElement, Component, render } from 'rax';

import App from './app.rax';

render(<App {...window.GLOBAL} />, document.getElementById('container'));