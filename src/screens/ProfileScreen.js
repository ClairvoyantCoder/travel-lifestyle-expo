import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }) {
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    navigation.replace('Login');
  };

  return (
    <View style={{padding:20}}>
      <Text style={{fontSize:20}}>Profile</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
