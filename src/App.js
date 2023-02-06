import React, { Component } from 'react'; // iniciando
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/carteira" component={ Wallet } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App; // manter embaixo casa haja necessidade de connect
