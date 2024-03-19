import {Component} from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

class Functions extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 200,
      }).start();
    });
  };

  render() {
    // const randomValue = new Animated.Value(50);
    // const newAnimation = Animated.add(this.state.animation, randomValue);

    // const randomValue = 2;
    // const randomValue = new Animated.Value(2);
    // const newAnimation = Animated.divide(this.state.animation, randomValue);

    // const randomValue = new Animated.Value(6);
    // const newAnimation = Animated.multiply(this.state.animation, randomValue);

    const randomValue = 3;
    const newAnimation = Animated.modulo(this.state.animation, randomValue);
    const interpolated = newAnimation.interpolate({
      inputRange: [0, 3],
      outputRange: ['0deg', '270deg'],
    });

    const animatedStyles = {
      // transform: [{translateY: newAnimation}],
      transform: [{rotate: interpolated}],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]} />
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
    backgroundColor: 'tomato',
  },
});

export default Functions;
