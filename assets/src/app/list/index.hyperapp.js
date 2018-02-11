/** @jsx h */
'use strict';

import { h } from 'hyperapp';
import styles from './styles';

export default function List(props) {
  return (
    <div style={styles.container}>
      <h2>Hyperapp List</h2>
      <div style={styles.list}>
        {
          props.data.map((item, idx) => {
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
