import { Request, Response } from "express";
import EstudanteDataBase from "../../database/bases/EstudanteDataBase";

export const changeTurma = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const id = req.body.id;
    const alteracao = req.body.alteracao;
    const coluna = req.body.coluna;
    if (!id || !alteracao || !coluna) throw new Error("body inválido");
    const newEstudanteDatabase = new EstudanteDataBase();
    await newEstudanteDatabase.update(id, alteracao, coluna);
    res.status(200).send("turma alterada");
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
};
export default changeTurma;
