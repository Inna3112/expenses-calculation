import {Component} from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  AppRegistry,
} from 'react-native';

class Stagged extends Component {
  state = {
    colorAnimation: new Animated.Value(0),
    scaleAnimation: new Animated.Value(1),
  };

  handlePress = () => {
    Animated.stagger(200, [
      Animated.timing(this.state.colorAnimation, {
        toValue: 1,
        duration: 500,
      }),
      Animated.timing(this.state.scaleAnimation, {
        toValue: 2,
        duration: 300,
      }),
    ]).start();
  };

  render() {
    const backgroundColorInterpolate = this.state.colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)'],
    });

    const boxStyle = {
      backgroundColor: backgroundColorInterpolate,
      transform: [{scale: this.state.scaleAnimation}],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animated.View style={[styles.box, boxStyle]}>
            <Text>Text in box</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 150,
    height: 150,
    // backgroundColor: 'tomato',
  },
});

AppRegistry.registerComponent('animations', () => animations);

export default Stagged;
