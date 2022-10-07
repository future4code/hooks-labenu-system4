import { Request, Response } from "express";
import EstudanteDataBase from "../../database/bases/EstudanteDataBase";

export const getStudantes = async (req: Request, res: Response) => {

    try {
        const estudanteDb = new EstudanteDataBase()
        
        const name = req.query.name as string

        if(name){
            const result = await estudanteDb.getName(name) 
            res.status(200).send(result)
        }

        const result = await estudanteDb.getAll()
        res.status(200).send(result)

    } catch (error: any) {
        res.send(error.message).status(400)
    }
}

export default getStudantes