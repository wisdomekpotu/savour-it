import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyHaving({ navigation }) {
  return (
    <View style={{ backgroundColor: '#EDEDED' }}>
      <Pressable onPress={() => navigation.navigate('HowLong')}>
        <Text style={styles.text}>Select a meal you’d {'\n'}fancy having</Text>
        <Image style={styles.img1} source={require('../assets/food.png')} />
        <Text style={styles.text1}>Cookie Sandwish</Text>
        <Text
          style={{
            top: 200,
            opacity: 0.64,
            left: 168,
            fontSize: 16,
          }}
        >
          Shortbread, chocolate turtle {'\n'}cookies, and red velvet. {'\n'}
        </Text>
        <Text
          style={{
            top: 210,
            opacity: 0.64,
            left: 168,
            fontSize: 16,
          }}
        >
          $$ * Chinese <Text style={{ color: '#22A45D' }}> USD7.4</Text>
        </Text>
      </Pressable>

      <Image
        style={{ top: 230, left: 29, width: 335 }}
        source={require('../assets/Rectangle.png')}
      />

      <Image style={styles.img2} source={require('../assets/food1.png')} />
      <Text style={styles.text2}>Combo Burger</Text>
      <Text
        style={{
          top: 285,
          opacity: 0.64,
          left: 168,
          fontSize: 16,
        }}
      >
        Shortbread, chocolate turtle {'\n'}cookies, and red velvet. {'\n'}
      </Text>
      <Text
        style={{
          top: 294,
          opacity: 0.64,
          left: 168,
          fontSize: 16,
        }}
      >
        $$ * Chinese <Text style={{ color: '#22A45D' }}> USD7.4</Text>
      </Text>
      <Image
        style={{ top: 310, left: 29, width: 335 }}
        source={require('../assets/Rectangle.png')}
      />
      <Image style={styles.img3} source={require('../assets/food2.png')} />
      <Text style={styles.text3}>Combo Sandwich</Text>
      <Text
        style={{
          top: 360,
          opacity: 0.64,
          left: 168,
          fontSize: 16,
        }}
      >
        Shortbread, chocolate turtle {'\n'}cookies, and red velvet. {'\n'}
      </Text>
      <Text
        style={{
          top: 369,
          opacity: 0.64,
          left: 168,
          fontSize: 16,
        }}
      >
        $$ * Chinese <Text style={{ color: '#22A45D' }}> USD7.4</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text1: {
    position: 'absolute',
    left: 168,
    top: 170,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: -0.03,
    color: '#4C0033',
  },

  text2: {
    position: 'absolute',
    left: 168,
    top: 320,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: -0.03,
    color: '#4C0033',
  },

  text3: {
    position: 'absolute',
    left: 168,
    top: 460,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 22,
    lineHeight: 26,
    letterSpacing: -0.03,
    color: '#4C0033',
  },
  img1: { position: 'absolute', left: 40, top: 170 },
  img2: { position: 'absolute', left: 40, top: 319 },
  img3: { position: 'absolute', left: 40, top: 460 },

  text: {
    color: '#4D0033',
    position: 'absolute',
    width: 273,
    height: 64,
    left: 60,
    top: 45,
    fontfamily: 'Clash',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 40,
    textAlign: 'center',
    color: '#4D0033',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    paddingTop: 20,
    paddingBottom: 0,
    gap: 8,
    position: 'absolute',
    width: 329,
    height: 62,
    left: 32,
    top: 600,
    color: 'white',
    backgroundColor: '#B9B9B9',
    borderRadius: 89,
  },
});
