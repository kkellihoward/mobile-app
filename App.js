import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Home from './screens/Home';
import Details from './screens/Details';
import SignIn from './screens/SignIn/SignIn';
import SignUp from './screens/SignUp/SignUp';
import OnboardingScreen from './screens/OnboardingScreen';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: 'transparent',
  },
};

const App = () => {
  // const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null); // should be null just for testing now is true

  // useEffect(() => {
  //   (async () => {
  //     const appData = await AsyncStorage.getItem("isAppFirstLaunched");
  //     console.log(appData);
  //     if (appData == null) {
  //       setIsAppFirstLaunched(true);
  //       AsyncStorage.setItem("isAppFirstLaunched", "false");
  //     } else {
  //       setIsAppFirstLaunched(false);
  //     }
  //   })();
  // }, []);

  return (
    // isAppFirstLaunched != null &&

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="OnboardingScreen"
      >
        {/* {isAppFirstLaunched && ( */}
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
