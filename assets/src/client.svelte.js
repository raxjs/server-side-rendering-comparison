import App from './app.svelte.html';

var app = new App({
  target: document.getElementById('container'),
  data: {
    ...window.GLOBAL,
  },
});
