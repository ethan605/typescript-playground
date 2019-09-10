export default class House {
  public troops: number;
}

export class Baratheon extends House {
  static readonly words = 'Ours is the Fury';
}

export class Lannister extends House {
  static readonly words = 'A Lannister Always Pays His Debts';
}

export class Stark extends House {
  static readonly words = 'Winter Is Coming';
}

export class Targaryen extends House {
  static readonly words = 'Fire and Blood';
}
