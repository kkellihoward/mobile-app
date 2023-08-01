import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import axios from 'axios';

import CustomInput from '../../componets/CustomInput';
import CustomButton from '../../componets/CustomButton';

const COLORS = {
  primary: '#7f44d4',
  white: '#fff',
  border: '#e8e8e8',
  gray: '#555',
};

const { width, height } = Dimensions.get('window');
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])./;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const pwd = watch('password');

  const navigation = useNavigation();

  const onSignInPressed = (data) => {
    navigation.navigate('SignIn');
  };

  const onSignUpPressed = async(data) => {
    let { email, password } = data

    try {
      const apiUrl = 'https://bp-api-87a503314fa5.herokuapp.com/user/createAccount'; 
      const data = { email, username, password };
  
      const response = await axios.post(apiUrl, data, { headers: {
        'Content-Type': 'application/json'
        }}
      );
  
      if(response.status === 200)
      {
          navigation.navigate('ConfirmEmail');
      }
      // Handle the response from the API as needed
      console.log('API Response:', response.data);
      
      // You can return the response data or handle it further as per your requirements
      return response.data;
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error('API Error:', error);
      // throw error;
    }
  };

  const onTermsPressed = () => {
    //add page
    console.warn('Terms of use');
  };

  const onPolicyUpPressed = () => {
    //add page
    console.warn('privacy policy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required',

            pattern: {
              value: USER_REGEX,
              message:
                'Must begin with a letter. Letters, numbers, underscores, hyphens allowed',
            },
            minLength: {
              value: 4,
              message: 'Username should be at least 4 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Username should be max 24 characters long',
            },
          }}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Enter a valid email address',
            },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
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
        <CustomInput
          name="repate-password"
          placeholder="Confirm Password"
          control={control}
          secureTextEntry={true}
          rules={{
            required: 'Password is required',
            validate: (value) => value === pwd || 'Password do not match',
          }}
        />
        <CustomButton text="Sign Up" onPress={handleSubmit(onSignUpPressed)} />

        <Text style={styles.text}>
          By signing, you Confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsPressed}>
            Terms of Use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPolicyUpPressed}>
            Privacy Policy
          </Text>
        </Text>

        <CustomButton
          text="Have an account? Sign in"
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
    marginTop: height * 0.15,
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.primary,
    margin: 10,
    marginBottom: 20,
    letterSpacing: 1,
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

export default SignUp;
