import {
  Pressable,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import config from '../config';
import { Ionicons } from '@expo/vector-icons';

export default function MealOptions({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#F4F3E8',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Pressable onPress={() => navigation.navigate('OrderDetails')}>
          <Ionicons
            name='ios-chevron-back-circle-outline'
            size={40}
            color='#1B463C'
            style={{
              paddingLeft: config.deviceWidth * 0.1,
              marginTop: config.deviceHeight / 18,
              marginBottom: config.deviceHeight / 33,
            }}
          />
        </Pressable>
      </View>

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
          marginTop: config.deviceHeight / 8,
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
