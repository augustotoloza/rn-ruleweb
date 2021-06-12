import React from "react";
import styled from "styled-components/native";
import { SafeAreaView, Text } from "react-native";
import { Comfortaa_700Bold, useFonts } from '@expo-google-fonts/comfortaa';

const HeadingText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  line-height: 133%;
  letter-spacing: 0.15px;
  color: #002350;
  margin-bottom: 1em;
`;

const Heading = (props) => {
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold
  });
  return (
    <SafeAreaView>
      <HeadingText style={{fontFamily: 'Comfortaa_700Bold'}}>{props.title}</HeadingText>
      {props.subtitle && <Text>{props.subtitle}</Text>}
    </SafeAreaView>
  );
};

export default Heading;
