import 'react-native-gesture-handler';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';

//import screens
import Budget from './screens/Budget';

import Final from './screens/Final';
import HowHungry from './screens/HowHungry';
import MealOptions from './screens/MealOptions';
import OrderDetails from './screens/OrderDetails';
import Orders from './screens/Orders';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Curating from './screens/Curating';
import HowLong from './screens/HowLong';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Budget'
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
          tabBarStyle: { display: 'none' },
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
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='MealOptions' component={MealOptions} />
        <Stack.Screen name='HowLong' component={HowLong} />
        <Stack.Screen name='HowHungry' component={HowHungry} />
        <Stack.Screen name='OrderDetails' component={OrderDetails} />
        <Stack.Screen name='Final' component={Final} />
        <Stack.Screen name='Curating' component={Curating} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
