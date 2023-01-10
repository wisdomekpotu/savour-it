import { Pressable, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import config from '../config';
import { Ionicons } from '@expo/vector-icons';

export default function Ordermeal({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F4F3E8',
      }}
    >
      <Ionicons name='md-arrow-back-circle-outline' size={24} color='white' />
      <Image
        style={{
          position: 'absolute',
          marginTop: config.deviceHeight / 12,
          marginLeft: config.deviceWidth * 0.4,
        }}
        source={require('../assets/Savourit.png')}
      />

      <View>
        <Pressable>
          <Image
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.07,
              marginTop: config.deviceHeight / 6.3,
              width: config.deviceWidth * 0.86,
              borderRadius: 12,
            }}
            source={require('../assets/ordermeal1.png')}
          />
        </Pressable>
      </View>

      <View
        style={{
          marginTop: config.deviceHeight / 2.3,
          paddingLeft: config.deviceWidth * 0.08,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: '#010F07',
            fontWeight: 'bold',
          }}
        >
          Featured Restaurants
        </Text>
      </View>

      <View>
        <ScrollView horizontal>
          <Pressable>
            <Image
              style={{
                position: 'absolute',
                marginLeft: config.deviceWidth * 0.1,
                width: config.deviceWidth * 0.5,
                height: config.deviceHeight * 0.2,
                borderRadius: 12,
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
                  marginTop: config.deviceHeight / 4,
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
                  marginTop: config.deviceHeight / 3.5,
                  opacity: 0.64,
                  marginLeft: config.deviceWidth * 0.1,
                  fontSize: 16,
                }}
              >
                Colarodo, San Francisco
              </Text>
              <Text
                style={{
                  marginTop: config.deviceHeight / 3.1,
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
          <Pressable>
            <Image
              style={{
                position: 'absolute',
                borderRadius: 12,
                marginLeft: config.deviceWidth * 0.1,
                width: config.deviceWidth * 0.5,
                height: config.deviceHeight * 0.2,
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
                  marginTop: config.deviceHeight / 4,
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
                  marginTop: config.deviceHeight / 3.5,
                  opacity: 0.64,
                  marginLeft: config.deviceWidth * 0.1,
                  fontSize: 16,
                }}
              >
                Colarodo, San Francisco
              </Text>
              <Text
                style={{
                  marginTop: config.deviceHeight / 3.1,
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
          <Pressable>
            <Image
              style={{
                position: 'absolute',
                borderRadius: 12,
                marginLeft: config.deviceWidth * 0.1,
                width: config.deviceWidth * 0.5,
                height: config.deviceHeight * 0.2,
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
                  marginTop: config.deviceHeight / 4,
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
                  marginTop: config.deviceHeight / 3.5,
                  opacity: 0.64,
                  marginLeft: config.deviceWidth * 0.1,
                  fontSize: 16,
                }}
              >
                Colarodo, San Francisco
              </Text>
              <Text
                style={{
                  marginTop: config.deviceHeight / 3.1,
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
