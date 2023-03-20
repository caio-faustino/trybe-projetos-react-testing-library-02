// Requisito 05
// Teste RTL

import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react/';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Requisito 05: teste Pokedéx.test.js', () => {
  beforeEach(() => renderWithRouter(<App />));

  test('testa se o botao next funciona legal', () => {
    const actualPokemon = screen.getByText('Pikachu');
    const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i,
    });
    pokemonList.forEach((pokemon) => {
      expect(actualPokemon === pokemon.name);
      userEvent.click(btnNextPokemon);
    });
    expect(actualPokemon.innerHTML).toBe('Pikachu');
  });

  test('testa se os botoes do filtro funcionam legal', () => {
    const fisicPokemon = pokemonList.filter((pokemon) => pokemon.type === 'Psychic');
    const btnFisicType = screen.getByRole('button', { name: /psychic/i,
    });
    const btnNextPokemon = screen.getByRole('button', { name: /próximo pokémon/i,
    });
    userEvent.click(btnFisicType);
    fisicPokemon.forEach((pokemon) => {
      expect(pokemon.name).toBe(screen.getAllByTestId('pokemon-name')[0].innerHTML);
      userEvent.click(btnNextPokemon);
    });

    const btnAll = screen.getAllByTestId('pokemon-type-button');
    btnAll.forEach((button) => expect(button).toBeVisible());

    const btnAllType = screen.getByRole('button', { name: /all/i,
    });
    const actualPokemon = screen.getByTestId('pokemon-name');
    expect(btnAllType).toBeVisible();
    userEvent.click(btnAllType);
    expect(actualPokemon.innerHTML).toBe('Pikachu');
    expect(btnAllType).toBeVisible();
  });

  test('testa se o head esta legal', () => {
    const textPokedex = screen.getByRole('heading', { name: /encountered pokémon/i,
    });
    expect(textPokedex).toBeVisible();
  });
});
