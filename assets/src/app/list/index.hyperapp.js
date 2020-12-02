/** @jsx h */
import { h } from "hyperapp";

export const init = [];

export const view = state => (
  <div class="container">
    <h2>HyperappList</h2>
    <div class="list">
      {state.map((item, idx) => (
        <a key={idx} class="item" href={item.url}>
          <img src={item.img} class="itemImg" />
          <p class="itemTitle">{item.title}</p>
          <p class="itemPrice">
            <span>price: {item.price}</span>
          </p>
        </a>
      ))}
    </div>
  </div>
);
