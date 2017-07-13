# React Native - AlbumApp dengan Expo

## Get Start

Gambaran App yang akan dibuat:

![app-outline](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_422,w_300/v1499935793/albums-app/2-Outline_app.png)

* Install Expo Desktop
* Install Expo App
* In Expo Desktop create new project or in Commandline: 
    
    exp init namaApp 

* Open in your IDE to edit.

## Create Header component

Create new folder named src
Create new folder named src/components
Create new file named src/components/Header.js

Tuliskan kode seperti dibawah ini:

    import React from 'react';
    import { Text } from 'react-native';

    const Header = () => {
      return <Text>Album App</Text>
    };

    export default Header;

Update the class App on main.js

    import Header from './src/components/Header';

    class App extends React.Component {
      render() {
        return (
          <Header />
        );
      }
    }

Save and check on device :)

## Add Style

Create JavaScript object for stylist :

    const styles = {
      textStyle: {
        fontSize: 20
      }      
    };

Update Header.js

    const Header = () => {
      const { textStyle } = styles;

      return <Text style={textStyle}>Album App</Text>
    };    

### Add View Tag to wrap Text Tag

![3-wrap-with-view-tag](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_174,w_350/v1499954927/albums-app/3-wrap-with-view-tag.png)

Update Header.js

    const Header = () => {
      const { textStyle, viewStyle } = styles;

      return (
        <View style={viewStyle}>
          <Text>style={textStyle}>Album App</Text>
        </View>
      )
    };

 Update style nya:

    const styles = {
      textStyle: {
        fontSize: 20
      },
      viewStyle: {
        backgroundColor: '#f8f8f8'
      }
    };  
       
## Mengatur Posisi Element dengan Flexbox

**Flexbox** adalah sistim positioning element didalam container.
Mengatur posisi element children oleh parent, parent -> children.
**View Tag -> Text Tag**

### Position Default.

![4-default-position](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_231,w_350/v1499956644/albums-app/4-default-position.png)

### justifyContent.

**justifyContent** digunakan untuk mengatur posisi secara Vertikal.

![5-justify-content](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_218,w_350/v1499957054/albums-app/5-justify-content.png)

![6-justifyConten-center](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_219,w_350/v1499957301/albums-app/6-justifyConten-center.png)

![7-justifyConten-flex-start](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_221,w_350/v1499957471/albums-app/7-justifyConten-flex-start.png)

### alignItems

**alignItems** digunakan untuk mengatur posisi secara Vertikal.

![8-aligIitem-flext-start](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_221,w_350/v1499957661/albums-app/8-aligIitem-flext-start.png)

![9-aligIitem-center](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_224,w_350/v1499957926/albums-app/9-aligIitem-center.png)

![10-aligIitem-flex-end](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_223,w_350/v1499958048/albums-app/10-aligIitem-flex-end.png)

## Header Styling

So Update lagi style nya:

    const styles = {
      textStyle: {
        fontSize: 20
      },
      viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15
        ----------------------> test di screen
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
      }
    };

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

## 47 Content Scrollable

## 48 Create Button

## 49 Styling button with UX

## 50 Responding user input

## 51 Link between mobile app

## 52 Set button text with props

## 53 Last