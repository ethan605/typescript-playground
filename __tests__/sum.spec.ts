import { sum } from '../src';

describe('sum', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
