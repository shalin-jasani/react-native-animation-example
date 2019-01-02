/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View, Animated, Easing} from 'react-native';

type Props = {};
export default class AnimatedTimings extends Component<Props>
{
  constructor(){
    super()
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount(){
    this.spin()
  }

  spin(){
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,{
        toValue : 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start( () => this.spin())
  }


  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (
      <View style={styles.container}>
        <Animated.Image
        style={{
          width: 227,
          height: 200,
          transform: [{rotate: spin}]}}
        source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}}
        >
        </Animated.Image>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
