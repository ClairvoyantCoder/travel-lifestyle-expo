import React, {useEffect, useState} from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import { fetchDestinations } from '../api';

export default function DestinationsScreen() {
  const [dest, setDest] = useState([]);

  useEffect(() => { load(); }, []);

  const load = async () => {
    const data = await fetchDestinations();
    setDest(data || []);
  };

  return (
    <View style={{flex:1, padding:10}}>
      <FlatList
        data={dest}
        keyExtractor={(i)=>String(i.id)}
        renderItem={({item}) => (
          <View style={{marginBottom:12, borderBottomWidth:1, paddingBottom:10}}>
            {item.image_url ? <Image source={{uri:item.image_url}} style={{height:160, borderRadius:8}} /> : null}
            <Text style={{fontSize:18, fontWeight:'bold', marginTop:8}}>{item.name} — {item.state}</Text>
            <Text numberOfLines={3}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
