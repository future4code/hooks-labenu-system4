import { Docente } from "../../models/Docente";
import { Especialidade } from "../../models/Especialidade";
import BaseDatabase from "../BaseDatabase";

export class DocenteEspecialidadeDatabase extends BaseDatabase {
  TABLE_NAME = "ESPECIALIDADE";

  public async create(especialidade: Especialidade) {
    return super.create(especialidade);
  }

  public async update(id: string, alteracao: any, coluna: any) {
    return super.update(id, alteracao, coluna);
  }
}
export default DocenteEspecialidadeDatabase;
