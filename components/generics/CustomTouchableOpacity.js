import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';
import { Comfortaa_700Bold, useFonts } from '@expo-google-fonts/comfortaa';

const CustomTouchableOpacity = (props) => {
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold
  });

  return (
    <TouchableOpacity onPress={props.behavior} disabled={props.disabled} style={props.disabled === true ? styles.disabled : styles.active}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
    )
};
  
  const styles = StyleSheet.create({
    // ...
    active: {
      elevation: 8,
      backgroundColor: "#14D2B9",
      borderRadius: 16,
      paddingVertical: 14,
    },
    disabled: {
      backgroundColor: "#C9C9C9",
      elevation: 8,
      borderRadius: 16,
      paddingVertical: 14,
    },
    text: {
      fontSize: 14,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      fontFamily: 'Comfortaa_700Bold'
    }
  });

export default CustomTouchableOpacity;