
import React from 'react';
import List from './List/index.react';
import Banner from './Banner/index.react';

export default class App extends React.Component {

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