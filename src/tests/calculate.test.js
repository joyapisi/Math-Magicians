import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import calculate from '../logic/calculate';

test('clicking a button updates the display', () => {
  render(<App />);
  const button = screen.getByText('1');
  fireEvent.click(button);
  const display = screen.getByTestId('display');
  expect(display.textContent).toBe('1');
});

describe('calculate function', () => {
  it('resets the calculator when AC button is pressed', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('adds numbers when an operation button is pressed', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, '=');
    expect(result).toEqual({ total: '15', next: null, operation: null });
  });

  it('subtracts numbers when an operation button is pressed', () => {
    const result = calculate({ total: 10, next: 5, operation: '-' }, '=');
    expect(result).toEqual({ total: '5', next: null, operation: null });
  });

  it('multiplies numbers when an operation button is pressed', () => {
    const result = calculate({ total: 10, next: 5, operation: 'x' }, '=');
    expect(result).toEqual({ total: '50', next: null, operation: null });
  });

  it('divides numbers when an operation button is pressed', () => {
    const result = calculate({ total: 10, next: 5, operation: '÷' }, '=');
    expect(result).toEqual({ total: '2', next: null, operation: null });
  });

  it('changes the sign of the number when +/- button is pressed', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '+/-');
    expect(result).toEqual({ total: null, next: '-5', operation: null });
  });

  it('adds a decimal point to the number when . button is pressed', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '.');
    expect(result).toEqual({ total: null, next: '5.', operation: null });
  });

  it('appends a digit to the number when a number button is pressed', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '2');
    expect(result).toEqual({ total: null, next: '52', operation: null });
  });

  it('handles consecutive 0s when a number button is pressed', () => {
    const result = calculate({ total: null, next: '0', operation: null }, '0');
    expect(result).toEqual({});
  });
});
