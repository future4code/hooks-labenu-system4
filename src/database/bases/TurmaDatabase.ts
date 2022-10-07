import { Turma } from "../../models/Turma";
import BaseDatabase from "../BaseDatabase";

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
    const result = await BaseDatabase.connection(this.TABLE_NAME).where("modulo", "<>" , "0")
    return result;
  }

  public async getById(id:string){
    return super.getById(id)
  } 
  
  public async editModuloTurma(id:string, modulo:number){
    const result = await BaseDatabase.connection(this.TABLE_NAME).where("id", id).update("modulo", modulo)
    return result
  } 

}
export default TurmaDatabase;
