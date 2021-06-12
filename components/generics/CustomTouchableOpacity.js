import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

const CustomTouchableOpacity = (props) => (
  <TouchableOpacity onPress={props.behavior} style={styles.CustomTouchableOpacityContainer}>
    <Text style={styles.CustomTouchableOpacityText}>{props.title}</Text>
  </TouchableOpacity>
  );
  
  const styles = StyleSheet.create({
    // ...
    CustomTouchableOpacityContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    CustomTouchableOpacityText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

export default CustomTouchableOpacity;