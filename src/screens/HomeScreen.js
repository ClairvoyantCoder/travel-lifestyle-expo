import React, {useEffect, useState} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { fetchPosts } from '../api';
import PostCard from '../components/PostCard';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const data = await fetchPosts();
    setPosts(data || []);
  };

  return (
    <View style={{flex:1}}>
      <View style={{flexDirection:'row', justifyContent:'space-around', padding:10}}>
        <Button title="New Post" onPress={() => navigation.navigate('CreatePost')} />
        <Button title="Destinations" onPress={() => navigation.navigate('Destinations')} />
        <Button title="Map" onPress={() => navigation.navigate('Map')} />
        <Button title="Itinerary" onPress={() => navigation.navigate('Itinerary')} />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item)=> String(item.id)}
        renderItem={({item}) => <PostCard post={item} />}
        contentContainerStyle={{paddingBottom:120}}
      />
    </View>
  );
}
