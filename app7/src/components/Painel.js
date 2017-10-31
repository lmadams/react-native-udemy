import React, { Component } from 'react'
import { View } from 'react-native'

import Entrada from './Entrada';
import Operacao from './Operacao';
import Comando from './Comando';

export class Painel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: '',
      num2: ''
    }
  }

  calcular() {
    console.log('calcular')
  }

  render() {
    return (
      <View>
        <Entrada
          num1={this.state.num1}
          num2={this.state.num2}
        />
        <Operacao/>
        <Comando
          acao={this.calcular}
        />
      </View>
    )
  }
}
