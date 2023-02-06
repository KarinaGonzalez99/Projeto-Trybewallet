import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchApi } from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  render() {
    const { moedas } = this.props;
    return (
      <>
        <label htmlFor="descricao">
          Descrição :
          <input type="text" data-testid="description-input" />
        </label>

        <label htmlFor="valor">
          Valor :
          <input type="number" data-testid="value-input" />
        </label>

        <label htmlFor="moeda">
          Moeda :
          <select htmlFor="moeda" data-testid="currency-input">
            { moedas.map((item) => (
              <option
                key={ item }
                value={ item }
              >
                { item }
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="categoria">
          Categoria :
          <select htmlFor="categoria" data-testid="tag-input">
            <option value="Lazer" selected>Lazer</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Saúde">Saúde</option>
            <option value="Transporte">Transporte</option>
            <option value="Trabalho">Trabalho</option>
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento :
          <select htmlFor="pagamento" data-testid="method-input">
            <option value="dinheiro">Dinheiro</option>
            <option value="débito">Cartão de débito</option>
            <option value="crédito" selected>Cartão de crédito</option>
          </select>
        </label>

      </>
    );
  }
}

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  moedas: PropTypes.array,
}.isRequired;

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
});

export default connect(mapStateToProps)(WalletForm);
