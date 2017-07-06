import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    console.log("componentWillMount works!");
  }

  render () {
    return (
      <View>
        <Text>Album List ku</Text>
      </View>
    );
  }
}

export default AlbumList;

