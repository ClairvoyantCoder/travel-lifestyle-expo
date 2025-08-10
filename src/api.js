import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = "https://backendapp-qvx8.onrender.com";

async function getTokenHeader() {
  const token = await AsyncStorage.getItem('token');
  if (!token) return {};
  return { Authorization: `Bearer ${token}` };
}

export async function register({name, email, password}) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({name, email, password})
  });
  return res.json();
}

export async function login({email, password}) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({email, password})
  });
  return res.json();
}

export async function fetchPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}

export async function createPost({title, description, image_url, location}) {
  const headers = await getTokenHeader();
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {...headers, 'Content-Type': 'application/json'},
    body: JSON.stringify({title, description, image_url, location})
  });
  return res.json();
}

export async function fetchDestinations() {
  const res = await fetch(`${BASE_URL}/destinations`);
  return res.json();
}

export async function createItinerary(payload) {
  const headers = await getTokenHeader();
  const res = await fetch(`${BASE_URL}/itineraries`, {
    method:'POST',
    headers:{...headers, 'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  return res.json();
}

export async function submitFeedback(payload) {
  const headers = await getTokenHeader();
  const res = await fetch(`${BASE_URL}/feedback`, {
    method: 'POST',
    headers: {...headers, 'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  });
  return res.json();
}
