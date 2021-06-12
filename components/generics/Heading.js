import React from 'react';
import { SafeAreaView, Text } from 'react-native';

const Heading = (props) => {
  return (
    <SafeAreaView>
    <Text>{props.title}</Text>
    {props.subtitle && <Text>{props.subtitle}</Text>}
    </SafeAreaView>
  );
}

export default Heading;