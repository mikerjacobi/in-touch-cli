import {
  Text,
  View,
  TextInput,
  Button
} from 'react-native';
import React, { Component } from 'react';
import {observer} from 'mobx-react/native';

@observer
export default class Friend extends Component {    
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 80}}
                    placeholder="Friend ID"
                    onChangeText={(friendID) => this.props.store.friend.setFriendID(friendID)}
                />
                <Button
                    onPress={() => this.props.store.friend.getFriend()}
                    title="Get Friend!"
                    color="#841584"
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.props.store.friend.friendResp}
                </Text>

                <Button onPress={() => {this.props.store.goto("login")}} title="Go back"/>
            </View>
        );
    }
}