import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import React, { Component } from 'react';
import {observer} from 'mobx-react/native';

@observer
export default class Login extends Component {    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 80}}
                    placeholder="username"
                    onChangeText={(username) => this.props.store.login.setUsername(username)}
                />
                <TextInput
                    style={{height: 80}}
                    placeholder="password"
                    secureTextEntry={true} 
                     onChangeText={(password) => this.props.store.login.setPassword(password)}                   
                />
                <Button
                    onPress={() => this.props.store.login.login()}
                    title="Login"
                    color="#841584"
                />
            </View>
        );
    }
}