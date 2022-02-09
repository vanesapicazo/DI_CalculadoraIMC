import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Calculadora from "./components/calculadora";
import Footer from "./components/Footer";
import Cabecera from "./components/Cabecera";

class App extends Component{

  render(){
    return(
      <View style = {estilos.contenido}>
        <Cabecera></Cabecera>
        <Calculadora></Calculadora>
        <Footer></Footer>
      </View>
    )
  }
}


const estilos = StyleSheet.create ({
  contenido: {
    backgroundColor:'#9370db',
    flex: 1,
    flexDirection: "column"
  }
});

export default App;