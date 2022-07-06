import '@testing-library/jest-dom';
import calculate from '../logic/calculate';

describe('calculate(obj, buttonName)', () => {
  it('test numbers', () => {
    expect(calculate({ total: null, next: null, operation: null }, '7')).toEqual({ next: '7', total: null });
    expect(calculate({ total: null, next: '3', operation: null }, '5')).toEqual({ total: null, next: '35' });
    expect(calculate({ total: '3', next: null, operation: '+' }, '3')).toEqual({ total: '3', next: '3', operation: '+' });
  });
  it('test operatios', () => {
    expect(calculate({ total: null, next: '34', operation: null }, '+')).toEqual({ total: '34', next: null, operation: '+' });
    expect(calculate({ total: null, next: '34', operation: null }, '-')).toEqual({ total: '34', next: null, operation: '-' });
    expect(calculate({ total: '3', next: '34', operation: 'x' }, 'x')).toEqual({ total: '102', next: null, operation: 'x' });
    expect(calculate({ total: null, next: '34', operation: null }, '%')).toEqual({ total: '34', next: null, operation: '%' });
    expect(calculate({ total: null, next: '34', operation: null }, '÷')).toEqual({ total: '34', next: null, operation: '÷' });
    expect(calculate({ total: '9', next: '3', operation: '+' }, '-')).toEqual({ total: '12', next: null, operation: '-' });
  });
});
