import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Index from './src/components/index.js';
import store from './src/store.js';
import {useStrict} from 'mobx';
useStrict(true);

export default class inTouchCli extends Component {
  render() {

    return (
      <View style={{flex:1, backgroundColor: 'powderblue'}}>
          <Index store={store}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('inTouchCli', () => inTouchCli);
