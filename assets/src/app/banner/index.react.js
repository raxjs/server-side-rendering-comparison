'use strict';

import React from 'react';

export default class Banner extends React.Component {

  state = {
    data: this.props.data || []
  };

  onBannerClick = (item) => {
    alert('click banner:' + item.title);
  }

  render() {
    const {data} = this.state;

    return (
      <div className="container">
        <h2>React Banner: </h2>
        <div className="list">
        {
          data.map((item, idx) => {
            return (
              <div className="item" onClick={this.onBannerClick.bind(this, item)} key={idx}>
                <img src={item.img} className="itemImg" />
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }

}
