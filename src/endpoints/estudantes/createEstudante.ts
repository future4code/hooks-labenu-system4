import { Request, Response } from "express";
import TurmaDatabase from "../../database/TurmaDatabase";
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
    const newTurma = new Turma(Date.now().toString(), name, 0);
    const newTurmaDatabase = new TurmaDatabase();
    newTurmaDatabase.createTurma(newTurma);
    res.status(200).send({ message: "Turma criada", turma: newTurma });
  } catch (error:any) {
    res.status(errorCode).send(error.message);
  }
};
