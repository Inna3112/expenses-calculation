import {Component} from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';

class Scale extends Component {
  state = {
    animation: new Animated.Value(1),
  };

  startAnimation = () => {
    Animated.timing(this.state.animation, {
      toValue: -2,
      duration: 1500,
    }).start();
  };

  render() {
    const animatedStyles = {
      transform: [{scaleX: this.state.animation}],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[styles.box, animatedStyles]}>
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
    backgroundColor: 'tomato',
  },
});

export default Scale;
