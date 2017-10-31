import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';

export const COR_FUNDO = '#61BD8C';

const logo = require('./src/imgs/logo.png');
const btnJogar = require('./src/imgs/botao_jogar.png');
const btnSobreJogo = require('./src/imgs/sobre_jogo.png');
const btnOutrosJogos= require('./src/imgs/outros_jogos.png');

export default class App extends Component<{}> {
  render() {
    return (
      <View style={ Estilo.cenaPrincipal }>

        <View style={ Estilo.apresentacaoJogo }>
          <Image source={logo} />
          <Image source={btnJogar} />
        </View>

        <View style={ Estilo.rodape }>
          <Image source={btnSobreJogo} />
          <Image source={btnOutrosJogos} />
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