import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home.js';
import Settings from '../screens/Settings.js';
import Notifications from '../screens/Notifications.js';
import Profile from '../screens/Profile.js';
import PostScreen from '../screens/PostScreen.js';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="PostScreen" component={PostScreen} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
