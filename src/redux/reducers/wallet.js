// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { CURRENCIES, VALOR } from '../actions';

const INITIAL_STATE = {
  valor: 0,
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      currencies: Object.keys(action.currencies).filter((filtro) => filtro !== 'USDT'),
    };
  case VALOR:
    return {
      valor: action.valor,
    };
  default:
    return state;
  }
};

export default wallet;
