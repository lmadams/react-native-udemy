import React, { Component } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Text
} from 'react-native';

const detalheServicos = require('../imgs/detalhe_servico.png');

const corHeader = '#19D1C8';

export default class CenaServicos extends Component {
  render() {
    return (
      <View style={ Estilos.fundo }>
        <StatusBar
          backgroundColor={corHeader}
        />

        <View style={Estilos.cabecalho}>
          <Image source={detalheServicos} />
          <Text style={Estilos.txtTitulo}>Nossos serviços</Text>
        </View>

        <View style={Estilos.detalheServicos}>
          <Text style={Estilos.txtServicos}>. Consultoria</Text>
          <Text style={Estilos.txtServicos}>. Processos</Text>
          <Text style={Estilos.txtServicos}>. Acompanhamento de Projetos</Text>
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
  detalheServicos: {
    marginTop: 20,
    padding: 20
  },
  txtServicos: {
    fontSize: 18
  }
});
