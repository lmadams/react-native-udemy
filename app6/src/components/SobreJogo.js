import React, { Component } from 'react';
import { Text } from 'react-native';
import {COR_FUNDO} from '../../App';

export default class SobreJogo extends Component {
  render() {
    return (
      <Text style={{ flex: 1, backgroundColor: COR_FUNDO}}>
        Aqui podem ser apresentadas informações do jogo
      </Text>
    )
  }
}
