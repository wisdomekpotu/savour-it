import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Final() {
  return (
    <View>
      <Text style={styles.text}>Your meal is on the way!</Text>
      <Image style={styles.img} source={require('../assets/check.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    textAlign: 'center',
    left: 90,
    top: 208,
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    width: 310,
    height: 68,
    left: 41,
    top: 118,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 34,

    position: 'absolute',
  },
});
