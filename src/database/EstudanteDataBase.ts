import { Estudante } from "../models/Estudante";
import BaseDatabase from "./BaseDatabase";

export class EstudanteDataBase extends BaseDatabase {
  TABLE_NAME = "ESTUDANTE";

  public async createEstudante(estudante: Estudante) {
    await BaseDatabase.connection(this.TABLE_NAME).insert(estudante);
  }

  public async getAllEstudante(estudante: Estudante) {
    const result = await BaseDatabase.connection(this.TABLE_NAME).insert(estudante)

    return result;
  }
}
export default EstudanteDataBase;