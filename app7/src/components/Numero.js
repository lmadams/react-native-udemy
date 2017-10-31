import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default props => (
  <TextInput
    style={Estilo.numero}
    value={props.num}
  />
);

const Estilo = StyleSheet.create({
  numero: {
    width: 140,
    height: 80,
    fontSize: 20
  }
});
