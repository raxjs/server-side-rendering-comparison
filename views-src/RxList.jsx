/** @jsx createElement */

'use strict';

import { createElement, Component } from '@ali/rx';

export default class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        <h2>RxList</h2>
        {
          list.map((item, idx) => {
            return <p key={idx} style={{display: 'inline'}}>{idx}: {item.name}</p>;
          })
        }
      </div>
    );
  }
}