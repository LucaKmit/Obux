import React from 'react';
import { StatusBar, View } from 'react-native';
import Login from './src/Components/Login'

export default function App() {
  return (
    <View style={{ backgroundColor: '#292929', flex: 1 }}>
      <Login />
      <StatusBar hidden />
    </View>
  );
}
