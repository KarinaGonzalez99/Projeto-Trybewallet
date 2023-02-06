// Coloque aqui suas actions
export const EMAIL_SALVO = 'EMAIL_SALVO';
export const CURRENCIES = 'CURRENCIES';
export const VALOR = 'VALOR';

export const emaill = (email) => ({
  type: EMAIL_SALVO,
  payload: email,
});

export const currenciess = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export const valorr = (valor) => ({
  type: VALOR,
  valor,
});

export function fetchApi() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((data) => dispatch(currenciess(data)));
  };
}
