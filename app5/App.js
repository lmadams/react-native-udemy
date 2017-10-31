import React from 'react';
import {
  StackNavigator
} from 'react-navigation'
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

const App = StackNavigator({
  CenaPrincipal: {
    screen: CenaPrincipal,
    navigationOptions: {
      headerTitle: 'ATM Consultoria',
      headerStyle: {
        backgroundColor: '#CCC'
      }
    },
  },
  CenaClientes: {
    screen: CenaClientes,
    navigationOptions: {
      headerTitle: 'Clientes',
      headerStyle: {
        backgroundColor: '#B9C941'
      },
    },
  },
  CenaEmpresa: {
    screen: CenaEmpresa,
    navigationOptions: {
      headerTitle: 'Empresa',
      headerStyle: {
        backgroundColor: '#EC7148'
      },
    },
  },
  CenaServicos: {
    screen: CenaServicos,
    navigationOptions: {
      headerTitle: 'Serviços',
      headerStyle: {
        backgroundColor: '#19D1C8'
      },
    },
  },
  CenaContatos: {
    screen: CenaContatos,
    navigationOptions: {
      headerTitle: 'Contatos',
      headerStyle: {
        backgroundColor: '#61BD8C'
      },
    },
  }
});

export default App;
