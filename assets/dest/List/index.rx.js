/** @jsx createElement */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _universalRx = require('universal-rx');

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

      return (0, _universalRx.createElement)(
        'div',
        null,
        (0, _universalRx.createElement)(
          'h2',
          null,
          'RxList'
        ),
        data.map(function (item, idx) {
          return (0, _universalRx.createElement)(
            'div',
            { key: idx, style: {
                float: 'left',
                width: '200px',
                marginRight: '10px',
                marginBottom: '10px'
              } },
            (0, _universalRx.createElement)('img', { src: item.img, style: {
                width: '100%'
              } }),
            (0, _universalRx.createElement)(
              'p',
              null,
              item.title
            ),
            (0, _universalRx.createElement)('div', null)
          );
        })
      );
    }
  }]);

  return List;
}(_universalRx.Component);

exports.default = List;