/** @jsx createElement */

'use strict';

var _universalRx = require('universal-rx');

var _app = require('./app.rx');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _universalRx.render)((0, _universalRx.createElement)(_app2.default, window.GLOBAL), document.getElementById('container'));