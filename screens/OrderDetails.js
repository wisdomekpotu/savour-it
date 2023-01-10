import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import config from '../config';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

export default function FancyHaving({ navigation }) {
  return (
    <ScrollView
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#F4F3E8',
      }}
    >
      <Pressable
        style={styles.press2}
        onPress={() => navigation.navigate('OrderDetails')}
      >
        <Image
          style={{
            position: 'absolute',
            width: '100%',
            marginTop: config.deviceHeight / 30,
            top: 26,
            bottom: 34.4,
          }}
          source={require('../assets/order.png')}
        />
        <View style={{ marginTop: config.deviceHeight / 30.5 }}>
          <Text
            style={{
              position: 'absolute',
              height: 24,
              paddingLeft: config.deviceWidth * 0.1,
              fontWeight: '500',
              marginTop: config.deviceHeight / 2.5,
              fontSize: 24,
              lineHeight: 24,
              letterSpacing: 0.444444,
              color: '#010F07',
            }}
          >
            Cookie Sandwich
          </Text>
          <Text
            style={{
              marginTop: config.deviceHeight / 2.3,
              marginLeft: config.deviceWidth * 0.1,
              opacity: 0.64,
              fontSize: 16,
            }}
          >
            Shortbread, chocolate turtle cookies, and {'\n'}red velvet. 8 ounces
            cream cheese, softened.
          </Text>
          <Text
            style={{
              opacity: 0.64,
              marginLeft: config.deviceWidth * 0.1,
              marginTop: 15,
              fontSize: 15,
              color: '#868686',
            }}
          >
            $$ * Chinese * American * Deshi food
          </Text>
        </View>
      </Pressable>

      <Ionicons
        style={{
          position: 'absolute',
          marginTop: config.deviceHeight / 9,
          marginLeft: config.deviceWidth * 0.04,
        }}
        name='ios-close-circle'
        size={35}
        color='black'
      />

      <View>
        <Image
          style={{
            position: 'absolute',
            width: '80%',
            alignSelf: 'center',
            marginTop: config.deviceHeight / 35,
          }}
          source={require('../assets/Rectangle.png')}
        />
      </View>

      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: '16',
            paddingLeft: config.deviceWidth * 0.1,
            marginTop: config.deviceHeight / 17,
            marginBottom: config.deviceHeight / 60,
          }}
        >
          Quality
        </Text>

        <Pressable onPress={() => navigation.navigate('Avoiding')}>
          <Text
            style={{
              fontSize: 18,
              paddingLeft: config.deviceWidth * 0.65,
              marginTop: config.deviceHeight / 17,
              color: '#1B463C',
            }}
          >
            1
          </Text>
        </Pressable>
      </View>
      <View>
        <Image
          style={{
            position: 'absolute',
            width: '80%',
            alignSelf: 'center',
            marginTop: config.deviceHeight / 35,
          }}
          source={require('../assets/Rectangle.png')}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: '16',
            paddingLeft: config.deviceWidth * 0.1,
            marginTop: config.deviceHeight / 17,
            marginBottom: config.deviceHeight / 60,
          }}
        >
          Price
        </Text>

        <Text
          style={{
            fontSize: 18,
            paddingLeft: config.deviceWidth * 0.65,
            marginTop: config.deviceHeight / 17,
            color: '#1B463C',
          }}
        >
          $29.4
        </Text>
      </View>
      <View>
        <Image
          style={{
            position: 'absolute',
            width: '80%',
            alignSelf: 'center',
            marginTop: config.deviceHeight / 35,
          }}
          source={require('../assets/Rectangle.png')}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Pressable
          onPress={() => navigation.navigate('Final')}
          style={{
            backgroundColor: '#1B463C',
            alignItems: 'center',
            color: '#FFFFFF',
            width: '80%',
            height: 50,
            justifyContent: 'center',
            borderRadius: 25,
            marginTop: config.deviceHeight / 8,
          }}
        >
          <Text style={{ color: '#FFFFFF' }}>Continue to Uber Eats</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img2: {
    position: 'absolute',
    left: 28,
    right: 0,
    top: 420,
    bottom: 34.4,
    borderRadius: 12,
  },
});
