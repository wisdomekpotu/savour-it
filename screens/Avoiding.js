import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import config from '../config';

export default function App({ navigation }) {
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
        Do you have any {'\n'}food you might{'\n'}be avoiding?
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
          <Text style={{ color: '#1B463C' }}>ceviche</Text>
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
          <Text style={{ color: '#1B463C' }}>Pastries</Text>
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
          onPress={() => navigation.navigate('HowLong')}
          style={{
            backgroundColor: '#1B463C',
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
