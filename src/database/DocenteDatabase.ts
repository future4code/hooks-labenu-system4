import { PessoaDatabase } from "./PessoaDatabase";

export class DocenteDatabase extends PessoaDatabase {
    TABLE_NAME = "DOCENTE"

    constructor(
        id: string,
        name: string,
        email: string,
        data_nasc: Date,
        turma_id: string,
        private especialidades: string[]
    ) {
        super(id, name, email, data_nasc, turma_id);
    }

}