import React from 'react';
import { View, Text, Pressable } from 'react-native';

import config from '../config';

export default function HowHungry({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F4F3E8',
      }}
    >
      <Text
        style={{
          justifyContent: 'flex-start',
          fontSize: 35,
          color: '#1B463C',
          paddingLeft: config.deviceWidth * 0.1,
        }}
      >
        How hungry are {'\n'}you?
      </Text>
      <View
        style={{
          width: config.deviceWidth - 60,
          paddingLeft: config.deviceWidth * 0.1,
          height: config.deviceHeight / 2,
          justifyContent: 'flex-start',
          alignItems: 'left',
        }}
      >
        <Pressable
          style={{
            backgroundColor: '#D9E7E4',
            marginTop: config.deviceHeight / 16,
            alignItems: 'center',
            width: '40%',
            height: 40,
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: config.deviceHeight / 33,
          }}
        >
          <Text style={{ color: '#1B463C' }}>Very Hungry</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: '#D9E7E4',
            alignItems: 'center',
            width: '50%',
            height: 40,
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: config.deviceHeight / 33,
          }}
        >
          <Text style={{ color: '#1B463C' }}>Not very hungry</Text>
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
          <Text>Hungry</Text>
        </Pressable>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={() => navigation.navigate('Avoiding')}
          style={{
            backgroundColor: '#B9B9B9',
            alignItems: 'center',
            color: '#FFFFFF',
            width: '80%',
            height: 50,
            justifyContent: 'center',
            borderRadius: 25,
          }}
        >
          <Text style={{ color: '#FFFFFF' }}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}
