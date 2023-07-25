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

    navigation.navigate('HomeTabs');
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
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: 'Username is required' }}
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
