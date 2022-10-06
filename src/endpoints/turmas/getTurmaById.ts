import { Request, Response } from "express";
import TurmaDatabase from "../../database/TurmaDatabase";

export const getTurmaById = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const id = req.params.id

    const newTurmaDatabase = new TurmaDatabase();
    const result = await newTurmaDatabase.getTurmaById(id);
    res.status(200).send({ turma: result });
  } catch (error:any) {
    res.status(errorCode).send(error.message);
  }
};
