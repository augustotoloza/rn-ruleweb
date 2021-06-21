import "react-native-gesture-handler";
import React, { useContext, useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  View,
} from "react-native";
import {
  Comfortaa_700Bold,
  Comfortaa_400Regular,
  useFonts,
} from "@expo-google-fonts/comfortaa";
import { OpenSans_400Regular } from "@expo-google-fonts/open-sans";
import DashboardHeader from "./components/DashboardHeader";
import CustomInput from "./components/generics/CustomInput";
import CustomTouchableOpacity from "./components/generics/CustomTouchableOpacity";
import styled from "styled-components/native";
import RulewebContext from "./RulewebContext";
import PrizeStat from "./components/generics/PrizeStat";
import APIHandler from "./APIHandler";

const Wrapper = styled.View`
  background: white;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const ContentWrapper = styled.View`
  background: white;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 20px 16px 24px;
  max-width: 600px;
  align-self: center;
`;
const Centered = styled.View`
  background: white;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: stretch;
  align-items: stretch;
`;
const Title = styled.Text`
  font-size: 18px;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0.15px;
  color: #002350;
`;
const Paragraph = styled.Text`
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  letter-spacing: 0.15px;
  color: #353535;
`;

export default function Dashboard({ navigation }) {
  const [userEmail, setUserEmail] = useState("");
  const [prizeToken, setPrizeToken] = useState("");
  const [shopRewards, setShopRewards] = useState("");
  const { isAuthorized, setIsAuthorized, shopData, email } =
    useContext(RulewebContext);
  useFonts({
    Comfortaa_700Bold,
    Comfortaa_400Regular,
    OpenSans_400Regular,
  });
  useEffect(() => {
    getRewards();
  }, []);
  async function getRewards() {
    const res = await APIHandler.post("/rewards/byShop", { email });
    setShopRewards(res.data);
  }
  const handleSubmit = (e) => {
    APIHandler.post("/rewards/redeem", {
      token: prizeToken,
      email: userEmail,
      shop: shopData.email,
    })
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate("Premio Canjeado");
        }
      })
      .catch((err) => {
        console.log("Hubo un error, intenta nuevamente");
      });
  };

  if (isAuthorized ) {
    return (
      <Wrapper>
        <DashboardHeader
          onPress={() => setIsAuthorized(false)}
          shopData={shopData}
        />
        <ContentWrapper>
          <Centered style={{ flexGrow: 0, rowGap: 12 }}>
            <Title style={{ fontFamily: "Comfortaa_700Bold" }}>
              Ingresá el mail y el código de canje.
            </Title>
            <Paragraph style={{ fontFamily: "OpenSans_400Regular" }}>
              Este se envió por mail al cliente al momento de ganar el premio.
            </Paragraph>
          </Centered>
          <Centered
            style={{ flexGrow: 0, rowGap: 15, marginTop: 34, marginBottom: 40 }}
          >
            <CustomInput
              placeholder="Email"
              value={userEmail}
              onChangeText={(txt) => setUserEmail(txt)}
            />
            <CustomInput
              placeholder="Codigo de canje"
              value={prizeToken}
              onChangeText={(txt) => setPrizeToken(txt)}
            />
          </Centered>
          
          <CustomTouchableOpacity
            title="Canjear"
            behavior={handleSubmit}
          />
        </ContentWrapper>
        <PrizeStat
          name="Total premios entregados"
          number={shopRewards.redeemed}
        />
        <PrizeStat name="Listos para canjear" number={shopRewards.available} />
      </Wrapper>
    );
  } else {
    navigation.navigate("Err");
  }
}
