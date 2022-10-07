import { Docente } from "../../models/Docente";
import BaseDatabase from "../BaseDatabase";

export class DocenteDatabase extends BaseDatabase {
  TABLE_NAME = "DOCENTE";

  public async createHobby(docente: Docente) {
    await BaseDatabase.connection(this.TABLE_NAME).insert(docente);
  }
}
export default DocenteDatabase;
