import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

export default () => (
  <View>
    <TextInput
      placeholder='Resultado'
      editable={false}
      style={Estilo.visor}
    />
  </View>
);

const Estilo = StyleSheet.create({
  visor: {
    height: 100,
    fontSize: 30
  }
});
