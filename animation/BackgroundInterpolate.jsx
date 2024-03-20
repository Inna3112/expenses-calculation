import {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  ScrollView,
  AppRegistry,
} from 'react-native';

class BackgroundInterpolate extends Component {
  state = {
    animation: new Animated.Value(0),
  };

  render() {
    const backgroundInterpolate = this.state.animation.interpolate({
      inputRange: [0, 3000],
      outputRange: ['rgb(255, 99, 71)', 'rgb(99, 71, 255)'],
    });

    const colorInterpolation = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(99, 71, 255)', 'rgb(255, 99, 71)'],
    });

    const backgroundStyle = {
      backgroundColor: backgroundInterpolate,
    };

    const textAnimatedStyle = {
      color: colorInterpolation,
    };

    return (
      <View style={styles.container}>
        <ScrollView
          scrollEventThrottle={16}
          // onScroll={e =>
          //   this.state.animation.setValue(e.nativeEvent.contentOffset.y)
          // }
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  y: this.state.animation,
                },
              },
            },
          ])}>
          <Animated.View style={[styles.content, backgroundStyle]} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 3000,
  },
});

AppRegistry.registerComponent('animations', () => animations);

export default BackgroundInterpolate;
