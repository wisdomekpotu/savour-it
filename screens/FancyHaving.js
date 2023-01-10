import { Image, Pressable, Text, View } from 'react-native';
import React from 'react';
import config from '../config';
import { ScrollView } from 'react-native-gesture-handler';

export default function FancyHaving({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#F4F3E8',
        paddingLeft: config.deviceWidth * 0.03,
      }}
    >
      <Text
        style={{
          marginTop: config.deviceHeight / 9,
          fontSize: 35,
          color: '#1B463C',
          alignItems: 'center',
          paddingLeft: config.deviceWidth * 0.1,
          marginBottom: config.deviceHeight / 9,
        }}
      >
        Select a meal {'\n'}you’d fancy having
      </Text>

      <View
        style={{
          backgroundColor: '#E7DCC9',
          width: config.deviceWidth * 0.94,
          marginBottom: config.deviceWidth * 0.05,
          borderRadius: 8,
          paddingBottom: config.deviceWidth * 0.05,
        }}
      >
        <Pressable onPress={() => navigation.navigate('Budget')}>
          <Image
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.05,
              marginTop: config.deviceHeight / 50,
              marginBottom: config.deviceHeight / 33,
            }}
            source={require('../assets/food.png')}
          />
          <Text
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.4,
              marginTop: config.deviceHeight / 47,
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
              marginTop: config.deviceHeight / 16,
              marginLeft: config.deviceWidth * 0.4,
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
              marginLeft: config.deviceWidth * 0.4,
              fontSize: 16,
            }}
          >
            $$ * Regular
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: '#E7DCC9',
          width: config.deviceWidth * 0.94,
          marginBottom: config.deviceWidth * 0.05,
          borderRadius: 8,
          paddingBottom: config.deviceWidth * 0.05,
        }}
      >
        <Pressable onPress={() => navigation.navigate('Budget')}>
          <Image
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.05,
              marginTop: config.deviceHeight / 50,
              marginBottom: config.deviceHeight / 33,
            }}
            source={require('../assets/food.png')}
          />
          <Text
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.4,
              marginTop: config.deviceHeight / 47,
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
              marginTop: config.deviceHeight / 16,
              marginLeft: config.deviceWidth * 0.4,
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
              marginLeft: config.deviceWidth * 0.4,
              fontSize: 16,
            }}
          >
            $$ * Regular
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: '#E7DCC9',
          width: config.deviceWidth * 0.94,
          marginBottom: config.deviceWidth * 0.05,
          borderRadius: 8,
          paddingBottom: config.deviceWidth * 0.05,
        }}
      >
        <Pressable onPress={() => navigation.navigate('Budget')}>
          <Image
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.05,
              marginTop: config.deviceHeight / 50,
              marginBottom: config.deviceHeight / 33,
            }}
            source={require('../assets/food.png')}
          />
          <Text
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.4,
              marginTop: config.deviceHeight / 47,
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
              marginTop: config.deviceHeight / 16,
              marginLeft: config.deviceWidth * 0.4,
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
              marginLeft: config.deviceWidth * 0.4,
              fontSize: 16,
            }}
          >
            $$ * Regular
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          backgroundColor: '#E7DCC9',
          width: config.deviceWidth * 0.94,
          marginBottom: config.deviceWidth * 0.05,
          borderRadius: 8,
          paddingBottom: config.deviceWidth * 0.05,
        }}
      >
        <Pressable onPress={() => navigation.navigate('Budget')}>
          <Image
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.05,
              marginTop: config.deviceHeight / 50,
              marginBottom: config.deviceHeight / 33,
            }}
            source={require('../assets/food.png')}
          />
          <Text
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.4,
              marginTop: config.deviceHeight / 47,
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
              marginTop: config.deviceHeight / 16,
              marginLeft: config.deviceWidth * 0.4,
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
              marginLeft: config.deviceWidth * 0.4,
              fontSize: 16,
            }}
          >
            $$ * Regular
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
