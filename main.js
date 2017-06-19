import Expo from 'expo';
import React from 'react';
import { StyleSheet } from 'react-native';
import Header from './src/components/Header';

class App extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
