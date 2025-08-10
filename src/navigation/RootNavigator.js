import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen.js';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import DestinationsScreen from '../screens/DestinationsScreen';
import MapScreen from '../screens/MapScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator({ initialToken }) {
  return (
    <Stack.Navigator>
      { !initialToken ? (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      ) : null }
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      <Stack.Screen name="Destinations" component={DestinationsScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Itinerary" component={ItineraryScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
