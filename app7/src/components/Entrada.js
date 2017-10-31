import React from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './Numero';

export default props => (
  <View style={Estilo.numeros}>
    <Numero num={props.num1} />
    <Numero num={props.num2} />
  </View>
);

const Estilo = StyleSheet.create({
  numeros: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});