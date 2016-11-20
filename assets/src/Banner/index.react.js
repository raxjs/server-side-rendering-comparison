'use strict';

/** 
 * Banner: 支持缓存
 */

import React from 'react';

// import bannerData from '../../../../mock/banner';

export default class Banner extends React.Component {

  state = {
    data: this.props.data || []
  };

  // componentDidMount() {
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
      width: 200,
      marginLeft: 200
    };

    const imgStyle = {
      width: '100%'
    };

    return (
      <div>
        <h2>React Banner: </h2>
        {
          data.map((item, idx) => {
            return (
              <div key={idx} style={itemStyle} onClick={this.onBannerClick.bind(this, item)}>
                <img src={item.img} style={imgStyle} />
              </div>
            );
          })
        }
      </div>
    );
  }

}
