
/** @jsx h */
import { h } from 'hyperapp';
import * as Banner from './banner/index.hyperapp';
import * as List from './list/index.hyperapp';

export const init = {
  bannerData: Banner.init,
  listData: List.init,
};

export const view = (state) => (
  <div>
    {Banner.view(state.bannerData)}
    {List.view(state.listData)}
  </div>
);
