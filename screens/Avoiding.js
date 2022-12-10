import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Avoiding({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>
        Do you have any{'\n'} food you might {'\n'} be avoiding?
      </Text>
      <View>
        <Pressable
          style={styles.press}
          onPress={() => navigation.navigate('FancyHaving')}
        >
          <View>
            <Text
              style={{
                color: 'white',
                width: 73,
                height: 20,
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 17,
                lineHeight: 20,
                letterSpacing: -0.03,
                color: '#FFFFFF',
                order: 0,
                flexGrow: 0,
              }}
            >
              Red meat
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={styles.press1}
          onPress={() => navigation.navigate('FancyHaving')}
        >
          <View>
            <Text
              style={{
                color: 'white',
                width: 73,
                height: 20,
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 17,
                lineHeight: 20,
                letterSpacing: -0.03,
                color: '#FFFFFF',
                order: 0,
                flexGrow: 0,
              }}
            >
              Sea food
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={styles.press2}
          onPress={() => navigation.navigate('FancyHaving')}
        >
          <View>
            <Text
              style={{
                color: 'white',
                width: 73,
                height: 20,
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 17,
                lineHeight: 20,
                letterSpacing: -0.03,
                color: '#FFFFFF',
                order: 0,
                flexGrow: 0,
              }}
            >
              Gluten
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={styles.press3}
          onPress={() => navigation.navigate('FancyHaving')}
        >
          <View>
            <Text
              style={{
                color: 'white',
                height: 20,
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 17,
                lineHeight: 20,
                letterSpacing: -0.03,
                color: '#FFFFFF',
                order: 0,
                flexGrow: 0,
              }}
            >
              Processed Carbs
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={styles.press4}
          onPress={() => navigation.navigate('FancyHaving')}
        >
          <View>
            <Text
              style={{
                color: 'white',

                height: 20,
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 17,
                lineHeight: 20,
                letterSpacing: -0.03,
                color: '#FFFFFF',
                order: 0,
                flexGrow: 0,
              }}
            >
              Dairy
            </Text>
          </View>
        </Pressable>
      </View>
      <View>
        <Pressable
          style={styles.press5}
          onPress={() => navigation.navigate('FancyHaving')}
        >
          <View>
            <Text
              style={{
                color: 'white',
                width: 106,
                height: 20,
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: 17,
                lineHeight: 20,
                letterSpacing: -0.03,
                color: '#FFFFFF',
                order: 0,
                flexGrow: 0,
              }}
            >
              _______________
            </Text>
          </View>
        </Pressable>
      </View>

      <Pressable onPress={() => navigation.navigate('FancyHaving')}>
        <View style={styles.button}>
          <Text
            style={{
              color: 'white',
              width: 75,
              height: 22,
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: 18,
              lineHeight: 22,
            }}
          >
            Continue
          </Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  press: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    textAlign: 'center',
    paddingTop: 11.5,
    paddingLeft: 15,
    paddingBottom: 0,
    gap: 10,
    position: 'absolute',
    width: 113,
    height: 40,
    left: 20,
    top: 250,
    color: 'white',
    backgroundColor: '#DA0091',
    borderRadius: 70,
  },

  press1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    textAlign: 'center',
    paddingTop: 11.5,
    paddingLeft: 15,
    paddingBottom: 0,
    gap: 10,
    position: 'absolute',
    width: 113,
    height: 40,
    left: 142,
    top: 250,
    color: 'white',
    backgroundColor: '#DA0091',
    borderRadius: 70,
  },

  press2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    textAlign: 'center',
    paddingTop: 11.5,
    paddingLeft: 30,
    paddingBottom: 0,
    gap: 10,
    position: 'absolute',
    width: 100,
    height: 40,
    left: 263,
    top: 250,
    color: 'white',
    backgroundColor: '#DA0091',
    borderRadius: 70,
  },
  press3: {
    display: 'flex',
    flexDirection: 'row',

    paddingTop: 11.5,
    paddingLeft: 19,
    paddingBottom: 0,
    gap: 10,
    position: 'absolute',
    width: 150,
    height: 40,
    left: 60,
    top: 300,
    color: 'white',
    backgroundColor: '#DA0091',
    borderRadius: 70,
  },

  press4: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    textAlign: 'center',
    paddingTop: 11.5,
    paddingBottom: 0,
    gap: 10,
    position: 'absolute',
    width: 90,
    height: 40,
    left: 223,
    top: 300,
    color: 'white',
    backgroundColor: '#DA0091',
    borderRadius: 70,
  },
  press5: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    textAlign: 'center',
    paddingTop: 11.5,
    paddingLeft: 15,
    paddingBottom: 0,
    gap: 10,
    position: 'absolute',
    width: 131,
    height: 40,
    left: 136,
    top: 350,
    color: 'white',
    backgroundColor: '#DA0091',
    borderRadius: 70,
  },
  text: {
    position: 'absolute',
    width: 273,
    height: 102,
    left: 60,
    top: 68,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 28,
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
    backgroundColor: '#B9B9B9',
    borderRadius: 89,
  },
});
