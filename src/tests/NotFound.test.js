// Requisito 04
// Teste RTL

import React from 'react';
import { screen } from '@testing-library/react/';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Requisito 04: teste NotFound.test.js', () => {
  beforeEach(() => renderWithRouter(<NotFound />));
  test('testa se o gif aparece na pagina', () => {
    screen.logTestingPlaygroundURL();
    const gifPKMN = screen.getByRole('img');
    const urlGifPKMN = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(gifPKMN).toBeVisible();
    expect(gifPKMN.src).toBe(urlGifPKMN);
  });
  test('testa se a msg "Page requested not found" aparece caso deva aparecer', () => {
    const tituloPagina = screen.getByRole('heading', { level: 2, name: 'Page requested not found',
    });
    expect(tituloPagina).toBeInTheDocument();
  });
});
