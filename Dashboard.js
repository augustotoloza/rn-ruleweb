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
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Header = styled.View`
  padding: 36px 16px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CommerceLogo = styled.View`
  border: 1px solid #8495aa;
  width: 32px;
  height: 32px;
  background-image: url('https://picsum.photos/200');
  background-size: cover;
  border-radius: 50%;
`;


export default function Dashboard({ navigation }) {
  return (
    <Wrapper>
      <LinearGradient colors={["#14D2B9", "#8C91FF"]}>
        <Header>
          <CommerceLogo/>
          <Text>RuleTap</Text>
          <Image 
            source={require('./images/log-in.png')}
            style={{width: 24, height: 24}}
          />
        </Header>
      </LinearGradient>
    </Wrapper>
  );
}
