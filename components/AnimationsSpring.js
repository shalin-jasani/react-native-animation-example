import React, { Component } from 'react';
import { StyleSheet, Text, View, Easing, Animated, // Button,
  ScrollView } from 'react-native';
import Button from 'react-native-button';

export default class AnimationsSpring extends Component {

  constructor () {
    super()
    this.springValue = new Animated.Value(0.3)
  }

  componentDidMount(){
    this.spring()
  }

  spring () {
    this.springValue.setValue(0.3)
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
        tension: 2
      }
    ).start()
  }

  render () {
    return (
      <View style={styles.container}>
        <Text
          style={{marginBottom: 100}}
          onPress={this.spring.bind(this)}>Spring</Text>
        <Animated.Image
          style={{ width: 227, height: 200, transform: [{scale: this.springValue}] }}
          source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
