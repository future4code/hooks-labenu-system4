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
    
     // Adicionar item a tabela
     protected async create(item: any) {
       const result = await BaseDatabase.connection(this.TABLE_NAME).insert    (item);
       return result
    }

    // Trazer todas as informações da tabela
    protected async getAll() {
        const result = await BaseDatabase.connection(this.TABLE_NAME).select();
        return result
    }

    //Procurar por nome
    protected async getByName(name: string) {
        const result = await BaseDatabase.connection(this.TABLE_NAME).select().where("nome", name);
        return result
    }

    // Procurar por ID
    public async getById(id: string) {
        const result = await BaseDatabase.connection(this.TABLE_NAME).where("id", id)
        return result
    }

    // Alterar por ID 
    public async update(id: string, alteracao: any, coluna: any) {
        const result =  await BaseDatabase.connection(this.TABLE_NAME).where("id", id).update(coluna, alteracao, coluna)
        return result
    }
}
export default BaseDatabase