/** @jsx h */
import { app } from 'hyperapp';
import { view } from './app/index.hyperapp';

app(window.GLOBAL, null, view, document.getElementById('container'))
