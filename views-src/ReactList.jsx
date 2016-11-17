'use strict';

import React, { Component } from 'react';

export default class List extends Component {

  render() {
    const { list } = this.props;
    return (
      <div>
        <h2>ReactList</h2>
        {
          list.map((item, idx) => {
            return <p key={idx} style={{display: 'inline'}}>{idx}: {item.name}</p>;
          })
        }
      </div>
    );
  }
}
