// Requisito 03
// Teste RTL

import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, act } from '@testing-library/react/';
import FavoritePokemon from '../pages/FavoritePokemon';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Requisito 03: teste FavoritePokemon.test.js', () => {
  test('testa se os pkmns favoritados aparecem na tela', () => {
    const { history } = renderWithRouter(<App />);
    const detalhesCheck = screen.getByRole('link', { name: 'More details',
    });
    expect(detalhesCheck).toBeVisible();
    userEvent.click(detalhesCheck);
    const checkboxFav = screen.getByRole('checkbox', { id: 'favorite ',
    });
    expect(checkboxFav).toBeVisible();
    userEvent.click(checkboxFav);
    act(() => {
      history.push('/favorites');
    });
    expect(history.location.pathname).toBe('/favorites');
    const pkmnFav = screen.getByText(/pikachu/i);
    expect(pkmnFav).toBeInTheDocument();
  });

  test('testa a msg "not found" se nao tiver pokemon favoritado', () => {
    renderWithRouter(<FavoritePokemon />);
    const mensagemFavNotFound = screen.getByText('No favorite Pokémon found');
    expect(mensagemFavNotFound).toBeInTheDocument();
  });
});
