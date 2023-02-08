import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchApi, fetchCambio } from '../redux/actions';

class WalletForm extends Component {
  state = {
    value: '',
    tag: 'Alimentação',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchApi());
  }

  handleCaptureTarget = (event) => {
    const { target } = event;
    const targetValue = target.value;
    const targetName = target.name;
    this.setState({
      [targetName]: targetValue,
    });
  };

  handleButtonClick = () => {
    const { addCoins, dispatch } = this.props;
    const { value, tag, description, currency, method } = this.state;
    dispatch(fetchCambio({
      value,
      tag,
      description,
      currency,
      method,
      id: addCoins.length }));
    this.setState({
      value: '',
      tag: 'Alimentação',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
    });
  };

  render() {
    const { moedas } = this.props;
    const { value, tag, description, currency, method } = this.state;
    return (
      <div>
        <label htmlFor="descricao">
          Descrição :
          <input
            name="description"
            type="text"
            data-testid="description-input"
            onChange={ this.handleCaptureTarget }
            value={ description }
          />
        </label>

        <label htmlFor="valor">
          Valor :
          <input
            name="value"
            type="number"
            data-testid="value-input"
            placeholder="Digite o valor"
            onChange={ this.handleCaptureTarget }
            value={ value }
          />
        </label>

        <label htmlFor="moeda">
          Moeda :
          <select
            name="currency"
            htmlFor="moeda"
            data-testid="currency-input"
            onChange={ this.handleCaptureTarget }
            value={ currency }
          >
            { moedas.map((item) => <option key={ item } value={ item }>{ item }</option>)}
          </select>
        </label>

        <label htmlFor="categoria">
          Categoria :
          <select
            name="tag"
            htmlFor="categoria"
            data-testid="tag-input"
            onChange={ this.handleCaptureTarget }
            value={ tag }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer" selected>Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>

        <label htmlFor="pagamento">
          Método de pagamento :
          <select
            name="method"
            htmlFor="pagamento"
            data-testid="method-input"
            onChange={ this.handleCaptureTarget }
            value={ method }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito" selected>Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <button onClick={ this.handleButtonClick }>Adicionar despesa</button>

      </div>
    );
  }
}

WalletForm.propTypes = {
  addCoins: PropTypes.shape({
    length: PropTypes.string,
  }),
  dispatch: PropTypes.func,
  moedas: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  moedas: state.wallet.currencies,
  addCoins: state.wallet.expenses,
});

export default connect(mapStateToProps)(WalletForm);
