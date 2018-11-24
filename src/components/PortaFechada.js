import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import axios from 'axios'
export default class PortaFechada extends React.Component {

    fechaPorta(){
        axios.post('http://192.168.5.102:3000/trocarStatus', data={status:'Abrir'})
        .then(resp=>{
            
        })
    }

    render() {
        return (
            <TouchableOpacity style={{ flex: 1 }} onPress={()=> this.fechaPorta()}>
                <ImageBackground source={require('../img/closed-door.jpg')} style={estilo.estiloImagem}>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}




const estilo = StyleSheet.create({
    estiloImagem: {
        margin: 10,
        flex: 1
    }
})