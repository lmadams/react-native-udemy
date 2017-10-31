import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () => (
  <View style={Estilo.topo}>
    <Text style={Estilo.txtTitulo}>Calculadora 1.0</Text>
  </View>
)

const Estilo = StyleSheet.create({
  topo: {
    backgroundColor: '#2196F3',
    padding: 10,
    alignItems: 'center'
  },
  txtTitulo: {
    fontSize: 25,
    color: '#FFF'
  }
});