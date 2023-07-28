import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
<Image></Image>;
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Home from '../screens/Home.js';
import Settings from '../screens/Settings.js';
import Notifications from '../screens/Notifications.js';
import Profile from '../screens/Profile.js';
import PostScreen from '../screens/PostScreen.js';

const Tab = createBottomTabNavigator();
const COLORS = {
  primary: '#7f44d4',
  white: '#fff',
  gray: '#433E3E',
  postGray: '#696868',
  OnClickColor: '#B28FE5',
};

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#433E3E',
          backgroundColor: 'black',
          elevation: 0,
          height: 75,
          // borderTopLeftRadius: 15,
          // borderTopRightRadius: 15,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={require('../assets/images/home.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 10,
                  tintColor: focused ? COLORS.OnClickColor : COLORS.white,
                }}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={require('../assets/images/bell.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 10,
                  tintColor: focused ? COLORS.OnClickColor : COLORS.white,
                }}
              />
            </View>
          ),
        }}
      /> */}
      <Tab.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
                // flex: 1,

                // top: -50,
                // borderRadius: 50,
                // backgroundColor: COLORS.postGray,
                // height: 90,
                // width: 90,
              }}
            >
              <Image
                source={require('../assets/images/plus.png')}
                resizeMode="contain"
                style={{
                  height: 35,
                  width: 34,
                  marginBottom: 10,

                  tintColor: focused ? COLORS.OnClickColor : COLORS.white,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={require('../assets/images/settings.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 10,
                  tintColor: focused ? COLORS.OnClickColor : COLORS.white,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: 10,
              }}
            >
              <Image
                source={require('../assets/images/account.png')}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  marginBottom: 10,
                  tintColor: focused ? COLORS.OnClickColor : COLORS.white,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const style = StyleSheet.create({});
export default HomeTabs;
