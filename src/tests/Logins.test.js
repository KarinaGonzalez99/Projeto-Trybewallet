import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('Login', () => {
  test('Login', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.findByPlaceholderText(/Email/i);
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.findByPlaceholderText(/Senha/i);
    expect(passwordInput).toBeInTheDocument();
    const submitBtn = screen.findByRole('button', { name: /entrar/i });
    expect(submitBtn).toBeInTheDocument();
  });
});
