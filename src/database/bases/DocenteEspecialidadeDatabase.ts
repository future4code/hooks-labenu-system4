import { Docente } from "../../models/Docente";
import { Especialidade } from "../../models/Especialidade";
import BaseDatabase from "../BaseDatabase";

export class DocenteEspecialidadeDatabase extends BaseDatabase {
  TABLE_NAME = "ESPECIALIDADE";

  public async createEspecialidade(especialidade: Especialidade) {
    await BaseDatabase.connection(this.TABLE_NAME).insert(especialidade);
  }
}
export default DocenteEspecialidadeDatabase;
