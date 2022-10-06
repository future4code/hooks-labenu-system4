import { Request, Response } from "express";
import { HobbyDataBase } from "../../database/HobyDataBase";
import { Hobby } from "../../models/Hobby";

export const createHobby = async (req: Request, res: Response) => {

    try {
        const name = req.body.name
        const id = Date.now().toString()

        if (!name) throw new Error("Parâmetro inválido");

        const hobby = new Hobby(id, name)
        const hobbyDataBase = new HobbyDataBase()
        hobbyDataBase.createHobby(hobby)

        res.status(201).send({message:"Hobby Criado", hobby: hobby})

    } catch (error:any) {
        res.send(error.message).status(400)
    }
}