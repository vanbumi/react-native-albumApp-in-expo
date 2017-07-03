import Expo from 'expo';
import React from 'react';
import Header from './src/components/Header';

class App extends React.Component {
  render() {
    return (
      <Header headerText={ 'Album Ku' } />
    );
  }
}

Expo.registerRootComponent(App);

