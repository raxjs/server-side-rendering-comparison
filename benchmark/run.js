'use strict';

const cp = require('child_process');

const runFork = (script, limit) => {
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

runFork('./rx.js')
  .then(() => runFork('./react.js'))
  .catch((err) => {
    console.log('Got Err:', err.stack);
  });

