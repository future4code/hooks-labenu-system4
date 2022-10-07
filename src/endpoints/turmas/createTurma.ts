import { Request, Response } from "express";
import TurmaDatabase from "../../database/bases/TurmaDatabase";
import { Turma } from "../../models/Turma";

export const createTurma = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const name = req.body.name;

    if (!name) throw new Error("Parâmetro inválido");
    const newTurma = new Turma(Date.now().toString(), name, 0);
    const newTurmaDatabase = new TurmaDatabase();
    newTurmaDatabase.create(newTurma);
    res.status(200).send({ message: "Turma criada", turma: newTurma });
  } catch (error:any) {
    res.status(errorCode).send(error.message);
  }
};
