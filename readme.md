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

![3-wrap-with-view-tag](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_124,w_300/v1499954927/albums-app/3-wrap-with-view-tag.png)

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

## Header Reusable

Ini adalah Statik Header Title (hard coded)

    <Text>style={textStyle}>Album App</Text>

Kita ingin header dinamis --> berganti title --> header menjadi reusable.

**Refactor! Parents component to Children component with Props sistem**

Dari main.js <-- root / parent

    <Header headerText={ 'Album Ku' } />

Pada Header.js, menambahkan props object dari parents component:

    <Text style={textStyle}>{props.headerText}</Text>

> catatan* insert javascript variable pada JSX harus diapit dengan **{ }**.

Dan menambahkan reference props, pada function argumentnya:

    const Header = (props) => {

## Cara membuat List Data untuk Album App

Hard coding ? No!

Kita akan mengkonsumsi dari dari sistem online API dengan method HTTP Request.

    https://rallycoding.herokuapp.com/api/music_albums

untuk memudahkan membaca json gunakan plugin **JSON Formatter**.

Component yang akan kita buat adalah

* AlbumList
* AlbumDetail

Dimana AlbumList berisi beberapa AlbumDetail

![11-diagram-albumList](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_537,w_250/v1499961860/albums-app/11-diagram-albumList.png)

AlbumList component yang akan fetching data dari API, kemudian dirender ke masing-masing AlbumDetail component. AlbumDetail hanya bertugas untuk show single Card kepada user. 

## Component Boiler Plate

![12-diagram-fetching-data](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_390,w_700/v1499993800/albums-app/12-diagram-fetching-data.png)

Gambar diatas memberikan gambaran bagaimana Nested Component berjalan, dimana add root, parent & children component berlaku.

Ikuti Step berikut ini:

Membuat component baru AlbumList.js folder src/components/AlbumList.js.

Ada 2 jenis component di dalam React Native

1. class base component:
class base component adalah component Dinamic, digunakan untuk interaktif user dan fetching data. 
2. functional base component:
functional base componet adalah component Statik, di gunakan untuk display data ke user.

Component AlbumList -> class base component -> fetching data -> Ajax request -> provider API.

![13-jenis-component](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_370,w_700/v1499995776/albums-app/13-jenis-component.png)

Component class base **Boilerplate!**

    import React, { Component } from 'React';
    import { View, Text } from 'react-native';

    class AlbumList extends Component {
      render() {
        return (
           <View>
            <Text>Album List</Text>
           </View> 
        );
      }
    }

    export default AlbumList;

Pada main.js import AlbumList:

Update main.js menjadi sbb:

    import Expo from 'expo';
    import React from 'react';
    import { View } from 'react-native';
    import Header from './src/components/Header';
    import AlbumList from './src/components/AlbumList';

Cara menempatkan AlbumList Tag di dalam main/App.js :

    class App extends React.Component {
      render() {
        return (
          <View}>
            <Header headerText={ 'Album Ku' } />
            <AlbumList />
          </View>
        );
      }
    }

Didalam penulisan JSX berlaku 1 component hanya terdapat 1 single JSX Tag, jadi apabila ada 2 component Tag harus diapit oleh View Tag, lihat contoh diatas.

Pada main.js jangan lupa View Tag di import bila belum:

    import { View } from 'react-native';

Test di pada device !

## Cara fetching data dari API

* Kapan? -> saat App boots up! or load!
* Bagaimana caranya? -> Hook atau event notification -> **lifecycle method**.
* **componentWillMount()**
* Menggunakan library -> Axios.

Update AlbumList.js :

    class AlbumList extends Component {
      componentWillMount() {
        
      }

      render() {
        return (
           <View>
            <Text>Album List</Text>
           </View> 
        );
      }
    }

### Install Axios

    npm install --save axios

Fungsi axios adalah melakukan http request untuk fetching data.

Pada AlbumList.js import axios:

    import axios from 'axios';

Dan update componentWillMount nya menjadi sbb:

    componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }    

Saat kita melakukan Ajax request akan return "promise" melalui asynchronous call, pada saat request selesai maka akan ditampilkan respon data, respon data inilah akan menimpa state yang sebelumnya (default) sehingga terjadi update data --> album list.

Disinilah **state** dibutuhkan --> menyimpan status data sebelumnya:

    state = { albums: [] };  // album dengan default empty array.

*albums dengan 's' --> plural.*

Tambahkan defautl state (initial state) tsb pada component AlbumList sebelum componentWillMount.

### Component Level State

![14-component-level-state](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_350,w_450/v1500002440/albums-app/14-component-level-state.png)

### Rule of State

* **Definis State** : adalah plain JavaScript object yang digunakan untuk merecord dan merespond user event.
* Saat kita ingin mengupdate tampilan dari component gunakan call **"this.setState"**.
* Hanya gunakan **setState** untuk merubah State, jangan gunakan 'this.state'.
* **State** adalah konsep untuk update data didalam sebuah component.
* **Initial state** mengindisikan kondisi awal sebuah component atau sebuah object.
* State hanya bisa di gunakan pada **'Class base component'** bukan 'functional component'.

### Props

* Props (property) digunakan untuk melakukan **komunikasi** antara **parents** dengan **child** component -> Parent to Child Communication. 

## Render List Component

Dalam menggunakan State hanya bisa dilakukan untuk Component 'Class' base, bukan 'Funtionc' base.

Contoh: 

    class AlbumList extends Component {
      ..........
    }

### Penggunaan method *map* pada React Native

![15-each-map-sistem](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_400,w_350/v1500012103/albums-app/15-each-map-sistem.png)

Gambar sebelah kiri --> array album (terdiri dari each album).

**map** adalah *array helper*, method **map** digunakan untuk mentransformasikan array menjadi masing-masing object (each).
Setelah melakukan fetching data kemudian di distribusikan (map) menjadi masing-masing **albumDetail** component.

### Membuat method dengan map

Pada file AlbumList.js buat helper method, kita namakan **renderAlbums**

    renderAlbums() {
      return this.state.albums.map(album => <Text>{album.title}</Text>); 
    }  

*albums dengan 's' --> plural.*

renderAlbum --> return --> state hasil fetching albums --> didistribusikan dengan "key" **album**, sehingga masing-masing object bisa ditampilkan dengan "key" tsb --> album.title.

Update **render method** agar bisa menampilkan album list, ganti Text Tab menjadi:

    render() {
      return (
        <View>
          {this.renderAlbums()}
        </View>
      );
    } 

Test pada screen device! sukses .... tapi Tampak warning! Karena masing-masing property object (component) harus memilik Uniq Key.

Kita update menjadi :

    renderAlbums() {
      return this.state.albums.map(album => 
        <Text key={album.title}>{ album.title }</Text> 
      );
    }

> Gunakan key sesuai dengan object component, bila aplikasi tidak memiliki object ID --> {album.id}.     
Test lagi di screen --> warning akan hilang :)

## Membuat Componen baru AlbumDetail.

Pada folder src/components/AlbumDetail.js

Tuliskan kode boilerplate RN:

    import React from 'react';
    import { View, Text} from 'react-native';

    const AlbumDetails = () => {
      return(
        <View>
          <Text>Album Detail</Text>
        </View>    
      );  
    } 

    export default AlbumDetail;

Setelah itu jangan lupa import ke dalam component AlbumList.js

    import AlbumDetail from './AlbumDetail';

Konsekuensinya setelah di import kita harus menggantikan Text Tag dengan AlbumDetail Tag:

    renderAlbums() {
      return this.state.albums.map(album => 
        <AlbumDetail key={album.title}>{ album.title }</AlbumDetail> 
      );
    }

Karena kita tidak lagi menggunakan Text Tag maka kita bisa menghapus import Text di bagian atas import.

Apabila kita lihat kode diatas ada nested component pada AlbumList component, antara AlbumList sebagai Parents dan AlbumDetail sebagai Children. 
Selanjutnya kita akan melewatkan (pass) album dari Parents component ke Children component dengan menggunakan Props.

Jadi kita harus update kode diatas menjadi:

    renderAlbums() {
      return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album} /> 
      );
    }

Pada AlbumDetail.js update kode nya dengan menambahkan props pada argument pertama:

    const AlbumDetails = (props) => {
      return(
        <View>
          <Text>{props.album.title}</Text>
        </View>    
      );  
    }

## Bekerja dengan AlbumDetail.

![16-create-card-component](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_310,w_350/v1500016693/albums-app/16-create-card-component.png)

### Membuat Card Component.

Pada folder src/components/Card.js

Boilerplate: 

    import React from 'react';
    import { View } from 'react-native';

    const Card = () => {
      return(
        <View></View>
      );
    };

    export default card;   

### Membuat Style pada Card

    const styles = {
      containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
      }
    };

Update const Card menjadi: 

    const Card = () => {
      return(
        <View style={styles.containerStyle}></View>
      );
    };

Pada AlbumDetails jangan lupa Card.js di import:

    import Card from './AlbumDetail' 

Konsekuensi nya update AlbumDetail.js dengan menambahkan Card Tag menjadi instant Card component :

    const AlbumDetails = (props) => {
      return(
        <Card>
          <Text>{props.album.title}</Text>
        </Card>    
      );  
    }

Konsekuensi yang ke 2 apapun yang terdapat didalam Tag Card dapat dilewatkan ke Card component syaratnya berada di Parents component --> Children component dengan cara melewatkan "props" kedalam function argument.

Update Card.js

    const Card = (props) => {
      return(
        <View style={styles.containerStyle}>
          {props.children}
        </View>
      );
    }; 

Test pada screen device :)

## Membagi Card kedalam Section

Membuat component baru di folder src/components/CardSection:

    import React from 'react';
    import { View } from 'react-native';

    const CardSection = () => {
      return (
        <View></View>
      );
    };

    export default CardSection;

Membuat object style:

    const styles = {
      containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
      }
    };

Update View Tag nya:

    const CardSection = () => {
      return (
        <View style={styles.containerStyle }></View>
      );
    };

Pada AlbumDetail.js import CardSection :

    import CardSection from './CardSection';

Pada AlbumDetail kita ingin menempatkan CardSection di dalam Card component:

    const AlbumDetails = (props) => {
      return(
        <Card>
          <Text>{props.album.title}</Text>
          // CardSection here
        </Card>    
      );  
    }

Menjadi :

    const AlbumDetails = (props) => {
      return(
        <Card>
          <CardSection>
            <Text>{props.album.title}</Text>
          </CardSection>
        </Card>    
      );  
    }   

Sekali lagi kita ingin melewatkan isi dari CardSection ke dalam CardSection component dengan menggunakan props, update CardSection.js menjadi sbb:

    const CardSection = (props) => {
      return (
        <View style={styles.containerStyle }>
          {props.children}
        </View>
      );
    };

Dan Test di screen device :)

Kurang lebih akan tampak seperti dibawah ini :

![17-cardSection](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_235,w_300/v1500024914/albums-app/17-cardSection.png)

## Membuat Tampilan Header

![18-diagram-header](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_250,w_350/v1500025173/albums-app/18-diagram-header.png)

Goalnya adalah bagaimana cara membuat layout seperti pada gambar, bila kita layout pada web mungkin akan terlihat lebih mudah menggunakan DIV dan CSS bila dibanding layout mobile aplikasi :)

### Flexbox

![19-justifyContent-space-between](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_251,w_350/v1500025749/albums-app/19-justifyContent-space-between.png)

![20-justifyContent-space-around](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_250,w_350/v1500025955/albums-app/20-justifyContent-space-around.png)

## FlexDirection

### Ada 2 jenis flexDirection

Dua jenis flexDirection yaitu row dan column, seperti gambar dibawah ini:

![22-flexDirection-row-default](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_300,w_400/v1500031955/albums-app/22-flexDirection-row-default.png)

Untuk mengatur posisi header kita menggunakan FlexDirection: 'row', dengan menggunakan 2 buah View Tag yang diapit 1 CardSection. Satu View Tag untuk image dan satu View Tag untuk Text, kemudian untuk View Text kita menggunakan flexDirection: 'column' dan justifyContent: 'space-around'.

![21-penggunaan-flexDirection](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_412,w_400/v1500031648/albums-app/21-penggunaan-flexDirection.png)

![23-flexDirection-column](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_395,w_400/v1500032714/albums-app/23-flexDirection-column.png)

Sekarang kit akan menerapkan style tsb diatas pada AlbumDetail.js:

    const AlbumDetails = (props) => {
      return(
        <Card>
          <CardSection>
            <Text>{props.album.title}</Text>
          </CardSection>
        </Card>    
      );  
    }

Update menjadi:

    const AlbumDetails = (props) => {
      return(
        <Card>
          <CardSection>
            <View>
              <Image />
            </View>
            <View>
              <Text>{props.album.title}</Text>
              <Text>{props.album.artist}</Text>
            </View>
          </CardSection>
        </Card>    
      );  
    }

Tambahkan style object:

    const styles = {
      headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
      }, // ----------------------------> test on screen!
      headerTextStyle: {
        fontSize: 18
      }, // ----------------------------> test on screen!
      
      ...

      ... 
    };

Import Image Tag

    import { Text, View, Image } from 'react-native';

Add image source:

    <Image  source={{ uri: 'props.album.thumbnail_image' }} />
            
Gunakan destructure kode untuk good practice.

Contoh :

    const AlbumDetail = ({ album }) => {
      const { title, artist, thumbnail_image, image, url } = album;
      const { thumbnailContainerStyle, 
        thumbnailStyle, 
        headerContentStyle, 
        headerTextStyle, 
        imageStyle 
      } = styles;

Tambahkan Image style property:

    <Image
      style={thumbnailStyle} 
      source={{ uri: thumbnail_image }
    }/>

Tambahkan style:

    thumbnailStyle: {
      width: 50,
      height: 50
    },

Test di screen! :)

### Display Album

Tambahkan style

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
      },
      imageStyle: {
        height: 350,
        flex: 1,
        width: null
      }

Jangan lupa tambahkan sytle property pada View Tag.

### Menambahkan Image

Pada AlbumDetail.js tambahkan CardSection satu lagi dibawahnya:

    <CardSection>
      <Image 
        source={{ uri: image }} 
      

Kemudian tambahkan uri image dan tambahkan juga di destruture code yang sudah dibuat.

Test di screen, walahh image belum muncul? Karena kita belum menambahkan Width & Height image tsb.

Tambahkan style property pada Image Tag:

    <CardSection>
      <Image
        style={ imageStyle } 
        source={{ uri: image }}
      />    
    </CardSection>
        
Jangan lupa untuk menambahkan property baru tersebut pada destructure code nya:

    const { thumbnailContainerStyle, 
      thumbnailStyle, 
      headerContentStyle, 
      headerTextStyle, 
      imageStyle 
    } = styles;

Dan tambahkan juga imageStyle sbb:

    imageStyle: {
      height: 350,
      flex: 1,
      width: null
    }

Test di screen! :)

## Membuat Content Scrollable

Component yang harus di scroll dalam kasus ini adalah AlbumList karena halaman ini yang merender keseluruhan daftar masing-masing album.

Pada file AlbumList import library baru ScrollView:

    import { ScrollView } from 'react-native';

Hapus Tag View karena di halaman ini kita menggunakan lagi Tag View, kemudian ganti render methode semual View Tag menjadi ScrollView Tag:

    return (
      <ScrollView>
          {this.renderAlbums()}
      </ScrollView>
    );

Test pada screen! :)

Tambahkan style **flex: 1** pada root component, dalam Album App ini adalah main.js.

    return (
      <View style={{flex: 1}}>
        <Header headerText={ 'Album Ku' } />
        <AlbumList />
      </View>
    );

Fungsi dari flex: 1 adalah agar aplikasi memiliki fleksibel untuk berbagai ukuran device.

## Membuat Link Button

Membuat link button yang akan menghubungkan aplikasi ke website eksternal dengan spesifik URL, dalam training ini adalah ke webiste amazon.

### Membuat Component Button

Pada folder src/components/Button.js, tambahkan boilerplate kode:

    import React from 'react';
    import { Text, TouchableOpacity } from 'react-native';

    const Button = () => {
      return (
          <Text>
            Click here!
          </Text>
      );
    };

    export default Button;

Pada file AlbumDetail import Button:

    import Button from './Button';

Dan di AlbumDetail buat CardSection baru:

    <CardSection>
        <Button />
    </CardSection>

Test di screen! :)

### Import Button Library

Buka website Doc react native facebook https://facebook.github.io/react-native/docs/getting-started.html

Pilih component button TouchableOpacity: https://facebook.github.io/react-native/docs/touchableopacity.html

Pada file Button.js import button TouchableOpacity tsb:

    import { ..., TouchableOpacity } from 'react-native';

Dan bungkus Text Tag menjadi sbb:

    const Button = () => {
      return (
        <TouchableOpacity>
          <Text>
            Click here!
          </Text>
        </TouchableOpacity>
      );
    };

Test di screen! :) 

### Menambahkan Style pada Button

    const styles = {
      buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
      }
    };

Lakukan destructure style:

    const { buttonStyle } = sytles;

Dan tambahka pada Button Tag property:

    style={buttonStyle}    

Tambahkan style pada Text juga:

    textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10  
    },

Tambahkan pada destructure baris dan tambahkan juga di Text Tag:

    const { buttonStyle, textStyle } = sytles;

    <Text style={textStyle}>

Test pada screen! :)

## Menambahkan Event Handling pada Button

Tambahkan props onPress handler pada Button:

    <TouchableOpacity onPress={ ... } >

Pada AlbumDetail tambahkan props function callback pada button :

    <Button onPress={ } >

Update pada Button.js

    const Button = ({ onPress }) => {

Dan lewatkan pada property TouchableOpacity:

    <TouchableOpacity onPress={ onPress } style={styles.buttonStyle}>          

Import libraryLinking, cek : https://facebook.github.io/react-native/docs/linking.html

    import { ..., ..., ..., Linking } from 'react-native';

Tambahkan kedalam destructure code :

    const { title, artist, thumbnail_image, image, url } = album;

Edit Button Tag

    <Button onPress={() => Linking.openURL(url)} >

Test di screen! :)

## Set Button text dengan props

Update Button seperti dibawah ini:

    <Button onPress={() => Linking.openURL(url)} >
      Buy Now
    </Button>

Tambahkan props children pada const Button:

    const Button = ({ onPress, children }) => {

Dan tambahkan variable children pada Button TouchableOpacity.

    <TouchableOpacity onPress={ onPress } style={styles.buttonStyle}>
      <Text style={styles.textStyle} >
        {children}
      </Text>
    </TouchableOpacity>

Test di screen! 

### Hasil Akhir

![24-end-result](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_500,w_300/v1500090720/albums-app/24-end-result.png)

and done ! :)