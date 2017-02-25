import React, { Component } from 'react';
const {observable, computed} = 'mobx';
import {observer} from 'mobx-react/native';
import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import autobind from 'autobind-decorator';

@observer
export default class Index extends Component {    
    constructor(props){
        super(props);
    }
    
    @autobind
    onButtonPress() {
        this.doSomething();
    }
    doSomething() {
        console.log('doing something');
    }


    render() {
        return (
        <View>
            <TextInput
                style={{height: 40}}
                placeholder="input!"
                onChangeText={(text) => this.props.store.censorText(text)}
            />
            <Text style={{padding: 10, fontSize: 42}}>
                {this.props.store.inputText}
            </Text>

            <TextInput
                style={{height: 40}}
                placeholder="get friend by id"
                onChangeText={(friendID) => this.props.store.setFriendID(friendID)}
            />
            <Button
                onPress={() => this.props.store.getFriend()}
                title="Get Friend!"
                color="#841584"
            />

            <Text style={{padding: 10, fontSize: 42}}>
                {this.props.store.friendResp}
            </Text>
        </View>
        );
    }
}