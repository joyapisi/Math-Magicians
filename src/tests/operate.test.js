import operate from '../logic/operate';

describe('operate', () => {
  test('should perform addition', () => {
    expect(operate('3', '5', '+')).toBe('8');
  });

  test('should perform subtraction', () => {
    expect(operate('10', '5', '-')).toBe('5');
  });

  test('should perform multiplication', () => {
    expect(operate('3', '5', 'x')).toBe('15');
  });

  test('should perform division', () => {
    expect(operate('15', '5', '÷')).toBe('3');
  });

  test('should handle division by zero', () => {
    expect(operate('15', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('should perform modulo operation', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  test('should handle modulo by zero', () => {
    expect(operate('7', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('should throw an error for unknown operations', () => {
    expect(() => operate('3', '5', '^')).toThrow("Unknown operation '^'");
  });
});
