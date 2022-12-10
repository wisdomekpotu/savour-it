import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function HowHungry({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>How hungry are{'\n'}you?</Text>
      <Image style={styles.img} source={require('../assets/slider.png')} />
      <Text style={styles.text1}>Very hungry</Text>
      <Text style={styles.text2}>Not very hungry</Text>
      <Text style={styles.text3}>Not hungry</Text>
      <View style={styles.button}>
        <Pressable onPress={() => navigation.navigate('Avoiding')}>
          <Text style={styles.btn_text}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    position: 'absolute',
    width: 119,
    height: 26,
    left: 159,
    top: 214,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: -0.03,
    color: '#DA0091',
  },

  text2: {
    position: 'absolute',
    width: 122,
    height: 20,
    left: 159,
    top: 353,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20,
    letterSpacing: -0.03,
    color: '#DA0091',
  },

  text3: {
    position: 'absolute',
    width: 69,
    height: 17,
    left: 159,
    top: 500,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.03,
    color: '#DA0091',
  },
  img: { position: 'absolute', left: 80, top: 210 },

  text: {
    color: '#4D0033',
    position: 'absolute',
    width: 273,
    height: 64,
    left: 60,
    top: 45,
    fontfamily: 'Clash',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 40,
    textAlign: 'center',
    color: '#4D0033',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    paddingTop: 20,
    paddingBottom: 0,
    gap: 8,
    position: 'absolute',
    width: 329,
    height: 62,
    left: 32,
    top: 600,
    color: 'white',
    backgroundColor: '#B9B9B9',
    borderRadius: 89,
  },
});
