import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { expenses } = this.props; // chamado da api
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

        <tbody>
          {expenses.map((event) => (
            <tr key={ event }>
              <td>
                {event.description}
              </td>
              <td>
                {event.tag}
              </td>
              <td>
                {event.method}
              </td>
              <td>
                {Number(event.value).toFixed(2)}
              </td>
              <td>
                {event.exchangeRates[event.currency].name}
              </td>
              <td>
                {Number(event.exchangeRates[event.currency].ask).toFixed(2)}
              </td>
              <td>
                {Number(event.exchangeRates[event.currency].ask).toFixed(2)}
              </td>
              <td>
                {Number(event.exchangeRates[event.currency].ask * event.value).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </div>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(),
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

// A tabela possui um cabeçalho com elementos <th> com os valores Descrição, Tag, Método de pagamento,Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir.
