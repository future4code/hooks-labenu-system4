import { Request, Response} from "express";
import { HobbyDataBase } from "../../database/HobyDataBase";

export const getHobbys = async (req: Request, res: Response) => {

    try {
        const hobbyDB =  new HobbyDataBase()

        const result = await hobbyDB.getHobbys()

        res.send(result).status(200)
        
    } catch (error:any) {
        res.send("Algo de errado").status(400)
    }
}