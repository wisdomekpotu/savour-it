import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import React from 'react';

export default function Curating() {
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: '#DA0091',
      }}
    >
      <Image style={styles.logo} source={require('../assets/Group.png')} />
      <Text style={styles.text}>Curating meal options for you...</Text>
      <Image style={styles.img} source={require('../assets/Vector.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    width: 310,
    height: 68,
    left: 41,
    top: 218,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 34,
    color: 'white',
    backgroundColor: '#DA0091',
    position: 'absolute',
  },

  img: {
    textAlign: 'center',
    left: 156,
    top: 318,
    position: 'absolute',
  },

  logo: {
    textAlign: 'center',
    left: 120,
    top: 18,
    position: 'absolute',
  },
});
