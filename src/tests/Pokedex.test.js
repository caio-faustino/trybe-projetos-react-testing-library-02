// Requisito 05
// Teste RTL

import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react/';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Requisito 04: teste Pokedex.test.js', () => {
  beforeEach(() => renderWithRouter(<App />));

  test('testa o funcionamento do botao next pkmn', () => {
    const actualPKMN = screen.getByText('Pikachu');
    const btnNextPKMN = screen.getByRole('button', { name: /próximo pokémon/i,
    });
    pokemonList.forEach((pokemon) => {
      expect(actualPKMN === pokemon.name);
      userEvent.click(btnNextPKMN);
    });
    expect(actualPKMN.innerHTML).toBe('Pikachu');
  });

  test('testa o head encountering pkmn', () => {
    const textPokedex = screen.getByRole('heading', { name: /encountered pokémon/i,
    });
    expect(textPokedex).toBeVisible();
  });

  const btnAll = screen.getByRole('button', { name: /all/i,
  });
  const actualPKMN = screen.getByTestId('pokemon-name');
  expect(btnAll).toBeVisible();
  userEvent.click(btnAll);
  expect(btnAll).toBeVisible();
  expect(actualPKMN.innerHTML).toBe('Pikachu');
});

test('testa o funcionamentos dos botoes do filtro da pokedex', () => {
  const btnOver = screen.getAllByTestId('pokemon-type-button');
  btnOver.forEach((button) => expect(button).toBeVisible());

  const fiscPKMN = pokemonList.filter((pokemon) => pokemon.type === 'Psychic');
  const fiscBtn = screen.getByRole('button', { name: /psychic/i,
  });
  const btnNextPKMN = screen.getByRole('button', { name: /próximo pokémon/i,
  });
  userEvent.click(fiscBtn);
  fiscPKMN.forEach((pokemon) => {
    expect(pokemon.name).toBe(screen.getAllByTestId('pokemon-name')[0].innerHTML);
    userEvent.click(btnNextPKMN);
  });
});
