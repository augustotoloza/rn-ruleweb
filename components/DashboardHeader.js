import React, { useContext } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Comfortaa_700Bold, useFonts } from "@expo-google-fonts/comfortaa";
import styled from "styled-components/native";
import RulewebContext from "../RulewebContext";
import APIHandler from "../APIHandler";

const Header = styled.View`
  padding: 36px 16px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Title = styled.Text`
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0.15px;
  color: #002350;
`;
const DashboardHeader = (props) => {
  const { shopData } = useContext(RulewebContext);
  useFonts({
    Comfortaa_700Bold,
  }); 

  return (
    <LinearGradient colors={["#14D2B9", "#8C91FF"]}>
      <Header>
        <View style={rnStyles.bgWrapper}>
          <ImageBackground
            source={{uri: APIHandler.defaults.baseURL + shopData.logo}}
            style={rnStyles.bgContainer}
            imageStyle={rnStyles.bgImg}
          />
        </View>
        <Title style={{ fontFamily: "Comfortaa_700Bold" }}>RuleTap</Title>
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={require("../images/log-in.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </Header>
      <Text>{props.logo}</Text>
    </LinearGradient>
  );
};

const rnStyles = StyleSheet.create({
  bgWrapper: {
    width: 32,
    height: 32,
  },
  bgContainer: {
    resizeMode: "cover",
    justifyContent: "center",
    flex: 1,
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: "#8495aa",
    borderRadius: 16,
  },
  bgImg: { borderRadius: 16 },
});

export default DashboardHeader;
