export default class House {
  public troops: number;
}

export class Baratheon extends House {
  static words: string; // = 'Ours is the Fury';
}

export class Lannister extends House {
  static words: string; // = 'A Lannister Always Pays His Debts';
}

export class Stark extends House {
  static words: string; // = 'Winter Is Coming';
}

export class Targaryen extends House {
  static words: string; // = 'Fire and Blood';
}

Baratheon.words = 'Ours is the Fury';
Lannister.words = 'A Lannister Always Pays His Debts';
Stark.words = 'Winter Is Coming';
Targaryen.words = 'Fire and Blood';
