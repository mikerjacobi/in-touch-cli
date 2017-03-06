import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';
import store from './src/store.js';
import Friend from './src/components/friend'
import Login from './src/components/login'


import {useStrict} from 'mobx';
useStrict(true);



export default class inTouchCli extends Component {
  render() {

    return (
        <Navigator
            style={{flex:1, backgroundColor: 'powderblue'}}
            renderScene={(route, navigator) => {
                store.navigator = navigator;
                switch (store.routeIndex){
                    case store.routes["login"]:
                        return (<Login store={store}/>);
                    case store.routes["friend"]:
                        return (<Friend store={store}/>);
                    default:
                        return (<Login store={store}/>);
                }
            }}

        />   
    );
  }
}

AppRegistry.registerComponent('inTouchCli', () => inTouchCli);
