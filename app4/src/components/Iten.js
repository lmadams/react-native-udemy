import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native'

export default class Iten extends Component {
  render() {
    return (
      <View style={Estilos.item}>
        <View style={Estilos.foto}>
          <Image
            source={{ uri: this.props.detalhe.foto}}
            style={{ height: 100, width: 100 }}
          />
        </View>

        <View style={Estilos.detalhes}>
          <Text style={Estilos.txtTitulo}>{this.props.detalhe.titulo}</Text>
          <Text style={Estilos.txtValor}>R$ {this.props.detalhe.valor}</Text>
          <Text style={Estilos.txtItem}>Local: {this.props.detalhe.local_anuncio}</Text>
          <Text style={Estilos.txtItem}>Dt publicação: {this.props.detalhe.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const Estilos = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102
  },
  detalhes: {
    marginLeft: 20,
    flex: 1
  },
  txtTitulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  txtValor: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  txtItem: {
    fontSize: 16
  }
});
