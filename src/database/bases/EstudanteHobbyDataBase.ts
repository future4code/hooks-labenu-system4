import { Estudent_hobby } from "../../models/Estudent_hobbys";
import BaseDatabase from "../BaseDatabase";
import { TABLE_ESTUDANTE_HOBBY, TABLE_HOBBY } from "../tableNames";

export class EstudanteHobyDataBase extends BaseDatabase{
    TABLE_NAME = TABLE_ESTUDANTE_HOBBY

    public async createEstudanteHobby(estudanteHobby: Estudent_hobby){
        await BaseDatabase.connection(this.TABLE_NAME).insert(estudanteHobby)
    }

    public async getEstudanteHobbyId(idEstudante: string){
        const result = await BaseDatabase.connection(this.TABLE_NAME).select()
        return result
    }
}