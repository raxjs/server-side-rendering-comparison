'use strict';
const path = require('path');
/**
 * compare renderToString
 */

const cp = require('child_process');

const limit = 10;

// Independent process serial execution 10 times, each process parallel rendering 100 times
runRenderTask(path.join(__dirname, '..', 'assets', 'build', 'renderToString.rax.bundle.js'), limit)
  .then(() => runRenderTask(path.join(__dirname, '..', 'assets', 'build', 'renderToString.react.bundle.js'), limit))
  .then(() => runRenderTask(path.join(__dirname, 'vueRenderToString.js'), limit))
  .catch((err) => {
    console.log('Got Err:', err.stack);
  });

function runRenderTask(script, limit) {

  limit = limit || 10;
  return new Promise((resolve, reject) => {
    let count = 0;

    (function run() {
      if (count === limit) {
        return resolve();
      }
      count ++;
      cp.fork(script)
        .on('exit', run);
    })();
  });
}
