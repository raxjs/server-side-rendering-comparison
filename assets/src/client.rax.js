/** @jsx createElement */

'use strict';

import { createElement, Component, render, hydrate } from 'rax';
import * as driverDom from 'driver-dom';

import App from './app/index.rax';

render(<App {...window.GLOBAL} />, document.getElementById('container'), { driver: driverDom, hydrate: true});
