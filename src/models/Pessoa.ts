import BaseDatabase from "../database/BaseDatabase";

export abstract class Pessoa {
  constructor(
    private id: string,
    private nome: string,
    private email: string,
    private data_nasc: Date,
    private turma_id: string
  ) {}

  public async getId() {
    return this.id;
  }

  public async getNome() {
    return this.nome;
  }

  public async getEmail() {
    return this.email;
  }

  public async getDataNasc() {
    return this.data_nasc;
  }

  public async getTurmaId() {
    return this.turma_id;
  }
}
