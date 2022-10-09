import { Request, Response } from "express";
import EstudanteDataBase from "../../database/bases/EstudanteDataBase";


export const getStudante = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const newEstudanteDatabase = new EstudanteDataBase();
    const result = await newEstudanteDatabase.getAll();
    res.status(200).send({ estudante: result });
  } catch (error:any) {
    res.status(errorCode).send(error.message);
  }
};

