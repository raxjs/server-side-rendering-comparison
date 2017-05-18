import React from 'fast-react-server';
import List from './list/index.fast_react';
import Banner from './banner/index.fast_react';

export default class App extends React.Component {

  componentDidMount() {
    // console.log('react render in client');
  }

  render() {

    const props = this.props || {};

    return (
      <div>
        <Banner cacheKey={"banner"} data={props.bannerData} />
        <List cacheKey={"list"} data={props.listData} />
      </div>
    );

  }
};
