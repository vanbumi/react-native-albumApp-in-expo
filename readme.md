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

## v22 File Export

## v23 Styling

## v24 Styling Component

## v25 Intro to Flexbox

## v26 Header Styling

## v27 Header Reusable

## v28 Source Album Data

## v29

## v30

## v31 Lifecycle Method

## 32 - Axios

## 33 Network Request

install axios

    npm install --save axios

## 34 Component Level State

## 35 State Continue

**State** adalah konsep untuk update data didalam sebuah component.
**Initial state** mengindisikan kondisi awal sebuah component atau sebuah object.

#### State:

* Plain JavaScript Object yang digunakan untuk merekam dan merespond *trigered events* dari User. Internal component record keeping.
* Jika ingin mengupdate tampilan sebuah Component gunakan **'this.setState'**.
* Merubah State hanya gunakan **'setState'**, bukan dengan 'this.state', contoh: this.state = 123;
* State hanya bisa di gunakan pada **'Class base component'** bukan 'functional component'.

#### Props

* Props (property) digunakan untuk melakukan **komunikasi** antara **parents** dengan **child** component -> Parent to Child Communication. 

## 36 Render List Component

Dalam menggunakan State hanya bisa dilakukan untuk Component 'Class' base, bukan 'Funtion' base.

Contoh: 

    class AlbumList extends Component {
      ..........
    }

#### Penggunaan method *map* pada RN

**map** method digunakan untuk mentransformasikan array menjadi masing-masing object (each).
Biasanya setelah melakukan fetching data kemudian di distribusikan (map) menjadi masing-masing bagian object.

##### Membuat method dengan map

Pada file AlbumList.js buat helper method, kita namakan renderAlbums

    renderAlbums() {
      return this.state.albums.map(album => <Text>{album.title}</Text>); 
    }  

dan update render method agar bisa menampilkan album list, menjadi:

    render() {
      return (
        <View>{this.renderAlbums()}</View>
      );
    } 

Coba di screen simulator!

## 37 Display Individual Album

## 38 Reusable Component

## 39 Style Card

## 40 Pass Component as Props

## 41 Divide Card into Section

## 42 Flexbox

## 43 Positioning Element

## 44 More Style

## 45 Add Image

## 46 Display Image