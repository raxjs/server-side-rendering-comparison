/** @jsx createElement */

'use strict';

import { createElement, Component } from 'rax';
// import listData from '../../../../mock/list';

export default class List extends Component {

  state = {
    data: this.props.data || []
  };

  // componentDidMount() {
  //   this.setState({
  //     data: window && window.GLOBAL.listData
  //   });
  // }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>RaxList</h2>
        {
          data.map((item, idx) => {
            return (
              <div key={idx} style={{
                float: 'left',
                width: '200px',
                marginRight: '10px',
                marginBottom: '10px'
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