import {Pressable, View, Text, StyleSheet} from 'react-native';

function IconButton({onPress, icon, color}) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={styles.iconButton}>
        <Text style={[styles.iconButtonText, color]}>{icon}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  iconButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.75,
  },
});

export default IconButton;
