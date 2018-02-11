/** @jsx h */
import { h } from 'hyperapp';
import List from './list/index.hyperapp';
import Banner from './banner/index.hyperapp';

export default function App(state, actions) {
  return (
    <div>
      <Banner data={state.bannerData} />
      <List data={state.listData} />
    </div>
  )
}
