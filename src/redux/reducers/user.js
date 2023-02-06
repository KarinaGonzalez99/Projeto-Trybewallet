// Esse reducer será responsável por tratar as informações da pessoa usuária
import { EMAIL_SALVO } from '../actions';

const INITIAL_STATE = { // armazena o email
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case EMAIL_SALVO:
    return {
      email: action.payload,
    };
  default: return state;
  }
};

export default user;
