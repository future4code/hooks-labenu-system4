import { Request, Response} from "express";
import { EstudanteHobyDataBase } from "../../database/EstudanteHobbyDataBase";

export const getEstudanteHobby = async (req: Request, res: Response)=>{
    
    try {
        const idEstudante = req.params.idEstudante

        if(!idEstudante) throw new Error("Parâmetro inválido");

        const estudanteHobby = new EstudanteHobyDataBase()

        const result = await estudanteHobby.getEstudanteHobbyId(idEstudante)

        res.send(result)

    } catch (error:any) {
        res.send(error.message)
    }
}