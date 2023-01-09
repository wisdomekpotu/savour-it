import { Pressable, StyleSheet, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import config from '../config';

export default function MealOptions({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#F4F3E8',
      }}
    >
      <Image
        style={{
          position: 'absolute',
          marginTop: config.deviceHeight / 9,
          marginLeft: config.deviceWidth * 0.4,
        }}
        source={require('../assets/Savourit.png')}
      />
      <Text
        style={{
          fontSize: 20,
          color: '#1B463C',
          marginTop: config.deviceHeight / 5,
          paddingLeft: config.deviceWidth * 0.18,
        }}
      >
        Your meal is being delivered by {'\n'} the selected delivery partner
      </Text>
      <Pressable
        style={styles.press2}
        onPress={() => navigation.navigate('OrderDetails')}
      >
        <Image
          style={{
            position: 'absolute',
            marginTop: config.deviceHeight / 9,
            marginLeft: config.deviceWidth * 0.16,
          }}
          source={require('../assets/final.png')}
        />
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
