/** @jsx createElement */

'use strict';

import { createElement, Component, render } from 'universal-rx';

import App from './app.rx';

render(<App {...window.GLOBAL} />, document.getElementById('container'));