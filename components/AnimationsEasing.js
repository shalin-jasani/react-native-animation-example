import React, { Component } from 'react';
import { StyleSheet, Text, View, Easing, Animated, // Button,
  ScrollView } from 'react-native';
import Button from 'react-native-button';

export default class AnimationsEasing extends Component {

  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }

  animate (easing) {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 1000,
        easing
      }
    ).start()
  }

  render () {
    const marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 260]
    })
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.block, {marginLeft} ]} />
        <ScrollView>
          <Text style={{textAlign: 'center'}}>Scroll up for more animations</Text>
          <MyButton style={styles.button} title='Bounce' onPress={this.animate.bind(this, Easing.bounce)} />
          <MyButton style={styles.button} title='Cubic' onPress={this.animate.bind(this, Easing.cubic)} />
          <MyButton style={styles.button} title='Back' onPress={this.animate.bind(this, Easing.back(2))} />
          <MyButton style={styles.button} title='Elastic' onPress={this.animate.bind(this, Easing.elastic(2))} />
          <MyButton style={styles.button} title='Ease' onPress={this.animate.bind(this, Easing.ease)} />
          <MyButton style={styles.button} title='InOut' onPress={this.animate.bind(this, Easing.inOut(Easing.quad))} />
          <MyButton style={styles.button} title='In' onPress={this.animate.bind(this, Easing.in(Easing.quad))} />
          <MyButton style={styles.button} title='Out' onPress={this.animate.bind(this, Easing.out(Easing.quad))} />
          <MyButton style={styles.button} title='Sin' onPress={this.animate.bind(this, Easing.sin)} />
          <MyButton style={styles.button} title='Linear' onPress={this.animate.bind(this, Easing.linear)} />
          <MyButton style={styles.button} title='Quad' onPress={this.animate.bind(this, Easing.quad)} />
        </ScrollView>
      </View>
    );
  }
}

const MyButton = ({onPress, title, style}) => (
  <Button style={style} onPress={onPress}>
    {title}
  </Button>
)

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60
  },
  button: {
    height: 60,
    backgroundColor: '#ededed',
    borderRadius: 4,
    marginTop: 10,
    paddingTop: 20,
    fontSize: 18
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }
});
