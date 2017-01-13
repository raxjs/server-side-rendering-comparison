/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	var _rax = __webpack_require__(1);

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _rax.render)((0, _rax.createElement)(_app2.default, window.GLOBAL), document.getElementById('container'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = window.Rax;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	var _index = __webpack_require__(3);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(4);

	var _index4 = _interopRequireDefault(_index3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /** @jsx createElement */

	var App = function (_Component) {
	  _inherits(App, _Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // console.log('rx render in client');
	    }
	  }, {
	    key: 'render',
	    value: function render() {

	      var props = this.props || {};

	      return (0, _rax.createElement)(
	        'div',
	        null,
	        (0, _rax.createElement)(_index4.default, { data: props.bannerData }),
	        (0, _rax.createElement)(_index2.default, { data: props.listData })
	      );
	    }
	  }]);

	  return App;
	}(_rax.Component);

	exports.default = App;
	;

	// export default function(props = {}) {

	//   return (
	//     <div>
	//       <Banner data={props.bannerData} />
	//       <List data={props.listData} />
	//     </div>
	//   );

	// };

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import listData from '../../../../mock/list';

	var List = function (_Component) {
	  _inherits(List, _Component);

	  function List() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, List);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      data: _this.props.data || []
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(List, [{
	    key: 'render',


	    // componentDidMount() {
	    //   this.setState({
	    //     data: window && window.GLOBAL.listData
	    //   });
	    // }

	    value: function render() {
	      var data = this.state.data;

	      return (0, _rax.createElement)(
	        'div',
	        null,
	        (0, _rax.createElement)(
	          'h2',
	          null,
	          'RxList'
	        ),
	        data.map(function (item, idx) {
	          return (0, _rax.createElement)(
	            'div',
	            { key: idx, style: {
	                float: 'left',
	                width: '200px',
	                marginRight: '10px',
	                marginBottom: '10px'
	              } },
	            (0, _rax.createElement)('img', { src: item.img, style: {
	                width: '100%'
	              } }),
	            (0, _rax.createElement)(
	              'p',
	              null,
	              item.title
	            ),
	            (0, _rax.createElement)('div', null)
	          );
	        })
	      );
	    }
	  }]);

	  return List;
	}(_rax.Component);

	exports.default = List;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	/** 
	 * Banner: 支持缓存
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// import bannerData from '../../../../mock/banner';

	var Banner = function (_Component) {
	  _inherits(Banner, _Component);

	  function Banner() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Banner);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Banner.__proto__ || Object.getPrototypeOf(Banner)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      data: _this.props.data || []
	    }, _this.onBannerClick = function (item) {
	      alert('click banner:' + item.title);
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  // componentDidMount() {
	  //   // 异步获取数据
	  //   this.setState({
	  //     data: window && window.GLOBAL.bannerData
	  //   });
	  // }

	  _createClass(Banner, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var data = this.state.data;


	      var itemStyle = {
	        display: 'inline-block',
	        width: '200px',
	        marginLeft: '200px'
	      };

	      var imgStyle = {
	        width: '100%'
	      };

	      return (0, _rax.createElement)(
	        'div',
	        null,
	        (0, _rax.createElement)(
	          'h2',
	          null,
	          'Rx Banner: '
	        ),
	        data.map(function (item, idx) {
	          return (0, _rax.createElement)(
	            'div',
	            { style: itemStyle, onClick: _this2.onBannerClick.bind(_this2, item) },
	            (0, _rax.createElement)('img', { src: item.img, style: imgStyle })
	          );
	        })
	      );
	    }
	  }]);

	  return Banner;
	}(_rax.Component);

	exports.default = Banner;

/***/ }
/******/ ]);