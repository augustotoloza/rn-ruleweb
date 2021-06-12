import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TouchableOpacity } from 'react-native';

const CustomButton = (props) => (
    <SafeAreaView>
      <View style={styles.button}>
        <Button
          title={props.label}
          onPress={() => Alert.alert('Logging in...')}
        />
      </View>
    </SafeAreaView>
  );
  
  const styles = StyleSheet.create({
    button: {
      backgroundColor: '#c9c9c9',
      width: '100%',
      height: 45,
      borderRadius: 15,
      padding: '0 15',
    },
  });

export default CustomButton;