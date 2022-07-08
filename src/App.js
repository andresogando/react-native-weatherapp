import DetailsScreen from './Views/details';
import HomeScreen from './Views/main';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen
          name="Home"
          options={{title: 'Overview'}}
          component={HomeScreen}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
