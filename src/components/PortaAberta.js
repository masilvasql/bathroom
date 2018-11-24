import React from 'react'
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import axios from 'axios'
export default class PortaAberta extends React.Component {

    fechaPorta(){
        axios.post('http://192.168.5.102:3000/trocarStatus', data={status:'Fechar'})
        .then(resp=>{
            console.log(resp.data)
        })
    }

    render() {
        return (
            <TouchableOpacity style={{ flex: 1 }} onPress={()=> this.fechaPorta()}>
                <ImageBackground source={require('../img/HiRes.jpg')} style={estilo.estiloImagem}>
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