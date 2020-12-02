/** @jsx h */
import { h } from "hyperapp";

export const init = [];

const alertFx = (dispatch, { message }) => alert(message);
const alertEffect = message => [alertFx, { message }];

const ClickAction = (state, item) => [state, alertEffect("click banner:" + item.title)];

export const view = state => (
  <div class="container">
    <h2>Hyperapp Banner: </h2>
    <div class="list">
      {state.map((item, idx) => (
        <div key={idx} class="item" onclick={[ClickAction, item]}>
          <img src={item.img} class="itemImg" />
        </div>
      ))}
    </div>
  </div>
);
