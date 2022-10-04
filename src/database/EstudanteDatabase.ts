import { PessoaDatabase } from "./PessoaDatabase";

export class EstudanteDatabase extends PessoaDatabase {
    TABLE_NAME = "ESTUDANTE"

    constructor(
        id: string,
        name: string,
        email: string,
        data_nasc: Date,
        turma_id: string,
        private hobbies: string[]
    ) {
        super(id, name, email, data_nasc, turma_id);
    }

}