'use strict';

/** 
 * Banner: 支持缓存
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import bannerData from '../../../../mock/banner';

var Banner = function (_React$Component) {
  _inherits(Banner, _React$Component);

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
        width: 200,
        marginLeft: 200
      };

      var imgStyle = {
        width: '100%'
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'React Banner: '
        ),
        data.map(function (item, idx) {
          return _react2.default.createElement(
            'div',
            { key: idx, style: itemStyle, onClick: _this2.onBannerClick.bind(_this2, item) },
            _react2.default.createElement('img', { src: item.img, style: imgStyle })
          );
        })
      );
    }
  }]);

  return Banner;
}(_react2.default.Component);

exports.default = Banner;