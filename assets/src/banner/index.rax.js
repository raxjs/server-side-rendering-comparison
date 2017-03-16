/** @jsx createElement */

'use strict';

import { createElement, Component } from 'rax';
import styles from './styles';

export default class Banner extends Component {

  state = {
    data: this.props.data || []
  };

  onBannerClick = (item) => {
    alert('click banner:' + item.title);
  }

  render() {

    const {data} = this.state;

    return (
      <div style={styles.container}>
        <h2>Rax Banner: </h2>
        <div style={styles.list}>
        {
          data.map((item, idx) => {
            return (
              <div style={styles.item} onClick={this.onBannerClick.bind(this, item)}>
                <img src={item.img} style={styles.itemImg} />
              </div>
            );
          })
        }
        </div>
      </div>
    );
  }

}
