import {Component} from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

class AbsolutePosition extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 300,
      duration: 350,
    }).start();
  };

  render() {
    const animatedStyles = {
      top: this.state.animation,
      left: this.state.animation,
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
    position: 'relative',
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'tomato',
    position: 'absolute',
    // top: 0,
    // left: 0,
  },
});

export default AbsolutePosition;
