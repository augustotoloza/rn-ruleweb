import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Comfortaa_700Bold, Comfortaa_400Regular, useFonts } from '@expo-google-fonts/comfortaa';
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
const Centered = styled.View`
  background: white;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: stretch;
  align-items: stretch;
  height: 100%;
`;
const Title = styled.Text`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #002350;
`;
const Paragraph = styled.Text`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #353535;
`;

/* BACKGROUND-IMAGE Y BACKGROUND-SIZE TIRAN ERROR
const CommerceLogo = styled.View`
  border: 1px solid #8495aa;
  width: 32px;
  height: 32px;
  background-image: url('https://picsum.photos/200');
  background-size: cover;
  border-radius: 50%;
`;
*/

const CommerceLogo = styled.View`
  borderWidth: 1px; 
  borderColor: "rgb(132, 149, 170)";
  width: 32px;
  height: 32px;
  resizeMode: cover;
  borderRadius: 50px;
`;

export default function Dashboard({ navigation }) {
  useFonts({
    Comfortaa_700Bold, Comfortaa_400Regular
  });
  return (
    <Wrapper>
      <LinearGradient colors={["#14D2B9", "#8C91FF"]}>
        <Header>
          <CommerceLogo source={"url('https://picsum.photos/200')"}/>
          <Title style={{fontFamily: 'Comfortaa_700Bold'}}>RuleTap</Title>
          <Image
            source={require('./images/log-in.png')}
            style={{width: 24, height: 24}}
          />
        </Header>
      </LinearGradient>
      <Centered style={{flexGrow: 1, rowGap: 24}}>
        <Title style={{fontFamily: 'Comfortaa_700Bold'}}>Ingresá el mail y el código de canje.</Title>
        <Paragraph style={{fontFamily: 'Comfortaa_400Regular'}}>Este se envió por mail al cliente al momento de ganar el premio.</Paragraph>
        <CustomInput
          placeholder="Email"
          infoText=""
        />
        <CustomInput
          placeholder="Codigo de canje"
          infoText=""
        />
        <CustomTouchableOpacity
          title="Canjear"
          behavior={() => navigation.navigate("Premio Canjeado")}
        />
      </Centered>
    </Wrapper>
  );
}
