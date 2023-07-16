import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useState } from 'react';

import Logo from '../../assets/images/logoSign.png';
import CustomInput from '../../componets/CustomInput';
import CustomButton from '../../componets/CustomButton';

const { width, height } = Dimensions.get('window');

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('signIn');
  };

  const onForgetPasswordPressed = () => {
    console.warn('forgetPassword');
  };
  onSignUpPressed;
  const onSignUpPressed = () => {
    console.warn('Sign UP');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.root}>
        <Image source={Logo} style={styles.logo} resizeMode="cover"></Image>
        <CustomInput
          placeholder="Username"
          value={userName}
          setValue={setUserName}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton text="Sign In" onPress={onSignInPressed} />
        <CustomButton
          text="Forget password?"
          onPress={onForgetPasswordPressed}
          type="TERTIAY"
        />
        <CustomButton
          text=" Don't have an account? create one"
          onPress={onSignUpPressed}
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

  logo: {
    marginTop: 50,
    width: width,
    height: height * 0.3,
  },
});

export default SignIn;
