'use strict';

/**
 * compare renderToString
 */

const cp = require('child_process');

const limit = 1;

// 对同一组件并行渲染十次，然后串行在十个独立的子进程里执行
runRenderTask(__dirname + '/rxRenderToString.js', limit)
  .then(() => runRenderTask(__dirname + '/reactRenderToString.js', limit))
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