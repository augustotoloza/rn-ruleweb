// In App.js in a new project
import React, { useState } from "react";
//import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "./Homescreen";
import Result from "./Result";
import ErrorScreen from "./ErrorScreen";
import {
  Comfortaa_700Bold,
  Comfortaa_400Regular,
  useFonts,
} from "@expo-google-fonts/comfortaa";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import Dashboard from "./Dashboard";
import RulewebContext from "./RulewebContext";
const Stack = createStackNavigator();

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [shopData, setShopData] = useState("");
  const value = {
    email,
    setEmail,
    password,
    setPassword,
    isAuthorized,
    setIsAuthorized,
    shopData,
    setShopData,
  };

  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
    OpenSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <RulewebContext.Provider value={value}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {isAuthorized ? (
            <>
              <Stack.Screen name="Dashboard" component={Dashboard} />
              <Stack.Screen name="Result" component={Result} />
              <Stack.Screen name="Error" component={ErrorScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Homescreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </RulewebContext.Provider>
  );
}

export default App;
