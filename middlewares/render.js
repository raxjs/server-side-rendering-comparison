/*!
 * koa-react/rx-view - index.js
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */

var React = require('react');
var ReactDOMServer = require('react-dom/server');

var Rx = require('@ali/rx');
var rxRenderToString = require('@ali/rx/lib/server/renderToString').default;

var path = require('path');

var defaultOptions = {
  type: 'react', // rx
  doctype: '<!DOCTYPE html>',
  beautify: false,
  cache: false,  // process.env.NODE_ENV === 'production',
  extname: 'jsx',
  writeResp: true,
  views: path.join(__dirname, 'views')
};

let COUNT = 0;
let renderTime = 0; // ms

module.exports = function(app, _options) {
  _options = _options || {};

  var options = Object.assign(defaultOptions, _options);

  options.views = path.resolve(options.views);
  options.extname = options.extname.replace(/^\.?/, '.');

  /**
   * render react template to html
   *
   * @param {String} filename
   * @param {Object} _locals
   * @return {String}
   */
  app.context.render = function(filename, _locals) {
    // resolve filepath
    var filepath = path.join(options.views, filename);
    if (filepath.indexOf(options.views) !== 0) {
      var err = new Error('Cannot find module ' + filename);
      err.code = 'REACT';
      throw err;
    }
    if (!path.extname(filepath)) filepath += options.extname;

    var render = options.type === 'react'
                    ? ReactDOMServer.renderToString
                    : rxRenderToString;

    var locals = {};
    // merge koa state
    merge(locals, this.state || {});
    merge(locals, _locals);

    var markup = options.doctype || '';

    try {

      var component = require(filepath);
      // Transpiled ES6 may export components as { default: Component }
      component = component.default || component;

      COUNT ++;
      const start = Date.now();

      markup += options.type === 'react'
                    ? render(React.createElement(component, locals))
                    : render(Rx.createElement(component, locals));
      const end = Date.now();
      renderTime += (end - start);

      if (COUNT === 100) {
        console.log('%s 100 次 renderTime: %s ms', options.type, renderTime);
        COUNT = 0;
        renderTime = 0;
      }

    } catch(err) {
      err.code = 'REACT';
      throw err;
    }

    this.type = 'html';
    this.body = markup;

    return markup;
  };
};


/**
 * merge source to taget
 *
 * @param {Object} target
 * @param {Object} source
 * @return {Object}
 */
function merge(target, source) {
  for (var key in source) {
    target[key] = source[key];
  }

  return target;
}
