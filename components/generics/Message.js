import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";
import { Comfortaa_700Bold, Comfortaa_400Regular, useFonts } from '@expo-google-fonts/comfortaa';
//import success from "../../images/success_ilus.png";
import error from "../../images/error_ilus.png";
import styled from "styled-components/native";

const Icon = styled.Image`
  width: 216px;
  height: 204px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #353535;
  margin: 0 0 16px;
`;

const Paragraph = styled.Text`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.15px;
  color: #353535;
`;

const Centered = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Message = (props) => {
  useFonts({
    Comfortaa_700Bold, Comfortaa_400Regular
  });
  return (
    <Centered>
      <Icon source={props.imgPath}/>
      <Title style={{fontFamily: 'Comfortaa_700Bold'}}>{props.titleText}</Title>
      <Paragraph style={{fontFamily: 'Comfortaa_400Regular'}}>{props.descriptionText}</Paragraph>
    </Centered>
  );
};

export default Message;