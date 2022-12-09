import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';

//import screens
import Budget from './screens/Budget';
import Orders from './screens/Orders';
import Search from './screens/Search';
import Profile from './screens/Profile';

//initialization
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={Budget}
          options={{
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

  /* <Stack.Navigator
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

      </Stack.Navigator> */
}

const styles = StyleSheet.create({});
