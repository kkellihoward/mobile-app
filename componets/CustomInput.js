import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

const COLORS = { primary: '#7f44d4', white: '#fff', border: '#e8e8e8' };

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoFocus
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: '90%',
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 5,
    padding: 16,
    marginVertical: 5,
  },
  input: {
    textAlign: 'left',
  },
});

export default CustomInput;
