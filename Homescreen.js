import "react-native-gesture-handler";
import React, { useContext } from "react";
import { View } from "react-native";
import CustomInput from "./components/generics/CustomInput";
import CustomTouchableOpacity from "./components/generics/CustomTouchableOpacity";
import Heading from "./components/generics/Heading";
import styled from "styled-components/native";
import logo from "./images/logo-tap.png";
import APIHandler from "./APIHandler";
import RulewebContext from "./RulewebContext";

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
  const { email, setEmail, password, setPassword, isAuthorized, setIsAuthorized, shopData, setShopData } = useContext(RulewebContext);
  const handleSubmit = (e) => {
    APIHandler.post("/shops/login", { email, password })
      .then((res) => {
        if (res.status === 200) {
          setIsAuthorized(true);
          setShopData({
            logo: res.data.logo.url,
            email: res.data.email
          });
          navigation.navigate("Dashboard");
        }
      })
      .catch((err) => {
        console.log("Hubo un error, intenta nuevamente");
      });
  };
  return (
    <Wrapper>
      <HeaderLogo source={logo} />
      <Heading title="Iniciar Sesión" />
      <View style={{ flexGrow: 1, rowGap: 24 }}>
        <CustomInput
          placeholder="Email"
          infoText="Tu email es el mismo que el de la App"
          value={email}
          onChangeText={(txt) => setEmail(txt)}
        />
        <CustomInput
          placeholder="PIN"
          infoText="Tu clave de seguridad es la misma que el de la App"
          value={password}
          name="password"
          onChangeText={(txt) => setPassword(txt)}
        />
      </View>
      <CustomTouchableOpacity title="Iniciar Sesion" behavior={handleSubmit} />
    </Wrapper>
  );
}
