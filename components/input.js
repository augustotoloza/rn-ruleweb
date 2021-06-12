import React,{ useState } from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = () => {
  const [textVar, setTextVar] = useState("lorem no ipsum");
  return (
    <View>
      <TextInput style={{height:40}} onChangeText={myInput => setTextVar(myInput)}/>
      <Text>{textVar}</Text>
    </View>
  );
}

export default Input;