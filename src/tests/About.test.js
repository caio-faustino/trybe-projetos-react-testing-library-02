// Requisito 01
// Teste RTL

import React from 'react';
import { screen } from '@testing-library/react/';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Requisito 01: teste About.test.js', () => {
  beforeEach(() => renderWithRouter(<About />));
  test('testa o elemento "h2" com o texto sobre o pokemon na pagina', () => {
    const tituloPaginaAbout = screen.getByRole('heading', { name: 'About Pokédex',
    });
    expect(tituloPaginaAbout).toBeInTheDocument();
  });
  test('testa os paragrafos descritivos da pokedex', () => {
    const segundoParagrafo = screen.getByText('One can filter Pokémon', { exact: false,
    });
    const primeiroParagrafo = screen.getByText('This application simulates', { exact: false,
    });
    expect(segundoParagrafo).toBeInTheDocument();
    expect(primeiroParagrafo).toBeInTheDocument();
  });
  test('testa as imagens da pokedex na pagina', () => {
    const urlDaImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const imgPokedex = screen.getByRole('img');
    expect(imgPokedex).toBeVisible();
    expect(imgPokedex).toHaveAttribute('src', urlDaImg);
  });
});
