/** @jsx h */
'use strict';

import { h } from 'hyperapp';
import styles from './styles';

function onBannerClick(item) {
  alert('click banner:' + item.title);
}

export default function Banner(props) {
  return (
    <div style={styles.container}>
      <h2>Hyperapp Banner: </h2>
      <div style={styles.list}>
        {
          props.data.map((item, idx) => {
            return (
              <div style={styles.item} onclick={onBannerClick.bind(this, item)}>
                <img src={item.img} style={styles.itemImg} />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
