import { Request, Response} from "express";
import { HobbyDataBase } from "../../database/bases/HobyDataBase";

export const getHobbys = async (req: Request, res: Response) => {
    let errorCode = 400;
    try {
        const hobbyDB =  new HobbyDataBase()

        const result = await hobbyDB.getAll()

        res.send(result).status(200)
        
    } catch (error:any) {
        res.send(errorCode).status(error.message)
    }
}