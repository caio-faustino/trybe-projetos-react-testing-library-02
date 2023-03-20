// Requisito 02
// Teste RTL

import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react/';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testa a operacao dos links do nav', () => {
  test('testa se o link "home" redireciona corretamente', () => {
    const { history } = renderWithRouter(<App />);
    const homeNavLink = screen.getByRole('link', { name: 'Favorite Pokémon',
    });
    renderWithRouter(<App />);
    userEvent.click(homeNavLink);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('testa se o link "about" redireciona corretamente', () => {
    const { history } = renderWithRouter(<App />);
    const homeNavLink = screen.getByRole('link', { name: 'About',
    });
    renderWithRouter(<App />);
    userEvent.click(homeNavLink);
    expect(history.location.pathname).toBe('/about');
  });

  test('testa se o link "home" redireciona corretamente', () => {
    const { history } = renderWithRouter(<App />);
    const homeNavLink = screen.getByRole('link', { name: 'Home',
    });
    renderWithRouter(<App />);
    userEvent.click(homeNavLink);
    expect(history.location.pathname).toBe('/');
  });
});

describe('Requisito 02: teste App.test.js', () => {
  test('testa se o segundo link do nav tem o texto "Favorite Pokémon"', () => {
    renderWithRouter(<App />);
    const favpokemonNavLink = screen.getByRole('link', { name: 'Favorite Pokémon',
    });
    expect(favpokemonNavLink).toBeInTheDocument();
  });
  test('testa se o primeiro link do nav tem o texto "home"', () => {
    renderWithRouter(<App />);
    const homeNavLink = screen.getByRole('link', { name: 'Home',
    });
    expect(homeNavLink).toBeInTheDocument();
  });

  test('testa se o segundo link do nav tem o texto "about"', () => {
    renderWithRouter(<App />);
    const aboutNavLink = screen.getByRole('link', { name: 'About',
    });
    expect(aboutNavLink).toBeInTheDocument();
  });
});
