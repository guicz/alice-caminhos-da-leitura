import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '@/App';

describe('Observatório app', () => {
  it('renders the guided observatory title and banca mode', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Observatório de Práticas' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Modo Banca' })).toBeInTheDocument();
  });
});
