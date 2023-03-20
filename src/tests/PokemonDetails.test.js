// Requisito 04
// Teste RTL

import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react/';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Requisito 07: teste PokemonDetails.js', () => {
  beforeEach(() => {
    renderWithRouter(
      <App />,
    );
    const linkDetails = screen.getByRole('link', { name: /more details/i,
    });
    expect(linkDetails).toBeVisible();
    userEvent.click(linkDetails);
  });

  test('testa favoridar pela pg detalhes', () => {
    const checkboxFav = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i,
    });
    expect(checkboxFav).toBeVisible();
    const checkboxFavLabel = screen.getByLabelText(/pokémon favoritado?/i);
    expect(checkboxFavLabel).toBeVisible();
    userEvent.click(checkboxFav);
    const iconFav = screen.getByAltText('Pikachu is marked as favorite');
    expect(iconFav).toBeVisible();
    userEvent.click(checkboxFav);
    expect(iconFav).not.toBeVisible();
  });

  test('testa head summary renderizado', () => {
    const sumario = screen.getByRole('heading', { name: /summary/i,
    });
    expect(sumario).toBeVisible();
  });

  test('testa texto pokemon', () => {
    const textPKMN = screen.getByText('This intelligent Pokémon', { exact: false,
    });
    expect(textPKMN).toBeVisible();
    expect(textPKMN.innerHTML).toBe(pokemonList[0].summary);
  });

  test('testa imagem dos mapas', () => {
    const imgMap = screen.getAllByAltText('Pikachu location');
    expect(imgMap.every((map, index) => (
      map.getAttribute('src') === pokemonList[0].foundAt[index].map))).toBe(true);
    expect(imgMap.every((map) => map.getAttribute('alt') === 'Pikachu location')).toBe(true);
  });

  test('testa sessao dos mapas da pokedex', () => {
    const titleMap = screen.getByRole('heading', { name: /game locations of pikachu/i,
    });
    expect(titleMap).toBeVisible();
  });

  test('testa head summary na tela', () => {
    const titlePKMN = screen.getByRole('heading', { name: /pikachu details/i,
    });
    expect(titlePKMN.innerHTML).toBe('Pikachu Details');
  });

  test('testa nome das localizacoes', () => {
    const textMapOne = screen.getByText(/kanto viridian forest/i);
    const textMapTwo = screen.getByText(/kanto power plant/i);
    expect(textMapOne && textMapTwo).toBeVisible();
  });
});
