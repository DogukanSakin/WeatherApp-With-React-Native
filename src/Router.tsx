import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './Pages/Welcome Page';
import HomePage from './Pages/Home Page';
import { RootStackParamList } from './Pages/RootStackParamList';
import { legacy_createStore } from 'redux';
import { Provider} from 'react-redux';
import {reducers} from './Redux/ThemeReducer';
import {initialState} from './Redux/ThemeStore';
const Stack = createNativeStackNavigator<RootStackParamList>();
const Router=()=>{
  return(
    <Provider store={legacy_createStore(reducers,initialState)}>
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Welcome" component={WelcomePage} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
}

export default Router;