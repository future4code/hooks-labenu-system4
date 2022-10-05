import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

abstract class BaseDatabase {
    protected static connection = knex({
       client: "mysql",
       connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE,
          multipleStatements: true
       },
    });

    abstract TABLE_NAME: string

    protected async getAll(){
        const result = await BaseDatabase.connection(this.TABLE_NAME).select();
        return result
    }
}

export default BaseDatabase