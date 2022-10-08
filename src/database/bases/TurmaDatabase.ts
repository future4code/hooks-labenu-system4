import { Turma } from "../../models/Turma";
import BaseDatabase from "../BaseDatabase";

export class TurmaDatabase extends BaseDatabase {
  TABLE_NAME = "TURMA";

  public async create(turma: Turma) {
    return super.create(turma)
  }

  public async getAll() {
   return super.getAll()
  }

  public async getTurmaAtiva() {
    const result = await BaseDatabase.connection(this.TABLE_NAME).where("modulo", "<>" , "0")
    return result;
  }

  public async getById(id:string){
    return super.getById(id)
  } 
  
  public async update(id:string, alteracao:any, coluna:any){ 
        return super.update(id, alteracao, coluna)
  } 

}
export default TurmaDatabase;
