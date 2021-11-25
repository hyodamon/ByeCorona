import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as Font from 'expo-font';

import Loading from './src/screens/Loading';
import LoginPage from './src/screens/LoginPage';
import SignUp1 from './src/screens/SignUp/SignUp1';
import SignUp2 from './src/screens/SignUp/SignUp2';
import SignUp3 from './src/screens/SignUp/SignUp3';
import SignUp4 from './src/screens/SignUp/SignUp4';
import MainPage from './src/screens/MainPage';
import SideEffectPage from './src/screens/SideEffectPage';
import ReportPage from './src/screens/ReportPage';
import CompletePage from './src/screens/CompletePage';

const Stack = createStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const preLoad = async () => {
    try {
      await Font.loadAsync({
        'Bold': require('./assets/fonts/SpoqaHanSansNeo-Bold.otf'),
        'Light': require('./assets/fonts/SpoqaHanSansNeo-Light.otf'),
        'Medium': require('./assets/fonts/SpoqaHanSansNeo-Medium.otf'),
        'Regular': require('./assets/fonts/SpoqaHanSansNeo-Regular.otf'),
        'Thin': require('./assets/fonts/SpoqaHanSansNeo-Thin.otf'),
      });
      setTimeout(() => {
        setLoaded(true); /** 추가 **/
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    preLoad();
  }, []);

  return loaded ?
    (<NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignUp1" component={SignUp1} />
        <Stack.Screen name="SignUp2" component={SignUp2} />
        <Stack.Screen name="SignUp3" component={SignUp3} />
        <Stack.Screen name="SignUp4" component={SignUp4} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SideEffectPage" component={SideEffectPage} />
        <Stack.Screen name="ReportPage" component={ReportPage} />
        <Stack.Screen name="CompletePage" component={CompletePage} />
      </Stack.Navigator>
    </NavigationContainer >)
    : (<Loading />);
}
