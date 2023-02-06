import React, { Component } from 'react'; // iniciando
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { emaill } from '../redux/actions';

class Login extends Component {
  state = {
    email: '',
    password: '',
    buttonDisabled: true,
  };

  handleEmailValidation = (email) => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\)?$/i.test(email);

  handleInputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, this.handleValidatePasswordInput);
  };

  handleValidatePasswordInput = () => {
    const { password, email } = this.state;
    const caracteres = 6;
    this.setState({
      buttonDisabled: password.length < caracteres || !this.handleEmailValidation(email),
    });
  };

  handlePageRedirect = () => {
    const { dispatch, history } = this.props;
    const { email } = this.state;
    dispatch(emaill(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, buttonDisabled } = this.state;
    return (
      <div>
        <input
          type="email"
          name="email"
          id="email"
          data-testid="email-input"
          placeholder="example@example.com"
          value={ email }
          onChange={ this.handleInputChange }
        />
        <input
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
          placeholder="123456789"
          value={ password }
          onChange={ this.handleInputChange }
        />
        <button disabled={ buttonDisabled } onClick={ this.handlePageRedirect }>
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  ...state.actionCreator,
});

// export default Login;
export default connect(mapStateToProps)(Login);
