import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class RedButton extends Component {
  render() {
    return <Button color='red' title='Click Me'/>;
  }
}
export default class App extends Component {
  render() {
    return (
        //<Text style={{marginTop:50}}>My first App</Text>
        //<Text style={{marginTop:250, marginLeft:150}}>My first App</Text>

        <View style={{marginTop:200}}>
        <RedButton/>
        <Text>My First React Component</Text>
        </View>
    );
  }
}