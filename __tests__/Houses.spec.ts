import { Baratheon, Lannister, Stark, Targaryen } from '../src/Houses';

describe('Houses', () => {
  it('should come along with correct words', () => {
    expect(Baratheon.words).toEqual('Ours is the Fury');
    expect(Lannister.words).toEqual('A Lannister Always Pays His Debts');
    expect(Stark.words).toEqual('Winter Is Coming');
    expect(Targaryen.words).toEqual('Fire and Blood');
  });
});
