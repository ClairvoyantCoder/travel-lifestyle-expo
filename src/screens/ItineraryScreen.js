import React, {useState} from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { createItinerary } from '../api';

export default function ItineraryScreen() {
  const [title, setTitle] = useState('');
  const [days, setDays] = useState(1);
  const [list, setList] = useState([]);

  const add = () => {
    setList([...list, {day: list.length+1, note: `Day ${list.length+1} plan`}]);
  };

  const save = async () => {
    const payload = { title, days: list.length || days, days_data: list };
    const r = await createItinerary(payload);
    if (r.id) alert('Itinerary saved');
    else alert(JSON.stringify(r));
  };

  return (
    <View style={{padding:20}}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={{borderWidth:1, padding:10, marginBottom:10}} />
      <Button title="Add day" onPress={add} />
      <FlatList data={list} keyExtractor={(i)=>String(i.day)} renderItem={({item}) => <Text style={{padding:10}}>Day {item.day}: {item.note}</Text>} />
      <Button title="Save Itinerary" onPress={save} />
    </View>
  );
}
