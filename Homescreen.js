import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomInput from "./components/generics/CustomInput";
import CustomButton from "./components/generics/CustomButton";
import CustomTouchableOpacity from "./components/generics/CustomTouchableOpacity";
import Heading from "./components/generics/Heading";
import styled from "styled-components/native";
import logo from "./images/logo-tap.png";

const HeaderLogo = styled.Image`
  margin: 44px auto 60px;
  width: 157px;
  height: 53px;
`;
const Wrapper = styled.View`
  background: white;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: stretch;
  height: 100%;
`;
export default function Homescreen({ navigation }) {
  return (
    <Wrapper>
      <HeaderLogo source={logo} />
      <Heading title="Iniciar Sesión" />
      <View style={{flexGrow: 1, rowGap: 24}}>
        <CustomInput
          placeholder="Email"
          infoText="Tu email es el mismo que el de la App"
        />
        <CustomInput
          placeholder="PIN"
          infoText="Tu clave de seguridad es la misma que el de la App"
        />
      </View>
      <CustomTouchableOpacity
        title="Iniciar Sesion"
        behavior={() => navigation.navigate("Premio Canjeado")}
      />
    </Wrapper>
  );
}
