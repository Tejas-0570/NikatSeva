import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from './src/screens/auth/SignIn';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import ForgetPasswordScreen from './src/screens/auth/ForgetPasswordSreen';

import HomeScreen from './src/screens/HomeScreen';
import BookingScreen from './src/screens/BookingScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ProfessinalProfileScreen from './src/screens/ProfessionalProfileScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';
import BookingConfirmationScreen from './src/screens/BookingConfirmationScreen';
import BookingSuccess from './src/screens/BookingSuccess';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

/* ---------------- Bottom Tabs ---------------- */
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Booking':
              iconName = 'calendar-month';
              break;
            case 'Explore':
              iconName = 'explore';
              break;
            case 'Profile':
              iconName = 'person';
              break;
          }

          return <MaterialIcons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#192D3C',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

/* ---------------- App ---------------- */
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='SignIn'>

          {/* Auth Screens */}
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />

          {/* Tabs */}
          <Stack.Screen name="MainTabs" component={MyTabs} />

          {/* Other Screens */}
          <Stack.Screen name="ProfessionalProfile" component={ProfessinalProfileScreen} />
          <Stack.Screen name="SearchResults" component={SearchResultScreen} />
          <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
          <Stack.Screen name="BookingSuccess" component={BookingSuccess} />

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
