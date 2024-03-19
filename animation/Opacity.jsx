import {Component} from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

class Opacity extends Component {
  state = {
    animation: new Animated.Value(1),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 350,
    }).start(() => {
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 350,
      }).start();
    });
  };

  render() {
    const animatedStyles = {
      opacity: this.state.animation,
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

export default Opacity;
