'use strict';

import React, { Component } from 'react';
// import listData from '../../../../mock/list';

export default class List extends Component {

  state = {
    data: this.props.data || []
  };

  // componentDidMount() {
  //   this.setState({
  //     list: window && window.GLOBAL.listData
  //   });
  // }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>ReactList</h2>
        {
          data.map((item, idx) => {
            return (
              <div key={idx} style={{
                float: 'left',
                width: 200,
                marginRight: 10,
                marginBottom: 10
              }}>
                <img src={item.img} style={{
                  width: '100%'
                }} />
                <p>{item.title}</p>
                <div>
                  
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
