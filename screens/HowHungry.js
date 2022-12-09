import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Slider from '@react-native-community/slider';

export default function HowHungry() {
  return (
    <View>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0}
        maximumValue={1}
        vertical='true'
        disabled='true'
        minimumTrackTintColor='#FFFFFF'
        maximumTrackTintColor='#000000'
      />
    </View>
  );
}

const styles = StyleSheet.create({});
