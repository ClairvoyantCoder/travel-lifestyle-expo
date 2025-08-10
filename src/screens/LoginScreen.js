import React, {useState} from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { login } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = async () => {
    const r = await login({email, password});
    if (r.token) {
      await AsyncStorage.setItem('token', r.token);
      navigation.replace('Home');
    } else {
      alert(r.error || 'Login failed');
    }
  };

  return (
    <View style={{padding:20, flex:1, justifyContent:'center'}}>
      <Text style={{fontSize:24, marginBottom:20}}>Login</Text>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail}
        style={{borderWidth:1, padding:10, marginBottom:10}}/>
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword}
        style={{borderWidth:1, padding:10, marginBottom:20}}/>
      <Button title="Login" onPress={onLogin} />
      <View style={{height:16}} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
