import { Turma } from "../models/Turma";
import BaseDatabase from "./BaseDatabase";

export class TurmaDatabase extends BaseDatabase {
  TABLE_NAME = "TURMA";

  public async createTurma(turma: Turma) {
    await BaseDatabase.connection(this.TABLE_NAME).insert(turma);
  }

  public async getAllTurma() {
    const result = await BaseDatabase.connection(this.TABLE_NAME).select();
    return result;
  }
  public async getTurmaAtiva() {
    const result = await BaseDatabase.connection.raw(`
    SELECT * FROM ${this.TABLE_NAME}
    WHERE modulo 
    `);
    return result;
  }
}
export default TurmaDatabase;
