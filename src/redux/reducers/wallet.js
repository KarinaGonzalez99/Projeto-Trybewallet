// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas

import { CURRENCIES, VALOR, ADD_COINS, DEL_ON, EDIT } from '../actions';

const INITIAL_STATE = {
  valor: 0,
  currencies: [],
  expenses: [],
  idToEdit: 0,
  edit: {},
  editor: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.currencies).filter((filtro) => filtro !== 'USDT'),
    };
  case VALOR:
    return {
      ...state,
      valor: action.valor,
    };
  case ADD_COINS:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.currencies }],
    };
  case DEL_ON:
    return {
      ...state,
      expenses: action.payload,
    };
  case EDIT:
    return {
      ...state,
      editor: true,
      idToEdit: action.payload.id,
      edit: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
