import connection from "./connection"
import { TABLE_TURMA, TABLE_ESTUDANTE, TABLE_HOBBY,TABLE_ESTUDANTE_HOBBY,TABLE_DOCENTE,TABLE_ESPECIALIDADE,TABLE_DOCENTE_ESPECIALIDADE  } from "./tableNames"

const createTables = async () => {
    await connection.raw(`
DROP TABLE IF EXISTS ${TABLE_TURMA}, ${TABLE_ESTUDANTE}, ${TABLE_HOBBY}, ${TABLE_DOCENTE};

CREATE TABLE IF NOT EXISTS ${TABLE_TURMA}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255),
    modulo VARCHAR(255) DEFAULT 0
);

CREATE TABLE IF NOT EXISTS ${TABLE_ESTUDANTE}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL UNIQUE,
    FOREIGN KEY (turma_id) REFERENCES TABLE_TURMA(id)
);

CREATE TABLE IF NOT EXISTS ${TABLE_HOBBY}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
);

CREATE TABLE IF NOT EXISTS ${TABLE_ESTUDANTE_HOBBY}(
    id VARCHAR(255) PRIMARY KEY,
    estudante_id VARCHAR(255)NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES TABLE_ESTUDANTE(id),
    hobby_id VARCHAR(255) NOT NULL UNIQUE,
    FOREIGN KEY hobby_id REFERENCES TABLE_HOBBY(id)
);

CREATE TABLE IF NOT EXISTS ${TABLE_DOCENTE}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    data_nasc DATE NOT NULL,
    turma_id VARCHAR(255) NOT NULL UNIQUE,
    FOREIGN KEY turma_id REFERENCES TABLE_TURMA(id)
);

CREATE TABLE IF NOT EXISTS ${TABLE_ESPECIALIDADE}(
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    );
    
    CREATE TABLE IF NOT EXISTS ${TABLE_DOCENTE_ESPECIALIDADE}(
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL UNIQUE,
        FOREIGN KEY docente_id REFERENCES TABLE_DOCENTE(id)
        especialidade_id VARCHAR(255) NOT NULL UNIQUE,
        FOREIGN KEY especialidade_id REFERENCES TABLE_ESPECIALIDADE
);

    `)
    .then(() => {
        console.log(`Tables created successfully!`)
        insertData()
    })
    .catch((error: any) => printError(error))
}

const insertData = async () => {
    try {
        await connection(TABLE_TURMA)
            // .insert(users)
            .then(() => console.log(`${TABLE_TURMA} tabela criada!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_ESTUDANTE)
            // .insert(products)
            .then(() => console.log(`${TABLE_ESTUDANTE} tabela criada!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_HOBBY)
            // .insert(products)
            .then(() => console.log(`${TABLE_HOBBY} tabela criada!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_ESTUDANTE_HOBBY)
            // .insert(products)
            .then(() => console.log(`${TABLE_ESTUDANTE_HOBBY} tabela criada!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_DOCENTE)
            // .insert(products)
            .then(() => console.log(`${TABLE_DOCENTE} tabela criada!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_ESPECIALIDADE)
            // .insert(products)
            .then(() => console.log(`${TABLE_ESPECIALIDADE} tabela criada!`))
            .catch((error: any) => printError(error))

        await connection(TABLE_DOCENTE_ESPECIALIDADE)
            // .insert(products)
            .then(() => console.log(`${TABLE_DOCENTE_ESPECIALIDADE} tabela criada!`))
            .catch((error: any) => printError(error))

    } catch (error: any) {
        console.log(error.sqlMessage || error.message)
    } finally {
        console.log("Ending connection!")

        return connection.destroy()
    }
}

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
}

createTables()