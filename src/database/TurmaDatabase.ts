import BaseDatabase from "./BaseDatabase";
import { TABLE_TURMA } from "./tableNames";

export class TurmaDatabase extends BaseDatabase{
   public async getAllTurma(){
    const result = await BaseDatabase.connection (TABLE_TURMA).select()
   }
   public async creatTurma(){}
    }
