export class Especialidade{
 

    constructor(
        private id: string,
       public name: string,
    ) {
    }
    
    public async getIdEspecialidade(){
        return this.id
    }
}