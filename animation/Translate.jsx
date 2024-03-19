import {Component} from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Easing,
} from 'react-native';

class Translate extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 1500,
      // easing: Easing.back(5),
      // easing: Easing.bounce,
      // easing: Easing.elastic(2),
      easing: Easing.bezier(0.06, 1, 0.86, 0.23),
    }).start(() => {
      this.state.animation.setValue(0);
    });
  };

  render() {
    const animatedStyles = {
      transform: [{translateY: this.state.animation}],
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

export default Translate;
