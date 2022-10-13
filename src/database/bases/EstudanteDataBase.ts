import { Estudante } from "../../models/Estudante";
import BaseDatabase from "../BaseDatabase";

export class EstudanteDataBase extends BaseDatabase {
  TABLE_NAME = "ESTUDANTE";

  public async getAll() {
    return super.getAll();
  }

  public async getByName(name: string) {
    return await super.getByName(name);
  }

  public async create(estudante: Estudante) {
    return super.create(estudante);
  }

  public async update(id: string, alteracao: any, coluna: any) {
    return super.update(id, alteracao, coluna);
  }
}
export default EstudanteDataBase;
