import { Request, Response } from "express";

class FirstController {
    public index(req:Request, res:Response){
        return res.json({msg:"hello world"});
    }
}

export const firstController = new FirstController();