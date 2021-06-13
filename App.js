// In App.js in a new project

import * as React from "react";
//import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "./Homescreen";
import Redeemed from "./Redeemed";
import Error from "./Error";
import { Comfortaa_700Bold,  Comfortaa_400Regular, useFonts } from '@expo-google-fonts/comfortaa';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
const Stack = createStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
    OpenSans_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Premio Canjeado" component={Redeemed} />
        <Stack.Screen name="Err" component={Error} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
