import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  const { thumbnailContainerStyle, thumbnailStyle, headerContentStyle, headerTextStyle, imageStyle } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle} 
            source={{ uri: props.album.thumbnail_image }
          }/>
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{props.album.title}</Text>
          <Text>{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image 
          style={ imageStyle }
          source={{ uri: props.album.image }} 
        />    
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  } 
};

export default AlbumDetail;