import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function PostCard({ post }) {
  return (
    <View style={styles.card}>
      {post.image_url ? <Image source={{uri: post.image_url}} style={styles.image} /> : null}
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.author}>By: {post.author || post.name || 'User'}</Text>
      <Text numberOfLines={3}>{post.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  image: { width: '100%', height: 180, borderRadius: 8, marginBottom: 8 },
  title: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
  author: { color: '#666', marginBottom: 6 }
});
