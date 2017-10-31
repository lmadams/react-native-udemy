import React, { Component } from 'react';
import { Picker, StyleSheet } from 'react-native';

export default class Operacao extends Component {
  constructor(props) {
    super(props);

    this.state = { operacao: '' };
  }

  render() {
    return (
      <Picker
        style={Estilo.operacao}
        selectedValue={this.state.operacao}
        onValueChange={operacao => this.setState({operacao})}
      >
        <Picker.Item label='Soma' value='soma'/>
        <Picker.Item label='Subtração' value='subtracao'/>
      </Picker>
    )
  }
}

const Estilo = StyleSheet.create({
  operacao: {
    marginTop: 15,
    marginBottom: 15
  }
});