import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function MealOptions({ navigation }) {
  return (
    <View>
      <Pressable
        style={styles.press2}
        onPress={() => navigation.navigate('Final')}
      >
        <Text style={styles.text}>
          Here are some meal {'\n'} options for you
        </Text>
        <Image style={styles.img1} source={require('../assets/BG1.png')} />
        <Text style={styles.title}>Vegetarian salad</Text>
        {/* <Text>MealOptions</Text>
        <Text>MealOptions</Text> */}
        <Image style={styles.img2} source={require('../assets/BG2.png')} />
        <Text style={styles.title2}>Cookie Sandwich</Text>
        {/* <Text>MealOptions</Text>
        <Text>MealOptions</Text>  */}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    height: 24,
    right: 230,
    fontStyle: 'normal',
    fontWeight: '500',
    top: 320,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.444444,
    color: '#010F07',
  },
  title2: {
    position: 'absolute',
    height: 24,
    right: 230,
    fontStyle: 'normal',
    fontWeight: '500',
    top: 620,
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.444444,
    color: '#010F07',
  },
  img1: {
    position: 'absolute',

    left: 28,
    right: 0,
    top: 120,
    bottom: 34.4,
    borderRadius: 12,
  },
  img2: {
    position: 'absolute',
    left: 28,
    right: 0,
    top: 420,
    bottom: 34.4,
    borderRadius: 12,
  },
  text: {
    position: 'absolute',
    width: 245,
    height: 40,
    left: 27,
    top: 28,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 21,
    lineHeight: 22,
    letterSpacing: -0.03,
    color: '#000000',
  },
});
