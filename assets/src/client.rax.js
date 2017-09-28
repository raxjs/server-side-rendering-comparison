/** @jsx createElement */

'use strict';

import { createElement, Component, render, hydrate } from 'rax';

import App from './app/index.rax';

hydrate(<App {...window.GLOBAL} />, document.getElementById('container'));
