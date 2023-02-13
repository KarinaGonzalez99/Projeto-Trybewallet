import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletar } from '../redux/actions'; // creio que n passou no github por conta q eu esqueci essa parte

class Table extends Component {
  handleDelete = (id) => {
    const { dispatch } = this.props;
    dispatch(deletar(id));
  };

  render() {
    const { expenses } = this.props; // chamado da api
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Moeda de conversão</th>
              <th>Moeda</th>
              <th>Valor</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((event) => (
              <tr key={ event.id }>
                {/* horas tentando fazer passar porque eu esqueci do .id #bolada */}
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
                  {Number(event.exchangeRates[event.currency].ask * event.value)
                    .toFixed(2)}
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => this.handleDelete(event.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(),
  dispatch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Table);

// A tabela possui um cabeçalho com elementos <th> com os valores Descrição, Tag, Método de pagamento,Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir.
