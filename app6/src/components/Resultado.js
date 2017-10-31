import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native'
const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');


const STR_CARA = 'cara';
const STR_COROA = 'coroa';

export default class Resultado extends Component {
  constructor(props) {
    super(props);

    this.state = { resultado: ''}
  }

  componentWillMount() {
    const numAleatorio = Math.floor(Math.random() * 2);
    let caraOuCoroa = '';
    if (numAleatorio === 0) {
      caraOuCoroa = STR_CARA;
    } else {
      caraOuCoroa = STR_COROA;
    }

    this.setState({
      resultado: caraOuCoroa
    })
  }

  render() {
    return (
      <View style={Estilo.resultado}>
        {
          this.state.resultado === STR_CARA ? (
            <Image source={cara} />
          ) : (
            <Image source={coroa} />
          )
        }
      </View>
    )
  }
}

const Estilo = StyleSheet.create({
  resultado: {
    backgroundColor: '#61BD8C',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
