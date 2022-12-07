import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Budget({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Do you have a {'\n\n'} budget?</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Hungry')}
      >
        <Text style={styles.button_text}>$10 - $20</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#4D0033',
    position: 'absolute',
    width: 273,
    height: 64,
    left: 60,
    top: 68,
    fontfamily: 'Clash Display',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 35,
    lineHeight: 30,
    textAlign: 'center',
  },

  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
    gap: 10,
    position: 'absolute',
    width: 182,
    height: 64,
    left: 105,
    top: 307,
    backgroundColor: '#DA0091',
    borderRadius: 80,
  },

  button_text: {
    width: 82,
    height: 24,
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 24,
    color: '#FFFFFF',
    // flex: 'none',
    order: 0,
    flexGrow: 0,
  },
});
