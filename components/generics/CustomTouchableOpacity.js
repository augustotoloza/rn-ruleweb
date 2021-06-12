import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';
import { Comfortaa_700Bold, useFonts } from '@expo-google-fonts/comfortaa';

const CustomTouchableOpacity = (props) => {
  let [fontsLoaded] = useFonts({
    Comfortaa_700Bold
  });

  return (
    <TouchableOpacity onPress={props.behavior} style={styles.CustomTouchableOpacityContainer}>
      <Text style={styles.CustomTouchableOpacityText}>{props.title}</Text>
    </TouchableOpacity>
    )
};
  
  const styles = StyleSheet.create({
    // ...
    CustomTouchableOpacityContainer: {
      elevation: 8,
      backgroundColor: "#C9C9C9",
      borderRadius: 16,
      paddingVertical: 14,
    },
    CustomTouchableOpacityText: {
      fontSize: 14,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      fontFamily: 'Comfortaa_700Bold'
    }
  });

export default CustomTouchableOpacity;