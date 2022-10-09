import { Docente } from "../../models/Docente";
import BaseDatabase from "../BaseDatabase";

export class DocenteDatabase extends BaseDatabase {
  TABLE_NAME = "DOCENTE";

  public async createEspecialidade(docente: Docente) {
    await BaseDatabase.connection(this.TABLE_NAME).insert(docente);
  }
  
  public async create(docente: Docente) {
    return super.create(docente);
  }

  public async getAll() {
    return super.getAll();
  }
}
export default DocenteDatabase;
