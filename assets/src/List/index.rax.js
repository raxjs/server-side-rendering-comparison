/** @jsx createElement */

'use strict';

import { createElement, Component } from 'rax';
import styles from './styles';

export default class List extends Component {

  state = {
    data: this.props.data || []
  };

  render() {
    const { data } = this.state;
    return (
      <div style={styles.container}>
        <h2>RaxList</h2>
        <div style={styles.list}>
        {
          data.map((item, idx) => {
            return (
              <a key={idx} style={styles.item} href={item.url}>
                <img src={item.img} style={styles.itemImg} />
                <p style={styles.itemTitle}>{item.title}</p>
                <p style={styles.itemPrice}>
                  <span>price: {item.price}</span>
                </p>
              </a>
            );
          })
        }
        </div>
      </div>
    );
  }
}