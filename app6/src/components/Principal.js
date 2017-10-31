import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux'

export const COR_FUNDO = '#61BD8C';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutrosJogos= require('../imgs/outros_jogos.png');

export default class Principal extends Component<{}> {
  render() {
    return (
      <View style={ Estilo.cenaPrincipal }>

        <View style={ Estilo.apresentacaoJogo }>
          <Image source={logo} />
          <TouchableHighlight
            onPress={() => Actions.resultado()}
          >
            <Image source={btnJogar} />
          </TouchableHighlight>
        </View>

        <View style={ Estilo.rodape }>
          <TouchableHighlight
            onPress={() => Actions.sobrejogo()}
          >
            <Image source={btnSobreJogo} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => Actions.outrosjogos()}
          >
            <Image source={btnOutrosJogos} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
};

const Estilo = StyleSheet.create({
  cenaPrincipal: {
    backgroundColor: COR_FUNDO,
    flex: 1
  },
  apresentacaoJogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});