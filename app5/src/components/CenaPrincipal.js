import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuService = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={ Estilos.fundo }>
        <StatusBar
          backgroundColor='#CCC'
        />

        <View style={Estilos.logo}>
          <Image source={logo} />
        </View>
        <View style={Estilos.menu}>

          <View style={Estilos.menuGrupo}>
            <TouchableOpacity
              onPress={() => (
                navigate('CenaClientes')
              )}
            >
              <Image style={Estilos.imgMenu} source={menuCliente} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (
                navigate('CenaContatos')
              )}
            >
              <Image style={Estilos.imgMenu} source={menuContato} />
            </TouchableOpacity>
          </View>

          <View style={Estilos.menuGrupo}>
            <TouchableOpacity
              onPress={() => (
                navigate('CenaEmpresa')
              )}
            >
              <Image style={Estilos.imgMenu} source={menuEmpresa} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => (
                navigate('CenaServicos')
              )}
            >
              <Image style={Estilos.imgMenu} source={menuService} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const Estilos = StyleSheet.create({
  fundo: {
    backgroundColor: '#fff',
    flex: 1
  },
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center'
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
