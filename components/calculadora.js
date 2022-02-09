import React, {Component} from "react";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {Button, TextInput} from "react-native";


const calculaimc = (peso, altura) => {
    let total = peso / (altura ** 2);
    return total;
}

const clasificacion = (resultado) => {
    let valoracion = "";

    if(resultado < 18.5){
        valoracion = "Peso insuficiente";
    } else if(resultado >= 18.5 && resultado < 25){
        valoracion = "Normopeso";
    } else if(resultado >= 25 && resultado < 27){
        valoracion = "Sobrepeso grado I";
    } else if(resultado >= 27 && resultado < 30){
        valoracion = "Sobrepeso grado II (preobesidad)";
    } else if(resultado >= 30 && resultado < 35){
        valoracion = "Obesidad tipo I";
    } else if(resultado >= 35 && resultado < 40){
        valoracion = "Obesidad tipo II";
    } else if(resultado >= 40 && resultado < 50){
        valoracion = "Obesidad tipo III (mórbida)";
    } else if(resultado >= 50){
        valoracion = "Obesidad tipo IV (extrema)";
    }


    return resultado;
};


let color = "";
const colores = (imc) => {
    if(imc < 27){
        color = "menorque27";
    }else if(imc >= 40){
        color = "mayorque40";
    }else{
        color = "intermedio";
    }

    return color;
};

export class CalculadoraIMC extends Component{
    introducirAltura = null;

    constructor(props){
        super(props);
        this.state = {
            peso: "",
            altura: "",
            resultado: "",
            imc: "",
        };
    }


    render(){
        return(
            <>
                <View style = {estilos.recuadro}>
                    <View>
                        <Text style={estilos.title2}> Datos </Text>
                    </View>
                    <View>
                        <Text style = {estilos.datos}> PESO </Text>
                        <TextInput style = {{fontSize: 15, marginLeft: 10}}
                                    value = {this.state.peso}
                                    keyboardType = "numeric"
                                    onChangeText = {(num) => {
                                        this.setState({peso: num});
                                    }}></TextInput>

                        <Text style={estilos.datos}> ALTURA </Text>
                        <TextInput style = {{fontSize: 15, marginLeft: 10}}
                                    value = {this.state.altura}
                                    keyboardType = "numeric"
                                    onChangeText={(num) => {
                                        this.setState({altura: num});
                                    }}></TextInput>
                        
                        <TouchableOpacity disabled = {!this.state.peso || !this.state.altura}
                                            style = {estilos.button}
                                            onPress = {() => {
                                                let imcfinal = calculaimc(this.state.peso, this.state.altura);
                                                console.log(imcfinal);
                                                colores(imcfinal);
                                                this.setState({resultado: imcfinal});
                                            }}>
                                                <Text style = {{color: "#006400"}}> CALCULAR IMC </Text>
                                            </TouchableOpacity>

                                            <View>
                                                <Text style = {estilos.resultado}> Resultado </Text>
                                                <Text style = { color === "menorque27" ? estilos.menorque27 :
                                                                color === "mayorque40" ? estilos.mayorque40 :
                                                                estilos.intermedio}>
                                                                    {this.state.resultado}
                                                                </Text>
                                            </View>

                    </View>
                </View>
            </>
        );
    }
}

const estilos = StyleSheet.create({
    recuadro: {
        backgroundColor: "#f0f8ff",
        padding: 2,
        paddingBottom: 38
    },

    title2: {
        color: "#00008b",
        fontSize: 27,
        marginLeft: 20,
        margin: 15
    },

    datos: {
        color: "#2f4f4f",
        fontSize: 17,
        marginLeft: 10
    },

    button: {
        backgroundColor: "#f0f8ff",
        alignItems: "center",
        borderColor: "#000000",
        borderRadius: 5,
        marginTop: 15,
        marginBottom: 8,
        padding: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },

    resultado: {
        fontSize: 13,
        marginLeft: 10,
    },

    menorque27: {
        color: "green",
    },

    intermedio: {
        color: "orange",
    },

    mayorque40: {
        color: "red",
    },
});