import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Btn from '../components/Btn';

import config from '../config';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F4F3E8',
        paddingLeft: config.deviceWidth * 0.1,
      }}
    >
      <Text
        style={{
          justifyContent: 'flex-start',
          fontSize: 35,
        }}
      >
        Do you have a {'\n'}budget?
      </Text>
      <View
        style={{
          width: config.deviceWidth - 60,
          height: config.deviceHeight / 3,
          justifyContent: 'flex-start',
          alignItems: 'left',
        }}
      >
        <Pressable
          style={{
            backgroundColor: '#D9E7E4',
            marginTop: config.deviceHeight / 33,
            alignItems: 'center',
            width: '40%',
            height: 40,
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: config.deviceHeight / 33,
          }}
        >
          <Text style={{ color: '#1B463C' }}>Continue</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: '#D9E7E4',
            alignItems: 'center',
            width: '40%',
            height: 40,
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: config.deviceHeight / 33,
          }}
        >
          <Text style={{ color: '#1B463C' }}>Continue</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#D9E7E4',
            alignItems: 'center',
            color: '#FFFFFF',
            width: '40%',
            height: 40,
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: config.deviceHeight / 33,
          }}
        >
          <Text>Continue</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: '#D9E7E4',
            alignItems: 'center',
            color: '#FFFFFF',
            width: '40%',
            height: 40,
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: config.deviceHeight / 33,
          }}
        >
          <Text>Continue</Text>
        </Pressable>
      </View>

      <View style={{ alignItems: 'center' }}></View>
      <Pressable
        style={{
          backgroundColor: '#1B463C',
          alignItems: 'center',
          color: '#FFFFFF',
          width: '60%',
          height: 40,
          justifyContent: 'center',
          borderRadius: 25,
        }}
      >
        <Text style={{ color: '#FFFFFF' }}>Continue</Text>
      </Pressable>
    </View>
  );
}
