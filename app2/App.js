// Imports 
import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Image, Alert} from 'react-native';

// Estilos
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const onClick = () => {
  const numeroAleatorio = Math.floor(Math.random() * 5);
  
  const frases = Array();
  frases[0] = 'Tão bom morrer de amor! E continuar vivendo...';
  frases[1] = 'Vós, que sofreis, porque amais, amai ainda mais. Morrer de amor é viver dele.';
  frases[2] = 'Ainda não vi ninguém que ame a virtude tanto quanto ama a beleza do corpo.';
  frases[3] = 'Tenho em mim todos os sonhos do mundo.';
  frases[4] = 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.';

  Alert.alert(frases[numeroAleatorio]);
};

// Componete
const App = () => {
  return (
    <View style={ Estilos.principal }>
      <Image source={require('./img/logo.png')} />
      <TouchableOpacity 
        style={ Estilos.botao}
        onPress={onClick}
      >
        <Text style={ Estilos.textoBotao }>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
