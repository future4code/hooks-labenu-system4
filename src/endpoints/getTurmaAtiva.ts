import { Request, Response } from "express";
import TurmaDatabase from "../database/TurmaDatabase";

export const getTurmaAtiva = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const newTurmaDatabase = new TurmaDatabase();
    const result = await newTurmaDatabase.getAllTurma();
    res.status(200).send({ turma: result });
  } catch (error:any) {
    res.status(errorCode).send(error.message);
  }
};

