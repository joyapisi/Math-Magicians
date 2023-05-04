import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate('5', '7', '+')).toEqual('12');
  });

  it('subtracts two numbers', () => {
    expect(operate('9', '4', '-')).toEqual('5');
  });

  it('multiplies two numbers', () => {
    expect(operate('3', '6', 'x')).toEqual('18');
  });

  it('divides two numbers', () => {
    expect(operate('8', '4', '÷')).toEqual('2');
  });

  it('returns error message for division by 0', () => {
    expect(operate('5', '0', '÷')).toEqual("Can't divide by 0.");
  });

  it('calculates the modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toEqual('1');
  });

  it('returns error message for modulo with 0 as divisor', () => {
    expect(operate('10', '0', '%')).toEqual("Can't find modulo as can't divide by 0.");
  });

  it('throws an error for unknown operation', () => {
    expect(() => operate('5', '7', 'foo')).toThrowError("Unknown operation 'foo'");
  });
});
