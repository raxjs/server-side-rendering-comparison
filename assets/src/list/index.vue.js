/** @jsx createElement */

'use strict';

import styles from './styles';

export default {

  props: ['data'],

  render(h) {
    return (
      <div style={styles.container}>
        <h2>VueList</h2>
        <div style={styles.list}>
        {
          this.data.map((item, idx) => {
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