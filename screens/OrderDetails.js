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
    <View
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
            marginTop: config.deviceHeight / 12,
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
          }}
        >
          <Text style={{ color: '#FFFFFF' }}>Continue to Uber Eats</Text>
        </Pressable>
      </View>
    </View>
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
