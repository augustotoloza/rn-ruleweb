import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import success from "./images/success_ilus.png";
import CustomTouchableOpacity from "./components/generics/CustomTouchableOpacity";
import Message from "./components/generics/Message";
import { OpenSans_400Regular, useFonts } from "@expo-google-fonts/open-sans";
import { SafeAreaView } from "react-native-safe-area-context";

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

export default function Result({ route, navigation }) {
  useFonts({
    OpenSans_400Regular,
  });
  const { prize, statusCode } = route.params;
  const titleTextValue =
    statusCode === 2
      ? "Este cliente ya canjeó su premio"
      : statusCode === 3
      ? "¡Listo! Premio canjeado"
      : "";
  const descriptionTextValue =
    statusCode === 2
      ? `${prize.title} - canjeado por ${prize.playerEmail} el ${prize.redemptionDate}`
      : statusCode === 3
      ? `Entregá a ${prize.playerEmail} un ${prize.title}`
      : "";
  return (
    <SafeAreaView style={{ display: "flex", flex: 1 }}>
      <Wrapper>
        <Code style={{ fontFamily: "OpenSans_400Regular" }}>
          Código {prize.token}
        </Code>
        <View style={{ flexGrow: 1, justifyContent: "center" }}>
          <Message
            imgPath={success}
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
