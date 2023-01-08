import {
  Image,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import config from '../config';
import { ScrollView } from 'react-native-gesture-handler';

export default function FancyHaving({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F4F3E8',
      }}
    >
      <Text
        style={{
          marginTop: config.deviceHeight / 9,
          fontSize: 35,
          color: '#1B463C',
          alignItems: 'center',
          paddingLeft: config.deviceWidth * 0.1,
        }}
      >
        Select a meal {'\n'}you’d fancy having
      </Text>
      <Pressable onPress={() => navigation.navigate('Budget')}>
        <Image
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.1,
            marginTop: config.deviceHeight / 9,
          }}
          source={require('../assets/food.png')}
        />
        <Text
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.45,
            marginTop: config.deviceHeight / 9,
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 26,
            color: '#1B463C',
          }}
        >
          Cookie Sandwish
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 6,
            marginLeft: config.deviceWidth * 0.45,
            opacity: 0.64,
            fontSize: 13,
          }}
        >
          Shortbread, chocolate turtle {'\n'}cookies, and red velvet.
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 60,
            opacity: 0.64,
            marginLeft: config.deviceWidth * 0.45,
            fontSize: 16,
          }}
        >
          $$ * Regular
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Budget')}>
        <Image
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.1,
            marginTop: config.deviceHeight / 9,
          }}
          source={require('../assets/food.png')}
        />
        <Text
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.45,
            marginTop: config.deviceHeight / 9,
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 26,
            color: '#1B463C',
          }}
        >
          Cookie Sandwish
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 6,
            marginLeft: config.deviceWidth * 0.45,
            opacity: 0.64,
            fontSize: 13,
          }}
        >
          Shortbread, chocolate turtle {'\n'}cookies, and red velvet.
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 60,
            opacity: 0.64,
            marginLeft: config.deviceWidth * 0.45,
            fontSize: 16,
          }}
        >
          $$ * Regular
        </Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate('Budget')}>
        <Image
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.1,
            marginTop: config.deviceHeight / 9,
          }}
          source={require('../assets/food.png')}
        />
        <Text
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.45,
            marginTop: config.deviceHeight / 9,
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 26,
            color: '#1B463C',
          }}
        >
          Cookie Sandwish
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 6,
            marginLeft: config.deviceWidth * 0.45,
            opacity: 0.64,
            fontSize: 13,
          }}
        >
          Shortbread, chocolate turtle {'\n'}cookies, and red velvet.
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 60,
            opacity: 0.64,
            marginLeft: config.deviceWidth * 0.45,
            fontSize: 16,
          }}
        >
          $$ * Regular
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Budget')}>
        <Image
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.1,
            marginTop: config.deviceHeight / 9,
          }}
          source={require('../assets/food.png')}
        />
        <Text
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.45,
            marginTop: config.deviceHeight / 9,
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 26,
            color: '#1B463C',
          }}
        >
          Cookie Sandwish
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 6,
            marginLeft: config.deviceWidth * 0.45,
            opacity: 0.64,
            fontSize: 13,
          }}
        >
          Shortbread, chocolate turtle {'\n'}cookies, and red velvet.
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 60,
            opacity: 0.64,
            marginLeft: config.deviceWidth * 0.45,
            fontSize: 16,
          }}
        >
          $$ * Regular
        </Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Budget')}>
        <Image
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.1,
            marginTop: config.deviceHeight / 9,
          }}
          source={require('../assets/food.png')}
        />
        <Text
          style={{
            position: 'absolute',
            marginLeft: config.deviceWidth * 0.45,
            marginTop: config.deviceHeight / 9,
            fontWeight: '500',
            fontSize: 15,
            lineHeight: 26,
            color: '#1B463C',
          }}
        >
          Cookie Sandwish
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 6,
            marginLeft: config.deviceWidth * 0.45,
            opacity: 0.64,
            fontSize: 13,
          }}
        >
          Shortbread, chocolate turtle {'\n'}cookies, and red velvet.
        </Text>
        <Text
          style={{
            marginTop: config.deviceHeight / 60,
            opacity: 0.64,
            marginLeft: config.deviceWidth * 0.45,
            fontSize: 16,
          }}
        >
          $$ * Regular
        </Text>
      </Pressable>
    </ScrollView>
  );
}
