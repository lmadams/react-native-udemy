import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text
} from 'react-native';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

const corHeader = '#EC7148';

export default class CenaEmpresa extends Component {
  render() {
    return (
      <View style={ Estilos.fundo }>
        <StatusBar
          backgroundColor={corHeader}
        />

        <View style={Estilos.cabecalho}>
          <Image source={detalheEmpresa} />
          <Text style={Estilos.txtTitulo}>Empresa</Text>
        </View>

        <View style={Estilos.detalheEmpresa}>
          <Text style={Estilos.txtEmpresa}>
            A ATM Consultoria está no mercado a mais de 20 anos ......
          </Text>
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
  detalheEmpresa: {
    marginTop: 20,
    padding: 20
  },
  txtEmpresa: {
    fontSize: 18
  }
});
