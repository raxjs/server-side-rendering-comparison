
/** @jsx h */

import { h, render, Component } from 'preact';
import List from '../list/index.preact';
import Banner from '../banner/index.preact';

export default class App extends Component {

  componentDidMount() {
    // console.log('react render in client');
  }

  render() {

    const props = this.props || {};

    return (
      <div>
        <Banner data={props.bannerData} />
        <List data={props.listData} />
      </div>
    );

  }
};