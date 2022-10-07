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

    protected async getAll() {
        const result = await BaseDatabase.connection(this.TABLE_NAME).select();
        return result
    }

    protected async getByName(name: string) {
        const result = await BaseDatabase.connection(this.TABLE_NAME).select().where("nome", name);
        return result
    }

    public async getById(id: string) {
        const result = await BaseDatabase.connection(this.TABLE_NAME).where("id", id)
        return result
    }

    // id da pessoa q vc quer alterar, 
    public async update(id: string, alteracao: any, coluna: any) {
        await BaseDatabase.connection(this.TABLE_NAME).where("id", id).update(coluna, alteracao)
    }

    protected async create(item: any) {
        await BaseDatabase.connection(this.TABLE_NAME).insert(item);
    }
}

export default BaseDatabase