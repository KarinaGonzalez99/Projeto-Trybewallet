import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import Wallet from '../pages/Wallet';
import mockData from './helpers/mockData';

describe('Wallet', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: () => mockData,
    });
  });

  it('Wallet', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const value = screen.getByTestId('value-input');
    expect(value).toBeInTheDocument();
    userEvent.click(value);

    const currency = screen.getByTestId('currency-input');
    expect(currency).toBeInTheDocument();
    userEvent.click(currency);

    const method = screen.getByTestId('method-input');
    expect(method).toBeInTheDocument();
    userEvent.click(method);

    const tag = screen.getByTestId('tag-input');
    expect(tag).toBeInTheDocument();
    userEvent.click(tag);

    const description = screen.getByTestId('description-input');
    expect(description).toBeInTheDocument();
    userEvent.click(description);

    const button = screen.getByText('Adicionar despesa');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });
});
