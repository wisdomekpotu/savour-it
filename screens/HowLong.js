import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import config from '../config';

export default function HowLong({ navigation }) {
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
        How long can you {'\n'}wait?
      </Text>
      <View
        style={{
          width: config.deviceWidth - 60,
          paddingLeft: config.deviceWidth * 0.1,
          height: config.deviceHeight / 2,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={() => navigation.navigate('FancyHaving')}
          style={{
            backgroundColor: '#D9E7E4',
            marginTop: config.deviceHeight / 10,
            alignItems: 'center',
            width: '60%',
            height: 50,
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: config.deviceHeight / 33,
          }}
        >
          <Text style={{ color: '#1B463C' }}>
            <Ionicons name='alarm-outline' size={25} color='black' />
            5-12 mins
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('FancyHaving')}
          style={{
            backgroundColor: '#D9E7E4',
            alignItems: 'center',
            width: '60%',
            height: 50,
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: config.deviceHeight / 33,
          }}
        >
          <Text style={{ color: '#1B463C' }}>
            {' '}
            <Ionicons name='alarm-outline' size={25} color='black' />
            12-20 mins
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('FancyHaving')}
          style={{
            backgroundColor: '#D9E7E4',
            alignItems: 'center',
            color: '#FFFFFF',
            width: '60%',
            height: 50,
            justifyContent: 'center',
            borderRadius: 25,
            marginBottom: config.deviceHeight / 33,
          }}
        >
          <Text>
            {' '}
            <Ionicons name='alarm-outline' size={25} color='black' />
            20-30 mins
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
