/** @jsx createElement */

'use strict';

export default {

  props: ['data'],

  render(h) {
    return (
      <div class="container">
        <h2>VueList</h2>
        <div class="list">
        {
          this.data.map((item, idx) => {
            return (
              <a key={idx} class="item" href={item.url}>
                <img src={item.img} class="itemImg" />
                <p class="itemTitle">{item.title}</p>
                <p class="itemPrice">
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