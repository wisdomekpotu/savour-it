import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import config from '../config';

export default function Ordermeal({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F4F3E8',
      }}
    >
      <Image
        style={{
          position: 'absolute',
          marginTop: config.deviceHeight / 9,
          marginLeft: config.deviceWidth * 0.4,
        }}
        source={require('../assets/Savourit.png')}
      />

      <View>
        <Pressable onPress={() => navigation.navigate('OrderDetails')}>
          <Image
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.1,
              marginTop: config.deviceHeight / 7,
              top: 26,
              bottom: 34.4,
            }}
            source={require('../assets/ordermeal1.png')}
          />
        </Pressable>
      </View>

      <Text
        style={{
          fontSize: 20,
          color: '#010F07',
          fontWeight: 'bold',
          marginTop: config.deviceHeight / 2.5,
          paddingLeft: config.deviceWidth * 0.1,
          marginBottom: config.deviceHeight / 60,
        }}
      >
        Featured Restaurants
      </Text>

      <View>
        <ScrollView horizontal>
          <Pressable onPress={() => navigation.navigate('OrderDetails')}>
            <Image
              style={{
                position: 'absolute',
                marginLeft: config.deviceWidth * 0.1,
                top: 26,
              }}
              source={require('../assets/BG.jpg')}
            />
            <View>
              <Text
                style={{
                  position: 'absolute',
                  height: 24,
                  paddingLeft: config.deviceWidth * 0.1,
                  fontWeight: '500',
                  marginTop: config.deviceHeight / 4.5,
                  fontSize: 17,
                  letterSpacing: 0.444444,
                  color: ' #010F07',
                }}
              >
                Daylight Coffee
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  marginTop: config.deviceHeight / 4,
                  opacity: 0.64,
                  marginLeft: config.deviceWidth * 0.1,
                  fontSize: 16,
                }}
              >
                Colarodo, San Francisco
              </Text>
              <Text
                style={{
                  marginTop: config.deviceHeight / 3.5,
                  opacity: 0.64,
                  marginLeft: config.deviceWidth * 0.1,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}
              >
                4.5 * 25min * Free delivery
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('OrderDetails')}>
            <Image
              style={{
                position: 'absolute',
                marginLeft: config.deviceWidth * 0.1,
                top: 26,
              }}
              source={require('../assets/BG.jpg')}
            />
            <View>
              <Text
                style={{
                  position: 'absolute',
                  height: 24,
                  paddingLeft: config.deviceWidth * 0.1,
                  fontWeight: '500',
                  marginTop: config.deviceHeight / 4.5,
                  fontSize: 17,
                  letterSpacing: 0.444444,
                  color: ' #010F07',
                }}
              >
                Daylight Coffee
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  marginTop: config.deviceHeight / 4,
                  opacity: 0.64,
                  marginLeft: config.deviceWidth * 0.1,
                  fontSize: 16,
                }}
              >
                Colarodo, San Francisco
              </Text>
              <Text
                style={{
                  marginTop: config.deviceHeight / 3.5,
                  opacity: 0.64,
                  marginLeft: config.deviceWidth * 0.1,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}
              >
                4.5 * 25min * Free delivery
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('OrderDetails')}>
            <Image
              style={{
                position: 'absolute',
                marginLeft: config.deviceWidth * 0.1,
                top: 26,
              }}
              source={require('../assets/BG.jpg')}
            />
            <View>
              <Text
                style={{
                  position: 'absolute',
                  height: 24,
                  paddingLeft: config.deviceWidth * 0.1,
                  fontWeight: '500',
                  marginTop: config.deviceHeight / 4.5,
                  fontSize: 17,
                  letterSpacing: 0.444444,
                  color: ' #010F07',
                }}
              >
                Mario Italiano
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  marginTop: config.deviceHeight / 4,
                  opacity: 0.64,
                  marginLeft: config.deviceWidth * 0.1,
                  fontSize: 16,
                }}
              >
                Colarodo, San Francisco
              </Text>
              <Text
                style={{
                  marginTop: config.deviceHeight / 3.5,
                  opacity: 0.64,
                  marginLeft: config.deviceWidth * 0.1,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}
              >
                4.5 * 25min * Free delivery
              </Text>
            </View>
          </Pressable>
        </ScrollView>
      </View>
      <Pressable
        onPress={() => navigation.navigate('HowHungry')}
        style={{
          backgroundColor: '#1B463C',
          marginTop: config.deviceHeight / 10,
          marginLeft: config.deviceWidth * 0.1,
          alignItems: 'center',
          color: '#FFFFFF',
          width: '80%',
          height: 50,
          justifyContent: 'center',
          borderRadius: 25,
        }}
      >
        <Text
          style={{
            color: '#FFFFFF',
          }}
        >
          Order a meal
        </Text>
      </Pressable>
    </View>
  );
}
