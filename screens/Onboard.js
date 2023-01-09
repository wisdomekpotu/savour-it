import { Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Onboard() {
  const navigation = useNavigation();

  return (
    <Onboarding
      onSkip={() => navigation.replace('Ordermeal')}
      onDone={() => navigation.replace('Ordermeal')}
      pages={[
        {
          backgroundColor: '#F4F3E8',
          image: <Image source={require('../assets/onboard/first.png')} />,
          title: 'Save time on meal selection',
          subtitle:
            'Cut the clutter and get a curated shortlist of meals just for you',
        },
        {
          backgroundColor: '#F4F3E8',
          image: <Image source={require('../assets/onboard/second.png')} />,
          title: 'Choose your meal',
          subtitle: 'Set your meal preferences in just 5 easy steps',
        },
        {
          backgroundColor: '#F4F3E8',
          image: <Image source={require('../assets/onboard/third.png')} />,
          title: 'Multiple delivery options',
          subtitle:
            'Have your meals delivered to you via your preferred delivery methods',
        },
      ]}
    />
  );
}
