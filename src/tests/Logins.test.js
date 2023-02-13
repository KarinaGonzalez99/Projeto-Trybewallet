import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Teste o Login', () => {
  it('Teste se existe um input para email e senha e um botao para acessar', () => {
    renderWithRouterAndRedux(<App />);
    const emails = 'example@example.com';
    const inputmail = 'email-input';
    const errorr = 'boi';
    const pass = '123456789';
    const inpoutpass = 'password-input';
    const errorpass = 'çlkj';
    const email = screen.getByTestId(inputmail);
    expect(email).toBeInTheDocument();
    userEvent.type(email, errorr);
    userEvent.clear(screen.getByTestId(inputmail));
    userEvent.type(screen.getByTestId(inputmail), emails);
    const senha = screen.getByTestId(inpoutpass);
    expect(senha).toBeInTheDocument();
    userEvent.type(password, errorpass);
    userEvent.clear(screen.getByTestId(inpoutpass));
    const btn = screen.getByRole('button', { name: /entrar/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toBeDisabled();
    expect(btn).toBeDisabled();
    userEvent.type(screen.getByTestId(inpoutpass), pass);
    expect(screen.getByRole('button', { name: 'Entrar' })).toBeEnabled();
  });
});
