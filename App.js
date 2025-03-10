import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import WelcomeScreen from './src/MainScreens/WelcomeScreen';
import RegisterScreen from './src/MainScreens/RegisterScreen';
import LoginScreen from './src/MainScreens/LoginScreen';
import RegisterAdminScreen from './src/MainScreens/RegisterAdminScreen';
import HomePageScreen from './src/MainScreens/HomepageScreen'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider style={{ flexGrow: 1 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="WelcomeScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterAdminScreen" component={RegisterAdminScreen} />
            <Stack.Screen name="HomePageScreen" component={HomePageScreen} /> 
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
