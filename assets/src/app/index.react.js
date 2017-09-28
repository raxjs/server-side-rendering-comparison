
import React from 'react';
import List from './list/index.react';
import Banner from './banner/index.react';

export default class App extends React.Component {
  state = {};

  componentDidMount() {
    // console.log('react render in client');
    this.setState({
      onClick: function(){

      }
    });
  }

  render() {

    const props = this.props || {};

    return (
      <div onClick={this.state.onClick}>
        <Banner cacheKey={"banner"} data={props.bannerData} />
        <List cacheKey={"list"} data={props.listData} />
      </div>
    );

  }
};
