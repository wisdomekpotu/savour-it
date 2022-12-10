import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Octicons } from '@expo/vector-icons';

export default function HowLong({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>How long can you wait?</Text>

      <View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Curating')}
        >
          <Text style={styles.button_text}>
            <Octicons name='clock' size={20} color='white' /> 5-15 mins
          </Text>
        </Pressable>
      </View>
      <View style={styles.second_btn}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Curating')}
        >
          <Text style={styles.button_text}>
            <Octicons name='clock' size={20} color='white' /> 15-25 mins
          </Text>
        </Pressable>
      </View>
      <View style={styles.third_btn}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Curating')}
        >
          <Text style={styles.button_text}>
            <Octicons name='clock' size={20} color='white' /> 25-30 mins
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  second_btn: {
    top: 81,
  },

  third_btn: {
    top: 162,
    backgroundColor: '#E7A6D1',
  },

  fourth_btn: {
    top: 250,
  },

  text: {
    color: '#4D0033',
    position: 'absolute',
    width: 273,
    height: 64,
    left: 60,
    top: 48,
    fontfamily: 'Clash Display',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 35,
    lineHeight: 40,
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

    height: 64,
    left: 95,
    top: 240,
    backgroundColor: '#E7A6D1',
    borderRadius: 80,
  },
  first_press: {
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
