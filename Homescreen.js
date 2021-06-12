import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from './components/generics/CustomInput';
import CustomButton from './components/generics/CustomButton';
import CustomTouchableOpacity from './components/generics/CustomTouchableOpacity';
import Heading from './components/generics/Heading';
import styled from 'styled-components';
import logo from './images/logo-tap.png'

const HeaderLogo = styled.Image`
  padding: 44px 0 60px;
`

export default function Homescreen({navigation}) {
  return (
      <View style={styles.container}>
        <HeaderLogo source={logo} />
        <Heading title="Iniciar Sesión"/>
        <CustomInput placeholder="Email" infoText="Tu email es el mismo que el de la App"/>
        <CustomInput placeholder="PIN" infoText="Tu clave de seguridad es la misma que el de la App"/>
        <CustomButton label="Iniciar Sesión"/>
        <StatusBar style="auto" />
        <CustomTouchableOpacity title="Hello World!" behavior={() => navigation.navigate("Premio Canjeado")}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
