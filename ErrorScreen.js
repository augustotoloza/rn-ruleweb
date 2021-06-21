import "react-native-gesture-handler";
//import { StatusBar } from 'expo-status-bar';
import React from "react";
//import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
//import { LinearGradient } from 'expo-linear-gradient';
//import CustomInput from './components/generics/CustomInput';
//import CustomButton from './components/generics/CustomButton';
import styled from "styled-components/native";
import err from "./images/error_ilus.png";
import CustomTouchableOpacity from "./components/generics/CustomTouchableOpacity";
import Heading from "./components/generics/Heading";
import Message from "./components/generics/Message";
import { OpenSans_400Regular, useFonts } from "@expo-google-fonts/open-sans";
//import Input from './components/input';

const Wrapper = styled.View`
  background: white;
  display: flex;
  height: 100%;
  padding: 16px;
`;

const Code = styled.Text`
  font-weight: normal;
  font-size: 12px;
  text-align: right;
  color: #8495aa;
`;

export default function ErrorScreen({ route, navigation }) {
  useFonts({
    OpenSans_400Regular,
  });
  const { error } = route.params;
  const titleTextValue =
    error === "Incorrect Token"
      ? "El token ingresado es incorrecto"
      : error === "Email incorrect"
      ? "Este cliente no tiene premios"
      : "Hubo un error";
  const descriptionTextValue = error
    ? "Para ganar un premio debe participar en www.rulewebtap.com"
    : "Intenta nuevamente";
  return (
    <SafeAreaView style={{ display: "flex", flex: 1 }}>
      <Wrapper>
        <View style={{ flexGrow: 1, justifyContent: "center" }}>
          <Message
            imgPath={err}
            titleText={titleTextValue}
            descriptionText={descriptionTextValue}
          />
        </View>
        <CustomTouchableOpacity
          title="Volver"
          behavior={() => navigation.navigate("Dashboard")}
        />
      </Wrapper>
    </SafeAreaView>
  );
}
