import { Pessoa } from "./Pessoa";

export class Estudante extends Pessoa {
   

    constructor(
        id: string,
        name: string,
        email: string,
        data_nasc: Date,
        turma_id: string,
        // private hobbies?: string[]
    ) {  
        super(id, name, email, data_nasc,turma_id)     
    }

    // public getHobbies(){
    //     return this.hobbies
    // }    
}