// src/components/Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Composant Counter', () => {
  test('affiche correctement le compteur initial à 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('counter-value')).toHaveTextContent('0');
  });

  test('incrémente le compteur quand on clique', () => {
    render(<Counter />);
    const button = screen.getByTestId('increment-button');
    const counter = screen.getByTestId('counter-value');

    fireEvent.click(button);
    expect(counter).toHaveTextContent('1');

    fireEvent.click(button);
    expect(counter).toHaveTextContent('2');
  });
});