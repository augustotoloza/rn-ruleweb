import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import CustomInput from './components/generics/CustomInput';
import CustomButton from './components/generics/CustomButton';
import CustomTouchableOpacity from './components/generics/CustomTouchableOpacity';
import Heading from './components/generics/Heading';
//import Input from './components/input';

export default function Redeemed({navigation}) {
  return (
      <View style={styles.container}>
        <Heading title="Premio canjeado!"/>
        <CustomTouchableOpacity title="Hello World!" behavior={() => navigation.navigate("Home")}/>
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
