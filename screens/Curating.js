import { Text, View, Pressable, Image } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Lottie from 'lottie-react-native';
import config from '../config';
import { Ionicons } from '@expo/vector-icons';

export default function Curating({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1B463C',
      }}
    >
      <Image
        style={{
          position: 'absolute',
          marginTop: config.deviceHeight / 9,
          marginLeft: config.deviceWidth * 0.32,
        }}
        source={require('../assets/Group2.png')}
      />
      <Pressable onPress={() => navigation.navigate('MealOptions')}>
        <Lottie
          style={{
            width: config.deviceWidth - 60,
            alignSelf: 'center',

            marginTop: config.deviceHeight / 12,
          }}
          source={require('../animations/meal_loading.json')}
          autoPlay
          loop
        />
      </Pressable>

      <Text
        style={{
          marginTop: config.deviceHeight / 6,
          justifyContent: 'flex-start',
          fontSize: RFPercentage(3),
          color: 'white',
          alignSelf: 'center',
        }}
      >
        Curating meal options {'\n'} for you...
      </Text>
    </View>
  );
}
