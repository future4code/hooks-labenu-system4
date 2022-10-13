export class Turma {
  constructor(
    private id: string,
    private nome: string,
    private modulo: number
  ) {}

  public async getId() {
    return this.id;
  }

  public async getNome() {
    return this.nome;
  }

  public async getModulo() {
    return this.modulo;
  }
}
