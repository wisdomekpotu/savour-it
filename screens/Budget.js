import React from 'react';
import Curating from './Curating';
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
        Do you have a {'\n'}budget?
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
          <Text style={{ color: '#1B463C' }}>$8 - $15</Text>
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
          <Text style={{ color: '#1B463C' }}>$15 - $25</Text>
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
          <Text>$25 - $35</Text>
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
          <Text>$35 - $45</Text>
        </Pressable>
      </View>

      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={() => navigation.navigate('')}
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
