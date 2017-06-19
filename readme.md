# React Native - albumApp in Expo

## Get Start

* Install Expo Desktop
* Install Expo App
* In Expo Desktop create new project
* Open in your IDE to edit.

## Create Header component

Create new folder named src
Create new folder named src/components
Create new file named src/components/Header.js

    import React from 'react';
    import { Text } from 'react-native';

    const Header = () => {
      return <Text>AlbumApp!</Text>
    };

    export default Header;

Update the class App on main.js

    class App extends React.Component {
      render() {
        return (
          <Header />
        );
      }
    }

Save and check on device :)

next 22
