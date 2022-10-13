import { Request, Response } from "express";
import DocenteDatabase from "../../database/bases/DocenteDatabase";
import EstudanteDataBase from "../../database/bases/EstudanteDataBase";
import { EstudanteHobyDataBase } from "../../database/bases/EstudanteHobbyDataBase";
import { HobbyDataBase } from "../../database/bases/HobyDataBase";
import TurmaDatabase from "../../database/bases/TurmaDatabase";
import { Docente } from "../../models/Docente";
import { Estudante } from "../../models/Estudante";
import { Estudent_hobby } from "../../models/Estudent_hobbys";
import { Hobby } from "../../models/Hobby";

export const createDocente = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const nome = req.body.name;
    const email = req.body.email;
    const data_nasc = req.body.data_nasc;
    const turma_id = req.body.turma_id;
    const especialidade = req.body.especialidade;

    if (!nome || !email || !data_nasc || !turma_id)
      throw new Error("Parâmetro inválido");
    const id = Date.now().toString();
    const newDocente = new Docente(id, nome, email, data_nasc, turma_id);
    const newDocenteDatabase = new DocenteDatabase();
    await newDocenteDatabase.create(newDocente);

    // const docenteHobbyDB = new DocenteHobyDataBase()
    // if(hobbies && hobbies.length>0){
    //   for (const i of hobbies) {
    //     const idDocenteHobby = Date.now().toString()
    //     const newDocenteHobby = new Estudent_hobby(idDocenteHobby,id, idHobby)
    //     await docenteHobbyDB.createDocenteHobby(newDocenteHobby)
    //   }
    // }

    res
      .status(200)
      .send({ message: "Docente criado!", aluno: { newDocente, especialidade } });
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
};
