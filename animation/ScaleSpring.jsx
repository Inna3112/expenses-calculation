import {Component} from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';

class ScaleSpring extends Component {
  state = {
    animation: new Animated.Value(1),
  };

  handlePress = () => {
    this.state.animation.addListener(({value}) => {
      console.log(value);
    });
    Animated.spring(this.state.animation, {
      toValue: 2,
      friction: 2,
      tension: 160,
    }).start(() => {
      Animated.spring(this.state.animation, {
        toValue: 1,
        friction: 2,
        tension: 100,
      }).start();
    });
  };

  render() {
    const animatedStyles = {
      transform: [{scaleX: this.state.animation}],
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
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

export default ScaleSpring;
