import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '@/App';

describe('Visual document reader', () => {
  it('opens source text as visual reading blocks', () => {
    const router = createMemoryRouter(
      [
        {
          path: '/observatorio/:sectionId',
          element: <App />
        }
      ],
      { initialEntries: ['/observatorio/por-onde-comeca-a-toca'] }
    );

    render(<RouterProvider router={router} />);

    fireEvent.click(screen.getByRole('button', { name: 'Entrar na toca' }));

    expect(screen.getByRole('heading', { name: 'Bloco de leitura 01' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /ximo bloco/i }));

    expect(screen.getByText(/Ao entrar nesta toca/i)).toBeInTheDocument();
  });
});
