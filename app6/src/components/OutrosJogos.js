import React, { Component } from 'react';
import { Text } from 'react-native';
import {COR_FUNDO} from '../../App';

export default class OutrosJogos extends Component {
  render() {
    return (
      <Text style={{ flex: 1, backgroundColor: COR_FUNDO}}>
        Aqui podem ser apresentadas informações sobre outros jogos do desenvolvedor
      </Text>
    )
  }
}
