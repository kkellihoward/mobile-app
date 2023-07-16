import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const COLORS = {
  primary: '#7f44d4',
  white: '#fff',
  border: '#e8e8e8',
  gray: '#555',
};

const CustomButton = ({ onPress, text, type = 'PRIMARY' }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles['container_' + type]]}
    >
      <Text style={[styles.text, styles['text_' + type]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 16,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  container_PRIMARY: {
    backgroundColor: COLORS.primary,
  },

  container_TERTIAY: {},
  text: {
    fontWeight: 'bold',
    color: COLORS.white,
  },

  text_TERTIAY: {
    fontWeight: 'normal',
    color: COLORS.gray,
  },
});

export default CustomButton;
