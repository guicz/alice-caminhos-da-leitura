import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '@/App';
import { documentSections } from '@/data/document-content';

describe('Observatório app', () => {
  it('renders the home entry for the observatory', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/',
          element: <App />
        }
      ],
      { initialEntries: ['/'] }
    );

    render(<RouterProvider router={router} />);

    expect(
      screen.getByRole('heading', {
        name: 'Observatório Digital dos Caminhos da Leitura e da Escrita no País das Infâncias'
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Entrar na toca' })).toBeInTheDocument();
  });

  it('renders a document section as a page route', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/observatorio/:sectionId',
          element: <App />
        }
      ],
      { initialEntries: [`/observatorio/${documentSections[0].id}`] }
    );

    render(<RouterProvider router={router} />);

    expect(screen.getByRole('heading', { name: documentSections[0].title })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Tela cheia' })).toBeInTheDocument();
  });

  it('opens the hatter library with real practice galleries', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/observatorio/:sectionId',
          element: <App />
        }
      ],
      { initialEntries: ['/observatorio/biblioteca-do-chapeleiro'] }
    );

    render(<RouterProvider router={router} />);

    fireEvent.click(screen.getByRole('button', { name: 'Abrir a biblioteca' }));
    fireEvent.click(screen.getByRole('tab', { name: /Práticas/i }));

    expect(screen.getAllByRole('heading', { name: 'Restaurante Literário' }).length).toBeGreaterThan(0);
    expect(screen.getByAltText('Restaurante Literário - foto 1')).toBeInTheDocument();
  });

  it('renders an expanded chess board experience', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/observatorio/:sectionId',
          element: <App />
        }
      ],
      { initialEntries: ['/observatorio/o-tabuleiro-da-rainha-vermelha'] }
    );

    render(<RouterProvider router={router} />);

    fireEvent.click(screen.getByRole('button', { name: 'Mover uma casa' }));

    expect(screen.getByText('Casa 8')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Saberes em circulação' })).toBeInTheDocument();
  });
});
