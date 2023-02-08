import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <th>Descrição</th>
          <th>Moeda de conversão</th>
          <th>Moeda</th>
          <th>Valor</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Editar/Excluir</th>
        </table>
      </div>
    );
  }
}

export default Table;
// A tabela possui um cabeçalho com elementos <th> com os valores Descrição, Tag, Método de pagamento,Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir.
