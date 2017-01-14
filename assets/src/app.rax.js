/** @jsx createElement */

import { createElement, Component } from 'rax';
import List from './List/index.rax';
import Banner from './Banner/index.rax';

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