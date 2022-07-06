import '@testing-library/jest-dom';
import operate from '../logic/operate';

describe('operate(numberOne, numberTwo, operation)', () => {
  it('should add numbers', () => {
    expect(operate('3', '7', '+')).toBe('10');
    expect(operate('2', '6', '+')).toBe('8');
    expect(operate('6', '2', '+')).toBe('8');
  });
  it('should substract numbers', () => {
    expect(operate('4', '5', '-')).toBe('-1');
    expect(operate('7', '2', '-')).toBe('5');
    expect(operate('9', '5', '-')).toBe('4');
  });
  it('should multiply numbers', () => {
    expect(operate('3', '3', 'x')).toBe('9');
    expect(operate('2', '5', 'x')).toBe('10');
    expect(operate('9', '9', 'x')).toBe('81');
  });
  it('should divide numbers', () => {
    expect(operate('8', '2', '÷')).toBe('4');
    expect(operate('9', '3', '÷')).toBe('3');
    expect(operate('5', '2', '÷')).toBe('2.5');
    expect(operate('7', '0', '÷')).toBe('Can\'t divide by 0.');
  });
  it('should calculate division module', () => {
    expect(operate('8', '4', '%')).toBe('0');
    expect(operate('12', '12', '%')).toBe('0');
    expect(operate('9', '5', '%')).toBe('4');
    expect(operate('9', '0', '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
