import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text
} from 'react-native';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1= require('../imgs/cliente1.png');
const cliente2= require('../imgs/cliente2.png');

const corHeader = '#B9C941';

export default class CenaClientes extends Component {
  render() {
    return (
      <View style={ Estilos.fundo }>
        <StatusBar
          backgroundColor={corHeader}
        />

        <View style={Estilos.cabecalho}>
          <Image source={detalheCliente} />
          <Text style={Estilos.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={Estilos.detalheCliente}>
          <Image style={Estilos.imgMenu} source={cliente1} />
          <Text style={Estilos.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>

        <View style={Estilos.detalheCliente}>
          <Image style={Estilos.imgMenu} source={cliente2} />
          <Text style={Estilos.txtDetalheCliente}>Lorem ipsum dolorem</Text>
        </View>
      </View>
    );
  }
}

const Estilos = StyleSheet.create({
  fundo: {
    backgroundColor: '#fff',
    flex: 1
  },
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: corHeader,
    marginLeft: 10,
    marginTop: 25
  },
  detalheCliente: {
    marginTop: 10,
    padding: 20
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
});
