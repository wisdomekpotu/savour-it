import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import config from '../config';

export default function MealOptions({ navigation }) {
  return (
    <ScrollView
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
      <Text
        style={{
          fontSize: 20,
          color: '#1B463C',
          marginTop: config.deviceHeight / 5,
          borderRadius: 1,
          paddingLeft: config.deviceWidth * 0.1,
        }}
      >
        Here are some meal{'\n'} options for you
      </Text>
      <View>
        <Pressable
          style={styles.press2}
          onPress={() => navigation.navigate('OrderDetails')}
        >
          <Image
            style={{
              position: 'absolute',
              marginLeft: config.deviceWidth * 0.1,
              top: 26,
            }}
            source={require('../assets/BG1.png')}
          />
          <View
            style={{
              marginTop: config.deviceHeight / 5,
              width: config.deviceWidth * 0.94,
              backgroundColor: 'white',
              marginLeft: config.deviceWidth * 0.1,
              marginBottom: config.deviceHeight / 13,

              top: 22,
            }}
          >
            <Text
              style={{
                position: 'absolute',
                height: 24,
                fontWeight: '500',
                fontSize: 17,
                lineHeight: 24,
                letterSpacing: 0.444444,
                color: ' #010F07',
              }}
            >
              Vegetarian salad
            </Text>
            <Text
              style={{
                marginTop: config.deviceHeight / 20,
                opacity: 0.64,

                fontSize: 16,
              }}
            >
              $$ * Regular * Halal
            </Text>
          </View>
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
  text: {
    position: 'absolute',
    width: 245,
    height: 40,
    left: 27,
    top: 28,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 21,
    lineHeight: 22,
    letterSpacing: -0.03,
    color: '#000000',
  },
});
