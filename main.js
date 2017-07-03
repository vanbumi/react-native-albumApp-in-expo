import Expo from 'expo';
import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={ 'Album Ku' } />
        <AlbumList />
      </View>
    );
  }
}

Expo.registerRootComponent(App);

