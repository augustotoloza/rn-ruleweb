import React from "react";
import { Comfortaa_700Bold, useFonts } from "@expo-google-fonts/comfortaa";

import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import styled from "styled-components/native";

const Wrapper = styled.View`
  background: #f3f6fa;
  padding: 16px;
  border-collapse: collapse;
  width: 100%;
  display: flex;
  align-items: center;
`;
const Container = styled.View`
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const CustomText = styled.Text`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.16px;
  color: #002350;
`;
const PrizeStat = (props) => {
  useFonts({
    Comfortaa_700Bold,
    OpenSans_400Regular,
  });
  return (
    <Wrapper style={{borderTopWidth: 1, borderBottomWidth: 1, borderColor: "#dce1e9" }}>
      <Container>
        <CustomText style={{ flexGrow: 1, fontFamily: "Comfortaa_700Bold" }}>
          {props.name}
        </CustomText>
        <CustomText style={{ fontFamily: "OpenSans_400Regular" }}>
          {props.number}
        </CustomText>
      </Container>
    </Wrapper>
  );
};

export default PrizeStat;
