import 'react-native-gesture-handler';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

//import screens
import Budget from './screens/Budget';
import Final from './screens/Final';
import Avoiding from './screens/Avoiding';
import HowHungry from './screens/HowHungry';
import MealOptions from './screens/MealOptions';
import OrderDetails from './screens/OrderDetails';
import Orders from './screens/Orders';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Curating from './screens/Curating';
import HowLong from './screens/HowLong';
import FancyHaving from './screens/FancyHaving';

const Tab = createBottomTabNavigator();

function Otherscreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Budget}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='MealOptions'
        component={MealOptions}
        options={{
          title: 'Savour it',
          headerTitleStyle: {
            color: 'white',
            position: 'absolute',
            width: 91,
            height: 78,
            left: 140,
            top: 10,
            fontFamily: 'Lactosa',
            fontStyle: 'normal',
            color: '#FFFFFF',
            border: '2.36364px solid #DA0091',
            textShadow: '0px 2.36364px 0px rgba(218, 0, 145, 0.25)',
            fontWeight: '400',
          },
          headerStyle: { backgroundColor: '#DA0091' },
        }}
      />
      <Stack.Screen
        name='HowLong'
        component={HowLong}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='HowHungry'
        component={HowHungry}
        options={{
          headerShown: false,
          title: 'Savour it',
          headerTitleStyle: {
            color: 'white',
            position: 'absolute',
            width: 91,
            height: 78,
            left: 140,
            top: 10,
            fontFamily: 'Lactosa',
            fontStyle: 'normal',
            color: '#FFFFFF',
            border: '2.36364px solid #DA0091',
            textShadow: '0px 2.36364px 0px rgba(218, 0, 145, 0.25)',
            fontWeight: '400',
          },
          headerStyle: { backgroundColor: '#DA0091' },
        }}
      />
      <Stack.Screen name='OrderDetails' component={OrderDetails} />
      <Stack.Screen name='Final' component={Final} />
      <Stack.Screen
        name='Avoiding'
        component={Avoiding}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Curating'
        component={Curating}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='FancyHaving'
        component={FancyHaving}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    Lactosa: require('./assets/fonts/Lactosa.ttf'),
    Clash: require('./assets/fonts/ClashDisplay.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Budget'
          component={Otherscreens}
          options={{
            title: 'Savour it',
            headerTitleStyle: {
              color: 'white',
              position: 'absolute',
              width: 91,
              height: 78,
              left: 140,
              top: 10,
              fontFamily: 'Lactosa',
              fontStyle: 'normal',
              fontWeight: 400,
              color: '#FFFFFF',
              border: '2.36364px solid #DA0091',
              textShadow: '0px 2.36364px 0px rgba(218, 0, 145, 0.25)',
              fontWeight: '400',
            },
            headerStyle: { backgroundColor: '#DA0091' },
            tabBarLabel: 'Budget',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='cutlery' size={24} color='black' />
            ),
          }}
        />
        <Tab.Screen
          name='Search'
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name='search' size={24} color='black' />
            ),
          }}
        />
        <Tab.Screen
          name='Orders'
          component={Orders}
          options={{
            tabBarLabel: 'Orders',

            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name='bookmark-border' size={24} color='black' />
            ),
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Feather name='user' size={24} color='black' />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
