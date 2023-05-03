import React from 'react';
import { render, screen } from '@testing-library/react';
import operate from '../logic/operate';
import App from '../App';

test('renders home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to my app!/i);
  expect(linkElement).toBeInTheDocument();
});

describe('operate', () => {
  it('should add two numbers correctly', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });

  it('should subtract two numbers correctly', () => {
    const result = operate(5, 3, '-');
    expect(result).toBe('2');
  });

  it('should multiply two numbers correctly', () => {
    const result = operate(2, 3, 'x');
    expect(result).toBe('6');
  });

  it('should divide two numbers correctly', () => {
    const result = operate(6, 2, '÷');
    expect(result).toBe('3');
  });

  it('should handle division by zero correctly', () => {
    const result = operate(6, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should find modulo of two numbers correctly', () => {
    const result = operate(5, 2, '%');
    expect(result).toBe('1');
  });

  it('should handle modulo when dividing by zero correctly', () => {
    const result = operate(5, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operation', () => {
    expect(() => operate(2, 3, '$')).toThrow("Unknown operation '$'");
  });
});
