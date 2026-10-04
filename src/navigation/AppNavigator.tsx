import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import SongsScreen from '../screens/SongsScreen';
import PostersScreen from '../screens/PostersScreen';
import VideosScreen from '../screens/VideosScreen';
import PastorsScreen from '../screens/PastorsScreen';
import MoreScreen from '../screens/MoreScreen';
import SongDetailScreen from '../screens/SongDetailScreen';
import PrayerRequestScreen from '../screens/PrayerRequestScreen';
import AdminLoginScreen from '../screens/AdminLoginScreen';
import AdminDashboardScreen from '../screens/AdminDashboardScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 68,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: '#ffffff',
          borderTopColor: '#dfeaf6',
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Songs" component={SongsScreen} />
      <Tab.Screen name="Posters" component={PostersScreen} />
      <Tab.Screen name="Videos" component={VideosScreen} />
      <Tab.Screen name="Pastors" component={PastorsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="SongDetail" component={SongDetailScreen} />
        <Stack.Screen name="PrayerRequest" component={PrayerRequestScreen} />
        <Stack.Screen name="AdminLogin" component={AdminLoginScreen} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
