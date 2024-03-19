import {Component} from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';
import {Animations} from 'react-native-reanimated/lib/typescript/reanimated2/layoutReanimation/web/config';

class Color extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 1500,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500,
      }).start();
    });
  };

  render() {
    const boxInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)'],
    });

    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(99, 71, 255)', 'rgb(255, 99, 71)'],
    });

    const boxAnimatedStyle = {
      backgroundColor: boxInterpolation,
    };

    const textAnimatedStyle = {
      color: colorInterpolation,
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, boxAnimatedStyle]}>
            <Animated.Text style={[textAnimatedStyle]}>
              Text in box
            </Animated.Text>
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

export default Color;
