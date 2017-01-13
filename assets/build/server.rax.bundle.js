module.exports =
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

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(2);

	var _index = __webpack_require__(37);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(38);

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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getDriver = exports.setDriver = exports.version = exports.setNativeProps = exports.findComponentInstance = exports.unmountComponentAtNode = exports.findDOMNode = exports.render = exports.PropTypes = exports.PureComponent = exports.Component = exports.createFactory = exports.isValidElement = exports.cloneElement = exports.createElement = undefined;

	var _element = __webpack_require__(3);

	Object.defineProperty(exports, 'createElement', {
	  enumerable: true,
	  get: function get() {
	    return _element.createElement;
	  }
	});
	Object.defineProperty(exports, 'cloneElement', {
	  enumerable: true,
	  get: function get() {
	    return _element.cloneElement;
	  }
	});
	Object.defineProperty(exports, 'isValidElement', {
	  enumerable: true,
	  get: function get() {
	    return _element.isValidElement;
	  }
	});
	Object.defineProperty(exports, 'createFactory', {
	  enumerable: true,
	  get: function get() {
	    return _element.createFactory;
	  }
	});

	var _driver = __webpack_require__(6);

	Object.defineProperty(exports, 'setDriver', {
	  enumerable: true,
	  get: function get() {
	    return _driver.setDriver;
	  }
	});
	Object.defineProperty(exports, 'getDriver', {
	  enumerable: true,
	  get: function get() {
	    return _driver.getDriver;
	  }
	});

	__webpack_require__(13);

	var _component = __webpack_require__(20);

	var _component2 = _interopRequireDefault(_component);

	var _purecomponent = __webpack_require__(21);

	var _purecomponent2 = _interopRequireDefault(_purecomponent);

	var _proptypes = __webpack_require__(22);

	var _proptypes2 = _interopRequireDefault(_proptypes);

	var _render2 = __webpack_require__(23);

	var _render3 = _interopRequireDefault(_render2);

	var _findDOMNode2 = __webpack_require__(9);

	var _findDOMNode3 = _interopRequireDefault(_findDOMNode2);

	var _unmountComponentAtNode2 = __webpack_require__(16);

	var _unmountComponentAtNode3 = _interopRequireDefault(_unmountComponentAtNode2);

	var _findComponentInstance2 = __webpack_require__(35);

	var _findComponentInstance3 = _interopRequireDefault(_findComponentInstance2);

	var _setNativeProps2 = __webpack_require__(8);

	var _setNativeProps3 = _interopRequireDefault(_setNativeProps2);

	var _version2 = __webpack_require__(36);

	var _version3 = _interopRequireDefault(_version2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Component = _component2.default;
	exports.PureComponent = _purecomponent2.default;
	exports.PropTypes = _proptypes2.default;
	exports.render = _render3.default;
	exports.findDOMNode = _findDOMNode3.default;
	exports.unmountComponentAtNode = _unmountComponentAtNode3.default;
	exports.findComponentInstance = _findComponentInstance3.default;
	exports.setNativeProps = _setNativeProps3.default;
	exports.version = _version3.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.createElement = createElement;
	exports.createFactory = createFactory;
	exports.cloneElement = cloneElement;
	exports.isValidElement = isValidElement;

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _universalEnv = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RESERVED_PROPS = {
	  key: true,
	  ref: true
	};

	function getRenderErrorInfo() {
	  if (_host2.default.component) {
	    var name = _host2.default.component.getName();
	    if (name) {
	      return ' Check the render method of `' + name + '`.';
	    }
	  }
	  return '';
	}

	var Element = function Element(type, key, ref, props, owner) {
	  props = filterProps(type, props);

	  return {
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };
	};

	exports.default = Element;


	function traverseChildren(children, result) {
	  if (Array.isArray(children)) {
	    for (var i = 0, l = children.length; i < l; i++) {
	      traverseChildren(children[i], result);
	    }
	  } else {
	    result.push(children);
	  }
	}

	function flattenChildren(children) {
	  if (children == null) {
	    return children;
	  }
	  var result = [];
	  traverseChildren(children, result);

	  if (result.length === 1) {
	    result = result[0];
	  }

	  return result;
	}

	function flattenStyle(style) {
	  if (!style) {
	    return undefined;
	  }

	  if (!Array.isArray(style)) {
	    return style;
	  } else {
	    var result = {};
	    for (var i = 0; i < style.length; ++i) {
	      var computedStyle = flattenStyle(style[i]);
	      if (computedStyle) {
	        for (var key in computedStyle) {
	          result[key] = computedStyle[key];
	        }
	      }
	    }
	    return result;
	  }
	}

	// TODO: so hack
	function filterProps(type, props) {
	  // Only for weex text
	  if (_universalEnv.isWeex && type === 'text') {
	    var value = props.children;
	    if (value) {
	      if (Array.isArray(value)) {
	        value = value.join('');
	      }
	      props.children = null;
	      props.value = value;
	    }
	  }
	  return props;
	}

	function createElement(type, config) {
	  if (type == null) {
	    throw Error('createElement: type should not be null or undefined.' + getRenderErrorInfo());
	  }
	  // Reserved names are extracted
	  var props = {};
	  var propName = void 0;
	  var key = null;
	  var ref = null;

	  if (config != null) {
	    ref = config.ref === undefined ? null : config.ref;
	    key = config.key === undefined ? null : String(config.key);
	    // Remaining properties are added to a new props object
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    }
	  }

	  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    children[_key - 2] = arguments[_key];
	  }

	  if (children.length) {
	    props.children = flattenChildren(children);
	  }

	  // Resolve default props
	  if (type && type.defaultProps) {
	    var defaultProps = type.defaultProps;
	    for (propName in defaultProps) {
	      if (props[propName] === undefined) {
	        props[propName] = defaultProps[propName];
	      }
	    }
	  }

	  if (props.style && (Array.isArray(props.style) || _typeof(props.style) === 'object')) {
	    props.style = flattenStyle(props.style);
	  }

	  return new Element(type, key, ref, props, _host2.default.component);
	}

	function createFactory(type) {
	  var factory = createElement.bind(null, type);
	  // Expose the type on the factory and the prototype so that it can be
	  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
	  // This should not be named `constructor` since this may not be the function
	  // that created the element, and it may not even be a constructor.
	  factory.type = type;
	  return factory;
	}

	function cloneElement(element, config) {
	  // Original props are copied
	  var props = Object.assign({}, element.props);

	  // Reserved names are extracted
	  var key = element.key;
	  var ref = element.ref;

	  // Owner will be preserved, unless ref is overridden
	  var owner = element._owner;

	  if (config) {
	    // Should reset ref and owner if has a new ref
	    if (config.ref !== undefined) {
	      ref = config.ref;
	      owner = _host2.default.component;
	    }

	    if (config.key !== undefined) {
	      key = String(config.key);
	    }

	    // Resolve default props
	    var defaultProps = void 0;
	    if (element.type && element.type.defaultProps) {
	      defaultProps = element.type.defaultProps;
	    }
	    // Remaining properties override existing props
	    var propName = void 0;
	    for (propName in config) {
	      if (config.hasOwnProperty(propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        if (config[propName] === undefined && defaultProps !== undefined) {
	          // Resolve default props
	          props[propName] = defaultProps[propName];
	        } else {
	          props[propName] = config[propName];
	        }
	      }
	    }
	  }

	  for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	    children[_key2 - 2] = arguments[_key2];
	  }

	  if (children.length) {
	    props.children = flattenChildren(children);
	  }

	  return new Element(element.type, key, ref, props, owner);
	};

	function isValidElement(object) {
	  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.type && object.props;
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Stateful things in runtime
	 */
	exports.default = {
	  component: null,
	  driver: null,
	  mountID: 1,
	  sandbox: true,
	  // Roots
	  rootComponents: {},
	  rootInstances: {}
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	// https://www.w3.org/TR/html5/webappapis.html#dom-navigator-appcodename
	var isWeb = exports.isWeb = (typeof navigator === 'undefined' ? 'undefined' : _typeof(navigator)) === 'object' && (navigator.appCodeName === 'Mozilla' || navigator.product === 'Gecko');
	var isNode = exports.isNode = typeof process !== 'undefined' && !!(process.versions && process.versions.node);
	var isWeex = exports.isWeex = typeof callNative === 'function';
	var isReactNative = exports.isReactNative = typeof __fbBatchedBridgeConfig !== 'undefined';

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.injectDriver = exports.getDriver = exports.setDriver = undefined;

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _weex = __webpack_require__(7);

	var _weex2 = _interopRequireDefault(_weex);

	var _browser = __webpack_require__(11);

	var _browser2 = _interopRequireDefault(_browser);

	var _universalEnv = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setDriver = exports.setDriver = function setDriver(driver) {
	  _host2.default.driver = driver;
	};

	var getDriver = exports.getDriver = function getDriver() {
	  return _host2.default.driver;
	};

	var injectDriver = exports.injectDriver = function injectDriver() {
	  var driver = getDriver();

	  // Inject driver
	  if (!driver) {
	    if (_universalEnv.isWeex) {
	      driver = _weex2.default;
	    } else if (_universalEnv.isWeb) {
	      driver = _browser2.default;
	    } else {
	      throw Error('No builtin driver matched');
	    }

	    setDriver(driver);
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Weex driver
	                                                                                                                                                                                                                                                                               **/


	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _setNativeProps = __webpack_require__(8);

	var _setNativeProps2 = _interopRequireDefault(_setNativeProps);

	var _unit = __webpack_require__(10);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var STYLE = 'style';
	var ID = 'id';
	var TEXT = 'text';
	var FULL_WIDTH_REM = 750;
	var DOCUMENT_FRAGMENT_NODE = 11;
	var nodeMaps = {};
	/* global __weex_document__ */
	var document = (typeof __weex_document__ === 'undefined' ? 'undefined' : _typeof(__weex_document__)) === 'object' ? __weex_document__ : (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object' ? document : null;

	var Driver = {
	  getElementById: function getElementById(id) {
	    return nodeMaps[id];
	  },
	  getChildNodes: function getChildNodes(node) {
	    return node.children;
	  },
	  createBody: function createBody() {
	    // Close batched updates
	    document.open();

	    if (document.body) {
	      return document.body;
	    }

	    var documentElement = document.documentElement;
	    var body = document.createBody();
	    documentElement.appendChild(body);

	    return body;
	  },
	  createFragment: function createFragment() {
	    return {
	      nodeType: DOCUMENT_FRAGMENT_NODE,
	      childNodes: []
	    };
	  },
	  createComment: function createComment(content) {
	    return document.createComment(content);
	  },
	  createEmpty: function createEmpty() {
	    return this.createComment(' empty ');
	  },
	  createText: function createText(text) {
	    return Driver.createElement({
	      type: TEXT,
	      props: {
	        value: text
	      }
	    });
	  },
	  updateText: function updateText(node, content) {
	    this.setAttribute(node, 'value', content);
	  },
	  createElement: function createElement(component) {
	    var props = component.props;
	    var events = [];
	    var style = {};
	    var originStyle = props[STYLE];
	    for (var prop in originStyle) {
	      style[prop] = (0, _unit.convertUnit)(originStyle[prop], prop);
	    }

	    var node = document.createElement(component.type, {
	      style: style
	    });

	    (0, _setNativeProps2.default)(node, props, true);

	    return node;
	  },
	  appendChild: function appendChild(node, parent) {
	    var _this = this;

	    if (parent.nodeType === DOCUMENT_FRAGMENT_NODE) {
	      return parent.childNodes.push(node);
	    } else if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
	      return node.childNodes.map(function (child) {
	        return _this.appendChild(child, parent);
	      });
	    } else {
	      return parent.appendChild(node);
	    }
	  },
	  removeChild: function removeChild(node, parent) {
	    var id = node.attr && node.attr[ID];
	    if (id != null) {
	      nodeMaps[id] = null;
	    }
	    return parent.removeChild(node);
	  },
	  replaceChild: function replaceChild(newChild, oldChild, parent) {
	    var previousSibling = oldChild.previousSibling;
	    var nextSibling = oldChild.nextSibling;
	    this.removeChild(oldChild, parent);

	    if (previousSibling) {
	      this.insertAfter(newChild, previousSibling, parent);
	    } else if (nextSibling) {
	      this.insertBefore(newChild, nextSibling, parent);
	    } else {
	      this.appendChild(newChild, parent);
	    }
	  },
	  insertAfter: function insertAfter(node, after, parent) {
	    var _this2 = this;

	    if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
	      return node.childNodes.map(function (child, index) {
	        return _this2.insertAfter(child, node.childNodes[index - 1] || after, parent);
	      });
	    } else {
	      return parent.insertAfter(node, after);
	    }
	  },
	  insertBefore: function insertBefore(node, before, parent) {
	    var _this3 = this;

	    if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
	      return node.childNodes.map(function (child, index) {
	        return _this3.insertBefore(child, before, parent);
	      });
	    } else {
	      return parent.insertBefore(node, before);
	    }
	  },
	  addEventListener: function addEventListener(node, eventName, eventHandler) {
	    return node.addEvent(eventName, eventHandler);
	  },
	  removeEventListener: function removeEventListener(node, eventName, eventHandler) {
	    return node.removeEvent(eventName, eventHandler);
	  },
	  removeAllEventListeners: function removeAllEventListeners(node) {
	    // noop
	  },
	  removeAttribute: function removeAttribute(node, propKey, propValue) {
	    if (propKey == ID) {
	      nodeMaps[propValue] = null;
	    }
	    // Weex native will crash when pass null value
	    return node.setAttr(propKey, undefined);
	  },
	  setAttribute: function setAttribute(node, propKey, propValue) {
	    if (propKey == ID) {
	      nodeMaps[propValue] = node;
	    }

	    return node.setAttr(propKey, propValue);
	  },
	  setStyles: function setStyles(node, styles) {
	    // TODO if more then one style update, call setStyles will be better performance
	    for (var key in styles) {
	      var val = styles[key];
	      val = (0, _unit.convertUnit)(val, key);
	      node.setStyle(key, val);
	    }
	  },
	  beforeRender: function beforeRender() {
	    // Init rem unit
	    (0, _unit.setRem)(this.getWindowWidth() / FULL_WIDTH_REM);
	  },
	  afterRender: function afterRender() {
	    if (document && document.listener && document.listener.createFinish) {
	      document.listener.createFinish(function () {
	        // Make updates batched
	        document.close();
	      });
	    }
	  },
	  getWindowWidth: function getWindowWidth() {
	    return FULL_WIDTH_REM;
	  }
	};

	exports.default = Driver;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = setNativeProps;

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _findDOMNode = __webpack_require__(9);

	var _findDOMNode2 = _interopRequireDefault(_findDOMNode);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var STYLE = 'style';
	var CHILDREN = 'children';

	function setNativeProps(node, props, disableSetStyles) {
	  node = (0, _findDOMNode2.default)(node);

	  for (var prop in props) {
	    var value = props[prop];
	    if (prop === CHILDREN) {
	      continue;
	    }

	    if (value != null) {
	      if (prop === STYLE) {
	        if (disableSetStyles) {
	          continue;
	        }
	        _host2.default.driver.setStyles(node, value);
	      } else if (prop.substring(0, 2) === 'on') {
	        var eventName = prop.slice(2).toLowerCase();
	        _host2.default.driver.addEventListener(node, eventName, value);
	      } else {
	        _host2.default.driver.setAttribute(node, prop, value);
	      }
	    }
	  }
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function findDOMNode(instance) {
	  if (instance == null) {
	    return null;
	  }

	  // If a native node, weex may not export ownerDocument property
	  if (instance.ownerDocument || instance.nodeType) {
	    return instance;
	  }

	  // Native component
	  if (instance._nativeNode) {
	    return instance._nativeNode;
	  }

	  if (typeof instance == 'string') {
	    return _host2.default.driver.getElementById(instance);
	  }

	  if (typeof instance.render !== 'function') {
	    throw new Error('Appears to be neither Component nor DOMNode.');
	  }

	  // Composite component
	  var internal = instance._internal;

	  if (internal) {
	    while (!internal._nativeNode) {
	      internal = internal._renderedComponent;
	      // If not mounted
	      if (internal == null) {
	        return null;
	      }
	    }
	    return internal._nativeNode;
	  } else {
	    throw new Error('findDOMNode was called on an unmounted component.');
	  }
	}

	exports.default = findDOMNode;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.isRem = isRem;
	exports.calcRem = calcRem;
	exports.getRem = getRem;
	exports.setRem = setRem;
	exports.isUnitNumber = isUnitNumber;
	exports.convertUnit = convertUnit;
	/**
	 * CSS properties which accept numbers but are not in units of "px".
	 */
	var UNITLESS_NUMBER_PROPS = {
	  animationIterationCount: true,
	  borderImageOutset: true,
	  borderImageSlice: true,
	  borderImageWidth: true,
	  boxFlex: true,
	  boxFlexGroup: true,
	  boxOrdinalGroup: true,
	  columnCount: true,
	  flex: true,
	  flexGrow: true,
	  flexPositive: true,
	  flexShrink: true,
	  flexNegative: true,
	  flexOrder: true,
	  gridRow: true,
	  gridColumn: true,
	  fontWeight: true,
	  lineClamp: true,
	  // We make lineHeight default is px that is diff with w3c spec
	  // lineHeight: true,
	  opacity: true,
	  order: true,
	  orphans: true,
	  tabSize: true,
	  widows: true,
	  zIndex: true,
	  zoom: true,
	  // Weex only
	  lines: true
	};
	var SUFFIX = 'rem';
	var REM_REG = /[-+]?\d*\.?\d+rem/g;

	var defaultRem = void 0;

	/**
	 * Is string contains rem
	 * @param {String} str
	 * @returns {Boolean}
	 */
	function isRem(str) {
	  return typeof str === 'string' && str.indexOf(SUFFIX) !== -1;
	}

	/**
	 * Calculate rem to pixels: '1.2rem' => 1.2 * rem
	 * @param {String} str
	 * @param {Number} rem
	 * @returns {number}
	 */
	function calcRem(str) {
	  var rem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultRem;

	  return str.replace(REM_REG, function (remValue) {
	    return parseFloat(remValue) * rem + 'px';
	  });
	}

	function getRem() {
	  return defaultRem;
	}

	function setRem(rem) {
	  defaultRem = rem;
	}

	function isUnitNumber(val, prop) {
	  return typeof val === 'number' && !UNITLESS_NUMBER_PROPS[prop];
	}

	function convertUnit(val, prop) {
	  if (prop && isUnitNumber(val, prop)) {
	    return val * defaultRem + 'px';
	  } else if (isRem(val)) {
	    return calcRem(val);
	  }

	  return val;
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _setNativeProps = __webpack_require__(8);

	var _setNativeProps2 = _interopRequireDefault(_setNativeProps);

	var _unit = __webpack_require__(10);

	var _flexbox = __webpack_require__(12);

	var _flexbox2 = _interopRequireDefault(_flexbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FULL_WIDTH_REM = 750; /**
	                           * Web Browser driver
	                           **/

	var STYLE = 'style';
	var DANGEROUSLY_SET_INNER_HTML = 'dangerouslySetInnerHTML';

	var Driver = {
	  getElementById: function getElementById(id) {
	    return document.getElementById(id);
	  },
	  getChildNodes: function getChildNodes(node) {
	    return node.childNodes;
	  },
	  createBody: function createBody() {
	    return document.body;
	  },
	  createFragment: function createFragment() {
	    return document.createDocumentFragment();
	  },
	  createComment: function createComment(content) {
	    return document.createComment(content);
	  },
	  createEmpty: function createEmpty() {
	    return this.createComment(' empty ');
	  },
	  createText: function createText(text) {
	    return document.createTextNode(text);
	  },
	  updateText: function updateText(node, text) {
	    var textContentAttr = 'textContent' in document ? 'textContent' : 'nodeValue';
	    node[textContentAttr] = text;
	  },
	  createElement: function createElement(component) {
	    var node = document.createElement(component.type);
	    var props = component.props;

	    (0, _setNativeProps2.default)(node, props);

	    return node;
	  },
	  appendChild: function appendChild(node, parent) {
	    return parent.appendChild(node);
	  },
	  removeChild: function removeChild(node, parent) {
	    // TODO, maybe has been removed when remove child
	    if (node.parentNode === parent) {
	      parent.removeChild(node);
	    }
	  },
	  replaceChild: function replaceChild(newChild, oldChild, parent) {
	    parent.replaceChild(newChild, oldChild);
	  },
	  insertAfter: function insertAfter(node, after, parent) {
	    var nextSibling = after.nextSibling;
	    if (nextSibling) {
	      parent.insertBefore(node, nextSibling);
	    } else {
	      parent.appendChild(node);
	    }
	  },
	  insertBefore: function insertBefore(node, before, parent) {
	    parent.insertBefore(node, before);
	  },
	  addEventListener: function addEventListener(node, eventName, eventHandler) {
	    return node.addEventListener(eventName, eventHandler);
	  },
	  removeEventListener: function removeEventListener(node, eventName, eventHandler) {
	    return node.removeEventListener(eventName, eventHandler);
	  },
	  removeAllEventListeners: function removeAllEventListeners(node) {
	    // TODO
	  },
	  removeAttribute: function removeAttribute(node, propKey) {
	    if (propKey === 'className') {
	      propKey = 'class';
	    }

	    if (node.nodeName.toLowerCase() == 'input' && (propKey == 'checked' && (node.type === 'checkbox' || node.type === 'radio') || propKey == 'value')) {
	      node[propKey] = null;
	    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	      node.innerHTML = null;
	    } else {
	      node.removeAttribute(propKey);
	    }
	  },
	  setAttribute: function setAttribute(node, propKey, propValue) {
	    if (propKey === 'className') {
	      propKey = 'class';
	    }

	    if (node.nodeName.toLowerCase() == 'input' && (propKey == 'checked' && (node.type === 'checkbox' || node.type === 'radio') || propKey == 'value')) {
	      node[propKey] = propValue;
	    } else if (propKey === DANGEROUSLY_SET_INNER_HTML) {
	      node.innerHTML = propValue.__html;
	    } else if (propValue != null) {
	      node.setAttribute(propKey, propValue);
	    }
	  },
	  setStyles: function setStyles(node, styles) {
	    for (var prop in styles) {
	      if (styles.hasOwnProperty(prop)) {
	        var val = styles[prop];
	        if (_flexbox2.default.isFlexProp(prop)) {
	          _flexbox2.default[prop](val, node.style);
	        } else {
	          node.style[prop] = (0, _unit.convertUnit)(val, prop);
	        }
	      }
	    }
	  },
	  beforeRender: function beforeRender() {
	    // Init rem unit
	    (0, _unit.setRem)(this.getWindowWidth() / FULL_WIDTH_REM);
	  },
	  getWindowWidth: function getWindowWidth() {
	    return document.documentElement.clientWidth;
	  }
	};

	exports.default = Driver;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var BOX_ALIGN = {
	  stretch: 'stretch',
	  'flex-start': 'start',
	  'flex-end': 'end',
	  center: 'center'
	};

	var BOX_ORIENT = {
	  row: 'horizontal',
	  column: 'vertical'
	};

	var BOX_PACK = {
	  'flex-start': 'start',
	  'flex-end': 'end',
	  center: 'center',
	  'space-between': 'justify',
	  'space-around': 'justify' // Just same as `space-between`
	};

	var FLEX_PROPS = {
	  display: true,
	  flex: true,
	  alignItems: true,
	  alignSelf: true,
	  flexDirection: true,
	  justifyContent: true,
	  flexWrap: true
	};

	var Flexbox = {
	  isFlexProp: function isFlexProp(prop) {
	    return FLEX_PROPS[prop];
	  },
	  display: function display(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    if (value === 'flex') {
	      style.display = '-webkit-box';
	      style.display = '-webkit-flex';
	      style.display = 'flex';
	    } else {
	      style.display = value;
	    }

	    return style;
	  },
	  flex: function flex(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitBoxFlex = value;
	    style.webkitFlex = value;
	    style.flex = value;
	    return style;
	  },
	  flexWrap: function flexWrap(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.flexWrap = value;
	    return style;
	  },
	  alignItems: function alignItems(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitBoxAlign = BOX_ALIGN[value];
	    style.webkitAlignItems = value;
	    style.alignItems = value;
	    return style;
	  },
	  alignSelf: function alignSelf(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitAlignSelf = value;
	    style.alignSelf = value;
	    return style;
	  },
	  flexDirection: function flexDirection(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitBoxOrient = BOX_ORIENT[value];
	    style.webkitFlexDirection = value;
	    style.flexDirection = value;
	    return style;
	  },
	  justifyContent: function justifyContent(value) {
	    var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    style.webkitBoxPack = BOX_PACK[value];
	    style.webkitJustifyContent = value;
	    style.justifyContent = value;
	    return style;
	  }
	};

	exports.default = Flexbox;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _hook = __webpack_require__(14);

	var _hook2 = _interopRequireDefault(_hook);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
	  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject(_hook2.default);
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _instance = __webpack_require__(15);

	var _instance2 = _interopRequireDefault(_instance);

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  ComponentTree: {
	    getClosestInstanceFromNode: function getClosestInstanceFromNode(node) {
	      return _instance2.default.get(node);
	    },
	    getNodeFromInstance: function getNodeFromInstance(inst) {
	      // inst is an internal instance (but could be a composite)
	      while (inst._renderedComponent) {
	        inst = inst._renderedComponent;
	      }

	      if (inst) {
	        return inst._nativeNode;
	      } else {
	        return null;
	      }
	    }
	  },
	  Mount: {
	    _instancesByReactRootID: _host2.default.rootComponents,

	    // Stub - React DevTools expects to find this method and replace it
	    // with a wrapper in order to observe new root components being added
	    _renderNewRootComponent: function _renderNewRootComponent() {}
	  },
	  Reconciler: {
	    // Stubs - React DevTools expects to find these methods and replace them
	    // with wrappers in order to observe components being mounted, updated and
	    // unmounted
	    mountComponent: function mountComponent() {},
	    receiveComponent: function receiveComponent() {},
	    unmountComponent: function unmountComponent() {}
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _element = __webpack_require__(3);

	var _unmountComponentAtNode = __webpack_require__(16);

	var _unmountComponentAtNode2 = _interopRequireDefault(_unmountComponentAtNode);

	var _instantiateComponent = __webpack_require__(17);

	var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

	var _shouldUpdateComponent = __webpack_require__(18);

	var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

	var _root = __webpack_require__(19);

	var _root2 = _interopRequireDefault(_root);

	var _hook = __webpack_require__(14);

	var _hook2 = _interopRequireDefault(_hook);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Instance manager
	 */
	var KEY = '$$instance';

	exports.default = {
	  set: function set(node, instance) {
	    if (!node[KEY]) {
	      node[KEY] = instance;
	      // Record root instance to roots map
	      if (instance.rootID) {
	        _host2.default.rootInstances[instance.rootID] = instance;
	        _host2.default.rootComponents[instance.rootID] = instance._internal;
	      }
	    }
	  },
	  get: function get(node) {
	    return node[KEY];
	  },
	  remove: function remove(node) {
	    var instance = this.get(node);
	    if (instance) {
	      node[KEY] = null;
	      if (instance.rootID) {
	        delete _host2.default.rootComponents[instance.rootID];
	        delete _host2.default.rootInstances[instance.rootID];
	      }
	    }
	  },
	  render: function render(element, container) {
	    var prevRootInstance = this.get(container);
	    var hasPrevRootInstance = prevRootInstance && prevRootInstance.isRootComponent;

	    if (hasPrevRootInstance) {
	      var prevRenderedComponent = prevRootInstance.getRenderedComponent();
	      var prevElement = prevRenderedComponent._currentElement;
	      if ((0, _shouldUpdateComponent2.default)(prevElement, element)) {
	        var prevUnmaskedContext = prevRenderedComponent._context;
	        prevRenderedComponent.updateComponent(prevElement, element, prevUnmaskedContext, prevUnmaskedContext);

	        return prevRootInstance;
	      } else {
	        _hook2.default.Reconciler.unmountComponent(prevRootInstance);
	        (0, _unmountComponentAtNode2.default)(container);
	      }
	    }

	    var wrappedElement = (0, _element.createElement)(_root2.default, null, element);
	    var renderedComponent = (0, _instantiateComponent2.default)(wrappedElement);
	    var defaultContext = {};
	    var rootInstance = renderedComponent.mountComponent(container, defaultContext);
	    this.set(container, rootInstance);
	    _hook2.default.Mount._renderNewRootComponent(rootInstance._internal);

	    return rootInstance;
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = unmountComponentAtNode;

	var _instance = __webpack_require__(15);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function unmountComponentAtNode(node) {
	  var component = _instance2.default.get(node);

	  if (!component) {
	    return false;
	  }

	  _instance2.default.remove(node);
	  component._internal.unmountComponent();

	  return true;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function instantiateComponent(element) {
	  var instance = void 0;

	  if (element === undefined || element === null || element === false || element === true) {
	    instance = new _host2.default.EmptyComponent();
	  } else if (Array.isArray(element)) {
	    instance = new _host2.default.FragmentComponent(element);
	  } else if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element.type) {
	    // Special case string values
	    if (typeof element.type === 'string') {
	      instance = new _host2.default.NativeComponent(element);
	    } else {
	      instance = new _host2.default.CompositeComponent(element);
	    }
	  } else if (typeof element === 'string' || typeof element === 'number') {
	    instance = new _host2.default.TextComponent(element);
	  } else {
	    throw Error('Invalid element type ' + JSON.stringify(element));
	  }

	  instance._mountIndex = 0;

	  return instance;
	}

	exports.default = instantiateComponent;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	function shouldUpdateComponent(prevElement, nextElement) {
	  // TODO: prevElement and nextElement could be array
	  var prevEmpty = prevElement === null;
	  var nextEmpty = nextElement === null;
	  if (prevEmpty || nextEmpty) {
	    return prevEmpty === nextEmpty;
	  }

	  var prevType = typeof prevElement === 'undefined' ? 'undefined' : _typeof(prevElement);
	  var nextType = typeof nextElement === 'undefined' ? 'undefined' : _typeof(nextElement);
	  if (prevType === 'string' || prevType === 'number') {
	    return nextType === 'string' || nextType === 'number';
	  } else {
	    return prevType === 'object' && nextType === 'object' && prevElement.type === nextElement.type && prevElement.key === nextElement.key;
	  }
	}

	exports.default = shouldUpdateComponent;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _component = __webpack_require__(20);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var rootCounter = 1;

	var Root = function (_Component) {
	  _inherits(Root, _Component);

	  function Root() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Root);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Root.__proto__ || Object.getPrototypeOf(Root)).call.apply(_ref, [this].concat(args))), _this), _this.rootID = rootCounter++, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Root, [{
	    key: 'isRootComponent',
	    value: function isRootComponent() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children;
	    }
	  }, {
	    key: 'getPublicInstance',
	    value: function getPublicInstance() {
	      return this.getRenderedComponent().getPublicInstance();
	    }
	  }, {
	    key: 'getRenderedComponent',
	    value: function getRenderedComponent() {
	      return this._internal._renderedComponent;
	    }
	  }]);

	  return Root;
	}(_component2.default);

	exports.default = Root;

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Base component class.
	 */
	var Component = function () {
	  function Component(props, context, updater) {
	    _classCallCheck(this, Component);

	    this.props = props;
	    this.context = context;
	    this.refs = {};
	    this.updater = updater;
	  }

	  _createClass(Component, [{
	    key: "isComponentClass",
	    value: function isComponentClass() {}
	  }, {
	    key: "setState",
	    value: function setState(partialState, callback) {
	      this.updater.setState(this, partialState, callback);
	    }
	  }, {
	    key: "forceUpdate",
	    value: function forceUpdate(callback) {
	      this.updater.forceUpdate(this, callback);
	    }
	  }]);

	  return Component;
	}();

	exports.default = Component;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _component = __webpack_require__(20);

	var _component2 = _interopRequireDefault(_component);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Pure component class.
	 */
	var PureComponent = function (_Component) {
	  _inherits(PureComponent, _Component);

	  function PureComponent(props, context) {
	    _classCallCheck(this, PureComponent);

	    return _possibleConstructorReturn(this, (PureComponent.__proto__ || Object.getPrototypeOf(PureComponent)).call(this, props, context));
	  }

	  _createClass(PureComponent, [{
	    key: 'isPureComponentClass',
	    value: function isPureComponentClass() {}
	  }]);

	  return PureComponent;
	}(_component2.default);

	exports.default = PureComponent;

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Current PropTypes only export some api with react, not validate in runtime.
	 */

	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    // Noop
	  }

	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);

	  return chainedCheckType;
	}

	function createTypeChecker(expectedType) {
	  function validate(props, propName, componentName, location, propFullName) {
	    // Noop
	  }
	  return createChainableTypeChecker(validate);
	}

	var typeChecker = createTypeChecker();

	exports.default = {
	  array: typeChecker,
	  bool: typeChecker,
	  func: typeChecker,
	  number: typeChecker,
	  object: typeChecker,
	  string: typeChecker,
	  symbol: typeChecker,
	  element: typeChecker,
	  node: typeChecker,
	  any: typeChecker,
	  arrayOf: typeChecker,
	  instanceOf: typeChecker,
	  objectOf: typeChecker,
	  oneOf: typeChecker,
	  oneOfType: typeChecker,
	  shape: typeChecker
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _injectComponent = __webpack_require__(24);

	var _injectComponent2 = _interopRequireDefault(_injectComponent);

	var _instance = __webpack_require__(15);

	var _instance2 = _interopRequireDefault(_instance);

	var _unit = __webpack_require__(10);

	var _driver = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function render(element, container, callback) {
	  // Inject component
	  (0, _injectComponent2.default)();
	  // Inject driver
	  (0, _driver.injectDriver)();

	  var driver = (0, _driver.getDriver)();

	  // Before render callback
	  driver.beforeRender && driver.beforeRender(element, container);

	  // Real native root node is body
	  if (container == null) {
	    container = driver.createBody();
	  }

	  var rootComponent = _instance2.default.render(element, container);
	  var component = rootComponent.getPublicInstance();

	  if (callback) {
	    callback.call(component);
	  }
	  // After render callback
	  driver.afterRender && driver.afterRender(component);

	  return component;
	}

	exports.default = render;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = injectComponent;

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _empty = __webpack_require__(25);

	var _empty2 = _interopRequireDefault(_empty);

	var _native = __webpack_require__(26);

	var _native2 = _interopRequireDefault(_native);

	var _text = __webpack_require__(29);

	var _text2 = _interopRequireDefault(_text);

	var _composite = __webpack_require__(30);

	var _composite2 = _interopRequireDefault(_composite);

	var _fragment = __webpack_require__(34);

	var _fragment2 = _interopRequireDefault(_fragment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function injectComponent() {
	  // Inject component class
	  _host2.default.EmptyComponent = _empty2.default;
	  _host2.default.NativeComponent = _native2.default;
	  _host2.default.TextComponent = _text2.default;
	  _host2.default.FragmentComponent = _fragment2.default;
	  _host2.default.CompositeComponent = _composite2.default;
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Empty Component
	 */
	var EmptyComponent = function () {
	  function EmptyComponent() {
	    _classCallCheck(this, EmptyComponent);

	    this._currentElement = null;
	  }

	  _createClass(EmptyComponent, [{
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      this._parent = parent;
	      this._context = context;

	      var instance = {
	        _internal: this
	      };

	      var nativeNode = this.getNativeNode();
	      if (childMounter) {
	        childMounter(nativeNode, parent);
	      } else {
	        _host2.default.driver.appendChild(nativeNode, parent);
	      }

	      return instance;
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(shouldNotRemoveChild) {
	      if (this._nativeNode && !shouldNotRemoveChild) {
	        _host2.default.driver.removeChild(this._nativeNode, this._parent);
	      }

	      this._nativeNode = null;
	      this._parent = null;
	      this._context = null;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent() {
	      // noop
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      // Weex native node
	      if (this._nativeNode == null) {
	        this._nativeNode = _host2.default.driver.createEmpty();
	      }

	      return this._nativeNode;
	    }
	  }]);

	  return EmptyComponent;
	}();

	exports.default = EmptyComponent;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _ref = __webpack_require__(27);

	var _ref2 = _interopRequireDefault(_ref);

	var _instantiateComponent = __webpack_require__(17);

	var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

	var _shouldUpdateComponent = __webpack_require__(18);

	var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

	var _getElementKeyName = __webpack_require__(28);

	var _getElementKeyName2 = _interopRequireDefault(_getElementKeyName);

	var _instance = __webpack_require__(15);

	var _instance2 = _interopRequireDefault(_instance);

	var _hook = __webpack_require__(14);

	var _hook2 = _interopRequireDefault(_hook);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var STYLE = 'style';
	var CHILDREN = 'children';
	var TREE = 'tree';

	/**
	 * Native Component
	 */

	var NativeComponent = function () {
	  function NativeComponent(element) {
	    _classCallCheck(this, NativeComponent);

	    this._currentElement = element;
	  }

	  _createClass(NativeComponent, [{
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      // Parent native element
	      this._parent = parent;
	      this._context = context;
	      this._mountID = _host2.default.mountID++;

	      var props = this._currentElement.props;
	      var type = this._currentElement.type;
	      var instance = {
	        _internal: this,
	        type: type,
	        props: props
	      };
	      var appendType = props.append; // Default is node

	      this._instance = instance;

	      // Clone a copy for style diff
	      this._prevStyleCopy = Object.assign({}, props.style);

	      var nativeNode = this.getNativeNode();

	      if (appendType !== TREE) {
	        if (childMounter) {
	          childMounter(nativeNode, parent);
	        } else {
	          _host2.default.driver.appendChild(nativeNode, parent);
	        }
	      }

	      if (this._currentElement && this._currentElement.ref) {
	        _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
	      }

	      // Process children
	      var children = props.children;
	      if (children != null) {
	        this.mountChildren(children, context);
	      }

	      if (appendType === TREE) {
	        if (childMounter) {
	          childMounter(nativeNode, parent);
	        } else {
	          _host2.default.driver.appendChild(nativeNode, parent);
	        }
	      }

	      _hook2.default.Reconciler.mountComponent(this);

	      return instance;
	    }
	  }, {
	    key: 'mountChildren',
	    value: function mountChildren(children, context) {
	      var _this = this;

	      if (!Array.isArray(children)) {
	        children = [children];
	      }

	      var renderedChildren = {};

	      var renderedChildrenImage = children.map(function (element, index) {
	        var renderedChild = (0, _instantiateComponent2.default)(element);
	        var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
	        renderedChildren[name] = renderedChild;
	        renderedChild._mountIndex = index;
	        // Mount
	        var mountImage = renderedChild.mountComponent(_this.getNativeNode(), context);
	        return mountImage;
	      });

	      this._renderedChildren = renderedChildren;

	      return renderedChildrenImage;
	    }
	  }, {
	    key: 'unmountChildren',
	    value: function unmountChildren() {
	      var renderedChildren = this._renderedChildren;

	      if (renderedChildren) {
	        for (var name in renderedChildren) {
	          var renderedChild = renderedChildren[name];
	          renderedChild.unmountComponent();
	        }
	        this._renderedChildren = null;
	      }
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(shouldNotRemoveChild) {
	      if (this._nativeNode) {
	        var ref = this._currentElement.ref;
	        if (ref) {
	          _ref2.default.detach(this._currentElement._owner, ref, this);
	        }

	        _instance2.default.remove(this._nativeNode);
	        if (!shouldNotRemoveChild) {
	          _host2.default.driver.removeChild(this._nativeNode, this._parent);
	        }
	        _host2.default.driver.removeAllEventListeners(this._nativeNode);
	      }

	      this.unmountChildren();

	      _hook2.default.Reconciler.unmountComponent(this);

	      this._currentElement = null;
	      this._nativeNode = null;
	      this._parent = null;
	      this._context = null;
	      this._instance = null;
	      this._prevStyleCopy = null;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
	      // Replace current element
	      this._currentElement = nextElement;

	      _ref2.default.update(prevElement, nextElement, this);

	      var prevProps = prevElement.props;
	      var nextProps = nextElement.props;

	      this.updateProperties(prevProps, nextProps);
	      this.updateChildren(nextProps.children, nextContext);

	      _hook2.default.Reconciler.receiveComponent(this);
	    }
	  }, {
	    key: 'updateProperties',
	    value: function updateProperties(prevProps, nextProps) {
	      var propKey = void 0;
	      var styleName = void 0;
	      var styleUpdates = void 0;
	      for (propKey in prevProps) {
	        if (propKey === CHILDREN || nextProps.hasOwnProperty(propKey) || !prevProps.hasOwnProperty(propKey) || prevProps[propKey] == null) {
	          continue;
	        }
	        if (propKey === STYLE) {
	          var lastStyle = this._prevStyleCopy;
	          for (styleName in lastStyle) {
	            if (lastStyle.hasOwnProperty(styleName)) {
	              styleUpdates = styleUpdates || {};
	              styleUpdates[styleName] = '';
	            }
	          }
	          this._prevStyleCopy = null;
	        } else if (propKey.substring(0, 2) === 'on') {
	          if (prevProps[propKey]) {
	            _host2.default.driver.removeEventListener(this.getNativeNode(), propKey.slice(2).toLowerCase(), prevProps[propKey]);
	          }
	        } else {
	          _host2.default.driver.removeAttribute(this.getNativeNode(), propKey, prevProps[propKey]);
	        }
	      }

	      for (propKey in nextProps) {
	        var nextProp = nextProps[propKey];
	        var prevProp = propKey === STYLE ? this._prevStyleCopy : prevProps != null ? prevProps[propKey] : undefined;
	        if (propKey === CHILDREN || !nextProps.hasOwnProperty(propKey) || nextProp === prevProp || nextProp == null && prevProp == null) {
	          continue;
	        }
	        // Update style
	        if (propKey === STYLE) {
	          if (nextProp) {
	            // Clone property
	            nextProp = this._prevStyleCopy = Object.assign({}, nextProp);
	          } else {
	            this._prevStyleCopy = null;
	          }

	          if (prevProp != null) {
	            // Unset styles on `prevProp` but not on `nextProp`.
	            for (styleName in prevProp) {
	              if (prevProp.hasOwnProperty(styleName) && (!nextProp || !nextProp.hasOwnProperty(styleName))) {
	                styleUpdates = styleUpdates || {};
	                styleUpdates[styleName] = '';
	              }
	            }
	            // Update styles that changed since `prevProp`.
	            for (styleName in nextProp) {
	              if (nextProp.hasOwnProperty(styleName) && prevProp[styleName] !== nextProp[styleName]) {
	                styleUpdates = styleUpdates || {};
	                styleUpdates[styleName] = nextProp[styleName];
	              }
	            }
	          } else {
	            // Assign next prop when prev style is null
	            styleUpdates = nextProp;
	          }

	          // Update event binding
	        } else if (propKey.substring(0, 2) === 'on') {
	          if (prevProp != null) {
	            _host2.default.driver.removeEventListener(this.getNativeNode(), propKey.slice(2).toLowerCase(), prevProp);
	          }

	          if (nextProp != null) {
	            _host2.default.driver.addEventListener(this.getNativeNode(), propKey.slice(2).toLowerCase(), nextProp);
	          }
	          // Update other property
	        } else {
	          if (nextProp != null) {
	            _host2.default.driver.setAttribute(this.getNativeNode(), propKey, nextProp);
	          } else {
	            _host2.default.driver.removeAttribute(this.getNativeNode(), propKey, prevProps[propKey]);
	          }
	        }
	      }

	      if (styleUpdates) {
	        _host2.default.driver.setStyles(this.getNativeNode(), styleUpdates);
	      }
	    }
	  }, {
	    key: 'updateChildren',
	    value: function updateChildren(nextChildrenElements, context) {
	      var _this2 = this;

	      // prev rendered children
	      var prevChildren = this._renderedChildren;

	      if (nextChildrenElements == null && prevChildren == null) {
	        return;
	      }

	      var nextChildren = {};
	      var oldNodes = {};

	      if (nextChildrenElements != null) {
	        if (!Array.isArray(nextChildrenElements)) {
	          nextChildrenElements = [nextChildrenElements];
	        }

	        // Update next children elements
	        for (var index = 0, length = nextChildrenElements.length; index < length; index++) {
	          var nextElement = nextChildrenElements[index];
	          var name = (0, _getElementKeyName2.default)(nextChildren, nextElement, index);
	          var prevChild = prevChildren && prevChildren[name];
	          var prevElement = prevChild && prevChild._currentElement;

	          if (prevChild != null && (0, _shouldUpdateComponent2.default)(prevElement, nextElement)) {
	            // Pass the same context when updating chidren
	            prevChild.updateComponent(prevElement, nextElement, context, context);
	            nextChildren[name] = prevChild;
	          } else {
	            // Unmount the prevChild when nextChild is different element type.
	            if (prevChild) {
	              var oldChild = prevChild.getNativeNode();
	              // Delay remove child
	              prevChild.unmountComponent(true);
	              oldNodes[name] = oldChild;
	            }
	            // The child must be instantiated before it's mounted.
	            nextChildren[name] = (0, _instantiateComponent2.default)(nextElement);
	          }
	        }
	      }

	      // Unmount children that are no longer present.
	      if (prevChildren != null) {
	        for (var _name in prevChildren) {
	          if (!prevChildren.hasOwnProperty(_name)) {
	            continue;
	          }
	          var _prevChild = prevChildren[_name];
	          if (!nextChildren[_name]) {
	            _prevChild.unmountComponent();
	          }
	        }
	      }

	      if (nextChildren != null) {
	        (function () {
	          // `nextIndex` will increment for each child in `nextChildren`, but
	          // `lastIndex` will be the last index visited in `prevChildren`.
	          var lastIndex = 0;
	          var nextIndex = 0;
	          var lastPlacedNode = null;

	          var _loop = function _loop(_name2) {
	            if (!nextChildren.hasOwnProperty(_name2)) {
	              return 'continue';
	            }

	            var nextChild = nextChildren[_name2];
	            var prevChild = prevChildren && prevChildren[_name2];

	            if (prevChild === nextChild) {
	              // If the index of `child` is less than `lastIndex`, then it needs to
	              // be moved. Otherwise, we do not need to move it because a child will be
	              // inserted or moved before `child`.
	              if (prevChild._mountIndex < lastIndex) {
	                _host2.default.driver.insertAfter(prevChild.getNativeNode(), lastPlacedNode, _this2.getNativeNode());
	              }

	              lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	              prevChild._mountIndex = nextIndex;
	            } else {
	              if (prevChild != null) {
	                // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
	                lastIndex = Math.max(prevChild._mountIndex, lastIndex);
	              }

	              nextChild.mountComponent(_this2.getNativeNode(), context, function (newChild, parent) {
	                var oldChild = oldNodes[_name2];
	                if (oldChild) {
	                  _host2.default.driver.replaceChild(newChild, oldChild, parent);
	                } else {
	                  // insert child at a specific index
	                  var childNodes = _host2.default.driver.getChildNodes(parent);
	                  var currentNode = childNodes[nextIndex];
	                  if (currentNode) {
	                    _host2.default.driver.insertBefore(newChild, currentNode, parent);
	                  } else {
	                    _host2.default.driver.appendChild(newChild, parent);
	                  }
	                }
	              });
	              nextChild._mountIndex = nextIndex;
	            }

	            nextIndex++;
	            lastPlacedNode = nextChild.getNativeNode();
	          };

	          for (var _name2 in nextChildren) {
	            var _ret2 = _loop(_name2);

	            if (_ret2 === 'continue') continue;
	          }
	        })();
	      }

	      this._renderedChildren = nextChildren;
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      if (this._nativeNode == null) {
	        this._nativeNode = _host2.default.driver.createElement(this._instance);
	        _instance2.default.set(this._nativeNode, this._instance);
	      }

	      return this._nativeNode;
	    }
	  }, {
	    key: 'getPublicInstance',
	    value: function getPublicInstance() {
	      return this.getNativeNode();
	    }
	  }, {
	    key: 'getName',
	    value: function getName() {
	      return this._currentElement.type;
	    }
	  }]);

	  return NativeComponent;
	}();

	exports.default = NativeComponent;

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/*
	 * Ref manager
	 */

	exports.default = {
	  update: function update(prevElement, nextElement, component) {
	    var prevRef = prevElement != null && prevElement.ref;
	    var nextRef = nextElement != null && nextElement.ref;

	    // Update refs in owner component
	    if (prevRef !== nextRef) {
	      // Detach prev RenderedElement's ref
	      prevRef != null && this.detach(prevElement._owner, prevRef, component);
	      // Attach next RenderedElement's ref
	      nextRef != null && this.attach(nextElement._owner, nextRef, component);
	    }
	  },
	  attach: function attach(ownerComponent, ref, component) {
	    if (!ownerComponent) {
	      throw new Error('You might be adding a ref to a component that was not created inside a component\'s ' + '`render` method, or you have multiple copies of Rax loaded.');
	    }

	    var instance = component.getPublicInstance();
	    if (typeof ref === 'function') {
	      ref(instance);
	    } else {
	      ownerComponent._instance.refs[ref] = instance;
	    }
	  },
	  detach: function detach(ownerComponent, ref, component) {
	    if (typeof ref === 'function') {
	      // When the referenced component is unmounted and whenever the ref changes, the old ref will be called with null as an argument.
	      ref(null);
	    } else {
	      // Must match component and ref could detach the ref on owner when A's before ref is B's current ref
	      var instance = component.getPublicInstance();
	      if (ownerComponent._instance.refs[ref] === instance) {
	        delete ownerComponent._instance.refs[ref];
	      }
	    }
	  }
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (children, element, index) {
	  var elementKey = element && element.key;
	  var hasKey = typeof elementKey === 'string';
	  var defaultName = '.' + index.toString(36);

	  if (hasKey) {
	    var keyName = '$' + elementKey;
	    // Child keys must be unique.
	    var keyUnique = children[keyName] === undefined;
	    // Only the first child will be used when encountered two children with the same key
	    if (!keyUnique) console.warn('Encountered two children with the same key "' + elementKey + '".');

	    return keyUnique ? keyName : defaultName;
	  } else {
	    return defaultName;
	  }
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _hook = __webpack_require__(14);

	var _hook2 = _interopRequireDefault(_hook);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Text Component
	 */
	var TextComponent = function () {
	  function TextComponent(element) {
	    _classCallCheck(this, TextComponent);

	    this._currentElement = element;
	    this._stringText = String(element);
	  }

	  _createClass(TextComponent, [{
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      this._parent = parent;
	      this._context = context;
	      this._mountID = _host2.default.mountID++;

	      // Weex dom operation
	      var nativeNode = this.getNativeNode();

	      if (childMounter) {
	        childMounter(nativeNode, parent);
	      } else {
	        _host2.default.driver.appendChild(nativeNode, parent);
	      }

	      var instance = {
	        _internal: this
	      };

	      _hook2.default.Reconciler.mountComponent(this);

	      return instance;
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(shouldNotRemoveChild) {
	      if (this._nativeNode && !shouldNotRemoveChild) {
	        _host2.default.driver.removeChild(this._nativeNode, this._parent);
	      }

	      _hook2.default.Reconciler.unmountComponent(this);

	      this._currentElement = null;
	      this._nativeNode = null;
	      this._parent = null;
	      this._context = null;
	      this._stringText = null;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent(prevElement, nextElement, context) {
	      // If some text do noting
	      if (prevElement !== nextElement) {
	        // Replace current element
	        this._currentElement = nextElement;
	        // Devtool read the latest stringText value
	        this._stringText = String(nextElement);
	        _host2.default.driver.updateText(this.getNativeNode(), nextElement);
	        _hook2.default.Reconciler.receiveComponent(this);
	      }
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      if (this._nativeNode == null) {
	        this._nativeNode = _host2.default.driver.createText(this._stringText);
	      }
	      return this._nativeNode;
	    }
	  }]);

	  return TextComponent;
	}();

	exports.default = TextComponent;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _stateless = __webpack_require__(31);

	var _stateless2 = _interopRequireDefault(_stateless);

	var _updater = __webpack_require__(32);

	var _updater2 = _interopRequireDefault(_updater);

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _ref = __webpack_require__(27);

	var _ref2 = _interopRequireDefault(_ref);

	var _instantiateComponent = __webpack_require__(17);

	var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

	var _shouldUpdateComponent = __webpack_require__(18);

	var _shouldUpdateComponent2 = _interopRequireDefault(_shouldUpdateComponent);

	var _shallowEqual = __webpack_require__(33);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	var _hook = __webpack_require__(14);

	var _hook2 = _interopRequireDefault(_hook);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function performInSandbox(fn, handleError) {
	  try {
	    return fn();
	  } catch (e) {
	    if (handleError) {
	      handleError(e);
	    } else {
	      if (_host2.default.sandbox) {
	        setTimeout(function () {
	          throw e;
	        }, 0);
	      } else {
	        throw e;
	      }
	    }
	  }
	}

	/**
	 * Composite Component
	 */

	var CompositeComponent = function () {
	  function CompositeComponent(element) {
	    _classCallCheck(this, CompositeComponent);

	    this._currentElement = element;
	  }

	  _createClass(CompositeComponent, [{
	    key: 'getName',
	    value: function getName() {
	      var type = this._currentElement.type;
	      var constructor = this._instance && this._instance.constructor;
	      return type.displayName || constructor && constructor.displayName || type.name || constructor && constructor.name || null;
	    }
	  }, {
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      this._parent = parent;
	      this._context = context;
	      this._mountID = _host2.default.mountID++;
	      this._updateCount = 0;

	      var Component = this._currentElement.type;
	      var publicProps = this._currentElement.props;
	      var isComponentClass = Component.prototype && Component.prototype.isComponentClass;
	      // Class stateless component without state but have lifecycles
	      var isStatelessClasss = Component.prototype.render;

	      // Context process
	      var publicContext = this._processContext(context);

	      // Initialize the public class
	      var instance = void 0;
	      var renderedElement = void 0;

	      if (isComponentClass || isStatelessClasss) {
	        // Component instance
	        instance = new Component(publicProps, publicContext, _updater2.default);
	      } else if (typeof Component === 'function') {
	        // Functional stateless component without state and lifecycles
	        instance = new _stateless2.default(Component);
	      } else {
	        throw Error('Invalid component type ' + JSON.stringify(Component));
	      }

	      // These should be set up in the constructor, but as a convenience for
	      // simpler class abstractions, we set them up after the fact.
	      instance.props = publicProps;
	      instance.context = publicContext;
	      instance.refs = {};

	      // Inject the updater into instance
	      instance.updater = _updater2.default;
	      instance._internal = this;
	      this._instance = instance;

	      // Init state, must be set to an object or null
	      var initialState = instance.state;
	      if (initialState === undefined) {
	        // TODO clone the state?
	        instance.state = initialState = null;
	      }

	      performInSandbox(function () {
	        if (instance.componentWillMount) {
	          instance.componentWillMount();
	        }
	      });

	      if (renderedElement == null) {
	        _host2.default.component = this;
	        // Process pending state when call setState in componentWillMount
	        instance.state = this._processPendingState(publicProps, publicContext);

	        // FIXME: handleError should named as lifecycles
	        var handleError = void 0;
	        if (typeof instance.handleError === 'function') {
	          handleError = function handleError(e) {
	            instance.handleError(e);
	          };
	        }

	        performInSandbox(function () {
	          renderedElement = instance.render();
	        }, handleError);

	        _host2.default.component = null;
	      }

	      this._renderedComponent = (0, _instantiateComponent2.default)(renderedElement);
	      this._renderedComponent.mountComponent(this._parent, this._processChildContext(context), childMounter);

	      if (this._currentElement && this._currentElement.ref) {
	        _ref2.default.attach(this._currentElement._owner, this._currentElement.ref, this);
	      }

	      performInSandbox(function () {
	        if (instance.componentDidMount) {
	          instance.componentDidMount();
	        }
	      });

	      _hook2.default.Reconciler.mountComponent(this);

	      return instance;
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(shouldNotRemoveChild) {
	      var instance = this._instance;

	      performInSandbox(function () {
	        if (instance.componentWillUnmount) {
	          instance.componentWillUnmount();
	        }
	      });

	      _hook2.default.Reconciler.unmountComponent(this);

	      instance._internal = null;

	      if (this._renderedComponent != null) {
	        var ref = this._currentElement.ref;
	        if (ref) {
	          _ref2.default.detach(this._currentElement._owner, ref, this);
	        }

	        this._renderedComponent.unmountComponent(shouldNotRemoveChild);
	        this._renderedComponent = null;
	        this._instance = null;
	      }

	      this._currentElement = null;

	      // Reset pending fields
	      // Even if this component is scheduled for another update in ReactUpdates,
	      // it would still be ignored because these fields are reset.
	      this._pendingStateQueue = null;
	      this._pendingForceUpdate = false;

	      // These fields do not really need to be reset since this object is no
	      // longer accessible.
	      this._context = null;
	    }

	    /**
	     * Filters the context object to only contain keys specified in
	     * `contextTypes`
	     */

	  }, {
	    key: '_processContext',
	    value: function _processContext(context) {
	      var Component = this._currentElement.type;
	      var contextTypes = Component.contextTypes;
	      if (!contextTypes) {
	        return {};
	      }
	      var maskedContext = {};
	      for (var contextName in contextTypes) {
	        maskedContext[contextName] = context[contextName];
	      }
	      return maskedContext;
	    }
	  }, {
	    key: '_processChildContext',
	    value: function _processChildContext(currentContext) {
	      var instance = this._instance;
	      var childContext = instance.getChildContext && instance.getChildContext();
	      if (childContext) {
	        return Object.assign({}, currentContext, childContext);
	      }
	      return currentContext;
	    }
	  }, {
	    key: '_processPendingState',
	    value: function _processPendingState(props, context) {
	      var instance = this._instance;
	      var queue = this._pendingStateQueue;
	      if (!queue) {
	        return instance.state;
	      }
	      // Reset pending queue
	      this._pendingStateQueue = null;
	      var nextState = Object.assign({}, instance.state);
	      for (var i = 0; i < queue.length; i++) {
	        var partial = queue[i];
	        Object.assign(nextState, typeof partial === 'function' ? partial.call(instance, nextState, props, context) : partial);
	      }

	      return nextState;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent(prevElement, nextElement, prevUnmaskedContext, nextUnmaskedContext) {
	      var _this = this;

	      var instance = this._instance;

	      if (!instance) {
	        console.error('Update component \'' + this.getName() + '\' that has already been unmounted (or failed to mount).');
	      }

	      var willReceive = false;
	      var nextContext = void 0;
	      var nextProps = void 0;

	      // Determine if the context has changed or not
	      if (this._context === nextUnmaskedContext) {
	        nextContext = instance.context;
	      } else {
	        nextContext = this._processContext(nextUnmaskedContext);
	        willReceive = true;
	      }

	      // Distinguish between a props update versus a simple state update
	      if (prevElement === nextElement) {
	        // Skip checking prop types again -- we don't read component.props to avoid
	        // warning for DOM component props in this upgrade
	        nextProps = nextElement.props;
	      } else {
	        nextProps = nextElement.props;
	        willReceive = true;
	      }

	      if (willReceive && instance.componentWillReceiveProps) {
	        // Calling this.setState() within componentWillReceiveProps will not trigger an additional render.
	        this._pendingState = true;
	        performInSandbox(function () {
	          instance.componentWillReceiveProps(nextProps, nextContext);
	        });
	        this._pendingState = false;
	      }

	      // Update refs
	      _ref2.default.update(prevElement, nextElement, this);

	      // Shoud update always default
	      var shouldUpdate = true;
	      var prevProps = instance.props;
	      var prevState = instance.state;
	      // TODO: could delay execution processPendingState
	      var nextState = this._processPendingState(nextProps, nextContext);

	      // ShouldComponentUpdate is not called when forceUpdate is used
	      if (!this._pendingForceUpdate) {
	        if (instance.shouldComponentUpdate) {
	          shouldUpdate = performInSandbox(function () {
	            return instance.shouldComponentUpdate(nextProps, nextState, nextContext);
	          });
	        } else if (instance.isPureComponentClass) {
	          shouldUpdate = !(0, _shallowEqual2.default)(prevProps, nextProps) || !(0, _shallowEqual2.default)(prevState, nextState);
	        }
	      }

	      if (shouldUpdate) {
	        (function () {
	          _this._pendingForceUpdate = false;
	          // Will set `this.props`, `this.state` and `this.context`.
	          var prevContext = instance.context;

	          // Cannot use this.setState() in componentWillUpdate.
	          // If need to update state in response to a prop change, use componentWillReceiveProps instead.
	          performInSandbox(function () {
	            if (instance.componentWillUpdate) {
	              instance.componentWillUpdate(nextProps, nextState, nextContext);
	            }
	          });

	          // Replace with next
	          _this._currentElement = nextElement;
	          _this._context = nextUnmaskedContext;
	          instance.props = nextProps;
	          instance.state = nextState;
	          instance.context = nextContext;

	          _this._updateRenderedComponent(nextUnmaskedContext);

	          performInSandbox(function () {
	            if (instance.componentDidUpdate) {
	              instance.componentDidUpdate(prevProps, prevState, prevContext);
	            }
	          });

	          _this._updateCount++;
	        })();
	      } else {
	        // If it's determined that a component should not update, we still want
	        // to set props and state but we shortcut the rest of the update.
	        this._currentElement = nextElement;
	        this._context = nextUnmaskedContext;
	        instance.props = nextProps;
	        instance.state = nextState;
	        instance.context = nextContext;
	      }

	      _hook2.default.Reconciler.receiveComponent(this);
	    }

	    /**
	     * Call the component's `render` method and update the DOM accordingly.
	     */

	  }, {
	    key: '_updateRenderedComponent',
	    value: function _updateRenderedComponent(context) {
	      var _this2 = this;

	      var prevRenderedComponent = this._renderedComponent;
	      var prevRenderedElement = prevRenderedComponent._currentElement;

	      var instance = this._instance;
	      var nextRenderedElement = void 0;

	      _host2.default.component = this;

	      performInSandbox(function () {
	        nextRenderedElement = instance.render();
	      });

	      _host2.default.component = null;

	      if ((0, _shouldUpdateComponent2.default)(prevRenderedElement, nextRenderedElement)) {
	        prevRenderedComponent.updateComponent(prevRenderedElement, nextRenderedElement, prevRenderedComponent._context, this._processChildContext(context));
	      } else {
	        (function () {
	          var oldChild = prevRenderedComponent.getNativeNode();
	          prevRenderedComponent.unmountComponent(true);

	          _this2._renderedComponent = (0, _instantiateComponent2.default)(nextRenderedElement);
	          _this2._renderedComponent.mountComponent(_this2._parent, _this2._processChildContext(context), function (newChild, parent) {
	            _host2.default.driver.replaceChild(newChild, oldChild, parent);
	          });
	        })();
	      }
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      var renderedComponent = this._renderedComponent;
	      if (renderedComponent) {
	        return renderedComponent.getNativeNode();
	      }
	    }
	  }, {
	    key: 'getPublicInstance',
	    value: function getPublicInstance() {
	      var instance = this._instance;
	      // The Stateless components cannot be given refs
	      if (instance instanceof _stateless2.default) {
	        return null;
	      }
	      return instance;
	    }
	  }]);

	  return CompositeComponent;
	}();

	exports.default = CompositeComponent;

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Stateless Component Class Wrapper
	 */
	var StatelessComponent = function () {
	  function StatelessComponent(pureRender) {
	    _classCallCheck(this, StatelessComponent);

	    // A stateless class

	    // A stateless function
	    this.pureRender = pureRender;
	  }

	  _createClass(StatelessComponent, [{
	    key: "render",
	    value: function render() {
	      return this.pureRender(this.props, this.context);
	    }
	  }]);

	  return StatelessComponent;
	}();

	exports.default = StatelessComponent;

/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function enqueueCallback(internal, callback) {
	  if (callback) {
	    var callbackQueue = internal._pendingCallbacks || (internal._pendingCallbacks = []);
	    callbackQueue.push(callback);
	  }
	}

	function enqueueState(internal, partialState) {
	  if (partialState) {
	    var stateQueue = internal._pendingStateQueue || (internal._pendingStateQueue = []);
	    stateQueue.push(partialState);
	  }
	}

	var Updater = {
	  setState: function setState(component, partialState, callback) {
	    var internal = component._internal;

	    if (!internal) {
	      return;
	    }

	    enqueueState(internal, partialState);
	    enqueueCallback(internal, callback);

	    if (!internal._pendingState) {
	      this.runUpdate(component);
	    }
	  },

	  forceUpdate: function forceUpdate(component, callback) {
	    var internal = component._internal;

	    if (!internal) {
	      return;
	    }

	    internal._pendingForceUpdate = true;

	    enqueueCallback(internal, callback);
	    this.runUpdate(component);
	  },

	  runUpdate: function runUpdate(component) {
	    var internal = component._internal;

	    if (!internal || !internal._renderedComponent) {
	      return;
	    }

	    // If updateComponent happens to enqueue any new updates, we
	    // shouldn't execute the callbacks until the next render happens, so
	    // stash the callbacks first
	    var callbacks = internal._pendingCallbacks;
	    internal._pendingCallbacks = null;

	    var prevElement = internal._currentElement;
	    var prevUnmaskedContext = internal._context;

	    if (internal._pendingStateQueue || internal._pendingForceUpdate) {
	      internal.updateComponent(prevElement, prevElement, prevUnmaskedContext, prevUnmaskedContext);
	    }

	    if (callbacks) {
	      callbacks.forEach(function (callback) {
	        return callback();
	      });
	    }
	  }

	};

	exports.default = Updater;

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	exports.default = shallowEqual;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _host = __webpack_require__(4);

	var _host2 = _interopRequireDefault(_host);

	var _native = __webpack_require__(26);

	var _native2 = _interopRequireDefault(_native);

	var _instance = __webpack_require__(15);

	var _instance2 = _interopRequireDefault(_instance);

	var _instantiateComponent = __webpack_require__(17);

	var _instantiateComponent2 = _interopRequireDefault(_instantiateComponent);

	var _getElementKeyName = __webpack_require__(28);

	var _getElementKeyName2 = _interopRequireDefault(_getElementKeyName);

	var _hook = __webpack_require__(14);

	var _hook2 = _interopRequireDefault(_hook);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Fragment Component
	 */
	var FragmentComponent = function (_NativeComponent) {
	  _inherits(FragmentComponent, _NativeComponent);

	  function FragmentComponent(element) {
	    _classCallCheck(this, FragmentComponent);

	    return _possibleConstructorReturn(this, (FragmentComponent.__proto__ || Object.getPrototypeOf(FragmentComponent)).call(this, element));
	  }

	  _createClass(FragmentComponent, [{
	    key: 'mountComponent',
	    value: function mountComponent(parent, context, childMounter) {
	      // Parent native element
	      this._parent = parent;
	      this._context = context;
	      this._mountID = _host2.default.mountID++;

	      var instance = {
	        _internal: this
	      };
	      this._instance = instance;

	      var nativeNode = this.getNativeNode();
	      var children = this._currentElement;

	      // Process children
	      this.mountChildren(children, context);

	      // Fragment child nodes append by tree mode
	      if (childMounter) {
	        childMounter(nativeNode, parent);
	      } else {
	        _host2.default.driver.appendChild(nativeNode, parent);
	      }

	      // set to right node when append to parent
	      this._nativeNode = parent;

	      _hook2.default.Reconciler.mountComponent(this);

	      return instance;
	    }
	  }, {
	    key: 'mountChildren',
	    value: function mountChildren(children, context) {
	      var _this2 = this;

	      var renderedChildren = {};
	      var fragment = this.getNativeNode();

	      var renderedChildrenImage = children.map(function (element, index) {
	        var renderedChild = (0, _instantiateComponent2.default)(element);
	        var name = (0, _getElementKeyName2.default)(renderedChildren, element, index);
	        renderedChildren[name] = renderedChild;
	        renderedChild._mountIndex = index;
	        // Mount
	        var mountImage = renderedChild.mountComponent(_this2._parent, context, function (nativeNode) {
	          _host2.default.driver.appendChild(nativeNode, fragment);
	        });
	        return mountImage;
	      });

	      this._renderedChildren = renderedChildren;

	      return renderedChildrenImage;
	    }
	  }, {
	    key: 'unmountComponent',
	    value: function unmountComponent(shouldNotRemoveChild) {
	      if (this._nativeNode) {
	        _instance2.default.remove(this._nativeNode);
	        if (!shouldNotRemoveChild) {
	          _host2.default.driver.removeChild(this._nativeNode, this._parent);
	        }
	      }

	      this.unmountChildren();

	      _hook2.default.Reconciler.unmountComponent(this);

	      this._currentElement = null;
	      this._nativeNode = null;
	      this._parent = null;
	      this._context = null;
	      this._instance = null;
	    }
	  }, {
	    key: 'updateComponent',
	    value: function updateComponent(prevElement, nextElement, prevContext, nextContext) {
	      // Replace current element
	      this._currentElement = nextElement;
	      this.updateChildren(this._currentElement, nextContext);

	      _hook2.default.Reconciler.receiveComponent(this);
	    }
	  }, {
	    key: 'getNativeNode',
	    value: function getNativeNode() {
	      if (this._nativeNode == null) {
	        this._nativeNode = _host2.default.driver.createFragment(this._instance);
	        // TODO instance cache
	      }

	      return this._nativeNode;
	    }
	  }, {
	    key: 'getPublicInstance',
	    value: function getPublicInstance() {
	      // TODO
	      return null;
	    }
	  }, {
	    key: 'getName',
	    value: function getName() {
	      return 'fragment';
	    }
	  }]);

	  return FragmentComponent;
	}(_native2.default);

	exports.default = FragmentComponent;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _instance = __webpack_require__(15);

	var _instance2 = _interopRequireDefault(_instance);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function findComponentInstance(node) {
	  if (node == null) {
	    return null;
	  }
	  return _instance2.default.get(node);
	}

	exports.default = findComponentInstance;

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = '0.1.2';

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx createElement */

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _rax = __webpack_require__(2);

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
	          'RaxList'
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
/* 38 */
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

	var _rax = __webpack_require__(2);

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
	          'Rax Banner: '
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