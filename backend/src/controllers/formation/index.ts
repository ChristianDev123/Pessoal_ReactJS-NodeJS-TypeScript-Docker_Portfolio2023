import { Request, Response } from "express";
import { InDatabaseFormationRepository } from "../../repositories/in-database/in-database-formation-repository";
import { CreateFormation } from "../../services/formation/create-formation";
import { DeleteFormation } from "../../services/formation/delete-formation";
import { GetAllFormations } from "../../services/formation/get-all-formations";
import { UpdateFormation } from "../../services/formation/update-formations";
const formationRepository = new InDatabaseFormationRepository();

export class FormationController {
    static async index(req:Request,res:Response){
        let response:object[] = [];
        const formationList = new GetAllFormations(formationRepository);
        return response;
    }
    
    static async create(req:Request,res:Response){
        let response:boolean = false;
        const createFormation = new CreateFormation(formationRepository);
        return response;
    }
    
    static async update(req:Request,res:Response){
        let response:boolean = false;
        const updateFormation = new UpdateFormation(formationRepository);
        return response;
    }

    static async delete(req:Request,res:Response){
        let response:boolean = false;
        const deleteFormation = new DeleteFormation(formationRepository);
        return response;
    }
}