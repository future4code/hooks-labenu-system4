import { Estudante } from "../../models/Estudante";
import BaseDatabase from "../BaseDatabase";

export class EstudanteDataBase extends BaseDatabase {
  TABLE_NAME = "ESTUDANTE";

  public async getAll(): Promise<any> {
    return await super.getAll()

  }

  public async getName(name: string) {
    return await super.getByName(name)
  }

  public async create(estudante: Estudante) {
    super.create(estudante)
  }

  public async update(id: string, altercao: string, coluna: string) {
    super.update(id, altercao, coluna)
  }
}
export default EstudanteDataBase;