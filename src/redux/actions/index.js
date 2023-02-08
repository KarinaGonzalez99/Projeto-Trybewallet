// Coloque aqui suas actions
export const EMAIL_SALVO = 'EMAIL_SALVO';
export const VALOR = 'VALOR';
export const CURRENCIES = 'CURRENCIES';
export const ADD_COINS = 'ADD_COINS';

export const actionEmail = (email) => ({
  type: EMAIL_SALVO,
  payload: email,
});

export const currenciess = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export const actionValor = (valor) => ({
  type: VALOR,
  valor,
});

export const currienciessadd = (currencies) => ({
  type: ADD_COINS,
  currencies,
});

export function fetchApi() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(currenciess(data)));
  };
}

export const fetchCambio = (gastos) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((data) => {
      delete data.USDT;
      gastos = { ...gastos, exchangeRates: data };
      dispatch(currienciessadd(gastos));
    });
};
