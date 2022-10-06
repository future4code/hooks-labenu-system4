import { Estudante } from "../models/Estudante";
import BaseDatabase from "./BaseDatabase";

export class TurmaDatabase extends BaseDatabase {
  TABLE_NAME = "ESTUDANTE";

  public async createEstudante(estudante: Estudante) {
    await BaseDatabase.connection(this.TABLE_NAME).insert(estudante);
  }

  public async getAllEstudante() {
    const result = await BaseDatabase.connection(this.TABLE_NAME).select();
    return result;
  }

}
export default TurmaDatabase;