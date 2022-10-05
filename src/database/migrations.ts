import connection from "./connection"
import { TABLE_TURMA, TABLE_ESTUDANTE, TABLE_HOBBY, TABLE_ESTUDANTE_HOBBY, TABLE_DOCENTE, TABLE_ESPECIALIDADE, TABLE_DOCENTE_ESPECIALIDADE } from "./tableNames"

const createTables = async () => {

    try {

        await connection.raw(`

        
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
        FOREIGN KEY (turma_id) REFERENCES ${TABLE_TURMA}(id)        
    );
    
    CREATE TABLE IF NOT EXISTS ${TABLE_HOBBY}(
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL UNIQUE
    );
    
    CREATE TABLE IF NOT EXISTS ${TABLE_ESTUDANTE_HOBBY}(
        id VARCHAR(255) PRIMARY KEY,
        estudante_id VARCHAR(255)NOT NULL,
        FOREIGN KEY (estudante_id) REFERENCES ${TABLE_ESTUDANTE}(id),
        hobby_id VARCHAR(255) NOT NULL ,
        FOREIGN KEY (hobby_id) REFERENCES ${TABLE_HOBBY}(id)
    );
    
    CREATE TABLE IF NOT EXISTS ${TABLE_DOCENTE}(
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255),
        email VARCHAR(255) NOT NULL UNIQUE,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL UNIQUE,
        FOREIGN KEY (turma_id) REFERENCES ${TABLE_TURMA}(id)
    );
    
    CREATE TABLE IF NOT EXISTS ${TABLE_ESPECIALIDADE}(
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL UNIQUE
        );
        
        CREATE TABLE IF NOT EXISTS ${TABLE_DOCENTE_ESPECIALIDADE}(
            id VARCHAR(255) PRIMARY KEY,
            docente_id VARCHAR(255) NOT NULL UNIQUE,
            FOREIGN KEY (docente_id) REFERENCES ${TABLE_DOCENTE}(id),
            especialidade_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (especialidade_id) REFERENCES ${TABLE_ESPECIALIDADE}(id)
    );
    
        `)

        console.log("tabela criadas")
    } catch (error: any) {

        console.log("*", error.message)
    }


}


createTables()