import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
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

    expect(screen.getByRole('heading', { name: 'Observatório de Práticas' })).toBeInTheDocument();
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
});
