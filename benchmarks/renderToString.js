'use strict';

/**
 * compare renderToString
 */

const Benchmark = require('benchmark');


const reactRenderToString = require('../assets/build/renderToString.react.bundle');
const raxRenderToString = require('../assets/build/renderToString.rax.bundle');
const vueRenderToString = require('./renderToString.vue');

const suite = new Benchmark.Suite;

suite
  .add('Rax#renderToString', raxRenderToString)
  .add('React#renderToString', reactRenderToString)
  .add('Vue#renderToString', vueRenderToString, {defer: true})
  // add listeners
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ 'async': true });
