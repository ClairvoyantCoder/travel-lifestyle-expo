import React, {useState} from 'react';
import { View, TextInput, Button } from 'react-native';
import { createPost } from '../api';

export default function CreatePostScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [location, setLocation] = useState('');

  const submit = async () => {
    const r = await createPost({title, description, image_url: imageUrl, location});
    if (r.id) {
      alert('Post created');
      navigation.goBack();
    } else {
      alert(JSON.stringify(r));
    }
  };

  return (
    <View style={{padding:20}}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle}
        style={{borderWidth:1, padding:10, marginBottom:10}}/>
      <TextInput placeholder="Description" value={description} onChangeText={setDescription}
        style={{borderWidth:1, padding:10, marginBottom:10}}/>
      <TextInput placeholder="Image URL (paste cloudinary img link)" value={imageUrl} onChangeText={setImageUrl}
        style={{borderWidth:1, padding:10, marginBottom:10}}/>
      <TextInput placeholder="Location (City / Place)" value={location} onChangeText={setLocation}
        style={{borderWidth:1, padding:10, marginBottom:10}}/>
      <Button title="Create Post" onPress={submit} />
    </View>
  );
}
