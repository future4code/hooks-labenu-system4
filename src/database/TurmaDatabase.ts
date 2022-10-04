import BaseDatabase from "./BaseDatabase";

export class TurmaDatabase extends BaseDatabase {
   TABLE_NAME = "TURMA"

   constructor(
      private id: string,
      private nome: string,
      private docentes: string[],
      private estudantes: string[],
      private modulo: number
   ) {
      super();
      this.modulo = 0
   }

   public async getId() {
      return this.id
   }

   public async getNome() {
      return this.nome
   }

   public async getDocentes() {
      return this.docentes
   }

   public async getEstudantes() {
      return this.estudantes
   }

   public async getModulo() {
      return this.modulo
   }

   public async getAllTurma() {
      const result = await BaseDatabase.connection(this.TABLE_NAME).select()
   }

   public async creatTurma() { }
}
