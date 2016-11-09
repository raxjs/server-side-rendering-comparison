/** @jsx createElement */

'use strict';

import {createElement, Component} from '@ali/rx';
import {View, Text} from '@ali/rx-components';
import {mount} from '@ali/rx-mounter';

class App extends Component {
  render() {
    return <View style={styles.container}>
      <Text>hello world</Text>
    </View>;
  }
}

const styles = {
  container: {
    backgroundColor: 'grey',
    width: '750rem'
  }
};

mount(<App />, 'body');
