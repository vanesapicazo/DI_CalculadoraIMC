import React, {Component} from "react";
import {StyleSheet, View, Text} from "react-native";

export default class Footer extends Component{

    render(){
        return(
            <View style = {estilos.piedepagina}>
                <Text style = {estilos.text}> Created for Vanesa Picazo </Text>
            </View>
        )
    }
}

const estilos = StyleSheet.create ({
    piedepagina: {
        backgroundColor: "#f0ffff",
        borderColor: "#000000",
        fontSize: 25
    },

    text: {
        color: "#a9a9a9",
        fontSize: 15,
        alignSelf: "center"
    },
})