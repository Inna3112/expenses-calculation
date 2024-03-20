import {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  AppRegistry,
  PanResponder,
} from 'react-native';

class Decey extends Component {
  state = {
    animation: new Animated.ValueXY(0),
  };

  componentWillMount() {
    // this._x = 0;
    // this._y = 0;
    // this.state.animation.addListener(value => {
    //   this._x = value.x;
    //   this._y = value.y;
    // });
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      // onPanResponderGrant: () => {
      //   this.state.animation.setOffset({
      //     x: this._x,
      //     y: this._y,
      //   });
      //   this.state.animation.setValue({
      //     x: 0,
      //     y: 0,
      //   });
      // },
      onPanResponderGrant: (e, gestureState) => {
        this.state.animation.extractOffset();
      },
      onPanResponderMove: Animated.event([
        null,
        {dx: this.state.animation.x, dy: this.state.animation.y},
      ]),
      onPanResponderRelease: (e, {vx, vy}) => {
        Animated.decay(this.state.animation, {
          deceleration: 0.997,
          velocity: {x: vx, y: vy},
        }).start();
      },
    });
  }

  render() {
    const animatedStyle = {
      transform: this.state.animation.getTranslateTransform(),
    };

    return (
      <View style={styles.container}>
        <Animated.View
          style={[styles.box, animatedStyle]}
          {...this._panResponder.panHandlers}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 200,
    width: 200,
    backgroundColor: 'tomato',
  },
});

AppRegistry.registerComponent('animations', () => animations);

export default Decey;
