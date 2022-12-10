import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Budget({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Do you have a {'\n'}budget?</Text>
      <View
        style={{
          top: 133,
        }}
      >
        <View>
          <Pressable
            style={styles.first_press}
            onPress={() => navigation.navigate('HowHungry')}
          >
            <Text style={styles.button_text}>$10 - $20</Text>
          </Pressable>
        </View>
        <View style={styles.second_btn}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('HowHungry')}
          >
            <Text style={styles.button_text}>$20 - $30</Text>
          </Pressable>
        </View>
        <View style={styles.third_btn}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('HowHungry')}
          >
            <Text style={styles.button_text}>$30 - $70</Text>
          </Pressable>
        </View>
        <View style={styles.fourth_btn}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('HowHungry')}
          >
            <Text style={styles.button_text}>___________</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  second_btn: {
    top: 81,
    backgroundColor: '#E7A6D1',
  },

  third_btn: {
    top: 162,
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
    top: 98,
    fontfamily: 'Clash',
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
    width: 182,
    height: 64,
    left: 105,
    top: 107,
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
    top: 107,
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
