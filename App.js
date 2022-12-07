import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Budget from './screens/Budget';
import Hungry from './screens/Hungry';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'Savour It',
          headerStatusBarHeight: 80,
          // headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#DA0091',
          },
          headerTitleAlign: 'center',

          headerTitleStyle: {
            color: 'white',
            position: 'absolute',
            width: 91,
            height: 18,
            left: 151,
            top: 68,
            // fontFamily: 'Lactosa',
            fontStyle: 'normal',
            fontWeight: '400',
            fontSize: 18.3182,
            lineHeight: 18,
            border: '2.36364px solid #DA0091',
            textShadow: '0px 2.36364px 0px rgba(218, 0, 145, 0.25)',
          },
        }}
      >
        <Stack.Screen name='Budget' component={Budget} />
        <Stack.Screen name='Hungry' component={Hungry} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
