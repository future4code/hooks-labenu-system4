import { Hobby } from "../../models/Hobby";
import BaseDatabase from "../BaseDatabase";
import { TABLE_HOBBY } from "../tableNames";

export class HobbyDataBase extends BaseDatabase {
  TABLE_NAME: string = TABLE_HOBBY;

  public async getAll() {
    return super.getAll();
  }

  public async create(hobby: Hobby) {
    return super.create(hobby);
  }
}
