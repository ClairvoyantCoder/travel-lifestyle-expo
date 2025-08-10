import React, {useState} from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { register } from '../api';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegister = async () => {
    const r = await register({name, email, password});
    if (r.id) {
      alert('Registered. Please login.');
      navigation.navigate('Login');
    } else {
      alert(r.error || JSON.stringify(r));
    }
  };

  return (
    <View style={{padding:20, flex:1, justifyContent:'center'}}>
      <Text style={{fontSize:24, marginBottom:20}}>Register</Text>
      <TextInput placeholder="Name" value={name} onChangeText={setName}
        style={{borderWidth:1, padding:10, marginBottom:10}}/>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail}
        style={{borderWidth:1, padding:10, marginBottom:10}}/>
      <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword}
        style={{borderWidth:1, padding:10, marginBottom:20}}/>
      <Button title="Register" onPress={onRegister} />
    </View>
  );
}
