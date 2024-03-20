import {Component} from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

class ColorInterpolation extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
      }).start();
    });
  };

  render() {
    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1, 2],
      outputRange: ['rgb(71, 255, 99)', 'rgb(255, 99, 71)', 'rgb(99, 71, 255)'],
    });

    const bgStyle = {
      backgroundColor: this.state.animation.interpolate({
        inputRange: [0, 2],
        outputRange: ['rgb(255, 99, 71, 1)', 'rgb(255, 99, 71, 0)'],
      }),
    };

    const animatedStyle = {
      backgroundColor: colorInterpolation,
    };

    return (
      <Animated.View style={[styles.container, bgStyle]}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyle]} />
        </TouchableWithoutFeedback>
      </Animated.View>
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
  },
});

export default ColorInterpolation;
