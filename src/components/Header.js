import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, taxa } = this.props;
    let total = 0;
    taxa.forEach((event) => {
      const taxaDeCambio = event.exchangeRates[event.currency];
      total += taxaDeCambio.ask * event.value;
    });

    return (
      <header>
        <h1>TRYBEWALLET</h1>
        <p data-testid="email-field">{email}</p>
        <h4>
          Despesa Total:
          <span data-testid="total-field">{ total.toFixed(2) }</span>
        </h4>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
  taxa: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
  taxa: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
