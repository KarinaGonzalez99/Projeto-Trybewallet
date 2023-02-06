// configure aqui sua store

import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducerIndex from './reducers/index';

const store = createStore(reducerIndex, composeWithDevTools());

if (window.Cypress) {
  window.store = store;
}
export default store;
