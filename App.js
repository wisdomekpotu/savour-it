import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import screens
import {
  Budget,
  Avoiding,
  Curating,
  Final,
  MealOptions,
  Onboard,
  OrderDetails,
  FancyHaving,
  HowLong,
  Ordermeal,
  HowHungry,
} from './screens';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* modify to manage*/}
        {!isFirstLaunch && (
          <Stack.Screen
            name='Onboard'
            component={Onboard}
            options={{
              headerShown: false,
            }}
          />
        )}
        <Stack.Screen
          name='Ordermeal'
          component={Ordermeal}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='HowHungry'
          component={HowHungry}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='MealOptions'
          component={MealOptions}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='HowLong'
          component={HowLong}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Budget'
          component={Budget}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='OrderDetails'
          component={OrderDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Final'
          component={Final}
          options={{ headerShown: false }}
        />
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
    </NavigationContainer>
  );
}
