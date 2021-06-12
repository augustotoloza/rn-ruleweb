import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

const CustomInput = (props) => {

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
      />
      <Text>
        {props.infoText}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#EDF3FB',
    height: 55,
    margin: 8,
    borderWidth: 0,
    borderRadius: 6,
  },
});

export default CustomInput;