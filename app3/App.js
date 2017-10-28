// GLOBAL IMPORTs
import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';

// LOCAL IMPORTs
import Topo from './Topo';
import Icone from './Icone';

// CONTs
export const PEDRA = 'pedra';
export const PAPEL = 'papel';
export const TESOURA = 'tesoura';

const EMPATE = 'Empatou!';
const USUARIO_GANHOU = 'Você ganhou!';
const COMPUTADOR_GANHOU = 'Você ganhou!';

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo (escolhaUsuario) {
    // Gera numero aleatorio (0, 1, 2)
    const num = Math.floor(Math.random() * 3);
    let escolhaComputador = '';
    switch (num) {
      case 0: escolhaComputador = PEDRA; break;
      case 1: escolhaComputador = PAPEL; break;
      case 2: escolhaComputador = TESOURA; break;
    }

    let resultado = '';
    if (escolhaComputador === PEDRA) {
      if (escolhaUsuario === PEDRA) {
        resultado = EMPATE;
      }

      if (escolhaUsuario === PAPEL) {
        resultado = USUARIO_GANHOU;
      }

      if (escolhaUsuario === TESOURA) {
        resultado = COMPUTADOR_GANHOU;
      }
    }

    if (escolhaComputador === PAPEL) {
      if (escolhaUsuario === PAPEL) {
        resultado = EMPATE;
      }

      if (escolhaUsuario === TESOURA) {
        resultado = USUARIO_GANHOU;
      }

      if (escolhaUsuario === PEDRA) {
        resultado = COMPUTADOR_GANHOU;
      }
    }

    if (escolhaComputador === TESOURA) {
      if (escolhaUsuario === TESOURA) {
        resultado = EMPATE;
      }

      if (escolhaUsuario === PAPEL) {
        resultado = COMPUTADOR_GANHOU;
      }

      if (escolhaUsuario === PEDRA) {
        resultado = USUARIO_GANHOU;
      }
    }

    this.setState({
      escolhaUsuario,
      escolhaComputador,
      resultado
    });
  }

  render() {
    return (
      <View>
        
        <Topo />
        
        <View style={ styles.botoesContainer }>
          <View style={ styles.btnEscolha }>
            <Button title='Pedra' onPress={() => this.jokenpo(PEDRA)} />
          </View>
          <View style={ styles.btnEscolha }>
            <Button title='Papel' onPress={() => this.jokenpo(PAPEL)} />  
          </View>
          <View style={ styles.btnEscolha }>
            <Button title='Tesoura' onPress={() => this.jokenpo(TESOURA)} />
          </View>
        </View>
        
        <View style={ styles.palco }>
          <Text style={ styles.txtResultado }>
            {this.state.resultado}
          </Text>

          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />      
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
