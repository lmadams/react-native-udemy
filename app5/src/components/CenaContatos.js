import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text
} from 'react-native';

const detalheContatos = require('../imgs/detalhe_contato.png');

const corHeader = '#61BD8C';

export default class CenaContatos extends Component {
  render() {
    return (
      <View style={ Estilos.fundo }>
        <StatusBar
          backgroundColor={corHeader}
        />

        <View style={Estilos.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={Estilos.txtTitulo}>Contatos</Text>
        </View>

        <View style={Estilos.detalheContatos}>
          <Text style={Estilos.txtContato}>TEL: (11) 1234-5678</Text>
          <Text style={Estilos.txtContato}>TEL: (11) 9876-5432</Text>
          <Text style={Estilos.txtContato}>E-MAIL: (11) 9876-5432</Text>
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
  detalheContatos: {
    marginTop: 20,
    padding: 20
  },
  txtContato: {
    fontSize: 18
  }
});
