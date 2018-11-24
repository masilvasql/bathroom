import React from 'react';
import { StyleSheet, View } from 'react-native';
import PortaAberta from '../components/PortaAberta'
import PortaFechada from '../src/components/PortaFechada'
import axios from 'axios'

export default class App extends React.Component {

  constructor(){
    super()
    this.state={
      status:'Abrir'
    }
  }

  atualizaStatus(){
    axios.get('http://192.168.5.102:3000/buscaStatus')
    .then(resp=>{
      this.setState({status:resp.data})
    })
  }

  render() {
    this.atualizaStatus()
    return (
      <View style={{flex:1}}>
        {this.state.status == 'Abrir' ? <PortaAberta/> : <PortaFechada/>}
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
