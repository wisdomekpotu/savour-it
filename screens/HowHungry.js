import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, Button } from 'react-native';
import config from '../config';

import { fetchHungers } from '../endpoints/hungers';

export default function HowHungry({ navigation }) {
  const [hungers, setHungers] = useState([]);

  async function fetchHungersFromApi() {
    const { data } = await fetchHungers();
    setHungers(data);
    console.log(data.i);
  }

  useEffect(() => {
    fetchHungersFromApi();
  }, []);

  // const [name, setName] = useState('');

  // // Creating a ref Object using useRef Hook
  // const textRef = useRef(null);

  // const onPressFunction = () => {
  //   const el2 = textRef.current;
  //   console.log(el2);
  // };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F4F3E8',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Pressable onPress={() => navigation.navigate('Ordermeal')}>
          <Ionicons
            name='ios-chevron-back-circle-outline'
            size={40}
            color='#1B463C'
            style={{
              paddingLeft: config.deviceWidth * 0.1,
              marginTop: config.deviceHeight / 180,
              marginBottom: config.deviceHeight / 33,
            }}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Avoiding')}>
          <Text
            style={{
              fontSize: 18,
              paddingLeft: config.deviceWidth * 0.65,
              marginTop: config.deviceHeight / 60,
              color: '#1B463C',
            }}
          >
            skip
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          marginTop: config.deviceHeight / 32,
          paddingLeft: config.deviceWidth * 0.1,
        }}
      >
        {/* <Text
          style={{
            justifyContent: 'flex-start',
            fontSize: 35,
            color: '#1B463C',
          }}
        >
          How hungry are {'\n'}you?
        </Text> */}
      </View>

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
          // onPress={() => onPressFunction()}
          onPress={() => onPressFunction()}
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
          <Text style={{ color: '#1B463C' }}>{}</Text>
        </Pressable>

        {/* <Pressable
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
        </Pressable> */}
      </View>

      {/* <View
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
      </View> */}
    </View>
  );
}
