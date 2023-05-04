import calculate from '../logic/calculate';

describe('calculate', () => {
  test('should reset all values when "AC" is pressed', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    expect(calculate(obj, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  test('should update next with pressed number', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    // Update the expected result to not include "operation": null
    expect(calculate(obj, '5')).toEqual({ total: null, next: '5' });
  });

  test('should update next with pressed decimal', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    expect(calculate(obj, '.')).toEqual({ total: null, next: '5.', operation: null });
  });

  test('should perform the operation when "=" is pressed', () => {
    const obj = {
      total: '3',
      next: '4',
      operation: '+',
    };
    expect(calculate(obj, '=')).toEqual({ total: '7', next: null, operation: null });
  });

  test('should negate the value of next when "+/-" is pressed', () => {
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    expect(calculate(obj, '+/-')).toEqual({ total: '5', next: '-3', operation: '+' });
  });

  test('should store the operation and shift next into total when an operation is pressed', () => {
    const obj = {
      total: null,
      next: '5',
      operation: null,
    };
    expect(calculate(obj, '+')).toEqual({ total: '5', next: null, operation: '+' });
  });
});
