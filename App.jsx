import React, { Component } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Pub from "./components/pub";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pubs: [
        {
          id: '1', 
          name: 'Lucas Silva', 
          description: 'Mais um dia de muitos bugs :)', 
          imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPub: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          liked: false, 
          likes: 0
         },
        {
          id: '2', 
          name: 'Matheus', 
          description: 'Isso sim é ser raiz!!!!!', 
          imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPub: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          liked: false, 
          likes: 0
        },
        {
          id: '3', 
          name: 'Jose Augusto', 
          description: 'Bora trabalhar Haha', 
          imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPub: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          liked: false, 
          likes: 3
        },
        {
          id: '4', 
          name: 'Gustavo Henrique', 
          description: 'Isso sim que é TI!', 
          imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPub: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          liked: false, 
          likes: 1
        },
        {
          id: '5', 
          name: 'Guilherme', 
          description: 'Boa tarde galera do insta...', 
          imgProfile: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPub: 'https://sujeitoprogramador.com/instareact/foto5.png',
          liked: false, 
          likes: 32
        }
      ]
    };
  }

  render() {
    return(
      <SafeAreaView style={ styles.container }>

        <View style={ styles.header }>
          <TouchableOpacity>
            <View>
              <Image source={ require("./src/img/logo.png") } style={ styles.logo } />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <Image source={ require("./src/img/send.png") } style={ styles.send } />
            </View>
          </TouchableOpacity>
        </View>

        <FlatList 
          showsVerticalScrollIndicator={false} 
          keyExtractor={ (item) => item.id }
          data={this.state.pubs} 
          renderItem={ ({item}) => <Pub data={item} /> } 
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 50,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },
  logo: {
  },
  send: {
    width: 23,
    height: 23
  }
});

export default App;