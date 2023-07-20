import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useState } from 'react';

import CustomInput from '../../componets/CustomInput';
import CustomButton from '../../componets/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const COLORS = {
  primary: '#7f44d4',
  white: '#fff',
  border: '#e8e8e8',
  gray: '#555',
};

const { width, height } = Dimensions.get('window');

const ForgotPassword = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: 'Username is required' }}
        />

        <CustomButton text="SEND" onPress={handleSubmit(onSendPressed)} />

        <CustomButton
          text="Back to sign in"
          onPress={onSignInPressed}
          type="TERTIAY"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    marginTop: height * 0.2,
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.primary,
    margin: 10,
    marginBottom: 20,
  },
  text: {
    padding: 20,
    textAlign: 'center',
    color: COLORS.gray,
    marginVertical: 10,
  },
  link: {
    color: COLORS.primary,
  },
});

export default ForgotPassword;
