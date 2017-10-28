import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native';

//LOCAL IMPORTs
import {PAPEL, PEDRA, TESOURA} from './App';

// PROPS
// Escolha
// Jogador
export default class Icone extends Component {
  static renderImg (img)  {
    switch (img) {
      case PAPEL:
        return (<Image source={require('./img/papel.png')} />);
      case PEDRA:
        return (<Image source={require('./img/pedra.png')} />);
      case TESOURA:
        return (<Image source={require('./img/tesoura.png')} />);
    }
  }

  render () {
    const { escolha, jogador } = this.props;

    if (escolha) {
      return (
        <View style={ Estilo.icone }>
          <Text style={ Estilo.txtJogador }>{jogador}</Text>
          {Icone.renderImg(escolha)}
        </View>
      )
    } else {
      return null;
    }
  }
}

const Estilo = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});
