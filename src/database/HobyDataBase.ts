import { Hobby } from "../models/Hobby";
import BaseDatabase from "./BaseDatabase";
import { TABLE_HOBBY } from "./tableNames";

export class HobbyDataBase extends BaseDatabase {
    TABLE_NAME: string = TABLE_HOBBY

    public async getHobbys (){
        const result = await BaseDatabase.connection(this.TABLE_NAME).select()
        return result
    }

    public async createHobby(hobby: Hobby) {
        await BaseDatabase.connection(this.TABLE_NAME).insert(hobby)
    }
}