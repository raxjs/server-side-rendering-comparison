/** @jsx h */
import { h, render, Component } from 'preact';

import App from './app/index.preact';

render(<App {...window.GLOBAL} />, document.getElementById('container'));