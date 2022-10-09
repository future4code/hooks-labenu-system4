import { Pessoa } from "./Pessoa";

export class Docente extends Pessoa {
  constructor(
    id: string,
    name: string,
    email: string,
    data_nasc: Date,
    turma_id: string,
    private especialidades: string[]
  ) {
    super(id, name, email, data_nasc, turma_id);
  }

  public async getEspecialidades() {
    return this.especialidades;
  }
}
