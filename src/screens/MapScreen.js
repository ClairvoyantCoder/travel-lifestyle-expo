import React, {useEffect, useState} from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { fetchDestinations } from '../api';

export default function MapScreen() {
  const [dest, setDest] = useState([]);

  useEffect(() => { load(); }, []);

  const load = async () => {
    const data = await fetchDestinations();
    setDest(data || []);
  };

  return (
    <View style={{flex:1}}>
      <MapView style={{flex:1}} initialRegion={{
        latitude: 22.0, longitude: 77.0, latitudeDelta: 10, longitudeDelta: 10
      }}>
        {dest.map(d => (d.lat && d.lng) ? (
          <Marker key={d.id} coordinate={{latitude: parseFloat(d.lat), longitude: parseFloat(d.lng)}} title={d.name} description={d.state} />
        ) : null)}
      </MapView>
    </View>
  );
}
