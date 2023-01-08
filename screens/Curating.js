import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Lottie from 'lottie-react-native';
import React, { useRef, useEffect, useState } from 'react';
import config from '../config';
import { Ionicons } from '@expo/vector-icons';

export default function Curating({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1B463C',
      }}
    >
      <Ionicons name='md-arrow-back-circle-outline' size={24} color='white' />
      <Pressable onPress={() => navigation.navigate('MealOptions')}>
        <Lottie
          style={{
            width: config.deviceWidth - 60,
            alignSelf: 'center',

            marginTop: config.deviceHeight / 16,
          }}
          source={require('../animations/meal_loading.json')}
          autoPlay
          loop
        />
      </Pressable>

      <Text
        style={{
          marginTop: config.deviceHeight / 6,
          justifyContent: 'flex-start',
          fontSize: RFPercentage(3),
          color: 'white',
          alignSelf: 'center',
        }}
      >
        Curating meal options {'\n'} for you...
      </Text>
    </View>
  );
}
