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
        <View>
          <Text
            style={{
              position: 'absolute',
              height: 24,
              paddingLeft: config.deviceWidth * 0.1,
              fontWeight: '500',
              marginTop: config.deviceHeight / 2.2,
              fontSize: 24,
              lineHeight: 24,
              letterSpacing: 0.444444,
              color: ' #010F07',
            }}
          >
            Cookie Sandwich
          </Text>
          <Text
            style={{
              marginTop: config.deviceHeight / 2.0,
              marginLeft: config.deviceWidth * 0.1,
              opacity: 0.64,
              fontSize: 18,
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
              fontSize: 16,
            }}
          >
            $$ * Regular * Halal
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Budget')}>
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
            marginLeft: config.deviceWidth * 0.1,
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
            marginLeft: config.deviceWidth * 0.1,
            fontSize: 16,
          }}
        >
          $$ * Regular
        </Text>
      </Pressable>
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
            marginTop: config.deviceHeight / 4,
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
