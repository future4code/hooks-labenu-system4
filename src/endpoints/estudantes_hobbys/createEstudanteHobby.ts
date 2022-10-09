import { Request, Response } from "express";
import { EstudanteHobyDataBase } from "../../database/bases/EstudanteHobbyDataBase";
import { Estudent_hobby } from "../../models/Estudent_hobbys";

export const createEstudanteHobby = async (req: Request, res: Response) => {
  try {
    const estudante_id = req.body.estudante_id;
    const hobby_id = req.body.hobby_id;
    const id = Date.now().toString();
    const newEstudateHobby = new Estudent_hobby(id, estudante_id, hobby_id);

    const estudanteHobbyDataBase = new EstudanteHobyDataBase();
    const result = await estudanteHobbyDataBase.createEstudanteHobby(
      newEstudateHobby
    );

    res.send({ message: "Deu certo", estud: newEstudateHobby });
  } catch (error: any) {
    res.send(error.message);
  }
};
