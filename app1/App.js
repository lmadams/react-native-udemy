// GLOBAL IMPORTS
import React, { Component } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

export default class App extends Component<{}> {

  gerarNumeroAleatorio = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10);
    alert(numeroAleatorio);
  }

  render() {
    return (
      <View>
        <Text>Gerador de números randomicos!!!</Text>
        <Button 
          title="GErar um número randômico"
          onPress={this.gerarNumeroAleatorio}
        />
      </View>
    );
  }
}
