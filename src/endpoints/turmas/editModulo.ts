import { Request, Response } from "express";
import TurmaDatabase from "../../database/TurmaDatabase";

export const editModulo = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const newId = req.params.id
    const newModulo = Number(req.query.modulo)

    const newTurmaDatabase = new TurmaDatabase();
    await newTurmaDatabase.editModuloTurma(newId, newModulo);
    res.status(200).send("Modulo atualizado");
  } catch (error:any) {
    res.status(errorCode).send(error.message);
  }
};
