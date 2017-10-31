import React, { Component } from 'react';
import axios from 'axios';
import {
  ScrollView
} from 'react-native'
import Iten from './Iten';

export default class ListaItens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaItens: []
    }
  }
  componentWillMount() {
    const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';
    axios.get(url)
      .then(resp => {
        this.setState({listaItens: resp.data})
      })
      .catch(() => console.error('Erro ao recuperar os dados!'));
  }

  render() {
    const itens = this.state.listaItens.map(item => (
      <Iten
        key={item.titulo}
        detalhe={item}
      />
    ));

    return (
      <ScrollView style={{ backgroundColor: '#DDD' }}>
        {itens}
      </ScrollView>
    );
  }
}
