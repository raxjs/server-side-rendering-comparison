/** @jsx createElement */

import { createElement, Component } from 'universal-rx';
import List from './List/index.rx';
import Banner from './Banner/index.rx';

export default class App extends Component {

  componentDidMount() {
    // console.log('rx render in client');
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

// export default function(props = {}) {

//   return (
//     <div>
//       <Banner data={props.bannerData} />
//       <List data={props.listData} />
//     </div>
//   );
  
// };