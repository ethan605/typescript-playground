import sum from '../src/sum';

describe('sum', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
