import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import axios from 'axios';

import Logo from '../../assets/images/logoSign.png';
import CustomInput from '../../componets/CustomInput';
import CustomButton from '../../componets/CustomButton';

const { width, height } = Dimensions.get('window');

const SignIn = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //console.log(errors);
  const methods = useForm();

  const onSignInPressed = (data, errors) => {
    console.log(data);
    //validate

    try {
      const apiUrl = 'https://bp-api-87a503314fa5.herokuapp.com/user/signin'; 
      
      // parameters going in need to be named email and password for API to accept them
      const data = { email, password };
  
      const response = await axios.post(apiUrl, data, { headers: {
        'Content-Type': 'application/json'
        }}
      );
  
      if(response.status === 200)
      {
        navigation.navigate('HomeTabs');
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

  const onForgetPasswordPressed = () => {
    //logic
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="cover"></Image>

        <CustomInput
          name="Email"
          placeholder="Email"
          control={control}
          rules={{ required: 'Email is required' }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          secureTextEntry={true}
          rules={{ required: 'Password is required' }}
        />
        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />
        <CustomButton
          text="Forget password?"
          onPress={onForgetPasswordPressed}
          type="TERTIAY"
        />
        <CustomButton
          text=" Don't have an account? create one"
          onPress={onSignUpPressed}
          type="TERTIAY"
          style={styles.create}
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

  logo: {
    marginTop: 50,
    width: width,
    height: height * 0.3,
    marginBottom: -50,
  },
});

export default SignIn;
