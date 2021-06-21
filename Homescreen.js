import "react-native-gesture-handler";
import React, { useContext } from "react";
import { Alert, View } from "react-native";
import CustomInput from "./components/generics/CustomInput";
import CustomTouchableOpacity from "./components/generics/CustomTouchableOpacity";
import Heading from "./components/generics/Heading";
import styled from "styled-components/native";
import logo from "./images/logo-tap.png";
import APIHandler from "./APIHandler";
import RulewebContext from "./RulewebContext";
import { EmailIsValid, isComplete } from "./Validations";
import { useState } from "react/cjs/react.development";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Device from "expo-device";

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
  const {
    email,
    setEmail,
    password,
    setPassword,
    isAuthorized,
    setIsAuthorized,
    shopData,
    setShopData,
  } = useContext(RulewebContext);
  const [emailInp, setEmailInp] = useState("");
  const handleEmail = (inp) => {
    EmailIsValid(inp) && setEmail(inp);
    setEmailInp(inp);
  };
  function clearInputs() {
    setEmailInp("");
    setPassword("");
  }
  const handleSubmit = (e) => {
    APIHandler.post("/shops/login", { email, password })
      .then((res) => {
        if (res.status === 200) {
          setIsAuthorized(true);
          setShopData({
            logo: res.data.logo.url,
            email: res.data.email,
          });
          clearInputs();
          navigation.navigate("Dashboard");
        }
      })
      .catch((err) => {
        Device.brand != null
          ? Alert.alert(
              "Hubo un error",
              "Verifica tus datos e intenta nuevamente",
              [{ text: "OK", onPress: () => clearInputs() }]
            )
          : alert("Hubo un error. Verifica tus datos e intenta nuevamente.");
      });
  };
  return (
    <SafeAreaView style={{ display: "flex", flex: 1 }}>
      <Wrapper>
        <HeaderLogo source={logo} />
        <Heading title="Iniciar Sesión" />
        <View style={{ flexGrow: 1, rowGap: 24 }}>
          <CustomInput
            placeholder="Email"
            infoText="Tu email es el mismo que el de la App"
            value={emailInp}
            onChangeText={(txt) => handleEmail(txt)}
          />
          <CustomInput
            placeholder="PIN"
            infoText="Tu clave de seguridad es la misma que el de la App"
            secureTextEntry={true}
            value={password}
            name="password"
            onChangeText={(txt) => setPassword(txt)}
          />
        </View>
        <CustomTouchableOpacity
          title="Iniciar Sesion"
          disabled={!isComplete(email, password)}
          behavior={handleSubmit}
        />
      </Wrapper>
    </SafeAreaView>
  );
}
