import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

export default class Cabecera extends Component{
    render(){
        return(
            <View style = {estilos.cabecera}>
                <Text style = {estilos.title}> Calculadora IMC </Text>
            </View>
        )
    }
}

const estilos = StyleSheet.create ({
    cabecera: {
        flex: 0.3
    },

    title: {
        color: "#fffafa",
        fontSize: 40,
        alignContent: "center",
        marginTop: 20

    }
});