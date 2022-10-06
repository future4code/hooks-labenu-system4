import { Request, Response } from "express";
import { estudante } from "../../database/data";
import EstudanteDataBase from "../../database/EstudanteDataBase";
import { EstudanteHobyDataBase } from "../../database/EstudanteHobbyDataBase";
import { HobbyDataBase } from "../../database/HobyDataBase";
import TurmaDatabase from "../../database/TurmaDatabase";
import { Estudante } from "../../models/Estudante";
import { Estudent_hobby } from "../../models/Estudent_hobbys";
import { Hobby } from "../../models/Hobby";
import { Turma } from "../../models/Turma";

export const createEstudante = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const name = req.body.name;
    const email = req.body.email;
    const data_nasc = req.body.data_nasc;
    const turma_id = req.body.turma_id;
    const hobbies = req.body.hobbies;

    if (!name || !email || !data_nasc || !turma_id) throw new Error("Parâmetro inválido");
    const id = Date.now().toString()
    const newEstudante = new Estudante(id, name, email, data_nasc, turma_id);
    const newEstudanteDatabase = new EstudanteDataBase();
    await newEstudanteDatabase.createEstudante(newEstudante);

    const estudanteHobbyDB = new EstudanteHobyDataBase()
    const hobbyDB = new HobbyDataBase()
    if(hobbies && hobbies.length>0){
      for (const i of hobbies) {
        const idHobby = Date.now().toString()
        const hobby = new Hobby(idHobby, i)
        await hobbyDB.createHobby(hobby)
        const idEstudanteHobby = Date.now().toString()
        const newEstudanteHobby = new Estudent_hobby(idEstudanteHobby,id, idHobby)
        await estudanteHobbyDB.createEstudanteHobby(newEstudanteHobby)
      }
    }
    res.status(200).send({ message: "estudante criado!", aluno: {newEstudante, hobbies} });
  } catch (error:any) {
    res.status(errorCode).send(error.message);
  }
};
