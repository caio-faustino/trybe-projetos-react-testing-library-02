// Requisito 06
// Teste RTL

import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react/';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemonList from '../data';

describe('Requisito 06: teste Pokemon.test.js', () => {
  test('testa o peso do pokemon funciona legal', () => {
    renderWithRouter(
      <App />,
    );
    const actualPKMNPeso = screen.getByTestId('pokemon-weight');
    expect(actualPKMNPeso).toBeInTheDocument();
    const primeiroPKMN = pokemonList[0];
    const { averageWeight: { value, measurementUnit } } = primeiroPKMN;
    const primeiroPKMNAverageWeight = `Average weight: ${value} ${measurementUnit}`;
    expect(actualPKMNPeso.innerHTML).toBe(primeiroPKMNAverageWeight);
  });

  test('testa o tipo do pokemon funciona legal', () => {
    renderWithRouter(
      <App />,
    );
    const actualPKMNTIpo = screen.getByTestId('pokemon-type');
    expect(actualPKMNTIpo).toBeInTheDocument();
    const primeiroPKMNType = pokemonList[0].type;
    expect(actualPKMNTIpo.innerHTML).toBe(primeiroPKMNType);
  });

  test('testa o botao detalhes funciona legal', () => {
    const { history } = renderWithRouter(
      <App />,
    );
    const btnDetalhes = screen.getByRole('link', { name: /more details/i,
    });
    userEvent.click(btnDetalhes);
    expect(history.location.pathname).toBe('/pokemon/25');
  });

  test('testa se renderiza o detalhe no card legal', () => {
    renderWithRouter(
      <App />,
    );
    const btnDetalhes = screen.getByRole('link', { name: /more details/i,
    });
    expect(btnDetalhes.getAttribute('href')).toBe('/pokemon/25');
    expect(btnDetalhes).toBeVisible();
  });

  test('testa o icone star no favorito funciona legal', () => {
    renderWithRouter(
      <App />,
    );
    const btnDetalhes = screen.getByRole('link', { name: /more details/i,
    });
    expect(btnDetalhes).toBeVisible();
    userEvent.click(btnDetalhes);
    const checkPKMNFav = screen.getByRole('checkbox', { id: 'favorite',
    });
    expect(checkPKMNFav).toBeVisible();
    userEvent.click(checkPKMNFav);
    const starIcon = screen.getByAltText('Pikachu is marked as favorite');
    const starIconSrc = '/star-icon.svg';
    expect(starIcon.getAttribute('src')).toBe(starIconSrc);
    expect(starIcon).toBeVisible();
  });

  test('testa o sprite funciona legal', () => {
    renderWithRouter(
      <App />,
    );
    const btnDetalhes = screen.getByRole('link', { name: /more details/i,
    });
    expect(btnDetalhes).toBeVisible();
    userEvent.click(btnDetalhes);
    const actualPKMNImg = screen.getByRole('img', { name: /pikachu sprite/i,
    });
    expect(actualPKMNImg.getAttribute('src')).toBe(pokemonList[0].image);
  });

  test('testa o nome do pokemon funciona legal', () => {
    renderWithRouter(
      <App />,
    );
    const actualPKMNNome = screen.getByTestId('pokemon-name');
    expect(actualPKMNNome).toBeInTheDocument();
    const primeiroPKMNName = pokemonList[0].name;
    expect(actualPKMNNome.innerHTML).toBe(primeiroPKMNName);
  });
});
