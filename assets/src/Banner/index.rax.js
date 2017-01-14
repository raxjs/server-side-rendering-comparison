/** @jsx createElement */

'use strict';

/** 
 * Banner: 支持缓存
 */

import { createElement, Component } from 'rax';
// import bannerData from '../../../../mock/banner';

export default class Banner extends Component {

  state = {
    data: this.props.data || []
  };

  // componentDidMount() {
  //   // 异步获取数据
  //   this.setState({
  //     data: window && window.GLOBAL.bannerData
  //   });
  // }

  onBannerClick = (item) => {
    alert('click banner:' + item.title);
  }

  render() {

    const {data} = this.state;

    const itemStyle = {
      display: 'inline-block',
      width: '200px',
      marginLeft: '200px'
    };

    const imgStyle = {
      width: '100%'
    };

    return (
      <div>
        <h2>Rax Banner: </h2>
        {
          data.map((item, idx) => {
            return (
              <div style={itemStyle} onClick={this.onBannerClick.bind(this, item)}>
                <img src={item.img} style={imgStyle} />
              </div>
            );
          })
        }
      </div>
    );
  }

}
