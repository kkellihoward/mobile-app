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
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])./;

const NewPassword = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmitPressed = () => {
    //logic
    navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    //logic
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          name="code"
          placeholder="Code"
          control={control}
          secureTextEntry={true}
          rules={{ required: 'code is required' }}
        />
        <CustomInput
          name="password"
          placeholder="Enter new password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            pattern: {
              value: PWD_REGEX,
              message:
                'Must include uppercase and lowercase letters, a number and a special character' +
                '. Allowed special characters: ! # @ $ %',
            },
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Password should be max 24 characters long',
            },
          }}
        />
        <CustomButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

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

export default NewPassword;
