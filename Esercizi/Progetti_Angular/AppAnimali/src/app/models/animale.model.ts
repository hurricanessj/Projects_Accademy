export class Animale {
  constructor(public nome: string, public verso: string) {}
}

export class Cane extends Animale {
  constructor(nome: string) {
    super(nome, 'Bau');
  }
}

export class Gatto extends Animale {
  constructor(nome: string) {
    super(nome, 'Miao');
  }
}