import { Request, Response } from "express";
import DocenteDatabase from "../../database/bases/DocenteDatabase";

export const getAllDocente = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const newDocenteDatabase = new DocenteDatabase();
    const result = await newDocenteDatabase.getAll();
    res.status(200).send({ docente: result });
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
};
